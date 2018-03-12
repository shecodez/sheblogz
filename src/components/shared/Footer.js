import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const linkItems = [
  { name: 'Email', link: 'mailto:me@shecodez.com' },
  { name: 'Twitch', link: '' },
  { name: 'Instagram', link: '' },
  { name: 'YouTube', link: '' }
];

const Footer = () => (
	<footer className="footer">
		<h6>Contact</h6>
    <Menu text>
      {linkItems.map(item => (
        <Menu.Item
          key={item.name}
          as={Link} to={`${item.link}`}
          content={item.name}
        />
      ))}
      <Menu.Menu position="right">
        <Menu.Item>
          <div className="squares pull-right">
            <span />
            <span />
            <span />
          </div>
        </Menu.Item>
      </Menu.Menu>
    </Menu>

    <hr />
		<h6 className="centered">
			&copy; 2018{' '}
			<a className="primary" href='http://www.shecodez.com'>SheCodez</a>
			{' '}NJN
		</h6>
	</footer>
);

export default Footer;
