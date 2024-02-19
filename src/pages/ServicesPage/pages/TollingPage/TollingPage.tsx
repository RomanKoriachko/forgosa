import React from 'react';

import './TollingPage.scss';
import { PageTitle } from '../../../../common';

type Props = {};

const TollingPage = (props: Props) => {
	return (
		<div className='tolling-page'>
			<PageTitle image='tolling-page-img.png' title='Tolling' link='services' />
		</div>
	);
};

export default TollingPage;
