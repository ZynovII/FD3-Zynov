import React, { Component } from 'react';

import './RainbowFrame.css';

let withRainbowFrame = (colors) => (Component) => (props) => {
    let recursion = (i) => {
        if(!colors[i]) {
            return <Component {...props}/>;
        }
        return  <div key={i} style={{border: '5px solid '+colors[i], padding: '5px'}}>
                    {recursion(i+1)}
                </div>
    };
    return recursion(0);
}

export default withRainbowFrame;