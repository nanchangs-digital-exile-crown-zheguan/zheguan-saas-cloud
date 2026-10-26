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

namespace app\openapi\middleware;

use app\Request;
use app\service\core\openapi\CoreOpenapiApiService;
use app\service\core\openapi\CoreOpenapiAppService;
use app\service\core\openapi\CoreOpenapiLogService;
use Closure;
use Throwable;

/**
 * 开放平台调用日志
 * Class OpenapiLog
 * @package app\openapi\middleware
 */
class OpenapiLog
{
    public function handle(Request $request, Closure $next)
    {
        $start = microtime(true);

        try {
            $response = $next($request);
        } catch (Throwable $e) {
            $this->record($request, $start, (int) $e->getCode(), $e->getMessage());
            throw $e;
        }

        $content = $response->getData();
        $code = is_array($content) ? ($content[ 'code' ] ?? 0) : 0;
        $msg = is_array($content) ? ($content[ 'msg' ] ?? '') : '';

        $this->record($request, $start, (int) $code, (string) $msg);

        return $response;
    }

    /**
     * 写入一条调用日志
     * @param Request $request
     * @param float $start
     * @param int $code
     * @param string $msg
     * @return void
     */
    private function record(Request $request, float $start, int $code, string $msg): void
    {
        $app = $request->openapiApp();
        $api_key = $request->rule() ? (string) $request->rule()->getName() : '';
        $item = $api_key === '' ? [] : (new CoreOpenapiApiService())->getByKey($api_key);

        // 同步维护账号「最近调用」信息，供后台账号列表展示
        (new CoreOpenapiAppService())->updateLastVisit((int) ($app[ 'id' ] ?? 0), $request->ip());

        (new CoreOpenapiLogService())->add([
            'app_id' => $app[ 'id' ] ?? 0,
            'app_key' => $app[ 'app_key' ] ?? '',
            'site_id' => $app[ 'site_id' ] ?? 0,
            'api_key' => (string) ($item[ 'api_key' ] ?? ''),
            'url' => $request->url(),
            'method' => strtoupper($request->method()),
            'params' => $request->param(),
            'ip' => $request->ip(),
            'code' => $code,
            'msg' => $msg,
            'cost_ms' => (int) round((microtime(true) - $start) * 1000),
        ]);
    }
}
