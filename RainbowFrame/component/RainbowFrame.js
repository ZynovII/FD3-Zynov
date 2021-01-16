import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {
    static propTypes = {
        colors: PropTypes.array,
    };

    recursion = (i) => {
        if(!this.props.colors[i]) {
            return this.props.children;
        }
        return  <div key={i} style={{border: '5px solid '+this.props.colors[i], padding: '5px'}}>
                    {this.recursion(i+1)}
                </div>
    };

    render() {
        return this.recursion(0);
    };
}

export default RainbowFrame;