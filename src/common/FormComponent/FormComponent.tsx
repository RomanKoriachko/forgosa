import React from 'react';

import './FormComponent.scss';
import { ButtonComponent } from '../ButtonComponent';

type Props = {};

const FormComponent = (props: Props) => {
	return (
		<div className='form-component'>
			<p className='subtitle'>Contact</p>
			<p className='title'>More about you</p>
			<form action='' className='form'>
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
				></textarea>
				<div className='btn-container'>
					<ButtonComponent
						onCLickFunction={() => console.log('test')}
						buttonText='Send a Message'
						className='form-btn'
					/>
				</div>
			</form>
		</div>
	);
};

export default FormComponent;
