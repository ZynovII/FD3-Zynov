import React from 'react';

import './RainbowFrame.css';

let withRainbowFrame = (colors) => (props) => {
    let recursion = (i) => {
        if(!colors[i]) {
            return props.children;
        }
        return  <div key={i} style={{border: '5px solid '+colors[i], padding: '5px'}}>
                    {recursion(i+1)}
                </div>
    };
    return recursion(0);
}

export default withRainbowFrame;