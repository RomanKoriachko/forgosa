import React, { useEffect } from 'react';

import { PageTitle } from '../../common';
import { Helmet } from 'react-helmet-async';
import { LinksSlider } from './components';
import { useLocation, useNavigate } from 'react-router-dom';

import './FaqPage.scss';

type Props = {};

const FaqPage = (props: Props) => {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (location.pathname === '/knowledge_base') {
			navigate('/knowledge_base/dictionary');
		}
	}, [location.pathname, navigate]);

	return (
		<div>
			<Helmet>
				<title>Fogrosa - FAQ</title>
				<meta property='og:title' content='Fogrosa - FAQ' />
				<meta property='telegram:title' content='Fogrosa - FAQ' />
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
			<PageTitle image='faq-bg-img.jpg' title='knowledge base' />
			<LinksSlider index={0} />
		</div>
	);
};

export default FaqPage;
