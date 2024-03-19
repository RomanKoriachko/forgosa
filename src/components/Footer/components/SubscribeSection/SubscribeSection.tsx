import React from 'react';

import './SubscribeSection.scss';
import { useParallax } from 'react-scroll-parallax';
import { useLocation } from 'react-router-dom';

type Props = {};

const SubscribeSection = (props: Props) => {
	const parallaxLeft = useParallax<HTMLDivElement>({
		speed: -10,
		rotate: [-15, 15],
		scale: [0.6, 1, 'easeInQuad'],
	});
	const parallaxRight = useParallax<HTMLDivElement>({
		speed: -10,
		rotate: [-25, -35],
		scale: [0.7, 1, 'easeInQuad'],
	});

	const location = useLocation();

	return (
		<section className='subscribe-section'>
			<div className='subscribe-bg-static'></div>
			<div ref={parallaxLeft.ref} className='subscribe-bg-1'></div>
			<div
				ref={parallaxRight.ref}
				className={`subscribe-bg-2 ${location.pathname === '/' ? 'hide' : ''}`}
			></div>
			<div className='small-container'>
				<div className='subscribe-form row'>
					<div className='page-logo-transparent'></div>
					<div className='subscribe-form-text'>
						<p>We encourage you to subscribe to us. </p>
						<p>
							We will send you only <span>up-to-date</span> quotes.
						</p>
					</div>
					<form className='form row'>
						<input
							className='form-input'
							type='text'
							placeholder='Enter your email'
						/>
						<button className='form-btn'>Submit</button>
					</form>
				</div>
				<div className='form-glowing'></div>
			</div>
		</section>
	);
};

export default SubscribeSection;
