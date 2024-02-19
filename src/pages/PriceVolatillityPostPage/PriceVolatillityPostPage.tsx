import React from 'react';

import './PriceVolatillityPostPage.scss';
import { PageTitle } from '../../common';

type Props = {};

const PriceVolatillityPostPage = (props: Props) => {
	return (
		<div className='price-volatillity-post-page'>
			<PageTitle
				image='price-volatility-post-img.png'
				title='Price Volatility and Forecasting'
			/>
		</div>
	);
};

export default PriceVolatillityPostPage;
