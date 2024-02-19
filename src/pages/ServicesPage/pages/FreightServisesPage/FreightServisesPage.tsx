import React from 'react';

import './FreightServisesPage.scss';
import { PageTitle } from '../../../../common';

type Props = {};

const FreightServisesPage = (props: Props) => {
	return (
		<div className='freight-sevrices-page'>
			<PageTitle
				image='freight-services-img.png'
				title='Freight Services'
				link='services'
			/>
		</div>
	);
};

export default FreightServisesPage;
