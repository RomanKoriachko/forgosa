import React from 'react';

import './ContactsSection.scss';
import { ButtonComponent } from '../../../../common';

type Props = {};

const ContactsSection = (props: Props) => {
	return (
		<div className='footer-content'>
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
							onCLickFunction={() => console.log('test')}
							buttonText='Write to us'
							className='footer-btn'
						/>
					</div>
					<div className='footer-row-navigation'>
						<p className='footer-row-title'>Company</p>
						<p className='footer-row-item'>Home</p>
						<p className='footer-row-item'>Products</p>
						<p className='footer-row-item'>Sevice</p>
						<p className='footer-row-item'>Contact Us</p>
					</div>
					<div className='footer-row-contacts'>
						<p className='footer-row-title'>Contact</p>
						<p className='footer-row-subtitle'>+1 (786) 707-06-06</p>
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
										The Walk Mall Street no 6Muscat 138, Sultanate of Oman, TM
										PO BOX 1, PC 138, SEEB, Sultanate of Oman
									</p>
									<p className='footer-row-address-item-bold'>
										oman@fogrosa.com
									</p>
									<p className='footer-row-address-item-bold'>www.fogrosa.ae</p>
								</div>
							</div>
							<div className='footer-row-address footer-row-address-3'>
								<div className='footer-row-address-img'></div>
								<div className='footer-row-address-content'>
									<p className='footer-row-address-item'>Mexico OFFICE:</p>
									<p className='footer-row-address-item'>
										Blvd. Kulkulcán km. 1.5Puerto Juarez, Zona Hotelera, 77500
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
