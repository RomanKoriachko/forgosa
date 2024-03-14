import React from 'react';

import './PageButtons.scss';
import { useLocation } from 'react-router-dom';

type Props = {};

const PageButtons = (props: Props) => {
	const location = useLocation();

	return (
		<div className='page-btn-row'>
			<button className='page-btn-item page-btn-download'>
				{location.pathname.includes('/faq/')
					? 'Download'
					: 'Download Specification'}
			</button>
			<button className='page-btn-item page-btn-form'>Fill out the form</button>
		</div>
	);
};

export default PageButtons;
