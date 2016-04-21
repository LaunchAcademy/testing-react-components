import 'babel-polyfill';
import './main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import CapybaraContainer from './components/CapybaraContainer';

ReactDOM.render(
  <CapybaraContainer />,
  document.getElementById('app')
);
