import React from 'react';

import './ButtonComponent.scss';

type Props = {
	onCLickFunction?(): void;
	buttonText: string;
	className: string;
};

const ButtonComponent = ({ onCLickFunction, buttonText, className }: Props) => {
	return (
		<button
			className={`button ${className}`}
			onClick={onCLickFunction ? () => onCLickFunction() : undefined}
		>
			<div className='row btn-content-row'>
				<p>{buttonText}</p>
				<div className='btn-arrow'></div>
			</div>
		</button>
	);
};

export default ButtonComponent;
