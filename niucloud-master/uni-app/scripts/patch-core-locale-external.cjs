/**
 * Core 构建会把 @/locale 打进 index.js（uni-app 忽略 rollup external）。
 * 剥离内联 createI18n + Language，改为 import shared/wap-locale.js 单例。
 */
const fs = require('fs')
const path = require('path')
const { WAP_LOCALE_URL } = require('./shared-external.cjs')

const WAP_LOCALE_IMPORT =
    `import{t as __wapT,language as __wapLanguage,i18n as __wapI18n,default as __wapLocaleDefault}from"${WAP_LOCALE_URL}";`

const CREATE_I18N_IMPORT_RE =
    /import\{createI18n as [\w$]+\}from"\/wap\/assets\/shared\/vue-i18n\.js";/

const MINIFIED_IDENT = '[\\w$]+'

function escapeRe(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function findLocaleBlock(code) {
    const startMatch = code.match(new RegExp(`let (${MINIFIED_IDENT})=[\\w$]+\\(\\{locale:`))
    if (!startMatch) return null

    const i18nVar = startMatch[1]
    const start = startMatch.index
    const head = code.slice(start, start + 1200)
    if (!head.includes('globalInjection:!0')) return null

    const classMatch = code.slice(start).match(new RegExp(`const (${MINIFIED_IDENT})=new class\\{`))
    if (!classMatch) return null

    const langVar = classMatch[1]
    const classStart = start + classMatch.index

    const endToken = `}(${i18nVar});`
    let endPos = -1
    let pos = classStart
    while (true) {
        const next = code.indexOf(endToken, pos)
        if (next < 0) break
        endPos = next
        pos = next + endToken.length
    }
    if (endPos < 0) return null

    const block = code.slice(start, endPos + endToken.length)
    if (!block.includes('loadLocaleMessages') || !block.includes('mergeLocaleMessage')) {
        return null
    }

    return {
        start,
        end: endPos + endToken.length,
        i18nVar,
        langVar
    }
}

function findInlineLocaleSymbols(code, i18nVar, langVar) {
    const i18n = escapeRe(i18nVar)
    const lang = escapeRe(langVar)
    const tRe = new RegExp(
        '(' +
            MINIFIED_IDENT +
            ')=' +
            MINIFIED_IDENT +
            '=>\\{let ' +
            MINIFIED_IDENT +
            '=' +
            MINIFIED_IDENT +
            '\\(\\);const ' +
            MINIFIED_IDENT +
            '=`\\$\\{' +
            lang +
            '\\.getFileKey\\(' +
            MINIFIED_IDENT +
            '\\)\\.fileKey\\}\\.\\$\\{' +
            MINIFIED_IDENT +
            '\\}`;return ' +
            i18n +
            '\\.global\\.t\\(' +
            MINIFIED_IDENT +
            '\\)!=' +
            MINIFIED_IDENT +
            '\\?' +
            i18n +
            '\\.global\\.t\\(' +
            MINIFIED_IDENT +
            '\\):' +
            i18n +
            '\\.global\\.t\\(' +
            MINIFIED_IDENT +
            '\\)!=' +
            MINIFIED_IDENT +
            '\\?' +
            i18n +
            '\\.global\\.t\\(' +
            MINIFIED_IDENT +
            '\\):""\\}'
    )
    const tMatch = code.match(tRe)

    const pluginRe = new RegExp(
        `(${MINIFIED_IDENT})=\\{install\\(${MINIFIED_IDENT}\\)\\{${MINIFIED_IDENT}\\.use\\(${i18n}\\)\\}\\}`
    )
    const pluginMatch = code.match(pluginRe)

    return { tMatch, pluginMatch }
}

function patchReferences(next, i18nVar, langVar) {
    const lang = escapeRe(langVar)
    const i18n = escapeRe(i18nVar)
    next = next.replace(new RegExp(`${lang}\\.loadLocaleMessages`, 'g'), '__wapLanguage.loadLocaleMessages')
    next = next.replace(new RegExp(`${lang}\\.getFileKey`, 'g'), '__wapLanguage.getFileKey')
    next = next.replace(new RegExp(`${lang}\\.loadAllLocaleMessages`, 'g'), '__wapLanguage.loadAllLocaleMessages')
    next = next.replace(new RegExp(`${i18n}\\.global`, 'g'), '__wapI18n.global')
    return next
}

/**
 * 标识符边界判定。
 * 注意：压缩名经常以 $ 结尾（g$ / m$ / n$ ...），而 \b 在 "$("、"$," 之间并不成立，
 * 所以 `\bNAME\b` 形式的守卫对这类名字完全失效 —— 这正是导出项被误改（loadAddonPage 丢失导出）的根因。
 * 统一改用「前后不是 [\w$]」判定。
 */
function identPattern(name) {
    return `(?:^|[^\\w$])${escapeRe(name)}(?![\\w$])`
}

/** name 是否在 code 里作为绑定存在（声明 / 赋值 / import 绑定） */
function isBindingDeclared(code, name) {
    const defRe = new RegExp(
        `(?:^|[^\\w$])(?:function|class|const|let|var)\\s+${escapeRe(name)}(?![\\w$])` +
            `|(?:^|[^\\w$])${escapeRe(name)}\\s*=(?!=)`
    )
    if (defRe.test(code)) return true
    // import{a as NAME, NAME2} from "..."  /  import NAME from "..."  /  import * as NAME from "..."
    const importRe = new RegExp(
        `(?:^|[^\\w$])import\\s*(?:[\\w$]+\\s*,\\s*)?(?:\\*\\s*as\\s+${escapeRe(name)}|${escapeRe(name)})\\s*(?:,|from)` +
            `|import\\s*\\{[^}]*?${identPattern(name)}[^}]*?\\}\\s*from`
    )
    return importRe.test(code)
}

/** name 是否在 code 中出现过（用于校验导出项有没有落空） */
function isIdentReferenced(code, name) {
    return new RegExp(identPattern(name)).test(code)
}

/** 解析形如 `export{a as b,c};` 的导出语句（尾部内容如 sourcemap 注释原样保留） */
function parseExportStatement(text) {
    const m = text.match(/^export\s*\{([\s\S]*?)\}(\s*;?)([\s\S]*)$/)
    if (!m) return null
    const entries = []
    for (const raw of m[1].split(',')) {
        const seg = raw.trim()
        if (!seg) continue
        const parts = seg.split(/\s+as\s+/)
        entries.push(
            parts.length === 2
                ? { local: parts[0].trim(), alias: parts[1].trim() }
                : { local: seg, alias: null }
        )
    }
    return { entries, tail: `${m[2]}${m[3]}` }
}

/**
 * 只重写 export 语句里的导出项（不再对全文做 `X as ` 全局替换），
 * 且仅当该名字在文件其余位置没有被声明时才改写，避免把仍然存在的同名绑定改坏。
 */
function renameExportLocals(code, renameMap) {
    const exportIdx = code.lastIndexOf('export{')
    if (exportIdx < 0) return { code, changed: false, skipped: [] }
    const head = code.slice(0, exportIdx)
    const parsed = parseExportStatement(code.slice(exportIdx))
    if (!parsed) return { code, changed: false, skipped: [] }

    const skipped = []
    let changed = false
    const entries = parsed.entries.map((entry) => {
        const to = renameMap[entry.local]
        if (!to || to === entry.local) return entry
        if (isBindingDeclared(head, entry.local)) {
            skipped.push(entry.local)
            return entry
        }
        changed = true
        return { local: to, alias: entry.alias }
    })
    if (!changed) return { code, changed: false, skipped }

    const body = entries.map((e) => (e.alias ? `${e.local} as ${e.alias}` : e.local)).join(',')
    return { code: `${head}export{${body}}${parsed.tail}`, changed: true, skipped }
}

/** 校验 export 语句里每个导出项在文件内都能解析到绑定（改坏导出会让整站 chunk 连锁失效） */
function validateExportBindings(code) {
    const exportIdx = code.lastIndexOf('export{')
    if (exportIdx < 0) return { ok: true, missing: [] }
    const parsed = parseExportStatement(code.slice(exportIdx))
    if (!parsed) return { ok: true, missing: [] }
    const head = code.slice(0, exportIdx)
    const missing = [
        ...new Set(parsed.entries.filter((e) => !isIdentReferenced(head, e.local)).map((e) => e.local))
    ]
    return { ok: missing.length === 0, missing }
}

function fixExportAliases(next, i18nVar, langVar, tVar, pluginVar) {
    const renameMap = {}
    for (const [from, to] of [
        [langVar, '__wapLanguage'],
        [i18nVar, '__wapI18n'],
        [tVar, '__wapT'],
        [pluginVar, '__wapLocaleDefault']
    ]) {
        if (!from || from === to) continue
        renameMap[from] = to
    }
    return renameExportLocals(next, renameMap).code
}

function fixLocaleExportLeaks(code) {
    if (!code.includes(WAP_LOCALE_URL)) return null
    if (code.lastIndexOf('export{') < 0) return null

    // 内联 locale 符号被删后遗留的导出别名映射（仅作提示，是否真的改写由「同名绑定是否仍存在」决定）
    const renameMap = {
        QL: '__wapLanguage',
        UL: '__wapI18n',
        m$: '__wapLanguage',
        g$: '__wapI18n'
    }
    const { code: next, changed, skipped } = renameExportLocals(code, renameMap)
    if (skipped.length) {
        console.warn(
            `[patch-core-locale-external] keep export binding(s) ${skipped.join(', ')}: still declared in bundle`
        )
    }
    return changed ? next : null
}

function validatePatchedSyntax(code, langVar, i18nVar) {
    if (!code.includes(WAP_LOCALE_URL) || !code.includes('__wapI18n')) return false
    if (
        new RegExp(`let ${MINIFIED_IDENT}=[\\w$]+\\(\\{locale:[\\s\\S]{0,1200}?globalInjection:!0`).test(
            code
        )
    ) {
        return false
    }
    if (/[\w$]+=__wapT[.`]/.test(code)) return false
    if (/async loadSplitAddonLocale/.test(code)) return false
    if (/async loadSplitAppLocale/.test(code)) return false
    if (
        new RegExp(`\\}\\(${MINIFIED_IDENT}\\);function ${MINIFIED_IDENT}\\(e\\)\\{return uni\\.getStorageSync\\("pid"\\)`).test(
            code
        )
    ) {
        return false
    }
    if (/new class\{constructor\(e\)\{[^}]*loadLocale/.test(code)) return false

    const exportPart = code.slice(code.lastIndexOf('export{'))
    if (langVar && new RegExp(`${escapeRe(langVar)} as `).test(exportPart)) return false
    if (i18nVar && new RegExp(`${escapeRe(i18nVar)} as `).test(exportPart)) return false
    return true
}

function patchCoreIndex(code) {
    if (code.includes(WAP_LOCALE_URL)) return null
    if (!CREATE_I18N_IMPORT_RE.test(code)) return null

    const block = findLocaleBlock(code)
    if (!block) return null

    const { start, end, i18nVar, langVar } = block
    const { tMatch, pluginMatch } = findInlineLocaleSymbols(code, i18nVar, langVar)

    let next = code.slice(0, start) + code.slice(end)
    next = next.replace(CREATE_I18N_IMPORT_RE, WAP_LOCALE_IMPORT)

    if (tMatch) {
        next = next.replace(tMatch[0], `${tMatch[1]}=__wapT`)
    }

    if (pluginMatch) {
        next = next.replace(pluginMatch[0], `${pluginMatch[1]}=__wapLocaleDefault`)
    }

    next = patchReferences(next, i18nVar, langVar)
    next = fixExportAliases(
        next,
        i18nVar,
        langVar,
        tMatch ? tMatch[1] : null,
        pluginMatch ? pluginMatch[1] : null
    )

    if (!validatePatchedSyntax(next, langVar, i18nVar)) return null
    return next
}

function patchCoreH5Dir(h5Dir) {
    const assetsDir = path.join(h5Dir, 'assets')
    if (!fs.existsSync(assetsDir)) return { patched: 0, failed: 0 }

    let patched = 0
    let failed = 0
    for (const name of fs.readdirSync(assetsDir)) {
        if (!name.startsWith('index-') || !name.endsWith('.js')) continue
        const filePath = path.join(assetsDir, name)
        const code = fs.readFileSync(filePath, 'utf-8')
        let next = patchCoreIndex(code)
        let kind = 'inline'
        if (!next) {
            next = fixLocaleExportLeaks(code)
            kind = 'export-leak'
            if (!next) {
                if (findLocaleBlock(code) && !code.includes(WAP_LOCALE_URL)) {
                    failed++
                    console.error(`[patch-core-locale-external] inline locale not patched: ${name}`)
                } else if (code.includes(WAP_LOCALE_URL) && !validatePatchedSyntax(code)) {
                    failed++
                    console.error(`[patch-core-locale-external] invalid patched file (rebuild core): ${name}`)
                }
                continue
            }
        }
        // 兜底校验：补丁后的导出项必须仍能在文件内解析到绑定。
        // 一旦落空说明改写破坏了 chunk 间约定（历史上曾把 loadAddonPage 的导出改成 __wapI18n，
        // 导致 addon-page-bridge 取到 i18n 实例调用报 "r is not a function"），此时宁可不打补丁。
        const check = validateExportBindings(next)
        if (!check.ok) {
            failed++
            console.error(
                `[patch-core-locale-external] skip ${kind} patch, export binding(s) would break: ` +
                    `${check.missing.join(', ')} (${name})`
            )
            continue
        }
        fs.writeFileSync(filePath, next, 'utf-8')
        patched++
        console.log(`[patch-core-locale-external] ${kind} ${name}`)
    }
    return { patched, failed }
}

module.exports = {
    patchCoreIndex,
    patchCoreH5Dir,
    findLocaleBlock,
    validatePatchedSyntax,
    fixLocaleExportLeaks,
    renameExportLocals,
    parseExportStatement,
    validateExportBindings,
    isBindingDeclared,
    isIdentReferenced
}

if (require.main === module) {
    const dir = process.argv[2]
    if (!dir) {
        console.error('Usage: node patch-core-locale-external.cjs <h5-dir>')
        process.exit(1)
    }
    const r = patchCoreH5Dir(path.resolve(dir))
    console.log('[patch-core-locale-external]', r)
    process.exit(r.failed > 0 ? 1 : 0)
}
