import React from 'react';

import './ProductsPage.scss';
import { FormComponent, PageItemComponent, PageTitle } from '../../common';

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

	return (
		<div className='products-page'>
			<PageTitle image='products-bg-img.png' title='Products' />
			<div className='small-container'>
				<div className='row products-links-row'>
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
				<div className='form-container'>
					<FormComponent title='Send us a Message​' />
				</div>
			</div>
		</div>
	);
};

export default ProductsPage;
