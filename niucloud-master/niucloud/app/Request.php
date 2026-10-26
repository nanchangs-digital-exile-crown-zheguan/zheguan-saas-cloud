<?php

namespace app;
use app\dict\common\ChannelDict;
use app\service\core\site\CoreSiteService;

/**
 * Class Request
 * @package app
 */
// 应用请求对象类
class Request extends \think\Request
{
    //认证信息
    protected static $auth_info = [];

    protected static $site_id = 0;

    //开放平台认证信息（独立上下文，禁止与 $auth_info / $site_id 混用）
    protected static $openapi_info = [];

    /**
     * 获取请求参数
     * @param array $params
     * @param bool $filter
     * @return array
     */
    public function params(array $params, bool $filter = true): array
    {
        $input = [];
//        $filter_rule = $filter ? 'strip_tags' : '';
        $filter_rule = '';
        foreach ($params as $param) {
            $key = $param[0];
            // 解析name
            if (strpos($key, '/')) {
                [$name, $type] = explode('/', $key);
            }else{
                $name = $key;
            }
            $default = $param[1];
            $item_filter = $param[2] ?? $filter;
            $input[$key] = $this->paramFilter($this->param($key, $default, $filter_rule ?? ''), $item_filter);
            //过滤后产生空字符串，按照默认值
            if($input[$name] === '')
            {
                $input[$name] = $default;
            }
        }
        return $input;
    }

    /**
     * 参数过滤
     * @param $param
     * @param bool $filter
     * @return array|string|string[]|null
     */
    public function paramFilter($param, bool $filter = true)
    {
        if (!$param || !$filter || !is_string($param)) {
            return $param;
        }

        // 过滤危险标签
        $filter_rule = [
            "/<(\\/?)(script|iframe|frame|style|html|body|title|link|meta|alert|font|object|\\?|\\%)([^>]*?)>/isU",
            "/(<[^>]*?)on[a-zA-Z]+\s*=[\s\"'][^\"']*?([\s\"'][^>]*?>)/isU",
            "/\\b(select|join|where|drop|like|modify|rename|insert|update|table|database|alter|truncate|\'|\/\*|\.\.\/|\.\/|union|into|load_file|outfile)\\b/is"
        ];

        $replace = [
            '', // 移除整个危险标签
            '$1$2', // 仅移除 onxxx 属性，保留标签
            ''
        ];
        return preg_replace($filter_rule, $replace, $param);
    }

    /**
     * 获取登录用户的uid
     * @param int $uid
     * @return int|mixed|void
     */
    public function uid(int $uid = 0)
    {
        if ($uid > 0) {
            static::$auth_info['uid'] = $uid;
        } else {
            return static::$auth_info['uid'] ?? 0;
        }
    }


    /**
     * 获取登录会员的id
     */
    public function memberId(int $member_id = 0)
    {
        if ($member_id > 0) {
            static::$auth_info['member_id'] = $member_id;
        } else {
            return static::$auth_info['member_id'] ?? 0;
        }
    }

    /**
     * 站点id
     * @param int|string|null $site_id
     * @return int
     */
    public function siteId(int|string|null $site_id = 0)
    {
        if ($site_id > 0) {
            static::$site_id = (int)$site_id;
            return $site_id;
        } else {
            return static::$site_id ?? $this->defaultSiteId();
        }
    }

    /**
     * 用户账号
     * @param string $username
     * @return int|mixed
     */
    public function username(string $username = '')
    {
        if (!empty($username)) {
            static::$auth_info['username'] = $username;
            return $username;
        } else {
            return static::$auth_info['username'] ?? '';
        }
    }


    /**
     * 定义站点类型
     * @param string $app_type
     * @return mixed|string
     */
    public function appType(string $app_type = ''){
        if (!empty($app_type)) {
            static::$auth_info['app_type'] = $app_type;
            return $app_type;
        } else {
            return static::$auth_info['app_type'] ?? '';
        }
    }

    /**
     * 获取管理端token
     * @return array|string|null
     */
    public function adminToken(){
        $name = system_name('admin_token_name');
        // EventSource（SSE）不支持自定义请求头，token 通过 query 传递，此处做回退
        return $this->header($name) ?: $this->param($name);
    }


    /**
     * 获取会员token
     * @return array|string|null
     */
    public function apiToken(){
        return $this->header(system_name('api_token_name'));
    }

    /**
     * 平台site_id
     * @return array|string|null
     */
    public function adminSiteId(){
        $name = system_name('admin_site_id_name');
        // EventSource（SSE）不支持自定义请求头，site-id 通过 query 传递，此处做回退
        return is_null($this->header($name)) ? $this->param($name) : $this->header($name);
    }

    /**
     * 客户端site_id
     * @return array|string|null
     */
    public function apiSiteId(){
        $site_id = (int)$this->header(system_name('api_site_id_name'));
        if (!$site_id) {
            $domain = str_replace(['http://', 'https://'], '', $this->header('host'));
            $site_id = (new CoreSiteService())->getSiteIdByDomain($domain);
        }
        return $site_id;
    }

    /**
     * 获取场景
     * @return array|string
     */
    public function getChannel(){
        return $this->header(system_name('channel_name'), ChannelDict::H5);
    }

    /**
     * 获取默认站点
     * @return int
     */
    public function defaultSiteId(){
        return 0;
    }

    /**
     * get传参追加值
     * @param $data
     * @return void
     */
    public function pushGet($data){
        $param = $this->get();
        $this->withGet(array_merge($param, $data));
    }

    /**
     * header传参追加值
     * @param $data
     * @return void
     */
    public function pushHeader($data){
        $param = $this->header();
        $this->withHeader(array_merge($param, $data));
    }

    /**
     * 授权信息
     * @param $key
     * @param $value
     * @return mixed|string|void
     */
    public function auth($key, $value = ''){
        if (!empty($value)) {
            static::$auth_info[$key] = $value;
        } else {
            return static::$auth_info[$key] ?? '';
        }
    }

    /**
     * 开放平台账号上下文（独立于 auth_info / site_id，避免与其他端口相互污染）
     * @param array $app
     * @return array
     */
    public function openapiApp(array $app = []): array
    {
        if (!empty($app)) {
            static::$openapi_info = $app;
            return $app;
        }
        return static::$openapi_info;
    }

    /**
     * 获取开放平台请求携带的访问令牌
     *
     * 按优先级依次尝试多种传递方式：
     * 1. Authorization: Bearer {token}
     * 2. REDIRECT_HTTP_AUTHORIZATION（Apache 在 .htaccess 里透传后环境变量的实际名字）
     * 3. X-Openapi-Key: {token}（Apache 等默认丢弃 Authorization 头的环境）
     * 4. access_token 请求参数（查询串 / 表单，最后的兜底）
     *
     * @return string
     */
    public function openapiToken(): string
    {
        $authorization = (string) $this->header('Authorization', '');
        if ($authorization === '') {
            // Apache + CGI/FastCGI 下不会产生 HTTP_AUTHORIZATION，透传后变量带 REDIRECT_ 前缀
            $authorization = (string) $this->server('REDIRECT_HTTP_AUTHORIZATION', '');
        }
        if (stripos($authorization, 'Bearer ') === 0) {
            return trim(substr($authorization, 7));
        }

        // 备用请求头：部分 Web 服务器（如 Apache）会丢弃 Authorization，用自定义头传递最稳
        $token = trim((string) $this->header('X-Openapi-Key', ''));
        if ($token !== '') return $token;

        // 兜底：请求参数
        return trim((string) $this->param('access_token', ''));
    }
}
