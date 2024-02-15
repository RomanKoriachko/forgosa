import React from 'react';

import './SubscribeSection.scss';

type Props = {};

const SubscribeSection = (props: Props) => {
	return (
		<section className='subscribe-section'>
			<div className='subscribe-bg-1'></div>
			<div className='subscribe-bg-2'></div>
			<div className='small-container'>
				<div className='subscribe-form row'>
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
