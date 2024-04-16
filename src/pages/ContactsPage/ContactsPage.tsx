import React from 'react';

import './ContactsPage.scss';
import { FormComponent, PageTitle } from '../../common';
import { Helmet } from 'react-helmet-async';
import { Element, Link } from 'react-scroll';

type Props = {};

const ContactsPage = (props: Props) => {
	return (
		<section className='contacts-page-section'>
			<Helmet>
				<title>Fogrosa - Contacts</title>
				<meta property='og:title' content='Fogrosa - Contacts' />
				<meta property='telegram:title' content='Fogrosa - Contacts' />
				<meta
					name='description'
					content='FOGROSA - a leading group of petroleum companies committed to ensuring reliable fuel deliveries to the farthest corners of the globe.'
				/>
				<meta
					property='og:description'
					content='FOGROSA - a leading group of petroleum companies committed to ensuring reliable fuel deliveries to the farthest corners of the globe.'
				/>
				<meta
					property='telegram:description'
					content='FOGROSA - a leading group of petroleum companies committed to ensuring reliable fuel deliveries to the farthest corners of the globe.'
				/>
			</Helmet>
			<PageTitle image='contacts-bg-img.jpg' title='Contact us' />
			<div className='small-container'>
				<div className='row contacts-row'>
					<div className='contacts-content'>
						<p className='contacts-title'>
							Start your journey of cooperation with us now
						</p>
						<p className='contacts-text'>
							Our company specializes in the supply of fuel to customers
							worldwide, with a focus on Southeast Asia and the Middle East
							regions.
						</p>
						<div className='contact-item-phone'>
							<div className='row contacts-item-row'>
								<div className='item-img item-img-phone'></div>
								<div>
									<p className='contacts-subtitle'>Call Us</p>
									<p className='contacts-text'>+1 (786) 707-06-06</p>
								</div>
							</div>
						</div>
						<div className='contact-item-locations'>
							<div className='row contacts-item-row'>
								<div className='item-img item-img-location'></div>
								<div>
									<p className='contacts-subtitle'>We are Here </p>
								</div>
							</div>
							<div className='row contacts-item-row contacts-item-row-country'>
								<div className='item-img item-img-uae'></div>
								<div>
									<p className='contacts-text'>
										<span>UAE:</span> Business Centre, Sharjah Publishing City
										Free Zone, Sharjah, United Arab Emirates
									</p>
								</div>
							</div>
							<div className='row contacts-item-row contacts-item-row-country'>
								<div className='item-img item-img-oman'></div>
								<div>
									<p className='contacts-text'>
										<span>Oman:</span> The Walk Mall Street no 6 Muscat 138,
										Sultanate of Oman, TM PO BOX 1, PC 138, SEEB, Sultanate of
										Oman
									</p>
								</div>
							</div>
							<div className='row contacts-item-row contacts-item-row-country'>
								<div className='item-img item-img-mexico'></div>
								<div>
									<p className='contacts-text'>
										<span>Mexico:</span> Blvd. Kulkulcán km. 1.5Puerto Juarez,
										Zona Hotelera, 77500 Cancún, QROO, México
									</p>
								</div>
							</div>
						</div>
						<div className='contacts-item-mail'>
							<div className='row contacts-item-row'>
								<div className='item-img item-img-mail'></div>
								<div>
									<p className='contacts-subtitle'>Write Us Anytime</p>
									<p className='contacts-text'>Sales department:</p>
									<p className='contacts-text'>
										<span>mexico@fogrosa.com,</span>
									</p>
									<p className='contacts-text'>
										<span>oman@fogrosa.com</span>
									</p>
									<p className='contacts-text'>
										Main office: <span>office@fogrosa.com</span>
									</p>
								</div>
							</div>
						</div>
						<Link to='form' smooth={true} duration={500}>
							<div className='row contacts-item-list-row'>
								<div className='contacts-item-list'></div>
								<p>Fill out the form</p>
							</div>
						</Link>
					</div>
					<div className='form-container'>
						<Element className='form-anker' name='form'></Element>
						<FormComponent title='More about you' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactsPage;
