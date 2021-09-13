import React from "react";
// import * as React from 'react';
// import * as ReactDOM from 'react-dom';

import  ReactDOM  from "react-dom";
type Props = {
  toWhat:string
}

function Hello (props:Props) {
    return (<div>Hello {props.toWhat}</div>)
}

ReactDOM.render(
    <Hello toWhat="world by jsx" />,
    document.getElementById("app")
)