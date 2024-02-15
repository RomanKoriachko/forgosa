import React from 'react';

import './PageTitle.scss';

type Props = {
	image: string;
	title: string;
};

const PageTitle = ({ image, title }: Props) => {
	return (
		<div
			className='page-title-wrapper'
			style={{ backgroundImage: `url('../../../images/${image}')` }}
		>
			<div className='page-title'>{title}</div>
			<div className='page-title-bg'></div>
		</div>
	);
};

export default PageTitle;
