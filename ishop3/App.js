'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import ShopTable from './components/ShopTable'

var productListArr = require('./ProductList.json');
var shopTitle = 'IShop';

ReactDOM.render(
    <ShopTable 
        title = {shopTitle}
        list = {productListArr}
    />
    , document.getElementById('container')
);