import React from 'react';

const ScrollUpButton = ({ show }) => {
	const componentClasses = ['scroll-up-button'];

	const scrollUp = () => window.scrollTo(0, 0);

	if (show) {
		componentClasses.push('show');
	}

	return (
		<button className={componentClasses.join(' ')} onClick={scrollUp}>
			Top
		</button>
	);
};

/* ScrollUpButton.propTypes = {
  show: React.PropTypes.bool.isRequired
}; */

export default ScrollUpButton;
