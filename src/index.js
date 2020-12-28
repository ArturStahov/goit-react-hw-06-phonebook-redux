import React from 'react';
import ReactDOM from 'react-dom';
import '@csstools/normalize.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import './base.css';
import App from './App';

function AppRender() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

ReactDOM.render(<AppRender />, document.querySelector('#root'));
