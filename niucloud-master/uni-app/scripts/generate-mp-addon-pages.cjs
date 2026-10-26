/**
 * 生成单插件编译用的 pages.addon.{key}.json（主包 + 该插件全部分包 root）
 */
const path = require('path')
const {
    ROOT,
    BUILD_DIR,
    resolveFullPagesJson,
    resolveAddonMpBundlePlan,
    writeJson,
    scanAddonSharedComponents,
    scanAddonMainComponents,
    writeMpSharedBridgePage,
    injectMpSharedBridgePage
} = require('./mp-utils.cjs')

function main() {
    const key = process.argv[2]
    if (!key) {
        console.error('Usage: node generate-mp-addon-pages.cjs <addon-key>')
        process.exit(1)
    }

    // 构建入口统一判定：无页面插件跳过；有页面却缺 pages.json 分包区块属真实异常
    const plan = resolveAddonMpBundlePlan(key)
    if (plan.mode === 'skip') {
        console.log(`[generate-mp-addon-pages] skip "${key}": ${plan.reason}`)
        return
    }
    if (plan.mode === 'error') {
        console.error(`[generate-mp-addon-pages] ${plan.reason}`)
        process.exit(1)
    }

    const pages = resolveFullPagesJson()
    const roots = plan.roots

    const rootSet = new Set(roots)
    const addonPages = {
        ...pages,
        subPackages: (pages.subPackages || []).filter((s) => rootSet.has(s.root))
    }

    const sharedComponents = scanAddonSharedComponents(key)
    const mainComponents = scanAddonMainComponents(key)
    if (sharedComponents.length || mainComponents.length) {
        writeMpSharedBridgePage(key, sharedComponents, mainComponents)
        injectMpSharedBridgePage(addonPages)
        if (sharedComponents.length) {
            console.log(
                `[generate-mp-addon-pages] shared addon/components: ${sharedComponents.join(', ')}`
            )
        }
        if (mainComponents.length) {
            console.log(
                `[generate-mp-addon-pages] main components: ${mainComponents.join(', ')}`
            )
        }
    }

    const out = path.join(BUILD_DIR, `pages.addon.${key}.json`)
    addonPages.easycom = addonPages.easycom || { custom: {} }
    addonPages.easycom.custom = addonPages.easycom.custom || {}
    addonPages.easycom.custom[`diy-dynamic-bridge-${key}`] =
        `@/components/diy-dynamic-bridge-${key}/diy-dynamic-bridge-${key}.vue`
    writeJson(out, addonPages)
    console.log(
        `[generate-mp-addon-pages] ${path.relative(ROOT, out)} (${roots.length} subPackage roots for ${key})`
    )
}

main()
