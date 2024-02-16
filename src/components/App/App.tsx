import React from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { Outlet } from 'react-router-dom';
import { ScrollToTop } from '../../common';

import './App.scss';

function App() {
	return (
		<div className='App'>
			<ScrollToTop />
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
