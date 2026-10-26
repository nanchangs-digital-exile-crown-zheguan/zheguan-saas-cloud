<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------
namespace core\dict;


/**
 * 开放平台接口清单
 *
 * 汇聚核心与插件的开放接口声明：
 * - 核心清单：app/dict/openapi/*.php（按端拆分：admin.php 平台端、site.php 店铺端）
 * - 插件清单：addon/{key}/app/dict/openapi/*.php
 *
 * 同名分组会自动合并 items，所以同一分组可以分散在多个文件里维护。
 *
 * 一份清单同时驱动：路由注册、授权校验、管理端可授权接口树、接口说明。
 *
 * Class OpenApi
 * @package core\dict
 */
class OpenApi extends BaseDict
{
    /**
     * 加载开放接口清单
     * @param array $data
     * @return array
     */
    public function load(array $data = [])
    {
        $files = [];

        // 核心清单
        $core_dir = $this->getDictPath() . 'openapi';
        if (is_dir($core_dir)) {
            $core_files = glob($core_dir . DIRECTORY_SEPARATOR . '*.php');
            if (!empty($core_files)) {
                sort($core_files);
                $files = array_merge($files, $core_files);
            }
        }

        // 插件清单
        $addons = $this->getLocalAddons();
        foreach ($addons as $addon) {
            $addon_dir = $this->getAddonDictPath($addon) . 'openapi';
            if (!is_dir($addon_dir)) continue;

            $addon_files = glob($addon_dir . DIRECTORY_SEPARATOR . '*.php');
            if (empty($addon_files)) continue;

            sort($addon_files);
            foreach ($addon_files as $addon_file) {
                $files[] = $addon_file;
            }
        }

        // 合并清单（同名分组会合并 items，插件可对核心分组做补充）
        $api_list = [];
        foreach ($this->loadFiles($files) as $config) {
            if (!is_array($config)) continue;
            foreach ($config as $group_key => $group) {
                if (isset($api_list[ $group_key ]) && isset($group[ 'items' ])) {
                    $api_list[ $group_key ][ 'items' ] = array_merge($api_list[ $group_key ][ 'items' ] ?? [], $group[ 'items' ]);
                } else {
                    $api_list[ $group_key ] = $group;
                }
            }
        }

        return $api_list;
    }
}
