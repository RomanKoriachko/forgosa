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
						<a href='' className='header-menu-item'>
							Home
						</a>
						<a href='' className='header-menu-item'>
							Products
						</a>
						<a href='' className='header-menu-item'>
							Services
						</a>
						<a href='' className='header-menu-item'>
							Deposit Map
						</a>
						<a href='' className='header-menu-item'>
							Contact Us
						</a>
						<a href='' className='header-menu-item'>
							FAQ
						</a>
					</div>
					<HeaderButton />
				</div>
			</div>
		</header>
	);
};

export default Header;
