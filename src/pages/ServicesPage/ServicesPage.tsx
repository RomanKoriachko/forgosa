import React from 'react';

import './ServicesPage.scss';
import { FormComponent, PageItemComponent, PageTitle } from '../../common';

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
		{
			title: 'Consulting',
			text: 'We provide consulting services to help our clients make informed decisions related to their businesses. Our...',
			link: 'consulting',
		},
	];

	return (
		<div className='services-page'>
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
					<button className='contact-container-btn'>
						<div className='row contact-container-btn-row'>
							<p>CALL NOW</p>
							<div className='arrow-img'></div>
						</div>
					</button>
				</div>
			</div>
			<div className='form-bg'>
				<div className='form-container'>
					<FormComponent title='Send us a Message​' />
				</div>
				<div className='form-bg-img'>
					<img src='../../images/subscribe-section-img-2.png' alt='' />
				</div>
			</div>
		</div>
	);
};

export default ServicesPage;
