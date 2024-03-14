import React from 'react';

import './KeyTransactionPage.scss';
import { PageTitle } from '../../../../common';
import { LinksSlider } from '../../components';

type Props = {};

const KeyTransactionPage = (props: Props) => {
	return (
		<div className='key-transactions-page'>
			<PageTitle
				image='faq-bg-img.png'
				title='FAQ'
				subtitle='KEY TRANSACTION PROCEDURES & TERMS OF DELIVERY'
			/>
			<LinksSlider index={0} />
		</div>
	);
};

export default KeyTransactionPage;
