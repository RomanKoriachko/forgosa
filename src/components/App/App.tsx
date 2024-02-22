import React from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { Outlet } from 'react-router-dom';
import { ScrollToTop } from '../../common';

import './App.scss';
import { HelmetProvider } from 'react-helmet-async';

function App() {
	return (
		<HelmetProvider>
			<div className='App'>
				<ScrollToTop />
				<Header />
				<Outlet />
				<Footer />
			</div>
		</HelmetProvider>
	);
}

export default App;
