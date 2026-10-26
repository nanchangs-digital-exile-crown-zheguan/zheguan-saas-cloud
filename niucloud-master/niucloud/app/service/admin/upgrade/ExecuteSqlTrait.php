<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的多应用管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace app\service\admin\upgrade;

/**
 * 执行sql文件
 */
trait ExecuteSqlTrait
{
    public function getSqlQuery($sql_data)
    {
        // 升级 SQL 统一为 utf8mb4：MySQL 8 默认字符集已是 utf8mb4，写死 utf8(=utf8mb3) 会触发
        // "utf8mb3 is deprecated" 警告，且长索引易触发 "Specified key was too long"（PHP 8.2/MySQL 8 环境）
        $sql_data = preg_replace("/TYPE=(InnoDB|MyISAM|MEMORY)( DEFAULT CHARSET=[^; ]+)?/", "ENGINE=\\1 DEFAULT CHARSET=utf8mb4", $sql_data);

        $sql_data = str_replace("\r", "\n", $sql_data);
        $sql_query = [];
        $num = 0;
        $sql_arr = explode(";\n", trim($sql_data));
        unset($sql);
        foreach ($sql_arr as $sql) {
            $sql_query[ $num ] = '';
            $sqls = explode("\n", trim($sql));
            $sqls = array_filter($sqls);
            foreach ($sqls as $query) {
                $str1 = $query[0] ?? '';
                if ($str1 != '#' && $str1 != '-')
                    $sql_query[ $num ] .= $query;
            }
            $num++;
        }
        return $sql_query;
    }

    /**
     * 处理sql增加表前缀
     * @param $sql
     * @param $prefix
     * @return string
     */
    public function handleSqlPrefix($sql, $prefix) {
        if (str_contains($sql, 'CREATE TABLE')) {
            // 兼容 CREATE TABLE IF NOT EXISTS，避免把 IF 误识别为表名（升级 SQL v210 用到该写法）
            $pattern = '/CREATE TABLE(?:\\s+IF\\s+NOT\\s+EXISTS)?\\s+[`]?(\\w+)[`]?/is';
        } elseif (str_contains($sql, 'ALTER TABLE')) {
            $pattern = '/ALTER TABLE\\s+[`]?(\\w+)[`]?/is';
        } elseif (str_contains($sql, 'INSERT INTO')) {
            $pattern = '/INSERT INTO\\s+[`]?(\\w+)[`]?/is';
        } elseif (str_contains($sql, 'DELETE FROM')) {
            $pattern = '/DELETE FROM\\s+[`]?(\\w+)[`]?/is';
        } elseif (str_contains($sql, 'UPDATE')) {
            $pattern = '/UPDATE\\s+[`]?(\\w+)[`]?/is';
        } elseif (str_contains($sql, 'DROP TABLE IF EXISTS')) {
            $pattern = '/DROP TABLE IF EXISTS\\s+[`]?(\\w+)[`]?/is';
        } elseif (str_contains($sql, 'DROP TABLE')) {
            $pattern = '/DROP TABLE\\s+[`]?(\\w+)[`]?/is';
        } else {
            $pattern = '';
        }
        if ($pattern !== '' && preg_match($pattern, $sql, $match_data, PREG_OFFSET_CAPTURE) === 1) {
            $table_name = $match_data[ 1 ][ 0 ];
            $offset = $match_data[ 1 ][ 1 ];
            if ($table_name !== '') {
                // 精确替换匹配到的表名位置，避免语句中先出现的同名片段被误替换
                $sql = substr_replace($sql, $prefix . $table_name, $offset, strlen($table_name));
            }
        }
        return $sql;
    }
}
