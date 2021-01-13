'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import ShopTable from './components/ShopTable'

var productListArr = [
    {name: 'fork', cost: 50, code: 1, quantity: 1000, url: 'img/fork.jpg'},
    {name: 'table', cost: 1000, code: 2, quantity: 100, url: 'img/wooden-table.webp'},
    {name: 'guitar', cost: 5000, code: 3, quantity: 10, url: 'img/guitar.jpg'},
    {name: 'bottle', cost: 70, code: 4, quantity: 500, url: 'img/bottle.jpg'},
    {name: 'lighter', cost: 40, code: 5, quantity: 4000, url: 'img/lighter.jpg'},
];
var shopTitle = 'IShop';

ReactDOM.render(
    <ShopTable 
        title = {shopTitle}
        list = {productListArr}
    />
    , document.getElementById('container')
);