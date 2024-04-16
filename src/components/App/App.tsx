import React from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { Outlet } from 'react-router-dom';
import { ScrollToTop } from '../../common';

import './App.scss';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
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
				<Outlet />
				<Footer />
			</div>
		</HelmetProvider>
	);
}

export default App;
