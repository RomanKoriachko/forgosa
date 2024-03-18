import React from 'react';

import './PageTitle.scss';
import { Link } from 'react-router-dom';

type Props = {
	image: string;
	title: string;
	link?: string;
	subtitle?: string;
};

const PageTitle = ({ image, title, link, subtitle }: Props) => {
	return (
		<div
			className='page-title-wrapper'
			style={{ backgroundImage: `url('../../../images/${image}')` }}
		>
			<div className='page-title-container'>
				<p className='page-title'>{title}</p>
				{link && link !== '/' ? (
					<Link to={`/${link}`} className='page-title-link'>
						<div className='row page-link-row'>
							<div className='arrow-img'></div>
							<p className='page-link-text'>all {link}</p>
						</div>
					</Link>
				) : link === '/' ? (
					<Link to='/' className='page-title-link'>
						<div className='row page-link-row'>
							<div className='arrow-img'></div>
							<p className='page-link-text'>HOME</p>
						</div>
					</Link>
				) : (
					<div className='row page-link-row'>
						<p className='page-subtitle'>{subtitle}</p>
					</div>
				)}
			</div>
			<div className='page-title-bg'></div>
		</div>
	);
};

export default PageTitle;
