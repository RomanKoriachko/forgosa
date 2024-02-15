import React from 'react';

import './ErrorPage.scss';
import { Footer, Header } from '../../components';
import { ContactsSection } from '../../components/Footer/components';

type Props = {};

const ErrorPage = (props: Props) => {
	return (
		<>
			<Header />
			<section className='error-page-section'>
				<div className='error-mesage'>Oops! Something went wrong...</div>
			</section>
			<ContactsSection />
		</>
	);
};

export default ErrorPage;
