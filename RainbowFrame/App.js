'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame from './component/RainbowFrame';

let rainbow = ['red', 'orange', 'yellow', 'green', 'skyblue', 'blue', 'purple'];

ReactDOM.render(
    <RainbowFrame colors={rainbow}>
        <span style={{fontWeight: 600}}>Hello!</span>
    </RainbowFrame>,
    document.getElementById('container')
)