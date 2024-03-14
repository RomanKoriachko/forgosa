import React, { useEffect } from 'react';

import { PageTitle } from '../../common';

import './FaqPage.scss';
import { Helmet } from 'react-helmet-async';
import { LinksSlider } from './components';
import { useLocation, useNavigate } from 'react-router-dom';

type Props = {};

const FaqPage = (props: Props) => {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (location.pathname === '/faq') {
			navigate('/faq/dictionary');
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
			<PageTitle image='faq-bg-img.png' title='FAQ' />
			<LinksSlider index={0} />
		</div>
	);
};

export default FaqPage;
