import React from 'react';

import './FuelSuppliesPage.scss';
import { PageSidebar, PageTitle } from '../../../../common';
import { Helmet } from 'react-helmet-async';

type Props = {};

const FuelSuppliesPage = (props: Props) => {
	return (
		<div className='fiel-supplies-page'>
			<Helmet>
				<title>Fogrosa - Fuel Supplies</title>
				<meta property='og:title' content='Fogrosa - Fuel Supplies' />
				<meta property='telegram:title' content='Fogrosa - Fuel Supplies' />
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
			<PageTitle
				image='fuel-supplies-page-img.jpg'
				title='Fuel Supplies'
				link='services'
			/>
			<div className='small-container'>
				<div className='page-container'>
					<div className='page-content'>
						<p className='service-title'>
							Welcome to FOGROSA Fuel Supply: Fuelling Success Across the Globe
						</p>
						<p className='page-content-text'>
							At FOGROSA, our commitment to excellence extends beyond oil
							refining, encompassing a global presence in fuel supply. As a
							consortium of leading oil companies, we take pride in delivering a
							diverse range of high-quality fuels to destinations worldwide,
							ensuring reliability, efficiency, and sustainability.
						</p>
						<p className='service-subtitle'>
							Global Fuel Portfolio: From Jet Fuel to Marine Diesel
						</p>
						<p className='page-content-text'>
							Our extensive portfolio covers a spectrum of fuels tailored to
							meet the dynamic needs of diverse industries. From aviation to
							maritime, we supply top-tier jet fuels, marine diesel, and
							everything in between. FOGROSA stands as your one-stop solution
							for premium fuels, facilitating seamless operations across
							continents.
						</p>
						<div className='page-content-img-wrapper'>
							<img
								src='../../../../../images/fuel-supplies-page-content-img.jpg'
								alt='gasoline article'
							/>
						</div>
						<p className='service-subtitle'>
							Aviation Fuels: Soaring High with Quality
						</p>
						<p className='page-content-text'>
							Group of petroleum companies FOGROSA ensures a steady supply of
							aviation fuels, meeting stringent industry standards. Whether you
							operate a bustling international airport or a regional airfield,
							trust us to provide jet fuels that propel your aircraft to new
							heights with unmatched efficiency and reliability.
						</p>
						<p className='service-subtitle'>
							Marine Fuels: Navigating Oceans of Possibilities
						</p>
						<p className='page-content-text'>
							Our commitment to the maritime industry is unwavering. FOGROSA
							supplies marine diesel fuels that power vessels across the globe.
							With a focus on quality and compliance, we contribute to the
							smooth sailing of your maritime operations, ensuring reliability
							in every nautical mile.
						</p>
						<p className='service-subtitle'>
							Industrial and Commercial Fuels: Powering Progress Worldwide
						</p>
						<p className='page-content-text'>
							From industrial plants to commercial enterprises, Fogrosa delivers
							fuels that fuel progress. We understand the unique energy
							requirements of various sectors and provide tailored solutions to
							power your machinery, vehicles, and operations with maximum
							efficiency
						</p>
						<p className='service-subtitle'>
							Global Reach, Local Excellence: Our Supply Chain Advantage
						</p>
						<p className='page-content-text'>
							FOGROSA’s global network ensures that our top-quality fuels reach
							you wherever you are. With a robust supply chain and logistics
							expertise, we navigate regulatory landscapes seamlessly,
							delivering excellence from refineries to your doorstep.
						</p>
						<p className='service-subtitle'>
							Environmental Responsibility: Sustainable Fuels for a Sustainable
							Future
						</p>
						<p className='page-content-text'>
							FOGROSA is committed to environmental stewardship. We offer
							eco-friendly fuel options, contributing to a greener future. Our
							sustainable fuels align with global initiatives for reducing
							carbon footprints, allowing you to make environmentally conscious
							choices without compromising performance.
						</p>
						<p className='page-content-text'>
							Embark on a journey of reliable fuel supply with FOGROSA. Explore
							our comprehensive range of fuels designed to power industries,
							connect continents, and drive progress. Contact us today to
							discuss how FOGROSA can be your trusted partner in meeting all
							your fuel requirements, ensuring success on a global scale.
						</p>
					</div>
					<PageSidebar />
				</div>
			</div>
		</div>
	);
};

export default FuelSuppliesPage;
