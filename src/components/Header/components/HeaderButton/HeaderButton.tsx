import React from 'react';

import './HeaderButton.scss';

type Props = {
	openMeetingForm(): void;
};

const HeaderButton = ({ openMeetingForm }: Props) => {
	return (
		<button className='header-btn' onClick={openMeetingForm}>
			book a meeting
		</button>
	);
};

export default HeaderButton;
