import React from 'react';
import {
	ArticlesSection,
	ExperienceSection,
	IntroduceSection,
	MapSection,
	OfferSection,
	VideoSection,
} from './components';

type Props = {};

const Main = (props: Props) => {
	return (
		<main className='main'>
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
