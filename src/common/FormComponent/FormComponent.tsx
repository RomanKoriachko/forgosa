import React, { useState } from 'react';

import './FormComponent.scss';
import { ButtonComponent } from '../ButtonComponent';

type Props = {
	title: string;
};

const FormComponent = ({ title }: Props) => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const [validation, setValidation] = useState<boolean>(false);

	function handleChangeName(e: React.FormEvent<HTMLInputElement>) {
		setName(e.currentTarget.value);
		checkInputValidation();
	}

	function handleChangeEmail(e: React.FormEvent<HTMLInputElement>) {
		setEmail(e.currentTarget.value);
		checkInputValidation();
	}

	function handleChangeMessage(e: React.FormEvent<HTMLTextAreaElement>) {
		setMessage(e.currentTarget.value);
		checkInputValidation();
	}

	function checkInputValidation() {
		if (
			name === '' ||
			email === '' ||
			!email.includes('@') ||
			!email.includes('mail') ||
			message === ''
		) {
			setValidation(false);
		} else {
			setValidation(true);
		}
	}

	function handleButtonClick() {
		if (validation) {
			const link = document.createElement('a');
			link.href = '/files/FOGROSA.pdf';
			link.setAttribute('download', 'FOGROSA.pdf');
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	}

	return (
		<div className='form-component'>
			<p className='subtitle'>Contact</p>
			<p className='title'>{title}</p>
			<form
				action='https://formsubmit.co/office@fogrosa.com'
				method='POST'
				className='form'
			>
				<input type='hidden' name='_captcha' value='false'></input>
				<input
					type='hidden'
					name='_next'
					value='https://www.fogrosa.com/'
				></input>
				<div className='row input-row'>
					<div className='input-item-row'>
						<label className='label' htmlFor='name'>
							Your Name*
						</label>
						<input
							required
							className='form-input'
							type='text'
							name='name'
							id='name'
							placeholder='Enter your name'
							value={name}
							onChange={handleChangeName}
						/>
					</div>
					<div className='input-item-row'>
						<label className='label' htmlFor='email'>
							E-mail*
						</label>
						<input
							required
							className='form-input'
							type='email'
							name='email'
							id='email'
							placeholder='Enter your mail'
							value={email}
							onChange={handleChangeEmail}
						/>
					</div>
				</div>
				<div className='row input-row'>
					<div className='input-item-row'>
						<label className='label' htmlFor='location'>
							Location
						</label>
						<input
							className='form-input'
							type='text'
							name='location'
							id='location'
							placeholder='Enter Location'
						/>
					</div>
					<div className='input-item-row'>
						<label className='label' htmlFor='subject'>
							Subject
						</label>
						<input
							className='form-input'
							type='text'
							name='subject'
							id='subject'
							placeholder='Enter subject'
						/>
					</div>
				</div>
				<label className='label' htmlFor='message'>
					Message*
				</label>
				<textarea
					required
					className='form-textarea'
					name='message'
					id='message'
					placeholder='Enter you massage ...'
					value={message}
					onChange={handleChangeMessage}
				></textarea>
				<div className='btn-container'>
					<ButtonComponent
						onCLickFunction={handleButtonClick}
						buttonText='Send a Message'
						className='form-btn'
					/>
				</div>
			</form>
		</div>
	);
};

export default FormComponent;
