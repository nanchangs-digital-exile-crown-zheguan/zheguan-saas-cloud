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

namespace app\service\admin\openapi;

use app\model\sys\SysOpenapiLog;
use core\base\BaseAdminService;

/**
 * 开放平台调用日志管理
 * Class OpenapiLogService
 * @package app\service\admin\openapi
 */
class OpenapiLogService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new SysOpenapiLog();
    }

    /**
     * 日志列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = []): array
    {
        $query = $this->model->where([]);

        // 店铺端仅能看到本店铺的调用日志
        if ($this->site_id > 0) {
            $query->where('site_id', $this->site_id);
        } elseif (isset($where[ 'site_id' ]) && $where[ 'site_id' ] !== '') {
            $query->where('site_id', (int) $where[ 'site_id' ]);
        }

        if (!empty($where[ 'app_id' ])) {
            $query->where('app_id', (int) $where[ 'app_id' ]);
        }
        if (!empty($where[ 'api_key' ])) {
            $query->whereLike('api_key', '%' . $where[ 'api_key' ] . '%');
        }
        if (!empty($where[ 'method' ])) {
            $query->where('method', strtoupper((string) $where[ 'method' ]));
        }
        if (isset($where[ 'code' ]) && $where[ 'code' ] !== '') {
            $query->where('code', (int) $where[ 'code' ]);
        }
        if (!empty($where[ 'create_time' ]) && is_array($where[ 'create_time' ])) {
            $start = strtotime((string) $where[ 'create_time' ][ 0 ]);
            $end = strtotime((string) $where[ 'create_time' ][ 1 ]);
            if ($start && $end) $query->whereBetweenTime('create_time', $start, $end);
        }

        $query->order('id desc');

        return $this->pageQuery($query);
    }
}
