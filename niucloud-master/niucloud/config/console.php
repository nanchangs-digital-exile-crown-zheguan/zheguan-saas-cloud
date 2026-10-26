<?php
// +----------------------------------------------------------------------
// | 控制台配置
// +----------------------------------------------------------------------
use core\dict\DictLoader;
$data = [
    // 指令定义
    'commands' => [
        'addon:install' => 'app\command\addon\Install',
        'addon:uninstall' => 'app\command\addon\Uninstall',
        //逆推清除各端插件安装痕迹，还原纯净框架
        'addon:purify' => 'app\command\addon\Purify',
        'menu:refresh' => 'app\command\Menu',
        //消息队列 自定义命令
        'queue:work' => 'app\command\queue\Queue',
        'queue:restart' => 'app\command\queue\Queue',
        'queue:listen' => 'app\command\queue\Queue',
        //计划任务 自定义命令
        'cron:schedule' => 'app\command\schedule\Schedule',
        //wokrerman的启动停止和重启
        'workerman' => 'app\command\workerman\Workerman',
        //重置管理员密码
        'reset:password' => 'app\command\Resetpassword',
        'refresh:area' => 'app\command\RefreshAreaCommand',
    ],
];
return (new DictLoader("Console"))->load($data);
