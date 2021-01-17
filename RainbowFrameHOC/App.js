'use strict';

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import DoubleButton from './component/DoubleButton';
import withRainbowFrame from './component/withRainbowFrame';

let rainbow = ['red', 'orange', 'yellow', 'green', 'skyblue', 'blue', 'purple'];

let ComponentWithRainbowFarme = withRainbowFrame(rainbow)(DoubleButton);

ReactDOM.render(
    <Fragment>
        <DoubleButton caption1="однажды" caption2="пору" 
                    cbPressed={ num => alert(num) } 
        >
            в студёную зимнюю
        </DoubleButton>
        <br/><br/>
        <ComponentWithRainbowFarme caption1='rainbow say:' 
                    caption2='World!' cbPressed={ num => alert(num) }>
            <span style={{fontWeight: 600}}>Hello</span>
        </ComponentWithRainbowFarme>
    </Fragment>,
    document.getElementById('container')
)