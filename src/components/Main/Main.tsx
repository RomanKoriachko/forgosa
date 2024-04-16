import React from 'react';
import {
	ArticlesSection,
	ExperienceSection,
	IntroduceSection,
	MapSection,
	OfferSection,
	VideoSection,
} from './components';
import { Helmet } from 'react-helmet-async';

type Props = {};

const Main = (props: Props) => {
	return (
		<main className='main'>
			<Helmet>
				<title>Fogrosa - Home</title>
				<meta property='og:title' content='Fogrosa - Home' />
				<meta property='telegram:title' content='Fogrosa - Home' />
				<meta
					name='description'
					content='FOGROSA - a leading group of petroleum companies committed to ensuring reliable fuel deliveries to the farthest corners of the globe.'
				/>
				<meta
					property='og:description'
					content='FOGROSA - a leading group of petroleum companies committed to ensuring reliable fuel deliveries to the farthest corners of the globe.'
				/>
				<meta
					property='telegram:description'
					content='FOGROSA - a leading group of petroleum companies committed to ensuring reliable fuel deliveries to the farthest corners of the globe.'
				/>
			</Helmet>
			<IntroduceSection />
			<OfferSection />
			<ExperienceSection />
			<MapSection />
			<ArticlesSection />
			<VideoSection />
		</main>
	);
};

export default Main;
