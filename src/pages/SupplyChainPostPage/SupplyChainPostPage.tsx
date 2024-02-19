import React from 'react';

import './SupplyChainPostPage.scss';
import { PageTitle } from '../../common';

type Props = {};

const SupplyChainPostPage = (props: Props) => {
	return (
		<div className='supply-chain-post-page'>
			<PageTitle
				image='supply-chain-post-img.png'
				title='Supply Chain Resilience and Geopolitical Risks'
			/>
		</div>
	);
};

export default SupplyChainPostPage;
