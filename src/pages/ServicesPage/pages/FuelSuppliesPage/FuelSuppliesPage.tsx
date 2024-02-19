import React from 'react';

import './FuelSuppliesPage.scss';
import { PageTitle } from '../../../../common';

type Props = {};

const FuelSuppliesPage = (props: Props) => {
	return (
		<div className='fiel-supplies-page'>
			<PageTitle
				image='fuel-supplies-page-img.png'
				title='Fuel supplies'
				link='services'
			/>
		</div>
	);
};

export default FuelSuppliesPage;
