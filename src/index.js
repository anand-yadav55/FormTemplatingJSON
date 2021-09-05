import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as data from './data.json';


ReactDOM.render(
    <App data={data.default}/>,
  document.getElementById('root')
);
