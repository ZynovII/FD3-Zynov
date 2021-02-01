import { resetWarningCache } from 'prop-types';
import React from 'react';

export default class CompanyTitle extends React.PureComponent {   
    
    state = {currCompany: this.props.companyes[0]};
    
    setCurrComp = e => {
        this.setState({currCompany: e.target.innerHTML});
    }

    render() {

        console.log('Компонент CompanyTitle render');
        return(
            <div>
                <button onClick={this.setCurrComp}>{this.props.companyes[0]}</button>
                <button onClick={this.setCurrComp}>{this.props.companyes[1]}</button><br/>
                Company: <span>{this.state.currCompany}</span>
            </div>
        );
    };
}