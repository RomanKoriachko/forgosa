import React from 'react';

import './DictionaryPage.scss';
import { PageTitle } from '../../../../common';
import { LinksSlider } from '../../components';

type Props = {};

const DictionaryPage = (props: Props) => {
	return (
		<div className='dictionary-page'>
			<PageTitle image='faq-bg-img.png' title='FAQ' subtitle='dictionary' />
			<LinksSlider index={4} />
		</div>
	);
};

export default DictionaryPage;
