import React from 'react';

import { useLocation } from 'react-router-dom';

import './PageButtons.scss';
import { useAppDispatch } from '../../redux/hooks';
import { setFormState } from '../../redux/formReducer';

type Props = {
	fileName: string;
};

const PageButtons = ({ fileName }: Props) => {
	const location = useLocation();
	const dispatch = useAppDispatch();
	function openForm() {
		dispatch(setFormState(true));
		document.body.style.overflow = 'hidden';
	}

	return (
		<div className='page-btn-row'>
			<button className='page-btn-item page-btn-download'>
				<a href={`/files/${fileName}`} download>
					{location.pathname.includes('/faq/')
						? 'Download'
						: 'Download Specification'}
				</a>
			</button>
			<button className='page-btn-item page-btn-form' onClick={openForm}>
				Fill out the form
			</button>
		</div>
	);
};

export default PageButtons;
