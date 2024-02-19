import React from 'react';

import './PageTitle.scss';
import { Link } from 'react-router-dom';

type Props = {
	image: string;
	title: string;
	link?: string;
};

const PageTitle = ({ image, title, link }: Props) => {
	return (
		<div
			className='page-title-wrapper'
			style={{ backgroundImage: `url('../../../images/${image}')` }}
		>
			<div className='page-title'>
				<p>{title}</p>
				{link ? (
					<Link to={`/${link}`} className='page-title-link'>
						<div className='row page-link-row'>
							<div className='arrow-img'></div>
							<p className='page-link-text'>all {link}</p>
						</div>
					</Link>
				) : undefined}
			</div>
			<div className='page-title-bg'></div>
		</div>
	);
};

export default PageTitle;
