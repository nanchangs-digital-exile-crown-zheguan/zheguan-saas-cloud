import { fileURLToPath, URL } from 'node:url'
import { createRequire } from 'node:module'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const require = createRequire(import.meta.url)
const { isSharedExternal, isAdminLangExternal, adminLangExternalPath, isCoreExternal, coreExternalPath } = require('./scripts/shared-external.cjs')
const { stripElementPlusStylePlugin } = require('./scripts/vite-plugin-strip-element-plus-style.cjs')
const { createExcludeAddonPlugin } = require('./scripts/vite-plugin-exclude-addon.cjs')

const rootDir = fileURLToPath(new URL('.', import.meta.url))

const addonKey = process.env.ADDON_KEY || ''
if (!addonKey) {
    throw new Error('ADDON_KEY is required for addon build')
}

const entry = fileURLToPath(new URL(`./.build/addons/${addonKey}/entry.ts`, import.meta.url))

const elementPlusResolver = ElementPlusResolver({ importStyle: false })

/** 单插件生产构建 */
export default defineConfig({
    base: '',
    publicDir: false,
    define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
        // 显式注入 VITE_* 环境变量：lib 构建模式下 import.meta.env 替换可能不完整
        'import.meta.env.VITE_APP_BASE_URL': JSON.stringify('/adminapi/'),
        'import.meta.env.VITE_IMG_DOMAIN': JSON.stringify(''),
        'import.meta.env.VITE_REQUEST_HEADER_TOKEN_KEY': JSON.stringify('token'),
        'import.meta.env.VITE_REQUEST_HEADER_SITEID_KEY': JSON.stringify('site-id'),
        'import.meta.env.VITE_DETAULT_TITLE': JSON.stringify('')
    },
    css: {
        // 插件独立打包时，让 Tailwind 扫描插件源码并生成用到的工具类，
        // 随 style.css 一起运行时注入，避免主后台未生成插件特有的 Tailwind 类导致样式丢失。
        postcss: {
            plugins: [
                require('tailwindcss')(require('./tailwind.addon.config.cjs')),
                require('autoprefixer')()
            ]
        }
    },
    plugins: [
        // 排除其他插件源码：插件包只允许包含自身 src/addon/{addonKey} 的代码
        createExcludeAddonPlugin({ mode: 'addon', root: rootDir, addonKey }),
        // 修复：addon 中 import X from '@/utils/storage' / '@/utils/config' 的 default import
        // 会被错误地 external 到 core-shared.js 的 default 导出（即 request 实例）。
        // core-shared 的 export * 不转发 default，因此需要改写为命名导入。
        {
            name: 'fix-addon-storage-config-default-import',
            enforce: 'pre',
            transform(code, id) {
                // 只在 addon 构建中使用（vite.config.addon.ts 专用），无需 id 过滤
                // import xxx from '@/utils/storage' → import { storage as xxx } from '@/utils/storage'
                const orig = code
                code = code.replace(
                    /import\s+(\w+)\s+from\s+['"]@\/utils\/storage['"]/g,
                    "import { storage as $1 } from '@/utils/storage'"
                )
                // import xxx from '@/utils/config' → import { config as xxx } from '@/utils/config'
                code = code.replace(
                    /import\s+(\w+)\s+from\s+['"]@\/utils\/config['"]/g,
                    "import { config as $1 } from '@/utils/config'"
                )
                // import xxx from '@/utils/test' → import { test as xxx } from '@/utils/test'
                code = code.replace(
                    /import\s+(\w+)\s+from\s+['"]@\/utils\/test['"]/g,
                    "import { test as $1 } from '@/utils/test'"
                )
                // 处理导出同名冲突：import { X } from '@/app/api/mod' / '@/utils/mod'
                // 优先 export-conflicts.json，兼容旧版 api-conflicts.json
                let conflicts = {}
                const sources = [
                    fileURLToPath(new URL('./.build/export-conflicts.json', import.meta.url)),
                    fileURLToPath(new URL('./.build/api-conflicts.json', import.meta.url))
                ]
                for (const p of sources) { try { conflicts = { ...conflicts, ...require(p) } } catch (_) {} }
                if (Object.keys(conflicts).length) {
                    code = code.replace(
                        /import\s+\{([^}]+)\}\s+from\s+['"]@\/(?:app\/api|utils)\/(\w+)['"]/g,
                        (match: string, names: string, mod: string) => {
                            const remapped = names.split(',').map(n => {
                                const trimmed = n.trim()
                                const [name, alias] = trimmed.includes(' as ') ? trimmed.split(' as ').map(s => s.trim()) : [trimmed, trimmed]
                                const key = mod + ':' + name
                                if (conflicts[key]) return conflicts[key] + ' as ' + alias
                                return trimmed
                            })
                            const ns = match.includes('@/app/api') ? '@/app/api' : '@/utils'
                            return 'import { ' + remapped.join(', ') + ' } from \'' + ns + '/' + mod + '\''
                        }
                    )
                }
                // 处理 export { default as ... } from '@/utils/storage|config|test'
                code = code.replace(
                    /export\s+\{\s*default\s+as\s+(\w+)\s*\}\s+from\s+['"]@\/utils\/(storage|config|test)['"]/g,
                    "export { $2 as $1 } from '@/utils/$2'"
                )
                if (code !== orig) {
                    return { code, map: null }
                }
            }
        },
        stripElementPlusStylePlugin(),
        vue(),
        AutoImport({ resolvers: [elementPlusResolver] }),
        Components({ resolvers: [elementPlusResolver] }),
        // 注入 CSS：lib 模式 CSS 统一提取到 style.css，运行时注入为 <style> 标签
        {
            name: 'addon-css-inject',
            enforce: 'post',
            generateBundle(_opts, bundle) {
                // 入口文件名已带 contenthash（index-[contenthash:8].js），按 isEntry 定位入口 chunk
                let entryName = ''
                for (const name of Object.keys(bundle)) {
                    const b = bundle[name]
                    if (b && b.type === 'chunk' && b.isEntry) { entryName = name; break }
                }
                const entry = entryName ? bundle[entryName] : null
                const cssAsset = bundle['style.css']
                if (entry && entry.type === 'chunk' && cssAsset && cssAsset.type === 'asset') {
                    // 过滤掉第三方库中污染全局的选择器（如 Vditor 的 body, html 样式）
                    let rawCss = (cssAsset.source as string).toString()
                    // 移除以 body 或 html 开头且后面紧跟 { 或空格的选择器块（如 body{...}）
                    // 但不影响 .xxx__body, body.class, #body 等复合选择器
                    rawCss = rawCss.replace(/(?:^|})\s*(?:body|html)\s*(?=\{)/g, (m) => m.startsWith('}') ? '}/* removed-global-' + m.substring(1).trim() + ' */' : '/* removed-global-' + m.trim() + ' */')
                    // 移除逗号分隔的全局选择器中的 body/html（如 :root,body{...}）
                    rawCss = rawCss.replace(/,\s*(?:body|html)\s*(?=\{)/g, '/* removed-global */')
                    const css = JSON.stringify(rawCss)
                    entry.code = `(function(){var s=document.createElement('style');s.textContent=${css};s.setAttribute('data-addon-style','${addonKey}');document.head.appendChild(s)})();\n${entry.code}`
                    delete bundle['style.css']
                }
            }
        },
        // 把真实入口文件名写入 entry.json：shop 等大插件的懒加载 chunk（components/xxx/index.vue）
        // basename 也叫 index，产物中会同时存在多个 index-[hash].js，仅凭文件名/mtime 无法区分入口；
        // resolveAddonEntry 优先读取该文件精确解析 manifest.entry
        {
            name: 'emit-addon-manifest',
            enforce: 'post',
            generateBundle(_opts, bundle) {
                for (const name of Object.keys(bundle)) {
                    const b = bundle[name] as any
                    if (b && b.type === 'chunk' && b.isEntry) {
                        // 构建期直接写出插件 manifest.json（含内容哈希入口），sync/运行时都以其为准，无需扫描目录
                        const manifest = {
                            key: addonKey,
                            version: '1.0.0',
                            sharedVersion: 'admin-core-1.0.0',
                            entry: b.fileName,
                            langBase: './lang/'
                        }
                        this.emitFile({ type: 'asset', fileName: 'manifest.json', source: JSON.stringify(manifest, null, 2) + '\n' })
                        break
                    }
                }
            }
        }
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            assets: fileURLToPath(new URL('./src/assets', import.meta.url)),
            'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
        }
    },
    build: {
        cssCodeSplit: false,
        outDir: `dist/.addons/${addonKey}`,
        emptyOutDir: true,
        lib: {
            entry,
            formats: ['es'],
            // 入口文件名由 rollupOptions.output.entryFileNames 决定（带 contenthash）
            fileName: () => 'index'
        },
        rollupOptions: {
            external: (id) => isAdminLangExternal(id) || isSharedExternal(id) || isCoreExternal(id),
            output: {
                inlineDynamicImports: false,
                // 入口按内容哈希命名：index-[hash].js（Rollup 的 [hash] 即内容哈希，等价于 Webpack 的 [contenthash]）。
                // 浏览器按文件名缓存，重新编译后文件名变化 → 旧缓存自然失效，无需强刷（与 ?v=buildTime 双保险）
                chunkFileNames: '[name]-[hash].js',
                entryFileNames: 'index-[hash].js',
                paths(id) {
                    if (isAdminLangExternal(id)) return adminLangExternalPath()
                    if (isCoreExternal(id)) return coreExternalPath()
                }
            }
        }
    }
})
