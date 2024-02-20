import React from 'react';

import './SubscribeSection.scss';
import { useParallax } from 'react-scroll-parallax';

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

	return (
		<section className='subscribe-section'>
			<div ref={parallaxLeft.ref} className='subscribe-bg-1'></div>
			<div ref={parallaxRight.ref} className='subscribe-bg-2'></div>
			<div className='small-container'>
				<div className='subscribe-form row'>
					<div className='page-logo-transparent'></div>
					<div className='subscribe-form-text'>
						<p>We encourage you to subscribe to us. </p>
						<p>We will send you only up-to-date quotes.</p>
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
