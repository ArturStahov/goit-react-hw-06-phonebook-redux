import React from 'react';
import ReactDOM from 'react-dom';
import '@csstools/normalize.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './base.css';
import App from './App';

function AppRender() {
  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}

ReactDOM.render(<AppRender />, document.querySelector('#root'));
