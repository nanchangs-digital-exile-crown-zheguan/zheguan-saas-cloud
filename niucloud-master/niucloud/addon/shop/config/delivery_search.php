<?php

use core\dict\DictLoader;

$system = [
    'default' => 'kdniao',
    'drivers' => [
        'kdniao' => [
            'driver' => 'addon\\shop\\app\\service\\core\\delivery\\delivery_search\\KdniaoDeliverySearch',
        ],
        'kd100' => [
            'driver' => 'addon\\shop\\app\\service\\core\\delivery\\delivery_search\\Kd100DeliverySearch',
        ],
    ],
];

$system['drivers'] = (new DictLoader('Config'))->load([
    'data' => $system['drivers'],
    'name' => 'delivery_search',
]);

return $system;
