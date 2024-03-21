import React from 'react';

import './PopUpComponent.scss';
import { FormComponent } from '../FormComponent';

type Props = {
	isOpen: boolean;
	setPopUpState(value: React.SetStateAction<boolean>): void;
};

const PopUpComponent = ({ isOpen, setPopUpState }: Props) => {
	function closePopUp() {
		setPopUpState(false);
		document.body.style.overflow = 'auto';
	}

	return (
		<div className={`pop-up-form ${isOpen ? 'active' : 'not-active'}`}>
			<div className='form-wrapper'>
				<button className='close-btn' onClick={() => closePopUp()}></button>
				<FormComponent title='Send us a Message​' />
			</div>
		</div>
	);
};

export default PopUpComponent;
