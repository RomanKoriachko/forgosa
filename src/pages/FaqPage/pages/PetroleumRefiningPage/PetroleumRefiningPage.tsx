import React from 'react';

import './PetroleumRefiningPage.scss';
import { PageTitle } from '../../../../common';
import { LinksSlider } from '../../components';

type Props = {};

const PetroleumRefiningPage = (props: Props) => {
	return (
		<div className='petroleum-refining-page'>
			<PageTitle
				image='faq-bg-img.png'
				title='FAQ'
				subtitle='PETROLEUM REFINING PROCESSES'
			/>
			<LinksSlider index={2} />
		</div>
	);
};

export default PetroleumRefiningPage;
