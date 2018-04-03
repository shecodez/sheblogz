import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import GalleryPage from './components/pages/GalleryPage';
import BlogPage from './components/pages/BlogPage';
import BlogPost from './components/blog/BlogPost';
import ScrollUpButton from './components/shared/ScrollUpButton';

class App extends React.Component {
	state = {
		scroll: false
	};

	componentDidMount() {
		this.onScroll();
	}

	onScroll = () => {
		window.onscroll = () => {
			if (window.scrollY > 250) {
				this.setState({ scroll: true });
			} else {
				this.setState({ scroll: false });
			}
		};
	};

	render() {
		const { scroll } = this.state;

		return (
			<div className="App">
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/about" exact component={AboutPage} />
					<Route path="/gallery" exact component={GalleryPage} />
					<Route path="/blog" exact component={BlogPage} />
					<Route path="/blog/:slug" component={BlogPost} />
				</Switch>
				<ScrollUpButton show={scroll} />
			</div>
		);
	}
}

export default App;
