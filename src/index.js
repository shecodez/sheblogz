import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import './assets/stylesheets/myStyle.css';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';


import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
		  <Route component={App} />
    </Provider>
	</BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
