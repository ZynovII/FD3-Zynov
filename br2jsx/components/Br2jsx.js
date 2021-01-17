import React from 'react';

import './Br2jsx.css';

export default (props) => {
    let newText = props.text.split(/<br\s*\/?>/);
    let brText = [];
    newText.forEach( (v,i) => {
        if(i) brText.push(<br key={i}/>);
        brText.push(v);
    });
    return <div>{brText}</div>
};