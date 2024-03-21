import React, { useState } from 'react';

import { ButtonComponent, PopUpComponent } from '../../../../common';
import { Link } from 'react-router-dom';

import './ContactsSection.scss';

type Props = {};

const ContactsSection = (props: Props) => {
	const [popUpState, setPopUpState] = useState<boolean>(false);

	function openPopUp() {
		setPopUpState(true);
		document.body.style.overflow = 'hidden';
	}

	return (
		<div className='footer-content'>
			<PopUpComponent isOpen={popUpState} setPopUpState={setPopUpState} />
			<div className='container'>
				<div className='footer-row'>
					<div className='footer-row-logo-wrapper'>
						<div className='footer-logo'></div>
						<p className='footer-logo-wrapper-subtitle'>
							Your TRUST, our ENERGY
						</p>
						<p className='footer-logo-wrapper-title'>
							DISCUSSION NOW TO COLLABORATE
						</p>
						<ButtonComponent
							onCLickFunction={() => openPopUp()}
							buttonText='Write to us'
							className='footer-btn'
						/>
					</div>
					<div className='footer-row-navigation'>
						<div>
							<p className='footer-row-title'>Company</p>
							<Link to='/'>
								<p className='footer-row-item'>Home</p>
							</Link>
							<Link to='/products'>
								<p className='footer-row-item'>Products</p>
							</Link>
							<Link to='/services'>
								<p className='footer-row-item'>Sevice</p>
							</Link>
							<Link to='/contacts'>
								<p className='footer-row-item'>Contact Us</p>
							</Link>
							<Link to='/faq'>
								<p className='footer-row-item'>FAQ</p>
							</Link>
						</div>
						<div className='footer-row-contacts-container-tablet'>
							<p className='footer-row-title'>Contact</p>
							<p className='footer-row-subtitle'>+1 (786) 707-06-06</p>
						</div>
					</div>
					<div className='footer-row-contacts'>
						<div className='footer-row-contacts-container'>
							<p className='footer-row-title'>Contact</p>
							<p className='footer-row-subtitle'>+1 (786) 707-06-06</p>
						</div>
						<div className='footer-row-addresses'>
							<div className='footer-row-address footer-row-address-1'>
								<div className='footer-row-address-img'></div>
								<div className='footer-row-address-content'>
									<p className='footer-row-address-item'>UAE OFFICE:</p>
									<p className='footer-row-address-item'>
										M05-0190 Unique Adventure Business Centre, Building PR1005,
										Port Saeed, Dubai, UAE
									</p>
									<p className='footer-row-address-item-bold'>
										office@fogrosa.com
									</p>
								</div>
							</div>
							<div className='footer-row-address footer-row-address-2'>
								<div className='footer-row-address-img'></div>
								<div className='footer-row-address-content'>
									<p className='footer-row-address-item'>Oman OFFICE:</p>
									<p className='footer-row-address-item'>
										The Walk Mall Street no 6 Muscat 138, Sultanate of Oman, TM
										PO BOX 1, PC 138, SEEB, Sultanate of Oman
									</p>
									<p className='footer-row-address-item-bold'>
										oman@fogrosa.com
									</p>
								</div>
							</div>
							<div className='footer-row-address footer-row-address-3'>
								<div className='footer-row-address-img'></div>
								<div className='footer-row-address-content'>
									<p className='footer-row-address-item'>Mexico OFFICE:</p>
									<p className='footer-row-address-item'>
										Blvd. Kulkulcán km. 1.5 Puerto Juarez, Zona Hotelera, 77500
										Cancún, QROO, México
									</p>
									<p className='footer-row-address-item-bold'>
										mexico@fogrosa.com
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<p className='footer-copyright'>
					<span>FOGROSA</span> © 2015-2024, All Rights Reserved
				</p>
			</div>
		</div>
	);
};

export default ContactsSection;
