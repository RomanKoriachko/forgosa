import React from 'react';

import { FormComponent, PageItemComponent, PageTitle } from '../../common';
import { useParallax } from 'react-scroll-parallax';
import { Helmet } from 'react-helmet-async';
import { Element } from 'react-scroll';

import './ServicesPage.scss';
import { Link } from 'react-router-dom';

type Props = {};

const ServicesPage = (props: Props) => {
	const linksArr = [
		{
			title: 'Fuel supplies',
			text: 'Our company offers coal supplies for various industries that require this fossil fuel as an energy source We provide...',
			link: 'fuel_supplies',
		},
		{
			title: 'FREIGHT SERVICES',
			text: 'We offer logistic solutions to facilitate the movement of goods from one place to another. Our logistic solutions include...',
			link: 'freight_services',
		},
		{
			title: 'TOLLING',
			text: 'Fogrosa provides various types of fertilizers to meet the needs of agriculture and other related...',
			link: 'tolling',
		},
	];

	const parallaxLeft = useParallax<HTMLDivElement>({
		translateX: [-20, 20],
		scale: [0.8, 1.2, 'easeInQuad'],
		opacity: [0.3, 2],
	});
	const parallaxRight = useParallax<HTMLDivElement>({
		translateX: [20, -20],
		rotate: [-25, -25],
		scale: [0.8, 1.2, 'easeInQuad'],
		opacity: [0.3, 2],
	});

	return (
		<div className='services-page'>
			<Helmet>
				<title>Fogrosa - Services</title>
				<meta property='og:title' content='Fogrosa - Services' />
				<meta property='telegram:title' content='Fogrosa - Services' />
				<meta
					name='description'
					content='Our company specializes in the supply of fuel to customers worldwide, with a focus on Southeast Asia and the Middle East regions.'
				/>
				<meta
					property='og:description'
					content='Our company specializes in the supply of fuel to customers worldwide, with a focus on Southeast Asia and the Middle East regions.'
				/>
				<meta
					property='telegram:description'
					content='Our company specializes in the supply of fuel to customers worldwide, with a focus on Southeast Asia and the Middle East regions.'
				/>
			</Helmet>
			<PageTitle image='services-bg-img.jpg' title='Services' />
			<div className='small-container'>
				<div className='services-links-row'>
					{linksArr.map((element, i) => (
						<PageItemComponent
							key={i}
							title={element.title}
							text={element.text}
							link={element.link}
						/>
					))}
				</div>
				<div className='contact-button-container'>
					<p className='contact-container-text'>
						Contact us and we will offer you the best cooperation option
					</p>
					<Link to='/contacts'>
						<button className='contact-container-btn'>
							<div className='row contact-container-btn-row'>
								<p>CALL NOW</p>
								<div className='arrow-img'></div>
							</div>
						</button>
					</Link>
				</div>
			</div>
			<div className='form-bg'>
				<div ref={parallaxLeft.ref} className='form-bg-img form-bg-img-1'></div>
				<div
					ref={parallaxRight.ref}
					className='form-bg-img form-bg-img-2'
				></div>
				<Element className='form-anker' name='form'></Element>
				<div className='form-container'>
					<FormComponent title='Send us a Message' />
				</div>
			</div>
		</div>
	);
};

export default ServicesPage;
