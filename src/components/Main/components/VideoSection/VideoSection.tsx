import React from 'react';

import './VideoSection.scss';

type Props = {};

const LogoSection = (props: Props) => {
	return (
		<section className='video-section'>
			<video
				src='video/video_2024-02-12_16-09-41.mp4'
				className='video-bg'
				preload='auto'
				poster='images/video-preview.png'
				autoPlay
				muted
				loop
				playsInline
			></video>
			<div className='video-section-img'>
				<img src='../../../../images/big-logo.png' alt='' />
			</div>
		</section>
	);
};

export default LogoSection;
