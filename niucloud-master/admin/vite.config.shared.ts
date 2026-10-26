import { fileURLToPath, URL } from 'node:url'
import { createRequire } from 'node:module'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const require = createRequire(import.meta.url)
const { sharedExternalForBuild } = require('./scripts/shared-external.cjs')
const { createExcludeAddonPlugin } = require('./scripts/vite-plugin-exclude-addon.cjs')

const rootDir = fileURLToPath(new URL('.', import.meta.url))

const pkgKey = process.env.SHARED_PKG || 'vue'
const emptyOutDir = process.env.SHARED_EMPTY === '1'

const entry = fileURLToPath(new URL(`./.build/shared/${pkgKey}.ts`, import.meta.url))
const outName = pkgKey === 'icons-vue' ? 'icons-vue' : pkgKey

const needsCore = pkgKey === 'admin-lang' || pkgKey === 'core-shared'

/** 单包 shared ESM 构建，peer 依赖保持 external 由 import map 解析 */
export default defineConfig({
    publicDir: false,
    define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
    },
    resolve: needsCore
        ? {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
                'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
            }
        }
        : undefined,
    plugins: needsCore
        ? [
            // 与 core 构建一致：按绝对路径排除 src/addon 源码（含 glob 展开产物）
            createExcludeAddonPlugin({ mode: 'core', root: rootDir, allowMetaJson: true }),
            vue()
        ]
        : [],
    build: {
        outDir: 'dist/.shared',
        emptyOutDir,
        lib: {
            entry,
            formats: ['es'],
            fileName: () => `${outName}.js`
        },
        rollupOptions: {
            external: sharedExternalForBuild(pkgKey),
            // core-shared 是共享包，addon 依赖其全部导出，禁止 tree-shaking
            treeshake: pkgKey !== 'core-shared'
        }
    }
})
