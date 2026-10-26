<?php
declare (strict_types=1);

namespace app\command\addon;

use app\service\core\addon\CoreAddonInstallService;
use think\console\Command;
use think\console\Input;
use think\console\input\Option;
use think\console\Output;

class Install extends Command
{
    protected function configure()
    {
        // 指令配置
        $this->setName('addon:install')
            ->addArgument('addon', Option::VALUE_REQUIRED)
            ->addOption('step', 's', Option::VALUE_REQUIRED)
            ->setDescription('the addon install command');
    }

    protected function execute(Input $input, Output $output)
    {
        $addon = $input->getArgument('addon');
        if (!is_string($addon) || $addon === '') {
            $output->writeln("Command failed MISSING_ADDON_ARGUMENT");
            return;
        }

        $step = $input->getOption('step');
        if (!is_string($step) || $step === '') {
            $output->writeln("Command failed MISSING_STEP_OPTION");
            return;
        }

        $instance = CoreAddonInstallService::instance($addon);

        try {
            $instance->$step();
            $output->writeln("Command executed successfully");
        } catch ( \Throwable $e ) {
            $output->writeln("Command failed " . $e->getMessage());
        }
    }
}
