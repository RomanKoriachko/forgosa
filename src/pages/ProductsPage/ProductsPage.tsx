import React from 'react';

import './ProductsPage.scss';
import { FormComponent, PageItemComponent, PageTitle } from '../../common';
import { useParallax } from 'react-scroll-parallax';
import { Helmet } from 'react-helmet-async';

type Props = {};

const ProductsPage = (props: Props) => {
	const linksArr = [
		{
			title: 'GASOLINE',
			text: 'Gasoline, a hydrocarbon-based fuel derived primarily from crude oil, has been a cornerstone of the global energy landscape for over a century...',
			link: 'gasoline',
		},
		{
			title: 'Petroleum',
			text: 'Petroleum fuel, a cornerstone of the modern energy landscape, encompasses a diverse range of fuels derived from crude oil—a fossil fuel extracted from...',
			link: 'petroleum',
		},
		{
			title: 'JET FUEL',
			text: 'Jet fuel, a specialized form of aviation fuel, is the lifeblood of the aviation industry, powering aircraft that connect distant corners of the globe...',
			link: 'jet_fuel',
		},
		{
			title: 'DIESEL FUEL',
			text: 'Diesel fuel, a vital component of the global energy mix, plays a pivotal role in powering a wide array of transportation and industrial applications...',
			link: 'diesel_fuel',
		},
	];

	const parallaxLeft = useParallax<HTMLDivElement>({
		translateX: [-20, 20],
		scale: [0.8, 1.2, 'easeInQuad'],
		opacity: [0.3, 2],
	});
	const parallaxRight = useParallax<HTMLDivElement>({
		translateX: [20, -20],
		scale: [0.8, 1.2, 'easeInQuad'],
		opacity: [0.3, 2],
	});

	return (
		<div className='products-page'>
			<Helmet>
				<title>Fogrosa - Products</title>
				<meta property='og:title' content='Fogrosa - Products' />
				<meta property='telegram:title' content='Fogrosa - Products' />
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
			<PageTitle image='products-bg-img.jpg' title='Products' />
			<div className='small-container'>
				<div className='products-links-row'>
					{linksArr.map((element, i) => (
						<PageItemComponent
							key={i}
							title={element.title}
							text={element.text}
							link={element.link}
						/>
					))}
				</div>
			</div>
			<div className='form-bg'>
				<div ref={parallaxLeft.ref} className='form-bg-img form-bg-img-1'></div>
				<div
					ref={parallaxRight.ref}
					className='form-bg-img form-bg-img-2'
				></div>
				<div className='form-container'>
					<FormComponent title='Send us a Message​' />
				</div>
			</div>
		</div>
	);
};

export default ProductsPage;
