import React from 'react';
import { IntroduceSection, Marquee, OfferSection } from './components';

type Props = {};

const Main = (props: Props) => {
	return (
		<main className='main'>
			<Marquee />
			<IntroduceSection />
			<OfferSection />
		</main>
	);
};

export default Main;
