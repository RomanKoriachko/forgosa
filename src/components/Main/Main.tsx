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
					content='Our company specializes in the supply of fuel to customers worldwide, with a focus on Southeast Asia and the Middle East regions.'
				/>
				<meta
					property='og:description'
					content='Our company specializes in the supply of fuel to customers worldwide, with a focus on Southeast Asia and the Middle East regions.'
				/>
				<meta
					property='telegram:description'
					content='Our company specializes in the supply of fuel to customers worldwide, with a focus on Southeast Asia and the Middle East regions.'
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
