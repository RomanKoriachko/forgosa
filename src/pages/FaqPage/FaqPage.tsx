import React from 'react';

import { PageTitle } from '../../common';

import './FaqPage.scss';
import { Helmet } from 'react-helmet-async';

type Props = {};

const FaqPage = (props: Props) => {
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
		</div>
	);
};

export default FaqPage;
