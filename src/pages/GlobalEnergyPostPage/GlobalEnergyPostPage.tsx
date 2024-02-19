import React from 'react';

import './GlobalEnergyPostPage.scss';
import { PageTitle } from '../../common';

type Props = {};

const GlobalEnergyPostPage = (props: Props) => {
	return (
		<div className='global-energy-post-page'>
			<PageTitle
				image='global-energy-post-img.png'
				title='Global Energy Market Trends and Analysis'
			/>
		</div>
	);
};

export default GlobalEnergyPostPage;
