import React from 'react';

import './PetroleumPage.scss';
import { PageTitle } from '../../../../common';

type Props = {};

const PetroleumPage = (props: Props) => {
	return (
		<div className='petroleum-page'>
			<PageTitle
				image='petroleum-page-img.jpg'
				title='Petroleum'
				link='/products'
			/>
		</div>
	);
};

export default PetroleumPage;
