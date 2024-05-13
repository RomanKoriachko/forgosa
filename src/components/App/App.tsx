import React, { useEffect, useState } from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { Outlet } from 'react-router-dom';
import { ScrollToTop } from '../../common';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import DisclaimerComponent from '../Main/components/DisclaimerComponent/DisclaimerComponent';

import './App.scss';

function App() {
	const [disclaimerState, setDisclaimerState] = useState<boolean>(false);

	function closeDisclaimer() {
		setDisclaimerState(false);
		localStorage.setItem('disclaimer', 'accepted');
	}

	useEffect(() => {
		const disclaimerLocalState = localStorage.getItem('disclaimer');
		if (disclaimerLocalState !== 'accepted') {
			setTimeout(() => setDisclaimerState(true), 3000);
			localStorage.setItem('disclaimer', 'true');
		}
	}, []);

	return (
		<HelmetProvider>
			<div className='App'>
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
				<ScrollToTop />
				<Header />
				{disclaimerState ? (
					<DisclaimerComponent closeDisclaimer={closeDisclaimer} />
				) : undefined}
				<Outlet />
				<Footer />
			</div>
		</HelmetProvider>
	);
}

export default App;
