import React from 'react';
import './ExperienceSection.scss';
import { useParallax } from 'react-scroll-parallax';
import { Element } from 'react-scroll';

type Props = {};

const ExperienceSection = (props: Props) => {
	const parallaxLeft = useParallax<HTMLDivElement>({
		speed: -10,
		translateX: [-20, 5],
		scale: [0.7, 1.2, 'easeInQuad'],
		opacity: [0.3, 2],
	});
	const parallaxRight = useParallax<HTMLDivElement>({
		speed: -10,
		translateX: [20, -5],
		scale: [0.7, 1.2, 'easeInQuad'],
		opacity: [0.3, 2],
	});

	return (
		<section className='experience-section'>
			<Element className='experience-sectio-anker' name='experience'></Element>
			<div
				ref={parallaxLeft.ref}
				className='experience-section-bg experience-section-bg-1'
			></div>
			<div
				ref={parallaxRight.ref}
				className='experience-section-bg experience-section-bg-2'
			></div>
			<div className='small-container'>
				<div className='experience-title-wrapper'>
					<p className='experience-title'>our team's experience</p>
					<p className='experience-subtitle'>
						Our company specializes in the supply of fuel to customers
						worldwide, with a focus on Southeast Asia and the Middle East
						regions.
					</p>
				</div>
				<div className='experience-content-wrapper'>
					<p className='experience-text'>
						Welcome to the world of FOGROSA – a leading group of petroleum
						companies committed to ensuring reliable fuel deliveries to the
						farthest corners of the globe. We specialize in delivering various
						types of fuel to countries in the Middle East, Africa, South
						America, Southeast Asia, Europe, and beyond.
					</p>
					<p className='experience-text'>
						Our extensive expertise in global supply chains guarantees the
						highest standards of reliability and quality. Beyond merely
						providing fuel, we offer you a wide range of tolling services,
						ensuring flexibility and efficiency in your business operations.
					</p>
					<p className='experience-text'>
						FOGROSA’s experience in the oil industry encompasses all aspects,
						from the supply of raw materials – light and heavy crude oil,
						various blends – to our outstanding technological solutions. We take
						pride in being a dependable partner for the successful development
						of your business, regardless of your location. Fogrosa is your
						pathway to global success in the oil industry.{' '}
					</p>
					<p>YOUR TRUST, OUR ENERGY</p>
					<p>FOGROSA TM</p>
				</div>
			</div>
		</section>
	);
};

export default ExperienceSection;
