import React from 'react';

import './DieselFuelPage.scss';
import { PageTitle } from '../../../../common';

type Props = {};

const DieselFuelPage = (props: Props) => {
	return (
		<div className='diesel-fuel-page'>
			<PageTitle
				image='diesel-fuel-page-img.png'
				title='Diesel Fuel'
				link='/products'
			/>
		</div>
	);
};

export default DieselFuelPage;
