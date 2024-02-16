import React from 'react';

import './GasolinePage.scss';
import { PageTitle } from '../../../../common';

type Props = {};

const GasolinePage = (props: Props) => {
	return (
		<div className='gasoline-page'>
			<PageTitle
				image='gasoline-page-img.png'
				title='Gasoline'
				link='/products'
			/>
		</div>
	);
};

export default GasolinePage;
