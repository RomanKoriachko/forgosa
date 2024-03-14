import React from 'react';

import './TypesOfTankersPage.scss';
import { PageTitle } from '../../../../common';
import { LinksSlider } from '../../components';

type Props = {};

const TypesOfTankersPage = (props: Props) => {
	return (
		<div className='types-of-tankers-page'>
			<PageTitle
				image='faq-bg-img.png'
				title='FAQ'
				subtitle='TYPES OF MODERN OIL TANKERS'
			/>
			<LinksSlider index={3} />
		</div>
	);
};

export default TypesOfTankersPage;
