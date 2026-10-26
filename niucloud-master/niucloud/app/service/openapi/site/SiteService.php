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

namespace app\service\openapi\site;

use app\dict\site\SiteDict;
use app\model\site\Site;
use core\base\BaseOpenapiService;
use core\exception\CommonException;
use think\facade\Cache;
use think\facade\Db;

/**
 * 开放平台 - 平台端站点服务
 *
 * 说明：开放平台只复用 service/core 的端无关服务，这里按对外契约自行实现站点查询与状态变更，
 * 不引入 admin 端口的服务。
 *
 * 注意：站点模型 Site 将 expire_time 声明为 timestamp 类型，读取时会转成日期字符串，
 * 为保证对外返回一致的时间戳，这里统一使用原生查询（Db）读取。
 *
 * Class SiteService
 * @package app\service\openapi\site
 */
class SiteService extends BaseOpenapiService
{
    /**
     * 站点缓存 tag 前缀（与 admin 端 app/service/admin/site/SiteService.php 保持一致）
     */
    private const SITE_CACHE_TAG = 'site_cash';

    /**
     * 菜单缓存 tag（与 admin 端 app/service/admin/sys/MenuService.php 保持一致）
     */
    private const MENU_CACHE_TAG = 'menu_cache';

    public function __construct()
    {
        parent::__construct();
        $this->model = new Site();
    }

    /**
     * 站点列表（排除平台站点，仅返回业务站点）
     * @param array $where
     * @return array
     */
    public function getPage(array $where = []): array
    {
        $query = Db::name('site')
            ->where([ [ 'site_id', '<>', 0 ], [ 'app_type', '<>', 'admin' ] ])
            ->field('site_id, site_name, app_type, status, group_id, site_domain, logo, icon, `desc`, create_time, expire_time');

        if (!empty($where[ 'site_name' ])) {
            $query->whereLike('site_name', '%' . $this->model->handelSpecialCharacter($where[ 'site_name' ]) . '%');
        }
        if (isset($where[ 'status' ]) && $where[ 'status' ] !== '') {
            $query->where('status', (int) $where[ 'status' ]);
        }

        $query->order('create_time desc');

        $list = $this->pageQuery($query);

        $status_list = SiteDict::getStatus();
        foreach ($list[ 'data' ] as &$item) {
            $item[ 'status' ] = (int) $item[ 'status' ];
            $item[ 'create_time' ] = (int) $item[ 'create_time' ];
            $item[ 'expire_time' ] = (int) $item[ 'expire_time' ];
            $item[ 'status_name' ] = $status_list[ $item[ 'status' ] ] ?? '';
        }
        unset($item);

        return $list;
    }

    /**
     * 启用 / 关闭站点
     * @param int $site_id
     * @param int $status SiteDict::ON 启用 / SiteDict::CLOSE 关闭
     * @return bool
     */
    public function setStatus(int $site_id, int $status): bool
    {
        if ($site_id <= 0) throw new CommonException('站点不存在');

        if (!in_array($status, [ SiteDict::ON, SiteDict::CLOSE ], true)) {
            throw new CommonException('状态值不合法，1 为启用、3 为关闭');
        }

        $site = Db::name('site')
            ->where([ [ 'site_id', '=', $site_id ], [ 'site_id', '<>', 0 ], [ 'app_type', '<>', 'admin' ] ])
            ->field('site_id, status, expire_time')
            ->find();

        if (empty($site)) throw new CommonException('站点不存在');

        // 启用时校验到期时间，已过期的站点不允许启用
        $expire_time = (int) ($site[ 'expire_time' ] ?? 0);
        if ($status === SiteDict::ON && $expire_time > 0 && $expire_time < time()) {
            throw new CommonException('站点已过期，请先续期后再启用');
        }

        Db::name('site')->where('site_id', $site_id)->update([ 'status' => $status ]);

        // 与 admin 端保持一致：清理站点缓存与菜单缓存
        Cache::tag(self::SITE_CACHE_TAG . $site_id)->clear();
        Cache::tag(self::MENU_CACHE_TAG)->clear();

        return true;
    }
}
