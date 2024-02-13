import React from 'react';
import {
	ArticlesSection,
	ExperienceSection,
	IntroduceSection,
	MapSection,
	Marquee,
	OfferSection,
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
		</main>
	);
};

export default Main;
