<?php
declare (strict_types=1);

namespace app\command\addon;

use app\service\core\addon\CoreAddonPurifyService;
use think\console\Command;
use think\console\Input;
use think\console\input\Option;
use think\console\Output;

/**
 * 纯净框架逆推命令
 *
 * 用法：
 *   php think addon:purify                       # dry-run，仅输出清理计划
 *   php think addon:purify --apply               # 实际执行清理
 *   php think addon:purify --addon=pintuan,shop  # 仅处理指定插件
 *   php think addon:purify --apply --orphans     # 一并删除孤儿目录
 *   php think addon:purify --apply --no-backup   # 跳过备份
 *   php think addon:purify --json                # 输出 JSON 报告
 */
class Purify extends Command
{
    protected function configure()
    {
        $this->setName('addon:purify')
            ->addOption('addon', 'a', Option::VALUE_OPTIONAL, '限定插件 key，多个用英文逗号分隔')
            ->addOption('apply', null, Option::VALUE_NONE, '实际执行清理（默认仅 dry-run 预览）')
            ->addOption('orphans', null, Option::VALUE_NONE, '一并删除无插件源码对应的孤儿目录')
            ->addOption('no-backup', null, Option::VALUE_NONE, '执行前不备份')
            ->addOption('json', null, Option::VALUE_NONE, '以 JSON 输出报告')
            ->setDescription('逆推清除各端插件安装痕迹，还原纯净框架');
    }

    protected function execute(Input $input, Output $output)
    {
        $filter = [];
        $addon_option = $input->getOption('addon');
        if (is_string($addon_option) && trim($addon_option) !== '') {
            $filter = array_values(array_filter(array_map('trim', explode(',', $addon_option))));
        }

        $apply = (bool) $input->getOption('apply');
        $include_orphans = (bool) $input->getOption('orphans');
        $backup = !$input->getOption('no-backup');
        $json = (bool) $input->getOption('json');

        $service = new CoreAddonPurifyService();

        if (!$apply) {
            $plan = $service->scan($filter);
            if ($json) {
                $output->writeln(json_encode([
                    'mode' => 'dry-run',
                    'summary' => $service->summarize($plan),
                    'plan' => $plan,
                ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
                return;
            }
            $this->renderPlan($output, $plan, $service, $include_orphans);
            $output->writeln('');
            $output->info('以上为预览（dry-run）。确认无误后执行：php think addon:purify --apply');
            return;
        }

        $report = $service->purify($filter, $include_orphans, $backup);
        if ($json) {
            $output->writeln(json_encode($report, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
            return;
        }
        $this->renderReport($output, $report);
    }

    /**
     * 渲染清理计划
     */
    protected function renderPlan(Output $output, array $plan, CoreAddonPurifyService $service, bool $include_orphans)
    {
        $summary = $service->summarize($plan);

        $output->writeln('===== 纯净框架逆推 · 扫描计划（dry-run） =====');
        $output->writeln('待清理插件：' . $summary['addon_count'] . ' 个');
        if (!empty($plan['addons'])) {
            $output->writeln('  ' . implode(', ', $plan['addons']));
        }

        // 各端待删目录
        $by_port = [];
        foreach ($plan['dirs'] as $item) {
            if (!$item['exist']) continue;
            $by_port[ $item['port'] ][] = $item['rel'];
        }
        $output->writeln('');
        $output->writeln('----- 待删除目录（各端） -----');
        if (empty($by_port)) {
            $output->writeln('  （无）');
        }
        foreach ($by_port as $port => $items) {
            $output->writeln("【{$port}】 " . count($items) . ' 个');
            foreach ($items as $rel) {
                $output->writeln('  - ' . $rel);
            }
        }

        // 孤儿目录
        $orphans = array_values(array_filter($plan['orphans'], fn($item) => $item['exist']));
        $output->writeln('');
        $output->writeln('----- 孤儿目录（无对应插件源码） -----');
        if (empty($orphans)) {
            $output->writeln('  （无）');
        }
        foreach ($orphans as $item) {
            $output->writeln('  ! ' . $item['rel'] . ($include_orphans ? '（将删除）' : '（仅提示，加 --orphans 才删除）'));
        }

        // 待重建的框架文件
        $output->writeln('');
        $output->writeln('----- 待重建的框架自有文件 -----');
        foreach ($plan['generated'] as $gen) {
            $mark = $gen['exist'] ? '存在' : '不存在';
            $output->writeln('  - [' . $gen['type'] . '] ' . $gen['rel'] . "（{$mark}）");
        }

        // 依赖候选
        $output->writeln('');
        $output->writeln('----- 依赖人工确认（只识别不修改） -----');
        foreach ($plan['depend'] as $dep) {
            $output->writeln('  - ' . $dep['file'] . ' ← ' . $dep['source'] . '：' . $dep['package_count'] . ' 个依赖');
            if (!empty($dep['packages'])) {
                $output->writeln('      ' . implode(', ', array_keys($dep['packages'])));
            }
        }
    }

    /**
     * 渲染清理结果
     */
    protected function renderReport(Output $output, array $report)
    {
        $output->writeln('===== 纯净框架逆推 · 执行结果 =====');
        if (!empty($report['backup_dir'])) {
            $output->writeln('备份目录：' . $report['backup_dir']);
        }
        $output->writeln('已删除目录：' . ($report['deleted_dir_count'] ?? 0) . ' 个，文件：' . ($report['deleted_file_count'] ?? 0) . ' 个');
        foreach ($report['deleted_dirs'] as $item) {
            $output->writeln('  - [' . $item['port'] . '] ' . $item['rel'] . '（' . $item['files'] . ' 文件）');
        }

        $output->writeln('');
        $output->writeln('重建的框架文件：');
        if (empty($report['rebuilt_files'])) {
            $output->writeln('  （无）');
        }
        foreach ($report['rebuilt_files'] as $rel) {
            $output->writeln('  - ' . $rel);
        }

        if (!empty($report['orphan_report'])) {
            $output->writeln('');
            $output->writeln('孤儿目录（未删除，需人工确认）：');
            foreach ($report['orphan_report'] as $item) {
                $output->writeln('  ! ' . $item['rel']);
            }
        }

        $output->writeln('');
        $output->writeln('依赖人工确认（未修改）：');
        foreach ($report['depend'] as $dep) {
            $output->writeln('  - ' . $dep['file'] . '：' . $dep['package_count'] . ' 个依赖');
            if (!empty($dep['packages'])) {
                $output->writeln('      ' . implode(', ', array_keys($dep['packages'])));
            }
        }

        $output->writeln('');
        $output->info('清理完成。依赖文件未做修改，请按上方清单人工核对各端 package.json / composer.json。');
    }
}
