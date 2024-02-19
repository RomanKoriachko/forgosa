import React from 'react';

import './EnvironmentalPostPage.scss';
import { PageTitle } from '../../common';

type Props = {};

const EnvironmentalPostPage = (props: Props) => {
	return (
		<div className='environmental-post-page'>
			<PageTitle
				image='environmental-regulations-post-img.jpg'
				title='Environmental Regulations and Sustainable Practices'
			/>
		</div>
	);
};

export default EnvironmentalPostPage;
