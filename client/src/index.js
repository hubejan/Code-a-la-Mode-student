import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store.js';
import App from './app.js';
import injectTapEventPlugin from 'react-tap-event-plugin';


//load main css
// import './public/stylesheets/index.scss';
// init clientside filesystem
// import './utils/setupFS';
injectTapEventPlugin();

ReactDOM.render(
  (<Provider store={store} >
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>),
  document.getElementById('app'));
