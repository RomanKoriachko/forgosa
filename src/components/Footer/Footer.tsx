import React from 'react';
import { ContactsSection, SubscribeSection } from './components';

import './Footer.scss';

type Props = {};

const Footer = (props: Props) => {
	return (
		<footer className='footer'>
			<SubscribeSection />
			<ContactsSection />
		</footer>
	);
};

export default Footer;
