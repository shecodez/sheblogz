import React from 'react';
import axios from 'axios';
import { Grid } from 'semantic-ui-react';

// components
import Header from './../shared/Header';
import Footer from './../shared/Footer';
import Viewer from './../gallery/Viewer';
import Thumbs from './../gallery/Thumbs';

class GalleryPage extends React.Component {
	state = {
		current: 0,
		gallery: [],
		viewing: {}
	};

	componentDidMount() {
		this.fetchImages();
	}

	fetchImages = () => {
		const url = `https://sheblogz-198618.appspot.com/query?id=ahFwfnNoZWJsb2d6LTE5ODYxOHIVCxIIQXBpUXVlcnkYgICAgICAgAoM`;
		
		const { current } = this.state;

		axios
			.get(url, {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				mode: 'no-cors',
				credentials: 'include'
			})
			.then(response => {
				// console.log(response.data);
				return response.data;
			})
			.then(data => {
				let picArray = data.photoset.photo.map(pic => {
					let srcPath = `https://farm${pic.farm}.staticflickr.com/${
						pic.server
					}/${pic.id}_${pic.secret}.jpg`;
					return {
						id: pic.id,
						title: pic.title,
						description: pic.description._content,
						src: srcPath
					};
				});

				this.setState({
					gallery: picArray
				});
				this.setState({
					viewing: picArray[current]
				});
			})
			.catch(err => {
				console.log(err);
			});
	};

	next = () => {
		const max = this.state.gallery.length - 1;

		this.setState(
			{ current: this.clamp(this.state.current + 1, 0, max) },
			() => {
				// console.log('next', this.state.current);
				this.setState({
					viewing: this.state.gallery[this.state.current]
				});
			}
		);
	};

	prev = () => {
		const max = this.state.gallery.length - 1;

		this.setState(
			{ current: this.clamp(this.state.current - 1, 0, max) },
			() => {
				// console.log('prev', this.state.current);
				this.setState({
					viewing: this.state.gallery[this.state.current]
				});
			}
		);
	};

	clamp = (num, min, max) => (num <= min ? min : num >= max ? max : num);

	setCurrent = index => {
		const max = this.state.gallery.length - 1;

		this.setState({ current: this.clamp(index, 0, max) }, () => {
			this.setState({
				viewing: this.state.gallery[index]
			});
		});
		// console.log('setCurrent ', index);
	};

	render() {
		const { gallery, viewing, current } = this.state;

		return (
			<div className="gallery-page">
				<Grid columns={2} padded className="main">
					<Grid.Column width={12} only="computer tablet">
						{viewing && (
							<Viewer image={viewing} next={this.next} prev={this.prev} />
						)}
					</Grid.Column>
					<Grid.Column tablet={4} computer={4} mobile={16} className="thumbs-col">
						<Header page={'gallery'} />
						{gallery && (
							<Thumbs
								images={gallery}
								index={current}
								setCurrent={this.setCurrent}
							/>
						)}
						<Footer />
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}

export default GalleryPage;

// test_url = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=kyoto&format=json&nojsoncallback=true'
