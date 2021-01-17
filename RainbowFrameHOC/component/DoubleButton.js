import React, { Fragment } from 'react';

class DoubleButton extends React.Component {
    firstButton = () => {
        this.props.cbPressed(1);
    }
    secondButton = () => {
        this.props.cbPressed(2);
    }
    render() {
        return (
            <Fragment>
                <input type='button' value={this.props.caption1} 
                    onClick={this.firstButton}
                />
                {this.props.children}
                <input type='button' value={this.props.caption2} 
                    onClick={this.secondButton}
                />
            </Fragment>
        )
    }
}

export default DoubleButton;