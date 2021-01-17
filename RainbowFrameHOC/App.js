'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import withRainbowFrame from './component/withRainbowFrame';

let rainbow = ['red', 'orange', 'yellow', 'green', 'skyblue', 'blue', 'purple'];

let ComponentWithRainbowFarme = withRainbowFrame(rainbow);

ReactDOM.render(
    <ComponentWithRainbowFarme>
        <span style={{fontWeight: 600}}>Hello!</span>
    </ComponentWithRainbowFarme>,
    document.getElementById('container')
)