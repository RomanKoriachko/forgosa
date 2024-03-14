import React from 'react';

import Flicking from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css';

import './LinksSlider.scss';
import { NavLink } from 'react-router-dom';

type Props = {
	index: number;
};

const LinksSlider = ({ index }: Props) => {
	return (
		<div className='links-slider'>
			<div className='container'>
				<Flicking circular={true} defaultIndex={index}>
					<div className='slider-item'>
						<NavLink
							to='/faq/key_transactions_procedures'
							className={({ isActive }) => (isActive ? 'active' : '')}
						>
							KEY TRANSACTION PROCEDURES & TERMS OF DELIVERY
						</NavLink>
					</div>
					<div className='slider-item'>
						<NavLink
							to='/faq/crude_oil_and_petroleum_products'
							className={({ isActive }) => (isActive ? 'active' : '')}
						>
							crude oil & petroleum products
						</NavLink>
					</div>
					<div className='slider-item'>
						<NavLink
							to='/faq/petroleum_refining_processes'
							className={({ isActive }) => (isActive ? 'active' : '')}
						>
							PETROLEUM REFINING PROCESSES
						</NavLink>
					</div>
					<div className='slider-item'>
						<NavLink
							to='/faq/types_of_tankers'
							className={({ isActive }) => (isActive ? 'active' : '')}
						>
							TYPES OF MODERN OIL TANKERS
						</NavLink>
					</div>
					<div className='slider-item'>
						<NavLink
							to='/faq/dictionary'
							className={({ isActive }) => (isActive ? 'active' : '')}
						>
							dictionary
						</NavLink>
					</div>
				</Flicking>
			</div>
			<div className='container'>
				<div className='underline'></div>
			</div>
		</div>
	);
};

export default LinksSlider;
