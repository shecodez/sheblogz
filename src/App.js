import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import GalleryPage from './components/pages/GalleryPage';
import BlogPage from './components/pages/BlogPage';

const App = () => (
	<div className="App">
		<Switch>
			<Route path="/" exact component={HomePage} />
			<Route path="/about" exact component={AboutPage} />
			<Route path="/gallery" exact component={GalleryPage} />
			<Route path="/blog" exact component={BlogPage} />
		</Switch>
	</div>
);

export default App;
