import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

// components
import Header from './../shared/Header';
import Footer from './../shared/Footer';

const HomePage = () => (
	<Container className="home-page">
		<Header page={'home'} />
		<section className="page-content">
			<h1>Hi!</h1>
			<p>
				Welcome to my{' '}
				<span className="glitch" data-text="CREATIVE">
					CREATIVE
				</span>
				{' '}space
			</p>
			<div>
				<Link className="tb-outline" to="/gallery">
					Explore
				</Link>
			</div>
		</section>
		<Footer />
	</Container>
);

export default HomePage;
