import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Image } from 'semantic-ui-react';
import * as Markdown from 'react-markdown';
import moment from 'moment';

const BlogItem = props => (
	<Container className="blog-item">
		{props.featureImageUrl && (
      <div className="feature-image">
			   <Image src={props.featureImageUrl} alt="feature-visual" centered />
      </div>
		)}

		<Grid doubling stackable columns={3} className="blog-info">
			<Grid.Column width={5}>
				<h1 className="title">
          <Link
            to={{
              pathname: `/blog/${props.slug}`,
              state: { props }
            }}
          >
            {props.title}
          </Link>
        </h1>

				<Grid columns={3}>
					<Grid.Row className="text-muted">
						<Grid.Column>
              <Link to="/about" className="author">
                ~Niico
              </Link>
						</Grid.Column>
						<Grid.Column>
							<span className="primary">#{props.category}</span>
						</Grid.Column>
						<Grid.Column>
              {moment(props.publishDate).calendar(null, {
                sameDay: '[Today]',
                lastDay: '[Yesterday]',
                lastWeek: '[Last] dddd',
                sameElse: 'MM[/]DD[/]YY'
              })}
						</Grid.Column>
					</Grid.Row>
				</Grid>

			</Grid.Column>
			<Grid.Column width={2} />
			<Grid.Column width={9}>
				<Markdown
					className="post-excerpt"
					source={props.excerpt}
				/>
				<Link
					className="primary"
					to={{
						pathname: `/blog/${props.slug}`,
						state: { props }
					}}
				>
					Read More...
				</Link>
			</Grid.Column>
		</Grid>
	</Container>
);
export default BlogItem;

/*
<Markdown
	className="post-excerpt"
	source={props.body.split(' ').splice(0, 25).join(' ').concat('...')}
/>
 */
