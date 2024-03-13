import React from 'react';

import './TollingPage.scss';
import { PageSidebar, PageTitle } from '../../../../common';
import { Helmet } from 'react-helmet-async';

type Props = {};

const TollingPage = (props: Props) => {
	return (
		<div className='tolling-page'>
			<Helmet>
				<title>Fogrosa - Tolling</title>
				<meta property='og:title' content='Fogrosa - Tolling' />
				<meta property='telegram:title' content='Fogrosa - Tolling' />
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
			<PageTitle image='tolling-page-img.png' title='Tolling' link='services' />
			<div className='small-container'>
				<div className='page-container'>
					<div className='page-content'>
						<p className='service-title'>
							Comprehensive Solutions for Optimal Performance
						</p>
						<p className='page-content-text'>
							At FOGROSA, we go beyond being a mere supplier; we are your
							comprehensive solution provider in the intricate world of oil
							refining. Our commitment extends beyond delivering raw materials,
							encompassing a suite of services meticulously designed to elevate
							your operational efficiency and ensure a consistent stream of
							top-tier resources.
						</p>
						<p className='service-subtitle'>
							Diverse Crude Options: Precision in Every Blend
						</p>
						<p className='page-content-text'>
							Our specialization extends beyond supplying light and heavy crude;
							we take pride in offering a diverse array of blends tailored
							precisely to your specifications. With group of petroleum
							companies FOGROSA, expect nothing less than a commitment to
							excellence in the quality of raw materials, making us the
							preferred choice for all your production requirements.
						</p>
						<div className='page-content-img-wrapper'>
							<img
								src='../../../../../images/tolling-page-content-img.png'
								alt='gasoline article'
							/>
						</div>
						<p className='service-subtitle'>
							Adaptable Tolling: Your Process, Your Way
						</p>
						<p className='page-content-text'>
							FOGROSA stands out by providing adaptable tolling conditions,
							granting our partners the flexibility needed to fine-tune their
							production processes. We prioritize aligning with your
							technological needs, facilitating optimal resource utilization and
							ensuring the pinnacle of productivity in your operations.
						</p>
						<p className='service-subtitle'>
							Pioneering Technology and Environmental Stewardship
						</p>
						<p className='page-content-text'>
							In our pursuit of excellence, we integrate cutting-edge
							technologies into the fabric of oil refining, championing
							sustainable development and minimizing environmental impact. A
							partnership with Fogrosa is a commitment to embracing
							eco-conscious practices while ensuring the highest standards of
							efficiency in production.
						</p>
						<p className='service-subtitle'>
							Enduring Partnerships for Sustained Success
						</p>
						<p className='page-content-text'>
							At FOGROSA, we cherish enduring relationships and uphold
							unwavering transparency throughout our collaboration journey.
							Consider us not just a supplier but a reliable partner,
							steadfastly dedicated to supporting your business and propelling
							your oil refining endeavors towards resounding success.
						</p>
						<p className='page-content-text'>
							FOGROSA extends a warm invitation to oil refineries seeking
							collaboration. Beyond delivering top-notch raw materials, we stand
							ready to offer bespoke solutions tailored to elevate your
							production. Contact us today to initiate a conversation on how
							FOGROSA can be the catalyst for achieving new heights in your
							business.
						</p>
					</div>
					<PageSidebar />
				</div>
			</div>
		</div>
	);
};

export default TollingPage;
