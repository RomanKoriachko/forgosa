import React from 'react';

import './CrudeOilPage.scss';
import { PageTitle } from '../../../../common';
import { LinksSlider } from '../../components';

type Props = {};

const CrudeOilPage = (props: Props) => {
	return (
		<div className='crude-oil-page'>
			<PageTitle
				image='faq-bg-img.png'
				title='FAQ'
				subtitle='crude oil & petroleum products'
			/>
			<LinksSlider index={1} />
		</div>
	);
};

export default CrudeOilPage;
