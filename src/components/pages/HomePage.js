import React from 'react';
import { Link } from 'react-router-dom';

// components
import Header from './../shared/Header';
import Footer from './../shared/Footer';

const HomePage = () => (
	<div className="home-page">
		<Header />
      <h1>Hi!</h1>
			<p>Welcome to my <span>creative</span> space</p>
			<Link to='/gallery'>Explore</Link>
    <Footer />
	</div>
);

export default HomePage;
