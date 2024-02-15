import React from 'react';

import './ContactsPage.scss';
import { PageTitle } from '../../common';

type Props = {};

const ContactsPage = (props: Props) => {
	return (
		<div>
			<PageTitle image='contacts-bg-img.png' title='Contact us' />
		</div>
	);
};

export default ContactsPage;
