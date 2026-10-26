<template>
    <el-dialog v-model="visible" :title="t('diffDialogTitle')" width="880px" top="6vh" append-to-body
        :close-on-click-modal="false" @closed="onClosed">
        <!--
          第一步：校验前检测（场景 integrity）

          官网连通性 + 检测目标（文件/目录是否存在、是否可读）+ 清单缓存与写回备份目录权限。
          通过后自动进入「文件差异比对」（auto-next）；未通过则停在这一步，面板给出修复建议与
          「重新校验」，用户处理完可原地重跑，不必关掉弹框重来。
        -->
        <div v-if="preChecking" class="min-h-[150px]">
            <!-- 面板自带的底部操作区关掉：按钮统一放在弹框底部（与第二步同位置） -->
            <verify-panel ref="preCheckRef" :key="checkRunKey" scene="integrity" :params="{ target: targetKey }"
                :auto-next="true" :auto-next-delay="500" :show-footer="false" @next="onPreCheckPassed"
                @passed="checkPassed = true" @failed="checkPassed = false" @done="checkFinished = true"
                @retry="onPreCheckRetry" />
        </div>

        <!-- 第二步 / 第三步：文件差异比对（检测通过后进入；running=检测中，!running=结果） -->
        <template v-else>
        <!--
          目标抬头：始终在最上方；第三步时右侧并列筛选胶囊
        -->
        <div class="flex items-center gap-[12px]">
            <el-image v-if="targetInfo.icon" :src="img(targetInfo.icon)" class="h-[40px] w-[40px] shrink-0 rounded-[8px]"
                fit="cover">
                <template #error>
                    <div class="flex h-[40px] w-[40px] items-center justify-center rounded-[8px] bg-[var(--el-color-primary-light-9)]">
                        <el-icon class="text-[18px] text-[var(--el-color-primary)]"><Files /></el-icon>
                    </div>
                </template>
            </el-image>
            <div v-else class="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[8px] bg-[var(--el-color-primary-light-9)]">
                <el-icon class="text-[18px] text-[var(--el-color-primary)]"><Files /></el-icon>
            </div>
            <div class="min-w-0">
                <div class="truncate text-[15px] font-[600] text-[#303133]">{{ targetInfo.name || props.target }}</div>
                <div class="mt-[2px] text-[12px] text-[#909399]">V{{ targetInfo.version || '-' }}</div>
            </div>

            <!-- 第三步筛选胶囊：与抬头同一行靠右 -->
            <div v-if="!running && diffRows.length" class="ml-auto flex flex-wrap items-center justify-end gap-[8px]">
                <span v-for="tab in tabs" :key="tab.key"
                    class="cursor-pointer rounded-full px-[12px] py-[4px] text-[12px] leading-[18px] transition-colors"
                    :class="filterType === tab.key
                        ? 'bg-[var(--el-color-primary)] text-white'
                        : 'bg-[#f2f3f5] text-[#606266] hover:text-[var(--el-color-primary)]'"
                    @click="filterType = tab.key">
                    {{ tab.label }} {{ tab.count }}
                </span>
            </div>
        </div>

        <!--
          过程与结果共用区域，两态交叉淡入淡出；高度固定避免切换时弹框跳动
        -->
        <div class="relative mt-[14px] h-[380px]">
            <!-- 第二步：检测进度 + 执行记录 -->
            <Transition name="cross-fade">
                <div v-if="running" class="absolute inset-0 flex flex-col overflow-hidden">
                    <div class="flex items-center gap-[8px] rounded-[8px] bg-[var(--el-color-primary-light-9)] px-[14px] py-[10px]">
                        <el-icon class="shrink-0 text-[16px] text-[var(--el-color-primary)]"><InfoFilled /></el-icon>
                        <span class="min-w-0 truncate text-[13px] text-[#303133]">
                            {{ t('detectingPrefix') }} · {{ currentAction }}
                        </span>
                    </div>

                    <div class="mt-[14px] flex items-center gap-[12px]">
                        <el-progress class="flex-1" :percentage="percentage" :stroke-width="10" :show-text="false"
                            color="var(--el-color-primary)" />
                        <span class="w-[44px] shrink-0 text-right text-[14px] font-[600] text-[var(--el-color-primary)]">
                            {{ percentage }}%
                        </span>
                    </div>

                    <div class="mt-[16px] flex min-h-0 flex-1 flex-col">
                        <div class="mb-[8px] flex items-center justify-between">
                            <span class="text-[13px] font-[500] text-[#303133]">{{ t('logTitle') }}</span>
                            <span class="text-[12px] text-[#909399]">{{ t('logTotal').replace('%count%', String(logs.length)) }}</span>
                        </div>
                        <div ref="logBox"
                            class="min-h-0 flex-1 overflow-y-auto rounded-[8px] border border-solid border-[#ebeef5] px-[14px] py-[10px]">
                            <div v-if="!logs.length" class="py-[6px] text-[12px] text-[#c0c4cc]">{{ t('logEmpty') }}</div>
                            <div v-for="item in logs" :key="item.id"
                                class="flex items-start gap-[8px] text-[12px] leading-[22px]"
                                :class="item.stage === 'finish' ? 'text-[var(--el-color-primary)]' : ''">
                                <span class="shrink-0" :class="item.stage === 'finish' ? 'text-[var(--el-color-primary)]' : 'text-[#c0c4cc]'">
                                    {{ item.time }}
                                </span>
                                <span class="min-w-0 flex-1 break-all"
                                    :class="item.stage === 'finish' ? 'text-[var(--el-color-primary)]' : 'text-[#606266]'">
                                    {{ logText(item) }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>

            <!-- 第三步：结果（差异列表 / 一致 / 跳过 / 取消 / 失败） -->
            <Transition name="cross-fade">
                <div v-if="!running" class="absolute inset-0 flex flex-col overflow-hidden">
                    <div v-if="diffRows.length"
                        class="mb-[12px] flex items-center gap-[8px] rounded-[8px] bg-[#fdf6ec] px-[14px] py-[10px]">
                        <el-icon class="shrink-0 text-[15px] text-[#e6a23c]"><WarningFilled /></el-icon>
                        <span class="text-[12px] leading-[18px] text-[#e6a23c]">{{ t('backupTip') }}</span>
                    </div>

                    <div v-if="diffRows.length" class="mb-[12px] flex flex-wrap items-center justify-between gap-[10px]">
                        <el-checkbox v-model="allChecked" :indeterminate="indeterminate" :disabled="!selectableRows.length">
                            {{ t('diffSelectAll') }}
                        </el-checkbox>
                        <el-input v-model.trim="keyword" class="diff-search-input !w-[200px]" clearable
                            :placeholder="t('searchFilePlaceholder')">
                            <template #prefix><el-icon><Search /></el-icon></template>
                        </el-input>
                    </div>

                    <div v-if="errorMessage" class="flex flex-1 items-center justify-center">
                        <el-empty :description="t('checkFailed')" :image="emptyImage" image-size="150" />
                    </div>

                    <div v-else-if="skippedReason" class="flex flex-1 items-center justify-center">
                        <el-empty :description="t('targetSkipped')" :image="emptyImage" image-size="150" />
                    </div>

                    <div v-else-if="cancelled" class="flex flex-1 items-center justify-center">
                        <el-empty :description="t('checkCancelled')" :image="emptyImage" image-size="150" />
                    </div>

                    <div v-else-if="!diffRows.length" class="flex flex-1 flex-col items-center justify-center">
                        <el-icon class="text-[44px] text-[#67c23a]"><CircleCheckFilled /></el-icon>
                        <div class="mt-[10px] text-[14px] font-[500] text-[#303133]">{{ t('identical') }}</div>
                        <div class="mt-[4px] text-[12px] text-[#909399]">
                            {{ t('identicalTip').replace('%count%', String(progress.total)) }}
                        </div>
                    </div>

                    <!--
                      差异列表（虚拟滚动）

                      ★ 差异可能有几千行，每行还带着 checkbox / tag / button 三个组件实例；
                        全部塞进 DOM 时首次渲染、筛选与滚动都会明显掉帧。这里只渲染「视口内的行
                        + 少量缓冲」，用一个撑到总行高的占位层维持滚动条长度，行按固定行高绝对定位。
                    -->
                    <div v-else ref="listBox"
                        class="min-h-0 flex-1 overflow-y-auto rounded-[8px] border border-solid border-[#ebeef5]"
                        @scroll.passive="onListScroll">
                        <div class="relative w-full" :style="{ height: listTotalHeight + 'px' }">
                            <div v-for="item in visibleRows" :key="item.row.file" class="diff-row"
                                :style="{ height: `${ROW_HEIGHT}px`, transform: `translateY(${item.top}px)` }">
                                <el-checkbox v-model="item.row.checked" :disabled="item.row.status === 'new'" />
                                <el-tag :type="typeTag(item.row.status)" effect="light" class="diff-tag">
                                    {{ typeText(item.row.status) }}
                                </el-tag>
                                <span class="min-w-0 flex-1 truncate diff-name"
                                    :title="item.row.file">{{ item.row.file }}</span>
                                <!--
                                  右侧三列各占一个定宽槽位：行与行严格对齐，
                                  且「新增」行没有对比按钮时也不会把左边的内容挤歪。
                                  大小与哈希同属「文件指纹」，两列贴紧成一个组，
                                  与后面的对比按钮之间再留正常间距。
                                -->
                                <span class="diff-col-group">
                                    <span class="diff-col diff-col--size">{{ formatSize(item.row.size) }}</span>
                                    <span class="diff-col diff-col--hash">{{ shortHash(item.row) }}</span>
                                </span>
                                <span class="diff-col diff-col--action">
                                    <!--
                                      对比用图标按钮：整行宽度要留给文件名，文字按钮太占位。
                                      图标选 DocumentCopy（两份文档并列）—— 语义就是「看两份内容」，
                                      比眼睛（View，只表示「查看」）更贴近「本地 vs 官方并排比对」；
                                      悬浮有「对比」提示，不会被当成复制。
                                    -->
                                    <el-tooltip v-if="item.row.status !== 'new'" :content="t('compareAction')"
                                        placement="top">
                                        <el-button size="small" text type="primary" @click="openCompare(item.row)">
                                            <el-icon><DocumentCopy /></el-icon>
                                        </el-button>
                                    </el-tooltip>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>

        <el-alert v-if="errorMessage" class="mt-[12px]" type="error" :closable="false" show-icon :title="errorMessage" />

        <el-alert v-for="(warning, index) in warnings" :key="'w' + index" class="mt-[12px] break-all" type="warning"
            :closable="false" show-icon :title="warning" />

        </template>

        <!--
          footer 常驻，两步共用同一处位置：
            第一步（校验前检测）：取消 / 重新校验 / 开始校验
            第二步（差异结果）  ：取消 / 重新校验 / 恢复（检测中换成「取消检测」）
        -->
        <template #footer>
            <div class="flex flex-wrap items-center justify-between gap-[10px]">
                <span v-if="!preChecking && diffRows.length" class="text-[12px] text-[#909399]">
                    {{ t('selectedSummary') }} {{ checkedRows.length }} {{ t('filesUnit') }} · {{ formatSize(checkedSize) }}
                </span>
                <span v-else />
                <div class="flex items-center gap-[8px]">
                    <!-- 第一步（校验前检测）：按钮与第二步同位置，「重新校验 / 开始校验」都在这里 -->
                    <template v-if="preChecking">
                        <el-button @click="visible = false">{{ t('cancel') }}</el-button>
                        <!-- 与面板原本的规则一致：未通过且已有结果（或正在重跑）时才出现 -->
                        <el-button v-if="!checkPassed && (checkFinished || checkRetrying)" :loading="checkRetrying"
                            @click="retryPreCheck">
                            {{ t('recheckAction') }}
                        </el-button>
                        <el-button type="primary" :disabled="!checkPassed" @click="onPreCheckPassed">
                            {{ t('startCheck') }}
                        </el-button>
                    </template>
                    <template v-else>
                        <el-button @click="visible = false">{{ t('cancel') }}</el-button>
                        <!-- 检测中给一个明确的「取消检测」；跑完了才谈得上写回 -->
                        <el-button v-if="running" type="primary" @click="cancelCheck">{{ t('cancelCheck') }}</el-button>
                        <template v-else>
                            <!--
                              重来一次：结论已经出来了（有差异 / 无差异 / 失败 / 已取消）都能原地重跑，
                              不必关掉弹框再进一次。跑起来后底部会立刻切回进度态，所以不用另外做 loading。
                              写回过程中禁用：写回不自动重跑检测（结果弹框负责提醒），防抖即可。
                            -->
                            <el-button :disabled="restoring" @click="startCheck">{{ t('recheckAction') }}</el-button>
                            <el-button type="primary" :disabled="!checkedRows.length || restoring"
                                @click="openConfirm">
                                {{ t('restoreAction') }} ({{ checkedRows.length }})
                            </el-button>
                        </template>
                    </template>
                </div>
            </div>
        </template>
    </el-dialog>

    <!-- 二级弹框：单文件内容的并排比对（本地 → 官方） -->
    <el-dialog v-model="compareVisible" :title="t('compareTitle')" width="1180px" top="5vh" append-to-body
        :close-on-click-modal="false">
        <!--
          三段式：左侧「状态 + 文件路径」，中间「本地 / 官方」图例，右侧留同宽空位。
          左右都是 flex-1，图例才真正落在整行的水平中线上（对应下面并排的两栏内容）；
          路径过长时在左段内省略，不会把图例挤偏。
        -->
        <div class="mb-[10px] flex items-center gap-[8px]">
            <div class="flex min-w-0 flex-1 items-center gap-[8px]">
                <el-tag :type="typeTag(compareStatus)" effect="light" class="shrink-0">
                    {{ typeText(compareStatus) }}
                </el-tag>
                <span class="min-w-0 flex-1 truncate text-[13px] text-[#303133]"
                    :title="compareFile">{{ compareFile }}</span>
            </div>

            <!--
              两侧图例：说明左边一栏是本地、右边一栏是官方。
              做成两枚小圆角徽标 + 图标箭头，而不是「本地 → 官方」这行纯文字 ——
              纯文字的字号、颜色、字重跟弹框里其它标签对不上，中文里那个文字箭头也显得潦草。
            -->
            <span class="compare-legend">
                <span class="compare-legend__item compare-legend__item--local">{{ t('localLabel') }}</span>
                <el-icon class="compare-legend__arrow"><Right /></el-icon>
                <span class="compare-legend__item compare-legend__item--official">{{ t('officialLabel') }}</span>
            </span>

            <span class="flex-1" />
        </div>

        <!--
          @click.capture 用来接住比对组件底部「Show next N lines」那一下：
          展开是同步的重活，得先把加载遮罩放出去（见 onDiffClickCapture）。
        -->
        <div v-loading="compareLoading || expandLoading" :element-loading-text="compareLoadingText"
            class="min-h-[200px]" @click.capture="onDiffClickCapture">
            <el-alert v-if="compareError" type="error" :closable="false" show-icon :title="compareError" />

            <template v-else-if="diffDetail">
                <el-alert v-if="!diffDetail.in_baseline" class="mb-[10px]" type="info" :closable="false" show-icon
                    :title="t('addNotRestorable')" />

                <!-- 大文件降级说明：见 isLargeCompare / isTruncatedCompare -->
                <el-alert v-if="canShowDiff && isLargeCompare" class="mb-[10px]" type="warning" :closable="false"
                    show-icon :title="largeCompareTip" />

                <!--
                  两侧都有可比内容：交给比对组件并排展示（左 = 本地当前，右 = 官方）

                  ★ diff-style 只有 word / char 两个有效值：库内部只判断「是不是 char」，
                    其余一律按 word 处理，所以这里固定 word（以前按大文件切成 'line' 是空转）。
                  ★ 行内词级标记要不要跳过，由库按**单对变更行**的长度决定，跟文件总大小无关：
                    两侧合计超过 10000 字符就只按整行标出。想强制逐词标可以开
                    force-inline-comparison，代价是这类大文件会明显变慢。
                  ★ context 见 diffContext：小文件直接不折叠，整份平铺。
                -->
                <CodeDiff v-if="canShowDiff" :old-string="compareLocalText" :new-string="compareOfficialText"
                    :language="safeLanguage(diffDetail.language)" :filename="diffDetail.file" output-format="side-by-side"
                    diff-style="word" :context="diffContext" max-height="56vh" />

                <!--
                  走到这里说明至少有一侧拿不到内容（官方接口未部署 / 二进制 / 超限 / 本地缺失）：
                  把能拿到的那一侧照样展示出来、另一侧写清原因，别留一片空白。
                -->
                <template v-else>
                    <el-alert class="mb-[10px]" type="warning" :closable="false" show-icon
                        :title="t('officialLabel') + '：' + officialUnavailableReason" />
                    <CodeReader v-if="diffDetail.local.content !== null" :text="localText"
                        :language="safeLanguage(diffDetail.language)" />
                    <el-alert v-else type="info" :closable="false" show-icon
                        :title="t('localLabel') + '：' + sideMessage(diffDetail.local)" />
                </template>
            </template>
        </div>

        <template #footer>
            <el-button @click="compareVisible = false">{{ t('close') }}</el-button>
        </template>
    </el-dialog>

    <!--
      三级弹框：写回确认（破坏性操作）
      不用 ElMessageBox 那种一行提示：覆盖别人改过的源码后果不可逆，
      这里必须把「改什么 / 丢什么 / 怎么找回 / 何时生效」逐条讲清楚再让用户点确认。
    -->
    <el-dialog v-model="confirmVisible" :title="t('restoreConfirmTitle')" width="640px" append-to-body
        :close-on-click-modal="false">
        <el-alert type="warning" :closable="false" show-icon :title="restoreScopeText" />

        <div class="mt-[12px] flex flex-wrap items-center gap-[8px]">
            <el-tag v-if="checkedModifiedCount" type="warning" effect="light">
                {{ t('typeModified') }} {{ checkedModifiedCount }}
            </el-tag>
            <el-tag v-if="checkedDeletedCount" type="danger" effect="light">
                {{ t('typeDeleted') }} {{ checkedDeletedCount }}
            </el-tag>
        </div>

        <div class="mt-[14px] text-[13px] font-bold text-[#303133]">{{ t('restoreConsequenceTitle') }}</div>
        <ol class="mt-[6px] list-decimal pl-[18px] text-[13px] leading-[22px] text-[#606266]">
            <li v-for="(item, index) in consequenceList" :key="'c' + index">{{ item }}</li>
        </ol>

        <template #footer>
            <el-button @click="confirmVisible = false">{{ t('cancel') }}</el-button>
            <el-button type="danger" :loading="restoring" @click="confirmRestore">{{ t('confirmRestore') }}</el-button>
        </template>
    </el-dialog>

    <!-- 四级弹框：写回结果 -->
    <el-dialog v-model="restoreVisible" :title="t('restoreDoneTitle')" width="560px" append-to-body
        class="restore-result-dialog" :close-on-click-modal="false">
        <div class="restore-result">
            <div class="restore-result__summary" :class="restoreFailedCount ? 'is-warning' : 'is-success'">
                <el-icon class="restore-result__summary-icon">
                    <WarningFilled v-if="restoreFailedCount" />
                    <CircleCheckFilled v-else />
                </el-icon>
                <span class="restore-result__summary-text">{{ restoreSummary }}</span>
            </div>

            <div class="restore-result__refresh">{{ t('restoreRefreshTip') }}</div>

            <div v-if="restoreResult?.backup_dir" class="restore-result__backup">
                {{ t('backupDirLabel') }}&nbsp;&nbsp;{{ restoreResult.backup_dir }}
            </div>

            <div v-if="restoreResult?.failed?.length" class="restore-result__section">
                <div class="restore-result__section-title is-failed">{{ t('restoreFailedList') }}</div>
                <div class="restore-result__list">
                    <div v-for="item in restoreResult.failed" :key="'f' + item.file" class="restore-result__item">
                        <div class="restore-result__file" :title="item.file">{{ item.file }}</div>
                        <div class="restore-result__msg is-failed">{{ item.message }}</div>
                    </div>
                </div>
            </div>

            <div v-if="restoreResult?.skipped?.length" class="restore-result__section">
                <div class="restore-result__section-title">{{ t('restoreSkippedList') }}</div>
                <div class="restore-result__list">
                    <div v-for="item in restoreResult.skipped" :key="'s' + item.file" class="restore-result__item">
                        <div class="restore-result__file" :title="item.file">{{ item.file }}</div>
                        <div class="restore-result__msg">{{ item.message }}</div>
                    </div>
                </div>
            </div>
        </div>

        <template #footer>
            <el-button type="primary" class="!px-[28px]" @click="restoreVisible = false">
                {{ t('restoreDoneOk') }}
            </el-button>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { computed, nextTick, onBeforeUnmount, reactive, ref, watch } from 'vue'
import { useElementSize } from '@vueuse/core'
import { ElMessage } from 'element-plus'
import { CircleCheckFilled, DocumentCopy, Files, InfoFilled, Right, Search, WarningFilled } from '@element-plus/icons-vue'
import { CodeDiff, CodeReader, hljs } from 'v-code-diff'
import bash from 'highlight.js/lib/languages/bash'
import css from 'highlight.js/lib/languages/css'
import ini from 'highlight.js/lib/languages/ini'
import javascript from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'
import less from 'highlight.js/lib/languages/less'
import markdown from 'highlight.js/lib/languages/markdown'
import php from 'highlight.js/lib/languages/php'
import plaintext from 'highlight.js/lib/languages/plaintext'
import scss from 'highlight.js/lib/languages/scss'
import sql from 'highlight.js/lib/languages/sql'
import typescript from 'highlight.js/lib/languages/typescript'
import xml from 'highlight.js/lib/languages/xml'
import yaml from 'highlight.js/lib/languages/yaml'
import { i18n } from '@/lang'
import VerifyPanel from '@/app/components/verify-panel/index.vue'
import { img } from '@/utils/common'
import storage from '@/utils/storage'
import emptyImage from '@/app/assets/images/app_store/empty.png'
import { checkIntegrity, getIntegrityFileDiff, getIntegrityStreamUrl, getIntegrityTargets, restoreIntegrityFiles } from '@/app/api/integrity'

/**
 * 语法高亮语言注册
 *
 * v-code-diff 内置的 highlight.js 只注册了极少数语言，而我们会把文件扩展名映射成
 * php / javascript / xml 这类语言名传给它。语言没注册时，它内部的
 * `hljs.highlight(code, { language })` 会**直接抛异常**（Unknown language: "php"），
 * 整个比对区因此渲染不出来 —— 控制台那条
 * “Could not find the language 'php', did you forget to load/include a language module?”
 * 就是这个异常附带的日志。
 *
 * 所以：把会用到的语言补注册到组件导出的那个 hljs 实例上。
 * ★ 必须用它导出的实例 —— 组件内部渲染用的是它；本项目顶层还装着另一份 highlight.js，
 *   注册到那份上不生效。
 * 语言名与 core\integrity\FileRestorer::guessLanguage() 的映射保持一致。
 */
const HIGHLIGHT_LANGUAGES: Record<string, any> = {
    bash, css, ini, javascript, json, less, markdown, php, plaintext, scss, sql, typescript, xml, yaml
}

Object.entries(HIGHLIGHT_LANGUAGES).forEach(([name, definition]) => {
    hljs.registerLanguage(name, definition)
})

/**
 * 交给比对组件的语言名
 *
 * 只放行确实注册过的名字，其余一律按纯文本处理：v-code-diff 对 plaintext 会直接输出
 * 转义后的纯文本、根本不碰 hljs，所以不会再出现「未注册语言 → 抛异常 → 整块渲染不出来」。
 */
const safeLanguage = (name: string) => (name && name in HIGHLIGHT_LANGUAGES ? name : 'plaintext')

/**
 * 弹框是公共组件，可能从任意页面打开；这里直接查全局语言包（common.json），
 * 不走 @/lang 那套「按当前路由推断语言文件」的逻辑，避免换个页面就取不到文案。
 *
 * ★ 必须用 @/lang 的**命名导出**取 i18n 实例，不能写 `import i18n from '@/lang/i18n'`：
 *   部署构建里 @/lang 与 @/lang/i18n 都被 external 成同一个共享包
 *   /admin/assets/shared/admin-lang.js（见 scripts/shared-external.cjs 的
 *   isAdminLangExternal + vite.config.core.ts 的 external/paths）。那个模块的
 *   default 是 src/lang/index.ts 的 `{ install }` 插件对象、不是 i18n 实例，
 *   于是 i18n.global 为 undefined —— dev 正常，线上点「校验」直接抛
 *   TypeError: Cannot read properties of undefined (reading 't')，弹框根本打不开。
 *   （同一个坑的既有记录：addon/shop_customer/.../PanelContainer.vue）
 *
 * 下面再兜一层：万一以后映射又变了，也只会显示 key（可读），不会让整个弹框崩掉。
 */
const t = (key: string): string => {
    const value = i18n?.global?.t?.(key)

    return value === undefined || value === null ? key : String(value)
}

type DiffStatus = 'new' | 'modified' | 'deleted'

interface DiffRow {
    file: string
    status: DiffStatus
    size: number
    hashLocal: string
    hashBaseline: string
    checked: boolean
}

/** 单侧内容：ok 时才有 content，其余状态用 message 说明原因 */
interface SideContent {
    state: 'ok' | 'missing' | 'too_large' | 'binary' | 'unreadable'
    size: number
    content: string | null
    message: string
}

/** 单文件比对结果（后端 sys/integrity/file_diff） */
interface FileDiffDetail {
    file: string
    language: string
    in_baseline: boolean
    local: SideContent
    official: SideContent | null
    official_error: string
}

const props = defineProps<{
    /** 是否显示 */
    show: boolean
    /** 检测目标：插件 key（如 shop）或 framework */
    target: string
    /** 插件图标地址（可选，不传则用占位图标） */
    icon?: string
}>()

const emit = defineEmits(['update:show'])

/**
 * 允许调用方传插件 key（shop）或完整目标标识（addon:shop / framework），
 * 内部统一成检测接口要求的完整标识。
 */
const normalizeTarget = (value: string) => {
    if (!value) return ''
    if (value === 'framework' || value.startsWith('addon:')) return value
    return `addon:${value}`
}

const targetKey = computed(() => normalizeTarget(props.target))

const visible = computed({
    get: () => props.show,
    set: (value: boolean) => emit('update:show', value)
})

/** 主弹框目前所处的阶段：查询中 → 列表 */
const phase = ref<'loading' | 'list'>('loading')
/**
 * 是否停留在第一步「校验前检测」
 *
 * 弹框打开先做一轮环境检测（场景 integrity：官网连通性 + 检测目标与目录权限），
 * 通过后自动切到「文件差异比对」；未通过就停在这一步，由面板内的「重新校验」原地重跑。
 * 环境没准备好时先拦住，用户不必白等一轮扫描（扫描可能要几分钟，失败却什么也得不到）。
 */
const preChecking = ref(true)
/**
 * 每次打开弹框自增，作为校验面板的 key
 *
 * 面板会记住上一轮的通过 / 失败状态，直接复用会让「上次没过、这次打开还是那片红」；
 * 换 key 强制重挂载，保证每次打开都是重跑一遍检测。
 * ★ 只在打开时自增：如果在关闭时把 preChecking 置回 true，面板会在弹框已关闭的
 *   情况下重新挂载并跑检测，通过后还会自动开始一轮扫描 —— 那是白干的。
 */
const checkRunKey = ref(0)
/**
 * 校验面板实例：底部「重新校验」按钮用它原地重跑
 * （面板已关闭自带操作区，按钮统一在弹框底部；这里只用到它的 retry）
 */
const preCheckRef = ref<{ retry: () => Promise<void> } | null>(null)
/** 第一步检测：是否已出结果、是否通过、是否正在重跑 —— 底部按钮据此显示 */
const checkFinished = ref(false)
const checkPassed = ref(false)
const checkRetrying = ref(false)
const errorMessage = ref('')
const warnings = ref<string[]>([])
/** 该目标被跳过时的原因（云端没有这份包体）：非空表示「这次没检测」，而不是「没有差异」 */
const skippedReason = ref('')
/** 本轮检测是否还在跑：进度条右侧的说明与「取消检测」按钮都看它 */
const running = ref(false)
/** 是否被用户主动取消：此时列表里只有半份结果，不能当成检测结论 */
const cancelled = ref(false)
const progress = reactive({ scanned: 0, total: 0 })
const diffRows = ref<DiffRow[]>([])
const filterType = ref('')
const keyword = ref('')
const targetInfo = reactive({ name: '', version: '', icon: '' })
const restoring = ref(false)

/**
 * 进度百分比
 *
 * 进度条只在 running 期间出现（见模板），所以这里只处理「跑着的时候」：
 * 目标文件总数要等清单就绪（meta / 首片回包）才知道，拿到之前先显示 0%。
 */
const percentage = computed(() => {
    if (!progress.total) return 0
    return Math.min(100, Math.floor(progress.scanned / progress.total * 100))
})

// ==================== 执行记录 ====================

/**
 * 进度行（scanning）保留条数
 *
 * 进度粒度按文件数自适应后，大目标会推出很多行（6400 个文件 → 640 行），
 * 不裁剪的话记录数组与 DOM 会一直涨。关键节点另行保留，见 trimLogs()。
 */
const SCAN_LOG_LIMIT = 300

/**
 * 一条执行记录
 *
 * ★ 只存结构（阶段 + 数据），文案在渲染时由 logText() 翻译：
 *   服务端只负责发事件，中英文界面都能显示各自的语言，切语言后历史记录也会跟着变。
 */
interface LogEntry {
    /** 自增序号：给 v-for 一个稳定 key —— 用下标做 key，每裁一次都要整表重渲染 */
    id: number
    /** HH:mm:ss */
    time: string
    /** 阶段：start 开始 / baseline 取清单 / ready 清单就绪 / scanning 比对中 / finish 结束 / fallback 降级 / cancelled 取消 */
    stage: 'start' | 'baseline' | 'ready' | 'scanning' | 'finish' | 'fallback' | 'cancelled'
    /** 阶段数据（total / scanned / diff 等） */
    data?: Record<string, any>
}

/** 记录序号（只在 pushLog 里自增） */
let logSeq = 0

const logs = ref<LogEntry[]>([])
const logBox = ref<HTMLElement>()

/** 执行记录文案（%x% 是 vue-i18n 不认识的记号，理由见 restoreScopeText） */
const logText = (entry: LogEntry): string => {
    const data = entry.data || {}

    switch (entry.stage) {
        case 'start':
            return t('logStart')
        case 'baseline':
            return t('logBaseline')
        case 'ready':
            return t('logReady').replace('%count%', String(data.total ?? 0))
        case 'scanning':
            return t('logScanning')
                .replace('%done%', String(data.scanned ?? 0))
                .replace('%total%', String(data.total ?? 0))
        case 'finish':
            return Number(data.diff) > 0
                ? t('logFinishDiff').replace('%count%', String(data.diff))
                : t('logFinishSame')
        case 'fallback':
            return t('logFallback')
        case 'cancelled':
            return t('logCancelled')
        default:
            return ''
    }
}

/** 进度条右侧的当前动作：取最近一条「还在做事」的记录 */
const currentAction = computed(() => {
    for (let index = logs.value.length - 1; index >= 0; index--) {
        const stage = logs.value[index].stage
        if (stage === 'baseline' || stage === 'ready' || stage === 'scanning' || stage === 'fallback') {
            return logText(logs.value[index])
        }
    }

    return t('checking')
})

/**
 * 裁剪执行记录
 *
 * ★ 只丢「进度行」，关键节点（开始检测 / 已读取官方清单 / 比对完成 / 已切换为轮询 …）
 *   一律保留 —— 它们是这次检测的骨架，被几百行进度挤掉之后就再也找不回来了。
 */
const trimLogs = () => {
    let overflow = logs.value.filter(item => item.stage === 'scanning').length - SCAN_LOG_LIMIT

    if (overflow <= 0) return

    logs.value = logs.value.filter(item => {
        if (overflow > 0 && item.stage === 'scanning') {
            overflow--

            return false
        }

        return true
    })
}

/** 记一行执行记录，并把它滚进可视区（否则最新一条会被挡在下面） */
const pushLog = (stage: LogEntry['stage'], data?: Record<string, any>) => {
    logs.value.push({ id: ++logSeq, time: new Date().toTimeString().slice(0, 8), stage, data })

    trimLogs()

    nextTick(() => {
        if (logBox.value) {
            logBox.value.scrollTop = logBox.value.scrollHeight
        }
    })
}

/**
 * 本轮已经记过的「一次性节点」
 *
 * ★ 为什么需要它：一轮检测有两条通道 —— SSE（服务端会发 log(baseline) / log(ready)）
 *   与降级后的分片路径（startChunk 自己也记这两个节点）。SSE 跑到一半断线降级时，
 *   同一个节点会被两条通道各记一次，记录里就出现两条一模一样的「正在读取官方清单…」。
 *   关键节点一轮只该出现一次，这里统一兜住。
 *   进度行（scanning）不在其列，它本来就该有很多条。
 */
const loggedOnce = new Set<string>()

/** 记一行一次性节点；本轮已记过就跳过（缘由见 loggedOnce） */
const pushLogOnce = (stage: LogEntry['stage'], data?: Record<string, any>) => {
    if (loggedOnce.has(stage)) return

    loggedOnce.add(stage)
    pushLog(stage, data)
}

/** 告警去重追加：同一条告警可能每个分片都带一次 */
const addWarnings = (list: unknown[]) => {
    list.forEach(item => {
        const text = String(item || '')
        if (text && !warnings.value.includes(text)) {
            warnings.value = warnings.value.concat([text])
        }
    })
}

const tabs = computed(() => [
    { key: '', label: t('tabAll'), count: diffRows.value.length },
    { key: 'new', label: t('typeNew'), count: countOf('new') },
    { key: 'modified', label: t('typeModified'), count: countOf('modified') },
    { key: 'deleted', label: t('typeDeleted'), count: countOf('deleted') }
])

const filteredRows = computed(() => diffRows.value.filter(row => {
    if (filterType.value && row.status !== filterType.value) return false
    if (keyword.value && !row.file.includes(keyword.value)) return false
    return true
}))

/**
 * 差异列表的虚拟滚动
 *
 * 差异可能有几千行，而每行还带着 checkbox / tag / button 三个 Element Plus 组件实例：
 * 全部塞进 DOM 时首次渲染、筛选与滚动都会明显掉帧（content-visibility 只省绘制，
 * 省不掉节点创建与组件实例的开销）。所以这里只渲染「视口内的行 + 少量缓冲」，
 * 用一个撑到总行高的占位层维持滚动条长度，行按固定行高绝对定位。
 *
 * ★ 行高必须固定：占位高度与行的定位都按 ROW_HEIGHT 算，模板里的行高也用它。
 * ★ 只影响画出来的行数：勾选、全选、计数都基于 filteredRows，语义不变。
 */
const ROW_HEIGHT = 38

/** 视口上下各多渲染的行数：留一点缓冲，滚动时不会出现空白 */
const ROW_OVERSCAN = 6

const listBox = ref<HTMLElement>()
const listScrollTop = ref(0)

/** 视口高度：弹框尺寸固定，但用 ResizeObserver 兜住窗口 / 布局变化 */
const { height: listViewportHeight } = useElementSize(listBox)

/** 占位层高度 = 总行数 × 行高，滚动条长度因此与实际数据量一致 */
const listTotalHeight = computed(() => filteredRows.value.length * ROW_HEIGHT)

/** 视口内要渲染的行区间（含上下缓冲） */
const renderRange = computed(() => {
    const total = filteredRows.value.length
    const viewport = listViewportHeight.value || 380

    const start = Math.max(0, Math.floor(listScrollTop.value / ROW_HEIGHT) - ROW_OVERSCAN)
    const end = Math.min(total, Math.ceil((listScrollTop.value + viewport) / ROW_HEIGHT) + ROW_OVERSCAN)

    return { start, end }
})

/** 要画出来的行：row 原样带出，top 是它在占位层里的偏移 */
const visibleRows = computed(() => {
    const { start, end } = renderRange.value

    return filteredRows.value.slice(start, end).map((row, index) => ({
        row,
        top: (start + index) * ROW_HEIGHT
    }))
})

/**
 * 滚动提交（rAF 节流）
 *
 * scroll 一帧内可能触发多次，每次都写 listScrollTop 会让可见行重算并重渲染好几遍。
 * 这里只记住最新的 scrollTop，等下一帧统一提交一次。
 */
let scrollRaf: number | null = null
let pendingScrollTop = 0

const onListScroll = (event: Event) => {
    pendingScrollTop = (event.target as HTMLElement).scrollTop

    if (scrollRaf !== null) return

    scrollRaf = window.requestAnimationFrame(() => {
        scrollRaf = null
        listScrollTop.value = pendingScrollTop
    })
}

/**
 * 滚回顶部：状态与 DOM 一起归零
 *
 * ★ 必须撤掉在途的 rAF：否则它会在下一帧拿旧的 scrollTop 把刚归零的状态又写回去。
 */
const scrollListToTop = () => {
    if (scrollRaf !== null) {
        window.cancelAnimationFrame(scrollRaf)
        scrollRaf = null
    }

    pendingScrollTop = 0
    listScrollTop.value = 0

    if (listBox.value) {
        listBox.value.scrollTop = 0
    }
}

/** 过滤条件变了：结果集换了，滚回顶部（不滚的话新结果会停在旧位置） */
watch([filterType, keyword], () => {
    scrollListToTop()
})

/** 进入结果态才开始量视口：检测过程中列表还没画出来 */
watch(phase, value => {
    if (value !== 'list') return

    scrollListToTop()

    nextTick(() => {
        if (listBox.value) listBox.value.scrollTop = 0
    })
})

onBeforeUnmount(() => {
    if (scrollRaf !== null) {
        window.cancelAnimationFrame(scrollRaf)
        scrollRaf = null
    }
})

/**
 * 可勾选的行 = 官方版存在的文件（修改 / 删除两类）。
 *
 * 新增项是「本地多出来、官方包里没有」的文件，官方没有对应内容可写回，
 * 所以不允许勾选 —— 想清理这类文件得走别的途径。
 */
const selectableRows = computed(() => filteredRows.value.filter(row => row.status !== 'new'))

const checkedRows = computed(() => diffRows.value.filter(row => row.checked))
const checkedSize = computed(() => checkedRows.value.reduce((sum, row) => sum + row.size, 0))

/** 当前筛选结果里已勾选的可写回行（全选态只看这一层，不看其它 tab） */
const checkedSelectableInView = computed(() => selectableRows.value.filter(row => row.checked))

/**
 * 「全选当前结果」勾选态
 *
 * ★ 必须跟当前筛选同步：默认只勾「修改」，切到「修改」tab 时列表全勾了，
 *   若仍用独立 ref 且从不回写，顶部会一直是未勾。
 */
const allChecked = computed({
    get: () => selectableRows.value.length > 0
        && checkedSelectableInView.value.length === selectableRows.value.length,
    set: (value: boolean) => {
        selectableRows.value.forEach(row => {
            row.checked = value
        })
    }
})
const indeterminate = computed(() => {
    const checked = checkedSelectableInView.value.length
    return checked > 0 && checked < selectableRows.value.length
})

const countOf = (status: string) => diffRows.value.filter(row => row.status === status).length

const typeText = (status: string) => {
    const map: Record<string, string> = {
        new: t('typeNew'),
        modified: t('typeModified'),
        deleted: t('typeDeleted')
    }
    return map[status] || status
}

const typeTag = (status: string) => {
    const map: Record<string, string> = { new: 'primary', modified: 'warning', deleted: 'danger' }
    return map[status] || 'info'
}

/** 字节数转可读文本 */
const formatSize = (size: number) => {
    if (!size) return '0 B'
    if (size < 1024) return `${size} B`
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`
    return `${(size / 1024 / 1024).toFixed(1)} MB`
}

/** 哈希只展示前 8 位 */
const shortHash = (row: DiffRow) => (row.hashLocal || row.hashBaseline || '').slice(0, 8) || '-'

// ==================== 单文件比对 ====================

const compareVisible = ref(false)
const compareLoading = ref(false)
const compareError = ref('')
const compareStatus = ref<DiffStatus>('modified')
const diffDetail = ref<FileDiffDetail | null>(null)

const compareFile = computed(() => diffDetail.value?.file || '')

/**
 * 「展开后续内容」的加载态
 *
 * v-code-diff 对大文件是分批渲染的（一次 1000 行），底部有个「Show next N lines」按钮。
 * 展开却是**同步**做完的：算 diff、跑语法高亮、重建表格全在同一帧里，大文件会卡好几秒，
 * 期间界面一动不动、点第二下还会被当成双击。所以给它套一层加载遮罩。
 */
const expandLoading = ref(false)

/** 遮罩文案：两种加载走同一个 v-loading，文案按当前在做什么切 */
const compareLoadingText = computed(() => (expandLoading.value ? t('compareExpanding') : t('compareLoading')))

/**
 * 正在补发那一下点击（见 onDiffClickCapture）：由自己补发的事件必须直接放行，
 * 否则会被当成新的一次拦截，无限套娃。
 */
let replayingExpand = false

/**
 * 接住比对组件底部「展开下一批」的点击
 *
 * ★ 为什么不能「先放行、再挂遮罩」：展开是同步的重活，遮罩要等浏览器下一次绘制才出现，
 *   而重活就发生在这次绘制之前 —— 遮罩永远晚一步，等于没有。
 *   所以反过来做：先把这一下拦下来、让遮罩真正画到屏幕上，再把同一元素上的点击补发回去。
 */
const onDiffClickCapture = (event: MouseEvent) => {
    if (replayingExpand) return

    const button = (event.target as HTMLElement | null)?.closest?.('.load-more-button')
    if (!button) return

    // 拦住这一下：既不交给组件（展开还没开始），也不触发表单默认行为
    event.stopPropagation()
    event.preventDefault()

    replayingExpand = true
    expandLoading.value = true

    // 两帧：第一帧把遮罩写进 DOM，第二帧保证它已经画到屏幕上，再开始干重活
    window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
        button.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }))

        // 补发的这一下同步完成展开，返回时新内容已经算好；再等一帧让它画出来就收遮罩
        replayingExpand = false
        window.requestAnimationFrame(() => {
            expandLoading.value = false
        })
    }))
}

/** 两侧都拿得到内容才交给比对组件；否则用提示条说明原因 */
const canShowDiff = computed(() => {
    const detail = diffDetail.value
    if (!detail || !detail.official || detail.official.content === null) return false

    return detail.local.content !== null || detail.local.state === 'missing'
})

const localText = computed(() => diffDetail.value?.local.content ?? '')
const officialText = computed(() => diffDetail.value?.official?.content ?? '')

/** 内容行数：不切数组（大文件 split 会产生上万个小字符串），纯计数更省 */
const countLines = (text: string) => {
    if (!text) return 0

    let lines = 1
    for (let index = text.indexOf('\n'); index !== -1; index = text.indexOf('\n', index + 1)) {
        lines++
    }

    return lines
}

/** 只保留前 limit 行，用于超大文件的降级展示 */
const truncateLines = (text: string, limit: number) => {
    if (!text) return text

    let index = -1
    for (let lines = 1; lines < limit; lines++) {
        const next = text.indexOf('\n', index + 1)
        if (next === -1) return text
        index = next
    }

    return index === -1 ? text : text.slice(0, index)
}

/** 先按行截、再按字符截：日志类文件行数少但单行极长，两种都要防 */
const truncateText = (text: string, maxLines: number, maxChars: number) => {
    if (!text) return text

    const result = truncateLines(text, maxLines)

    return result.length > maxChars ? result.slice(0, maxChars) : result
}

/**
 * 「大文件」提示的触发线（两侧合计）
 *
 * 到这个体量，比对与渲染都会明显变慢；超长的变更行也会被库按整行标出（不再逐词标）。
 * 只用来决定要不要给用户一条说明 —— 真正"少看内容"的是下面的截断，不是这里。
 * ★ 两个维度都要看：行数管普通源码（后端单文件上限 2MB，可能是几万行），
 *   字符数管「行少但单行极长」的情况（日志、压缩过的 js）。
 */
const DIFF_LARGE_MAX_LINES = 3000
const DIFF_LARGE_MAX_CHARS = 200 * 1024

/**
 * 「小文件不折叠」的行数上限
 *
 * 折叠是 v-code-diff 的默认行为：变更点上下只留 context 行，其余成段的一致内容收起来，
 * 用户得一个个点「展开」。文件本来就不长时这纯属添堵（而且展开那一下是同步重活，会卡）。
 * 所以两侧任一侧不超过这个行数，就把 context 开到比总行数还大 —— 一行都不折，整份平铺。
 * 超过这个行数仍按库的默认（context = 10）折叠，免得几万行一起塞进 DOM。
 */
const DIFF_NO_FOLD_MAX_LINES = 500

/**
 * 截断上限（两侧各一份）
 *
 * 超过就只展示前面这一段，并在提示条里写明「已截断」——
 * 否则用户会把「截断导致看不到差异」当成「没有差异」。
 */
const DIFF_LINE_MAX_LINES = 20000
const DIFF_LINE_MAX_CHARS = 1024 * 1024

const localLineCount = computed(() => countLines(localText.value))
const officialLineCount = computed(() => countLines(officialText.value))

/** 两侧内容的总行数 / 总字符数：决定要不要给大文件提示、要不要截断 */
const compareLineCount = computed(() => localLineCount.value + officialLineCount.value)
const compareCharCount = computed(() => localText.value.length + officialText.value.length)

/** 是否要提示「这是个大文件」 */
const isLargeCompare = computed(() =>
    compareLineCount.value > DIFF_LARGE_MAX_LINES || compareCharCount.value > DIFF_LARGE_MAX_CHARS)

/**
 * 传给比对组件的 context（变更点上下保留多少行不折叠）
 *
 * ★ context ≥ 总行数时，每个变更点的「上下 context 行」窗口都覆盖了整份文件 → 没有行可折，
 *   等价于关掉折叠。小文件正是要这个效果（见 DIFF_NO_FOLD_MAX_LINES）。
 */
const diffContext = computed(() => {
    const lines = Math.max(localLineCount.value, officialLineCount.value)

    return lines <= DIFF_NO_FOLD_MAX_LINES ? lines + 1 : 10
})

/** 是否连行级比对都装不下（任一侧超上限） */
const isTruncatedCompare = computed(() =>
    localLineCount.value > DIFF_LINE_MAX_LINES
    || officialLineCount.value > DIFF_LINE_MAX_LINES
    || localText.value.length > DIFF_LINE_MAX_CHARS
    || officialText.value.length > DIFF_LINE_MAX_CHARS)

/** 降级后的实际展示内容：需要截断时只取前面一段（未超限的一侧原样带过，截断是空操作） */
const compareLocalText = computed(() => isTruncatedCompare.value
    ? truncateText(localText.value, DIFF_LINE_MAX_LINES, DIFF_LINE_MAX_CHARS)
    : localText.value)

const compareOfficialText = computed(() => isTruncatedCompare.value
    ? truncateText(officialText.value, DIFF_LINE_MAX_LINES, DIFF_LINE_MAX_CHARS)
    : officialText.value)

/** 大文件降级说明：截断与否两种文案 */
const largeCompareTip = computed(() => t(isTruncatedCompare.value ? 'compareLargeTruncatedTip' : 'compareLargeTip'))

const sideMessage = (side: SideContent) => side.message || '-'

/** 官方一侧拿不到时的原因：优先用接口返回的报错，其次用状态说明 */
const officialUnavailableReason = computed(() => {
    const detail = diffDetail.value
    if (!detail) return ''

    return detail.official_error || (detail.official ? sideMessage(detail.official) : t('officialMissing'))
})

const openCompare = (row: DiffRow) => {
    compareStatus.value = row.status
    compareVisible.value = true
    compareLoading.value = true
    compareError.value = ''
    diffDetail.value = null
    // 上一轮可能停在「展开中」：开关与补发标记都要归零，不然遮罩会一直挂着
    expandLoading.value = false
    replayingExpand = false

    getIntegrityFileDiff({ target: targetKey.value, file: row.file }).then(res => {
        diffDetail.value = (res.data || null) as FileDiffDetail

        // 数据到了不等于画完了：v-code-diff 的比对 + 高亮是同步的重活，
        // 等这一次渲染落地（nextTick）再往下走，否则大文件会"白屏"卡住
        return nextTick()
    }).then(() => {
        // 再留一帧让内容画出来，然后才撤遮罩
        window.requestAnimationFrame(() => {
            compareLoading.value = false
        })
    }).catch((err: any) => {
        compareError.value = err?.msg || t('compareFailed')
        compareLoading.value = false
    })
}

// ==================== 写回 ====================

const restoreVisible = ref(false)
const restoreResult = ref<any>(null)

/** 写回前的确认弹框（后果说明） */
const confirmVisible = ref(false)

/** 选中项按类型拆分：「修改」是被覆盖、「删除」是被恢复，后果不同，得分开讲 */
const checkedModifiedCount = computed(() => checkedRows.value.filter(row => row.status === 'modified').length)
const checkedDeletedCount = computed(() => checkedRows.value.filter(row => row.status === 'deleted').length)

/**
 * 弹框顶部的范围说明
 *
 * ★ 占位符必须用 %x% 这种 vue-i18n 不认识的记号：项目用的是标准 vue-i18n，
 *   文案里的 {x} 会被它当成命名插值，t() 不传参时直接替换成空串，
 *   下面的 replace 就永远匹配不到（界面上会显示成「选中的 个文件」）。
 */
const restoreScopeText = computed(() => t('restoreConfirmTip')
    .replace('%count%', String(checkedRows.value.length))
    .replace('%size%', formatSize(checkedSize.value)))

/** 后果说明：改什么、丢什么、怎么找回、何时生效 */
const consequenceList = computed(() => [
    t('restoreConsequenceOverwrite'),
    t('restoreConsequenceDeleted'),
    t('restoreConsequenceBackup'),
    t('restoreConsequenceLive')
])

const restoreFailedCount = computed(() => restoreResult.value?.failed?.length || 0)

const restoreSummary = computed(() => {
    const result = restoreResult.value
    if (!result) return ''

    // 记号同 restoreScopeText：用 %x%，不能用 {x}（会被 vue-i18n 当插值吃掉）
    return t('restoreSummary')
        .replace('%ok%', String(result.restored?.length || 0))
        .replace('%skip%', String(result.skipped?.length || 0))
        .replace('%fail%', String(result.failed?.length || 0))
})

/**
 * 写回是破坏性操作，绝不直接执行：
 * 先弹「后果说明」弹框（会改什么、会丢什么、怎么找回），用户确认后才走 doRestore。
 */
const openConfirm = () => {
    if (!checkedRows.value.length) return

    confirmVisible.value = true
}

const confirmRestore = () => {
    // 先取快照再关弹框：关弹框会让恢复到列表状态，这里要的是用户刚才确认的那批文件
    const rows = [...checkedRows.value]

    confirmVisible.value = false

    if (!rows.length) return

    doRestore(rows)
}

const doRestore = (rows: DiffRow[]) => {
    restoring.value = true

    restoreIntegrityFiles({
        target: targetKey.value,
        files: rows.map(row => row.file)
    }).then(res => {
        const data = res.data || {}
        restoreResult.value = data
        restoreVisible.value = true

        if (Array.isArray(data.warnings) && data.warnings.length) {
            warnings.value = warnings.value.concat(data.warnings)
        }

        // 写回后不自动重跑检测：结果弹框就是提醒，列表要最新状态由用户点「重新校验」
    }).catch((err: any) => {
        ElMessage.error(err?.msg || t('compareFailed'))
    }).finally(() => {
        restoring.value = false
    })
}

// ==================== 检测 ====================

/**
 * 扫描代号
 *
 * 每次 startCheck 自增；递归分片链在「发下一片之前」与「拿到回包之后」都校验它，
 * 一旦发现自己已被新的扫描取代就立刻停手。
 *
 * ★ 这不是防御性代码，是必需的：调用方（如应用管理页的 openDiff）会先改 target
 *   再改 show，若不加约束就会跑出两条并行的分片链，两边都往 progress.scanned 上累加，
 *   进度会变成「已扫描 614 / 307」这种越界数字；结果列表也会出现重复行。
 */
let scanToken = 0

/** 已收进列表的文件键，杜绝任何重复回包把同一文件塞两次 */
const seenFiles = new Set<string>()

const reset = () => {
    phase.value = 'loading'
    errorMessage.value = ''
    warnings.value = []
    skippedReason.value = ''
    cancelled.value = false
    logs.value = []
    progress.scanned = 0
    progress.total = 0
    diffRows.value = []
    filterType.value = ''
    keyword.value = ''
    seenFiles.clear()
    loggedOnce.clear()

    // 列表滚回顶部：上一轮的滚动位置不该带到新一轮
    scrollListToTop()
}

/**
 * 收尾停留在 100% 的时长（毫秒）
 *
 * 检测一跑完就立刻切走的话，进度条会像「没跑满就消失了」。留这段时间让 100% 被看见，
 * 顺便把最后几行记录（比对完成 / 发现 N 个差异）也露出来。
 * ★ 这次停留是安全的：两态是原地交叉淡入淡出，不会出现「两块内容同时挂在界面上、
 *   把下面的列表顶上去」的问题（那是上一版折叠写法的毛病）。
 */
const FINISH_HOLD_MS = 600

let finishTimer: number | null = null

/**
 * 收尾：先把进度停在 100%，停一下再切到结果态
 *
 * phase 立刻翻到 list：筛选标签与结果列表的分批渲染都看它。
 * 提前翻过去，等真正切过去时列表已经排好版了，切换因此更稳。
 */
const finish = () => {
    // 让进度条停在 100%
    if (progress.total > 0) {
        progress.scanned = progress.total
    }

    phase.value = 'list'

    if (finishTimer !== null) {
        window.clearTimeout(finishTimer)
    }

    finishTimer = window.setTimeout(() => {
        finishTimer = null
        running.value = false
    }, FINISH_HOLD_MS)
}

/** 后端明细 → 列表行（顺带去重：同一文件在同一轮里只应出现一次） */
const appendDetails = (details: any[]) => {
    const fresh: DiffRow[] = []

    details.forEach((item: any) => {
        if (!item || !item.file || seenFiles.has(item.file)) return

        seenFiles.add(item.file)
        fresh.push({
            file: item.file,
            status: item.status,
            size: item.size || 0,
            hashLocal: item.hash_local || '',
            hashBaseline: item.hash_baseline || '',
            // 默认只勾选「修改」：删除项写回等于把文件恢复出来，属于更大的动作，交给用户显式勾
            checked: item.status === 'modified'
        })
    })

    if (fresh.length) {
        diffRows.value = diffRows.value.concat(fresh)
    }
}

/** 兼容旧结构（后端未升级、只回 changed / deleted 时） */
const appendLegacy = (data: any) => {
    const details: any[] = []

    Object.keys(data.changed || {}).forEach(file => {
        details.push({ file, status: data.changed[file], size: 0, hash_local: '', hash_baseline: '' })
    })
    ;(data.deleted || []).forEach((file: string) => {
        details.push({ file, status: 'deleted', size: 0, hash_local: '', hash_baseline: '' })
    })

    appendDetails(details)
}

// ==================== 流式检测（SSE，默认关闭）====================

/**
 * 是否使用流式推送（SSE）推进度
 *
 * ★ 默认关闭，进度改由「分片轮询」推进（一个请求一个响应，天然不会被中间层攒住）。
 *
 * 关闭的原因（实测，不是猜测）：
 *   服务端按步长连续推的帧很小（一帧 ~80 字节），一次四千文件的检测总共也就 30KB 左右，
 *   跑不过 Apache + mod_fcgid 那层 64KB 输出缓冲 —— 整段流会被扣在缓冲里，
 *   一直攒到脚本结束才一次性吐给浏览器。界面表现就是「进度停在 20/4000，
 *   然后直接跳到 4000/4000」：仅有的那两帧是跟着建流填充帧一起漏出来的，其余全在最后。
 *
 *   这个现象**无法可靠检测、也无法在 PHP 侧规避**：
 *     - 缓冲层可能是 mod_fcgid / nginx / gzip / 任意反代，容量与时机都不同；
 *     - 服务端能做的只有「把字节量堆到缓冲上限以上」，那意味着为了几次进度更新
 *       白传几百 KB 甚至 MB；
 *     - 客户端断开后服务端也察觉不到（写不出去就没错误），那一轮扫描会白跑完。
 *   所以默认走轮询，把「能不能实时看到进度」这件事变成确定的。
 *
 * 如果你的部署确认能实时下发（nginx 且 X-Accel-Buffering: no 生效，或已调小
 * FcgidOutputBufferSize），把它改成 true 即可用回实时进度与更细的日志；
 * 前端仍会盯着链路，一旦发现被攒住会自动退回轮询（见 STREAM_STALL_TIMEOUT）。
 */
const USE_STREAM = false

/**
 * 建流后「第一帧」的容忍时长（毫秒）
 *
 * 服务端一建流就先推一帧 log(baseline)，链路正常时几百毫秒就到；
 * 迟迟收不到，只可能是中间层把响应攒住了。
 */
const STREAM_FIRST_EVENT_TIMEOUT = 6000

/**
 * 扫描阶段「无数据」的容忍时长（毫秒）
 *
 * 开启流式后，扫描期间帧是按步长连续推的（大目标每 10 个文件一行），正常情况下
 * 几十毫秒就有一帧。静默超过这个时间就判定链路被攒住，退回轮询。
 *
 * ★ 时限必须远小于「一次检测的总耗时」才有意义：被攒住时最后一帧之后就是长久的静默，
 *   若时限比总耗时还长，看门狗永远来不及响（那正是「等 8 秒，可整个扫描才 4 秒」的坑）。
 */
const STREAM_STALL_TIMEOUT = 1500

/**
 * 「这台浏览器上流式推送不可用」的开关
 *
 * 判断依据只有一条：链路被攒住（见 STREAM_STALL_TIMEOUT）。
 * ★ 必须记住：客户端断开后服务端并不能立刻察觉（输出被攒着、写不出错就检测不到断开），
 *   那一轮扫描会一直跑完。不记住的话每次打开都要白跑一轮。
 * ★ 只在「被攒住」时记：网络抖动导致的 onerror 是暂时的，不该永久降级。
 */
const STREAM_DISABLED_KEY = 'integrity_stream_disabled'

let stream: EventSource | null = null
/** 链路看门狗：到期仍未收到帧就降级 */
let streamTimer: number | null = null
/** 是否已进入「按步长连续推帧」的扫描阶段（决定看门狗用哪个时限） */
let streamScanning = false
/** 本轮是否已正常收尾：收尾后服务端会关掉连接，紧接着来的 onerror 不该再触发降级 */
let streamFinished = false

const clearStreamTimer = () => {
    if (streamTimer !== null) {
        window.clearTimeout(streamTimer)
        streamTimer = null
    }
}

/**
 * 给看门狗重新计时
 *
 * ★ 只在两个阶段设表：「建流后等第一帧」与「扫描开始后等下一帧」。
 *   两者之间的 prepare（取/下载官方清单）可能耗时很久，那段时间没帧是正常的，
 *   设表会把一次正常的长清单下载误判成链路故障。
 */
const armStreamTimer = (token: number, timeout: number) => {
    clearStreamTimer()

    streamTimer = window.setTimeout(() => {
        streamTimer = null

        if (token !== scanToken || streamFinished) return

        // 链路被攒住：记住它，后续扫描直接走分片轮询，不再白扫一轮
        degrade(token, true)
    }, timeout)
}

/**
 * 收到一帧数据：按所处阶段重置看门狗
 *
 * ★ 只看 log 帧：它是「进度」的载体，建流即推 baseline、扫描期间按步长连续推 scanning。
 *   其余事件（meta / warning / detail / done）都是伴随帧，出现频率没有保证，
 *   拿它们当心跳会把一次正常的长清单下载误判成链路故障。
 */
const onStreamFrame = (token: number, name: string, data: any) => {
    if (name !== 'log') return

    const stage = data?.stage

    // 清单就绪（ready）之后就是按步长连续推帧了，从此改用「扫描阶段」时限
    if (stage === 'ready' || stage === 'scanning') {
        streamScanning = true
        armStreamTimer(token, STREAM_STALL_TIMEOUT)

        return
    }

    // baseline 之后是 prepare（取/下载官方清单），可能很久 —— 这段时间撤表，别误判
    if (streamScanning || stage === 'baseline') {
        clearStreamTimer()

        return
    }

    // 还没收到任何 log 帧：按「等第一帧」时限盯着
    armStreamTimer(token, STREAM_FIRST_EVENT_TIMEOUT)
}

/** 停掉这一轮在途的东西：推送连接、链路看门狗，以及「停在 100%」的收尾等待 */
const stopStream = () => {
    clearStreamTimer()

    // ★ 收尾等待也要清：换目标 / 关弹框时若不清，那次切换会落到下一轮检测头上
    if (finishTimer !== null) {
        window.clearTimeout(finishTimer)
        finishTimer = null
    }

    if (stream) {
        stream.close()
        stream = null
    }
}

/**
 * 降级到分片模式
 *
 * 触发条件：浏览器不支持 EventSource / 连接报错 / 链路被攒住。
 * 进度与执行记录照常走，用户不用重新点一次检测。
 *
 * @param remember 是否记住「这台浏览器收不到实时帧」（见 STREAM_DISABLED_KEY）
 */
const degrade = (token: number, remember = false) => {
    if (token !== scanToken) return

    stopStream()

    if (remember) {
        storage.set({ key: STREAM_DISABLED_KEY, data: true })
    }

    pushLogOnce('fallback')

    // 分片是从头扫的，已推给界面的进度要归零重算（明细有 seenFiles 兜底，不会重复）
    progress.scanned = 0
    startChunk(token)
}

/**
 * 流式检测
 *
 * 服务端一边跑一边推：meta（目标信息）、log（进度与关键节点）、detail（差异明细）、
 * done / failed（收尾）。链路上有帧流动（而不是「连上了」）才算这条通道可用，
 * 判定与降级见 onStreamFrame / armStreamTimer。
 */
const startStream = (token: number) => {
    try {
        stream = new EventSource(getIntegrityStreamUrl({ target: targetKey.value }))
    } catch (e) {
        // 地址非法 / 浏览器不支持：直接走分片
        degrade(token)
        return
    }

    const connection = stream

    streamScanning = false
    // 建流后先按「等第一帧」计时（服务端建流即推 log(baseline)）
    armStreamTimer(token, STREAM_FIRST_EVENT_TIMEOUT)

    /**
     * 事件名 → 处理器；坏帧直接忽略，不让它打断整轮
     *
     * ★ 只有收到**真实事件**才算链路活着（onStreamFrame 会重置看门狗）。
     *   不认 onopen：服务端为顶开输出缓冲而推的那帧 70KB 注释不产生事件，
     *   却足以让连接进入 open —— 认它就会把「被攒住」误判成「链路正常」。
     */
    const bind = (name: string, handler: (data: any) => void) => {
        connection.addEventListener(name, (event: Event) => {
            if (token !== scanToken) return

            let data: any = {}
            try {
                data = JSON.parse((event as MessageEvent).data)
            } catch (e) {
                data = {}
            }

            onStreamFrame(token, name, data)

            handler(data)
        })
    }

    bind('meta', (data: any) => {
        if (data.target_name) targetInfo.name = String(data.target_name)
        if (data.version) targetInfo.version = String(data.version)
        if (data.total !== undefined) progress.total = Number(data.total || 0)
    })

    // 进度与关键节点：文案在前端翻译（见 logText）
    bind('log', (data: any) => {
        if (data.stage === 'scanning') {
            progress.scanned = Number(data.scanned || 0)
            if (data.total !== undefined) progress.total = Number(data.total || 0)
            // 进度行本来就该有很多条，不参与「一轮一次」的去重
            pushLog(data.stage, data)

            return
        }

        // 关键节点（baseline / ready 等）一轮只记一次：降级时两条通道会各报一次
        pushLogOnce(data.stage, data)
    })

    // 服务端产生的告警（规则降级、两端规则版本不一致等）
    bind('warning', (data: any) => addWarnings([data.text]))

    // 差异明细一批一条：边跑边看，不用等整轮结束
    bind('detail', (data: any) => {
        if (Array.isArray(data.rows)) {
            appendDetails(data.rows)
        }
    })

    bind('done', (data: any) => {
        streamFinished = true
        stopStream()

        if (data.skipped) {
            skippedReason.value = String(data.skip_reason || '')
            addWarnings([skippedReason.value])
            // 跳过不等于「比对完成」：这一轮根本没比对，别在记录里写「未发现差异」
            finish()
            return
        }

        progress.scanned = Number(data.scanned ?? progress.scanned)
        progress.total = Number(data.total ?? progress.total)
        pushLogOnce('finish', { diff: data.diff ?? diffRows.value.length })
        finish()
    })

    bind('failed', (data: any) => {
        streamFinished = true
        stopStream()
        errorMessage.value = String(data.message || '') || t('checkFailed')
        finish()
    })

    connection.onerror = () => {
        // 正常收尾后连接必然被关掉，此时也会来一次 error —— 那一轮已经结束了
        if (token !== scanToken || streamFinished) return

        degrade(token)
    }
}

// ==================== 分片检测（默认通道）====================

/**
 * 分片递归检测：与「代码完整性检测」页面同一套逻辑，直到 done 为止
 *
 * ★ 现在是默认通道（缘由见 USE_STREAM）：每个分片是一个完整的 HTTP 响应，
 *   进度随响应回来，不会被任何中间层的输出缓冲攒住 —— 这是它比流式更重要的地方。
 *   粒度由后端 config('integrity.chunk_size') 决定（默认 500 个文件一片）。
 */
const startChunk = (token: number) => {
    // 走 pushLogOnce：降级前 SSE 那一段可能已经记过这一行
    pushLogOnce('baseline')

    const runChunk = (cursor: number) => {
        // 已被更新的扫描取代：不再发请求
        if (token !== scanToken) return

        checkIntegrity({ target: targetKey.value, cursor }).then(res => {
            // 回包时再校验一次：旧链的结果一律丢弃（既不累加进度，也不追加明细）
            if (token !== scanToken) return

            const data = res.data || {}
            progress.total = data.total || progress.total

            if (Array.isArray(data.warnings) && data.warnings.length) {
                addWarnings(data.warnings)
            }

            // 云端没有该目标的包体：后端把原因放在 skip_reason，以告警形式展示，本轮到这就结束
            if (data.skipped) {
                skippedReason.value = String(data.skip_reason || '')
                addWarnings([skippedReason.value])
                // 跳过不等于「比对完成」：这一轮根本没比对，别在记录里写「未发现差异」
                finish()
                return
            }

            // 清单是第一次回包时才确定的，这里补一行「清单就绪」
            // （降级前若已记过，pushLogOnce 不会再记第二条）
            pushLogOnce('ready', { total: data.total })

            progress.scanned += data.scanned || 0

            if (Array.isArray(data.details) && data.details.length) {
                appendDetails(data.details)
            } else {
                appendLegacy(data)
            }

            pushLog('scanning', { scanned: progress.scanned, total: data.total })

            if (data.done) {
                pushLogOnce('finish', { diff: diffRows.value.length })
                finish()
            } else {
                runChunk(data.next_cursor)
            }
        }).catch((err: any) => {
            if (token !== scanToken) return

            errorMessage.value = err?.msg || t('checkFailed')
            finish()
        })
    }

    runChunk(0)
}

/**
 * 打开弹框 / 切换目标都重新检测一次
 *
 * 优先走 SSE（打开就能看到进度与执行记录），连不上或首帧超时会自动降级到分片接口。
 */
const startCheck = () => {
    const token = ++scanToken

    stopStream()
    streamFinished = false
    reset()

    running.value = true
    pushLogOnce('start')

    // 默认走分片轮询（缘由见 USE_STREAM）：一个请求一个响应，不会被中间层攒住。
    // 流式推送只在显式开启且没有历史「攒住」记录时才用。
    if (!USE_STREAM
        || typeof EventSource === 'undefined'
        || storage.get(STREAM_DISABLED_KEY) === true) {
        startChunk(token)
        return
    }

    startStream(token)
}

/**
 * 取消检测
 *
 * 连接与在途分片全部作废（scanToken 自增），手上那半份结果不作数，
 * 所以结果区显示「已取消」而不是差异列表 —— 半份结果当成结论会误导人。
 */
const cancelCheck = () => {
    // 已经跑完了（正停在 100% 的那几百毫秒里）：这一下只是「别等了，现在切过去」，
    // 不能把一次跑完的检测标成「已取消」—— stopStream 会清掉收尾等待，running 得自己摘
    if (phase.value === 'list') {
        stopStream()
        running.value = false

        return
    }

    scanToken++
    stopStream()
    running.value = false
    cancelled.value = true
    pushLogOnce('cancelled')
    phase.value = 'list'
}

/** 取目标的名称与版本（复用检测接口，它已包含框架与全部插件） */
const loadTargetInfo = () => {
    getIntegrityTargets().then(res => {
        const item = (res.data || []).find((row: any) => row.key === targetKey.value)
        if (item) {
            targetInfo.name = item.name
            targetInfo.version = item.version || ''
        }
    }).catch(() => {
        // 拿不到目标信息不影响检测，名称回落到 target 本身
    })
}

/**
 * 校验前检测通过：切到第二步（文件差异比对）
 *
 * ★ 延后一个 tick 再切：面板是在自己的定时器回调里 emit('next')，此刻它可能仍有
 *   渲染在途，同步卸载会让 Vue 去 patch 已销毁的 vnode。
 */
const onPreCheckPassed = () => {
    // 用户可能在检测跑完前就关掉了弹框：此时不该再起一轮扫描
    if (!props.show) return

    nextTick(() => {
        preChecking.value = false
        startCheck()
    })
}

/**
 * 重新校验：让面板原地重跑一轮
 *
 * 按钮保持可见并显示 loading（面板重跑期间会清掉finished，按钮组会退回「检测中」的样子）。
 */
const retryPreCheck = async () => {
    if (checkRetrying.value) return

    checkRetrying.value = true
    try {
        await preCheckRef.value?.retry()
    } finally {
        checkRetrying.value = false
    }
}

/** 重跑开始：把底部按钮退回「检测中」状态 */
const onPreCheckRetry = () => {
    checkFinished.value = false
    checkPassed.value = false
}

/**
 * 打开弹框 / 切换目标都要重新走一遍流程。
 *
 * ★ 必须合成一个 watch，不能拆成两个：
 *   调用方是「先改 target、再改 show」两步（同一个 tick 内），拆开后两个 watch
 *   会在同一次刷新里各触发一遍 → 两条扫描链并行累加进度（614 / 307 就是这么来的）。
 *   合成一个 watch 后，同一轮变更只会触发一次。
 *
 * ★ 这里只做第一步（检测）的前置工作，不再直接 startCheck()：
 *   比对由检测通过后的 onPreCheckPassed() 发起。
 */
watch([() => props.show, () => props.target], ([show, target]) => {
    if (!show || !target) return

    targetInfo.icon = props.icon || ''
    loadTargetInfo()
    // 每次都从第一步开始：上一轮检测通过与否，不该影响这一次
    preChecking.value = true
    checkRunKey.value++
    // 底部按钮回到「检测中」（面板会重新跑一轮，结果出来前不该出现「重新校验」）
    checkFinished.value = false
    checkPassed.value = false
})

const onClosed = () => {
    // 关弹框＝这轮检测作废：断开推送流，并让在途的分片回包失效（scanToken 自增）
    scanToken++
    // ★ 这里不重置 preChecking：置回 true 会让校验面板在弹框已关闭时重新挂载并跑检测。
    //   下次打开由 watch 重置并由 checkRunKey 触发面板重挂载。
    streamFinished = true
    stopStream()
    running.value = false

    diffRows.value = []
    warnings.value = []
    errorMessage.value = ''
    logs.value = []
    diffDetail.value = null
    compareVisible.value = false
    restoreVisible.value = false
    confirmVisible.value = false

    // 关弹框时可能还停在「展开中」：遮罩与补发标记一并归零，
    // 否则在途的那两个 rAF 会拿着旧状态落到下一轮
    expandLoading.value = false
    replayingExpand = false
}
</script>

<style lang="scss" scoped>
/**
 * 两态交叉淡入淡出（进度 + 记录 ⇄ 结果）
 *
 * 两态在同一位置、同时在场：旧态淡出、新态淡入，看起来就是「化」过去的。
 * 加一点方向感（旧态上移、新态从下往上）比纯透明度更能表达「进入下一阶段」；
 * ★ 两态在模板里是绝对定位的，所以这点位移不会推动别的内容 —— 弹框尺寸全程不变。
 */
.cross-fade-enter-active,
.cross-fade-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.cross-fade-enter-from {
    opacity: 0;
    transform: translateY(6px);
}

.cross-fade-leave-to {
    opacity: 0;
    transform: translateY(-6px);
}

/**
 * 差异列表的行
 *
 * 行是「虚拟滚动」渲染出来的：绝对定位在撑到总行高的占位层里、行高固定，
 * 具体位置由 :style 的 translateY 给出（行高见 ROW_HEIGHT）。
 */
.diff-row {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    align-items: center;
    gap: 8px;
    padding: 0 8px;
    border-bottom: 1px solid #f2f3f5;
    font-size: 12px;
}

/**
 * 状态标签
 *
 * 默认标签是 24px 高、左右内边距 9px，在密集清单里显得笨重；这里压到 18px 高。
 * ★ 选择器带上 .diff-row 提高一级优先级：el-tag 自身也有 height / font-size，
 *   同优先级时谁生效取决于样式表先后顺序，不能指望。
 */
.diff-row .diff-tag {
    --el-tag-font-size: 11px;

    flex-shrink: 0;
    height: 18px;
    padding: 0 5px;
    font-size: 11px;
}

.diff-name {
    font-size: 12px;
    line-height: 18px;
    color: #303133;
}

/**
 * 大小 + 哈希：同属「文件指纹」，两列贴紧成一个组
 *
 * 行本身的列间距是 8px，这两个若各自当一个槽位会显得松散；
 * 组内单独收紧，又不影响与右边对比按钮之间的距离。
 */
.diff-col-group {
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    gap: 3px;
}

/**
 * 右侧三列：大小 / 哈希 / 对比
 *
 * 每列定宽，行与行之间严格对齐；列宽按内容量取最小值（不再为右对齐留大片空白），
 * 让 880px 宽的弹框把绝大部分宽度留给文件名。数值列整体靠右。
 */
.diff-col {
    flex-shrink: 0;
    overflow: hidden;
    font-size: 12px;
    line-height: 18px;
    color: #909399;
    white-space: nowrap;
    text-overflow: ellipsis;

    &--size {
        width: 58px;
        text-align: right;
    }

    &--hash {
        width: 62px;
        text-align: right;
        font-size: 11px;
    }

    &--action {
        display: flex;
        width: 22px;
        align-items: center;
        justify-content: flex-end;

        /* 图标按钮：去掉默认内边距，避免在定宽槽位里把图标挤歪 */
        :deep(.el-button) {
            width: 22px;
            height: 22px;
            margin: 0;
            padding: 0;
        }

        /* 14px：DocumentCopy 里那两道「文本行」比较细，再小就糊成一团了 */
        :deep(.el-icon) {
            font-size: 14px;
        }
    }
}

/**
 * 单文件比对弹框右上角的「本地 / 官方」图例
 *
 * 两枚小徽标夹一个箭头：左侧中性灰（对应左栏的本地内容）、右侧主题色浅底
 * （对应右栏的官方内容），高度与弹框里其它小标签同一套尺子。
 */
.compare-legend {
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    gap: 5px;
    font-size: 11px;

    &__item {
        display: inline-flex;
        height: 18px;
        align-items: center;
        padding: 0 7px;
        border-radius: 999px;
        font-weight: 500;
        white-space: nowrap;
    }

    &__item--local {
        color: #606266;
        background: var(--el-fill-color-light);

        /* 用内阴影画发丝边：1px 边框在这种小圆角上容易显得毛糙 */
        box-shadow: inset 0 0 0 1px var(--el-border-color-lighter);
    }

    &__item--official {
        color: var(--el-color-primary);
        background: var(--el-color-primary-light-9);
    }

    &__arrow {
        font-size: 11px;
        color: var(--el-text-color-placeholder);
    }
}

.diff-search-input {
    :deep(.el-input__wrapper) {
        border-radius: 999px;
    }
}

.restore-result {
    &__summary {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 12px 14px;
        border-radius: 8px;
        font-size: 13px;
        line-height: 20px;

        &.is-warning {
            background: #fdf6ec;
            color: #e6a23c;
        }

        &.is-success {
            background: var(--el-color-success-light-9);
            color: var(--el-color-success);
        }
    }

    &__summary-icon {
        flex-shrink: 0;
        font-size: 16px;
    }

    &__summary-text {
        min-width: 0;
        font-weight: 500;
    }

    &__backup {
        margin-top: 12px;
        font-size: 12px;
        line-height: 18px;
        color: #909399;
        word-break: break-all;
    }

    // 写回后不自动重跑检测，这里提醒用户去哪里看最新状态
    &__refresh {
        margin-top: 10px;
        font-size: 12px;
        line-height: 18px;
        color: #909399;
    }

    &__section {
        margin-top: 16px;
    }

    &__section-title {
        margin-bottom: 8px;
        font-size: 13px;
        line-height: 20px;
        color: #909399;

        &.is-failed {
            color: #e6a23c;
        }
    }

    &__list {
        max-height: 180px;
        overflow-y: auto;
        border: 1px solid #ebeef5;
        border-radius: 8px;
    }

    &__item {
        padding: 10px 12px;
        border-bottom: 1px solid #f2f3f5;

        &:last-child {
            border-bottom: none;
        }
    }

    &__file {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 13px;
        line-height: 20px;
        color: #303133;
    }

    &__msg {
        margin-top: 2px;
        font-size: 12px;
        line-height: 18px;
        color: #909399;

        &.is-failed {
            color: #f56c6c;
        }
    }
}
</style>

<style lang="scss">
.restore-result-dialog.el-dialog {
    border-radius: 12px;
}

.restore-result-dialog .el-dialog__header {
    margin-right: 0;
    padding-bottom: 12px;
}

.restore-result-dialog .el-dialog__body {
    padding-top: 4px;
    padding-bottom: 8px;
}

.restore-result-dialog .el-dialog__footer {
    padding-top: 12px;
}
</style>
