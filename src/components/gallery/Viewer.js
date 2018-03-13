import React from 'react';

const Viewer = ({ image, next, prev }) => {
	const divStyle = {
		position: 'absolute',
		top: '0', bottom: '0', left: '0', right: '0',
		height: '100vh',
		backgroundImage: `url(${image.media.m})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	};

	const selectNext = () => next();
	const selectPrev = () => prev();

	return (
		<div className="viewer">
			<div className="controls">
				<div className="nav-next" onClick={selectNext} />
				<div className="nav-prev" onClick={selectPrev} />
			</div>

			<div className="image" style={divStyle} />

			<div className="caption">
				<h2>{image.title}</h2>
				<p>{image.tags}</p>
			</div>
		</div>
	);
};

export default Viewer;
