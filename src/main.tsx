import React from "react";
// import * as React from 'react';
// import * as ReactDOM from 'react-dom';

import  ReactDOM  from "react-dom";
import 'antd/dist/antd.css';
import App from './App'
    const a = require('./test')

ReactDOM.render(
    <App toWhat="World by jsx" />,
    document.getElementById("app")
)
