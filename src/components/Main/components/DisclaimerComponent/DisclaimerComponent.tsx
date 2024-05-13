import React from 'react';

import './DisclaimerComponent.scss';
import { ButtonComponent } from '../../../../common';

type Props = {
	closeDisclaimer(): void;
};

const DisclaimerComponent = ({ closeDisclaimer }: Props) => {
	return (
		<div className='disclaimer-component'>
			<div className='disclaimer-component-bg'></div>
			<div className='disclaimer-wrapper'>
				<div className='disclaimer-close-btn' onClick={closeDisclaimer}></div>
				<p className='disclaimer-title'>Disclaimer</p>
				<div className='displaimer-text-container'>
					<p className='disclaimer-text'>
						Please be advised that scammers may attempt to use the name of
						FOGROSA company for unlawful purposes. We urge all our clients and
						partners to exercise caution and vigilance.
					</p>
					<p className='disclaimer-text'>
						FOGROSA strictly adheres to the policy of using official corporate
						email. All our employees communicate only through email addresses
						certified by the company: "NAME@fogrosa.com".
					</p>
					<p className='disclaimer-text'>
						We also want to emphasize that the FOGROSA group of petroleum
						companies is not responsible for commercial offers or the
						transmission of documents obtained unofficially. We recommend all
						our clients and partners to avoid commercial offers received from
						email services such as Gmail, Mail, Hotmail.
					</p>
					<p className='disclaimer-text'>
						Our company conducts deliveries in accordance with the terms of
						Incoterms 2020 (FOB, CIF). Please also note that the calculation of
						the contract delivery cost for petroleum products is based on Platts
						prices with discounts applied.
					</p>
				</div>
				<div className='disclaimer-btn-wrapper'>
					<ButtonComponent
						buttonText='i got it'
						className='disclaimer-btn'
						onCLickFunction={closeDisclaimer}
					/>
				</div>
			</div>
		</div>
	);
};

export default DisclaimerComponent;
