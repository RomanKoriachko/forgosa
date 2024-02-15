import React from 'react';
import {
	ArticlesSection,
	ExperienceSection,
	IntroduceSection,
	MapSection,
	Marquee,
	OfferSection,
	VideoSection,
} from './components';

type Props = {};

const Main = (props: Props) => {
	return (
		<main className='main'>
			<Marquee />
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
