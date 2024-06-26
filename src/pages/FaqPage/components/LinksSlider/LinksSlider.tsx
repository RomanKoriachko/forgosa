import React from 'react';

import Flicking from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css';

import { NavLink } from 'react-router-dom';
import './LinksSlider.scss';

type Props = {
	index: number;
};

const LinksSlider = ({ index }: Props) => {
	function scrollTo100vh() {
		const screenHeight =
			window.innerHeight || document.documentElement.clientHeight;
		let scrollToPixels;
		if (window.innerWidth > 770) {
			scrollToPixels = screenHeight * 1.0 - 100;
		} else if (window.innerWidth <= 770 && window.innerWidth > 576) {
			scrollToPixels = screenHeight * 1.0 - 130;
		} else if (window.innerWidth <= 576) {
			scrollToPixels = screenHeight * 1.0 - 110;
		}
		window.scrollTo({
			top: scrollToPixels,
			left: 0,
			behavior: 'smooth',
		});
	}

	return (
		<div className='links-slider'>
			<div className='container'>
				<Flicking circular={true} defaultIndex={index}>
					<div className='slider-item' onClick={scrollTo100vh}>
						<NavLink
							to='/knowledge_base/key_transactions_procedures'
							className={({ isActive }) => (isActive ? 'active' : '')}
						>
							KEY TRANSACTION PROCEDURES & TERMS OF DELIVERY
						</NavLink>
					</div>
					<div className='slider-item' onClick={scrollTo100vh}>
						<NavLink
							to='/knowledge_base/crude_oil_and_petroleum_products'
							className={({ isActive }) => (isActive ? 'active' : '')}
						>
							crude oil & petroleum products
						</NavLink>
					</div>
					<div className='slider-item' onClick={scrollTo100vh}>
						<NavLink
							to='/knowledge_base/petroleum_refining_processes'
							className={({ isActive }) => (isActive ? 'active' : '')}
						>
							PETROLEUM REFINING PROCESSES
						</NavLink>
					</div>
					<div className='slider-item' onClick={scrollTo100vh}>
						<NavLink
							to='/knowledge_base/types_of_tankers'
							className={({ isActive }) => (isActive ? 'active' : '')}
						>
							TYPES OF MODERN OIL TANKERS
						</NavLink>
					</div>
					<div className='slider-item' onClick={scrollTo100vh}>
						<NavLink
							to='/knowledge_base/dictionary'
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
