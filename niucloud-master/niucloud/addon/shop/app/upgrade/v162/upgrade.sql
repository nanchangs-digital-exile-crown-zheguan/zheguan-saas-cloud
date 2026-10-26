
ALTER TABLE `shop_goods_rank` 
    ADD INDEX `idx_site_id`(`site_id`) USING BTREE;

ALTER TABLE `shop_goods_stat` ADD INDEX `idx_stat_site_goods_date` (`site_id`, `goods_id`, `date_time`);
ALTER TABLE `shop_goods_stat` ADD INDEX `idx_stat_site_date` (`site_id`, `date_time`);
ALTER TABLE `shop_goods` ADD INDEX `idx_goods_site_status_delete` (`site_id`, `status`, `delete_time`);
ALTER TABLE `shop_goods` ADD INDEX `idx_goods_site_brand` (`site_id`, `brand_id`);
ALTER TABLE `shop_goods` ADD INDEX `idx_goods_category` ((CAST(goods_category AS UNSIGNED ARRAY)));
ALTER TABLE `shop_goods` ADD INDEX `idx_goods_label_ids` ((CAST(label_ids AS UNSIGNED ARRAY)));

ALTER TABLE `shop_goods_sku` 
ADD INDEX `idx_goods_sku_site_id`(`site_id`) USING BTREE,
ADD INDEX `idx_goods_sku_goods_id`(`goods_id`) USING BTREE;
