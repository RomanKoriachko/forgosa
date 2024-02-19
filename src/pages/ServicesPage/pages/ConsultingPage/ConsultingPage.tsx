import React from 'react';

import './ConsultingPage.scss';
import { PageTitle } from '../../../../common';

type Props = {};

const ConsultingPage = (props: Props) => {
	return (
		<div className='consalting-page'>
			<PageTitle
				image='consulting-page-img.png'
				title='Consulting'
				link='services'
			/>
		</div>
	);
};

export default ConsultingPage;
