import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';

import me from './../../assets/images/me.jpg';

// components
import Header from './../shared/Header';
import Footer from './../shared/Footer';

const AboutPage = () => (
	<Container className="about-page">
		<Header page={'about'} />
		<section className="page-content">
			<h1>
				<span className="primary">About</span> Me
			</h1>
			<Grid container columns={2}>
				<Grid.Column width={6} verticalAlign='middle'>
					<Image src={me} alt="me" />
				</Grid.Column>
				<Grid.Column width={10}>
					<p>
						<span className="large-letter">L</span>
						<span>
							{`ove what you do, and you'll never work a day in your life. `}
						</span>
						<span className="primary">#truth</span>{` I love traveling, eating
						fantastic new foods (who does'nt?), and being creative, but the idea
						that I could do all three for a living blows my mind. So here I am,
						a computer science nerd, trying to tap into my creative side. Niico,
						programmer by day, content creator by night.`}
					</p>
					<p>
						{`I have a lot of 'creative content' I want to explore and get
						feedback on before I fall into my personal niche. I lurve gaming so
						I can start with live-streams on Twitch, and later add making
						lifestyle/discovery/DIY vlogs on YouTube, while taking photos of
						foods and places on Instagram, and a simi-regular totally random blog on
						any topic that strikes my fancy here on my blog. If you are still
						reading, thank you for reading about me and welcome to my journey.`}
					</p>
					<p>
						<span>
							{`Dear Stan Lee, in the abysmally low probability that you should
							ever come across this blog, please make a marvel 'shero' with the
							mundane alter ego of a programmer like me, but unlike me she can
							control time and space. Why? because unmet deadlines and workspace
							clutter = the stuff of nightmares.`}
						</span>
					</p>
				</Grid.Column>
			</Grid>
		</section>
		<Footer />
	</Container>
);

export default AboutPage;
