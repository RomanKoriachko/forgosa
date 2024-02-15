import React from 'react';
import './Header.scss';
import { HeaderButton } from './components';

type Props = {};

const Header = (props: Props) => {
	return (
		<header className='header'>
			<div className='container'>
				<div className='row header-row'>
					<div className='header-logo'>
						<img src='../../images/header-logo.png' alt='logo' />
					</div>
					<div className='header-menu row'>
						<p className='header-menu-item'>Home</p>
						<p className='header-menu-item'>Products</p>
						<p className='header-menu-item'>Services</p>
						<p className='header-menu-item'>Deposit Map</p>
						<p className='header-menu-item'>Contact Us</p>
						<p className='header-menu-item'>FAQ</p>
					</div>
					<HeaderButton />
				</div>
			</div>
		</header>
	);
};

export default Header;
