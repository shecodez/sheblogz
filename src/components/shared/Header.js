import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react';

import logo from './../../assets/images/logo.png';

class Header extends React.Component {
	state = {
		activeItem: this.props.page,
		menuItems: [
			{ name: 'home', route: '/' },
			{ name: 'about', route: '/about' },
			{ name: 'gallery', route: '/gallery' },
			{ name: 'blog', route: '/blog' }
		]
	};

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem, menuItems } = this.state;

		return (
			<header className="header">
				<Link to="/">
					<Image className="logo" src={logo} alt="NJN" />
				</Link>

				<hr />
				<Menu text>
					{menuItems.map(item => (
						<Menu.Item
							key={item.route}
							as={Link} to={`${item.route}`}
							name={item.name}
							active={activeItem === item.name}
							content={item.name}
							onClick={this.handleItemClick}
						/>
					))}
					<Menu.Menu position="right">
						<Menu.Item name="en">EN</Menu.Item>
					</Menu.Menu>
				</Menu>
			</header>
		);
	}
}

export default Header;
