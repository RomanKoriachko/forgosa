import React from 'react';

import './JetFuelPage.scss';
import { PageTitle } from '../../../../common';

type Props = {};

const JetFuelPage = (props: Props) => {
	return (
		<div className='jet-fuel-page'>
			<PageTitle
				image='jet-fuel-page-img.png'
				title='Jet Fuel'
				link='/products'
			/>
		</div>
	);
};

export default JetFuelPage;
