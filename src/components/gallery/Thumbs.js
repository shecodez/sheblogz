import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const Thumbs = ({ images, index, setCurrent }) => {
	const setIndex = i => setCurrent(i);

	return (
		<div className="thumbs">
			<Grid columns={2} padded>
				{images.map((image, i) => (
					<Grid.Column
						key={image.id}
						className={index === i ? 'active thumbnail' : 'thumbnail'}
						onClick={() => setIndex(i)}
					>
						<Image src={image.src} />
					</Grid.Column>
				))}
			</Grid>
		</div>
	);
};

export default Thumbs;
