import React from 'react';

import { FormComponent } from '../FormComponent';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setFormState } from '../../redux/formReducer';

import './PopUpComponent.scss';

type Props = {};

const PopUpComponent = (props: Props) => {
	const formState = useAppSelector((state) => state.formState);
	const dispatch = useAppDispatch();

	function closePopUp() {
		dispatch(setFormState(false));
		document.body.style.overflow = 'auto';
	}

	return (
		<div className={`pop-up-form ${formState ? 'active' : 'not-active'}`}>
			<div className='form-popup-wrapper'>
				<button className='close-btn' onClick={() => closePopUp()}></button>
				<FormComponent title='Send us a Message​' />
			</div>
			<div className='form-bg'></div>
		</div>
	);
};

export default PopUpComponent;
