import React from 'react';

import { ButtonComponent } from '../ButtonComponent';

import './BookMeetingComponent.scss';

type Props = {
	formState: boolean;
	setFormState(value: React.SetStateAction<boolean>): void;
};

const BookMeetingComponent = ({ formState, setFormState }: Props) => {
	function closeMeetingForm() {
		setFormState(false);
		document.body.style.overflow = 'auto';
	}
	return (
		<div
			className={`book-meeting-component ${
				formState ? 'active' : 'not-active'
			}`}
		>
			<div className='book-meeting-bg'></div>
			<div className='metting-form-wrapper'>
				<button className='close-form-btn' onClick={closeMeetingForm}></button>
				<form
					action='https://formsubmit.co/42e7b1c424b7b5b991f9fdb964f46774'
					method='POST'
					className='meeting-form'
				>
					<p className='form-title'>Meeting with FOGROSA</p>
					<div className='form-input-wrapper'>
						<label htmlFor='book-email'>E-mail*</label>
						<input
							type='email'
							name='book-email'
							id='book-email'
							placeholder='Enter your mail'
							required
						/>
					</div>
					<div className='form-input-wrapper'>
						<label htmlFor='book-message'>Message</label>
						<textarea
							name='book-message'
							id='book-message'
							placeholder='Enter you massage ...'
							required
						></textarea>
					</div>
					<div className='button-wrapper'>
						<ButtonComponent buttonText='book a meeting' className='form-btn' />
					</div>
				</form>
			</div>
		</div>
	);
};

export default BookMeetingComponent;
