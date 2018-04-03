import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import './assets/stylesheets/myStyle.css';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import withGA from './components/shared/withGA';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

require('dotenv').config(); // { path: './../.env' }

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
		  <Route component={withGA(App)} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

/*
<BrowserRouter history={createBrowserHistory()}>
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="/about" component={AboutPage} />
		<Route path="/gallery" component={GalleryPage} />
		<Route path="/blog" component={BlogPage}>
			<Route path="/blog/:slug" component={BlogPost} />
		</Route>
	</Route>
	<Route path="*" component={NotFoundPage} />
</BrowserRouter>
*/
