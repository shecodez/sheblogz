import React from 'react';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import * as contentful from 'contentful';

// components
import Header from './../shared/Header';
import Footer from './../shared/Footer';
import BlogItem from './../blog/BlogItem';
import Pagination from './../blog/Pagination';

class BlogPage extends React.Component {
	state = {
		posts: [],
		loading: true
	};

	client = contentful.createClient({
		space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
		accessToken: process.env.REACT_APP_CONTENTFUL_CDA_TOKEN
	});

	componentDidMount() {
		// let page = this.props.params.page || 1;
		this.fetchPosts().then(this.setPosts);
	}

	fetchPosts = () => this.client.getEntries();

	setPosts = response => {
		this.setState({
			loading: false,
			posts: response.items
		});
	};

	render() {
		if (this.state.loading) {
			return (
				<Dimmer active>
        	<Loader>Loading</Loader>
      	</Dimmer>
			);
		} else {
			const posts = this.state.posts;

			return (
				<Container className="blog-page">
					<Header page={'blog'} />
					<section className="page-content">
						<h1 className="welcome">
							She<span className="primary">Blogz</span>
						</h1>
						{posts.map(({fields}, i) =>
			        <BlogItem key={i} {...fields} />
			      )}
					</section>
					<Pagination page={1} pages={1} />
					<Footer />
				</Container>
			);
		}
	}
}

export default BlogPage;
