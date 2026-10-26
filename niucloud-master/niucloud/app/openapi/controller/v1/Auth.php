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

namespace app\openapi\controller\v1;

use app\openapi\controller\BaseOpenapiController;
use app\service\core\openapi\CoreOpenapiAppService;
use app\service\core\openapi\CoreOpenapiTokenService;
use core\exception\AuthException;
use think\Response;

/**
 * 开放平台授权
 * Class Auth
 * @package app\openapi\controller\v1
 */
class Auth extends BaseOpenapiController
{
    /**
     * 使用 Access Key / Secret Key 换取访问令牌
     * @description 获取访问令牌
     * @return Response
     */
    public function token(): Response
    {
        $data = $this->request->params([
            [ 'app_key', '' ],
            [ 'app_secret', '' ],
        ]);

        $app_service = new CoreOpenapiAppService();
        $app = $app_service->getByAppKey((string) $data[ 'app_key' ]);

        // 账号不存在与密钥错误返回同一提示，避免账号枚举
        if (empty($app)) throw new AuthException('Access Key 或 Secret Key 错误', 401);

        $app_service->checkStatus($app);
        $app_service->checkIp($app, $this->request->ip());

        if (!$app_service->verifySecret($app, (string) $data[ 'app_secret' ])) {
            throw new AuthException('Access Key 或 Secret Key 错误', 401);
        }

        $token = (new CoreOpenapiTokenService())->issue($app, $this->request->ip());

        return success($token);
    }
}
