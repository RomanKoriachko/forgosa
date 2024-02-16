import React from 'react';
import { Link } from 'react-router-dom';

import './PageItemComponent.scss';

type Props = {
	title: string;
	text: string;
	link: string;
};

const PageItemComponent = ({ title, text, link }: Props) => {
	return (
		<div className='page-item'>
			<p className='page-item-title'>{title}</p>
			<p className='page-item-text'>{text}</p>
			<Link to={`./${link}`}>
				<div className='row page-item-link'>
					<div>View info</div>
					<div className='arrow-img'></div>
				</div>
			</Link>
		</div>
	);
};

export default PageItemComponent;
