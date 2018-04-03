import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as contentful from 'contentful';
import moment from 'moment';
import * as Markdown from 'react-markdown';
import { Container, Grid, Icon, Image, Dimmer, Loader } from 'semantic-ui-react';
import Disqus from 'disqus-react';

// components
import Header from './../shared/Header';
import Footer from './../shared/Footer';

class BlogPost extends React.Component {
	state = {
		post: null,
		pageviews: 0,
		loading: true
	};

	client = contentful.createClient({
		space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
		accessToken: process.env.REACT_APP_CONTENTFUL_CDA_TOKEN
	});

	componentDidMount() {
		if (this.props.location.state === undefined )
			this.fetchPost().then(this.setPost);
		else
			this.showPost();
	}

	showPost = () => {
		this.setState({
			loading: false,
			post: this.props.location.state.props
		},
		() => {
			this.fetchPageViews();
		});
	}

	fetchPost = () =>
		this.client.getEntries({
			content_type: 'blog', // uh1kvzu28wjx
			'fields.slug[in]': this.props.match.params.slug
		});

	setPost = response => {
		// console.log(response.items[0]);
		this.setState({
			loading: false,
			post: response.items[0].fields
		},
		() => {
			this.fetchPageViews();
		});
	};

	fetchPageViews = () => {
		const { post } = this.state;
		axios
			.get(post.pageViewsUrl)
			.then(response => {
				// console.log(response);
				if (response) {
					this.setState({
						pageviews:
							response['data']['totalsForAllResults']['ga:uniquePageviews']
					});
				}
			})
			.catch(err => console.error(err));
	};

	render() {
		if (this.state.loading) {
			return (
				<Dimmer active>
        	<Loader>Loading</Loader>
      	</Dimmer>
			);
		} else {
			const { post } = this.state;

			const disqusShortname = 'sheblogz';
			const disqusConfig = {
				url: `${process.env.REACT_APP_HOST}/blog/${post.slug}`,
				identifier: post.slug,
				title: post.title
			};

			return (
				<Container className="blog-post">
					<Helmet>
						<title>{post.title} ~ SheBlogz</title>
					</Helmet>
					<Header page={'blog'} />
					<section className="post">
						<h1 className="title">{post.title}</h1>
						<Link to="/about" className="author">
							~Niico
						</Link>

						{post.featureImageUrl && (
							<div className="feature-image">
								<Image
									src={post.featureImageUrl}
									alt="feature-visual"
									centered
								/>
							</div>
						)}

						<Grid doubling stackable columns={5}>
							<Grid.Column width={3} only="computer" />
							<Grid.Column width={3}>
								<p>
									<Icon name="time" />
									{post.length} min read
								</p>
							</Grid.Column>
							<Grid.Column width={4}>
								<p className="primary">#{post.category}</p>
							</Grid.Column>
							<Grid.Column width={3}>
								<p>
									<Icon name="comments" />
									<Disqus.CommentCount
										shortname={disqusShortname}
										config={disqusConfig}
									>
										Comments
									</Disqus.CommentCount>
								</p>
							</Grid.Column>
							<Grid.Column width={3} only="computer" />
						</Grid>

						<Markdown className="post-body" source={post.body} />

						<Grid doubling stackable columns={5}>
							<Grid.Column width={3} only="computer" />
							<Grid.Column width={3}>
								<p>
									{moment(post.publishDate).calendar(null, {
										sameDay: '[Today]',
										lastDay: '[Yesterday]',
										lastWeek: '[Last] dddd',
										sameElse: 'MMM Do YYYY'
									})}
								</p>
							</Grid.Column>
							<Grid.Column width={4}>
								<Link to="/blog">Back to Blog</Link>
							</Grid.Column>
							<Grid.Column width={3}>
								<p>{`${this.state.pageviews} Views`}</p>
							</Grid.Column>
							<Grid.Column width={3} only="computer" />
						</Grid>
					</section>

					<Disqus.DiscussionEmbed
						shortname={disqusShortname}
						config={disqusConfig}
					/>
					<Footer />
				</Container>
			);
		}
	}
}

// const BlogPost = ({ location: { state: { props } } }) => {};

export default BlogPost;
