import React from 'react';
import { ContactsSection, SubscribeSection } from './components';

import './Footer.scss';
import { useLocation } from 'react-router-dom';

type Props = {};

const Footer = (props: Props) => {
	let location = useLocation();

	return (
		<footer className='footer'>
			{location.pathname === '/contacts' ||
			location.pathname === '/products' ||
			location.pathname === '/services' ? undefined : location.pathname !==
			  '/' ? (
				<div className='footer-page'>
					<SubscribeSection />
				</div>
			) : (
				<SubscribeSection />
			)}
			<ContactsSection />
		</footer>
	);
};

export default Footer;
