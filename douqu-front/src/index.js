import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { LocaleProvider } from 'antd-mobile'
// import zh_CN from 'antd-mobile/lib/locale-provider/zh_CN'
import store from './store'


ReactDOM.render(
  <BrowserRouter>
    <LocaleProvider>
      <Provider {...store}>
        <App/>
      </Provider>
    </LocaleProvider>
  </BrowserRouter>,
  document.getElementById('root'));

serviceWorker.unregister();
