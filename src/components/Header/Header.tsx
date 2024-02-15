import React from 'react';
import './Header.scss';
import { HeaderButton } from './components';
import { Link, useLocation } from 'react-router-dom';
import { Link as NavLink } from 'react-scroll';

type Props = {};

const Header = (props: Props) => {
	const location = useLocation();
	return (
		<header className='header'>
			<div className='header-container'>
				<div className='row header-row'>
					<div className='header-logo'>
						<img src='../../images/header-logo.png' alt='logo' />
					</div>
					<div className='header-menu row'>
						<Link to='/'>
							<p className='header-menu-item'>Home</p>
						</Link>
						<Link to='/products'>
							<p className='header-menu-item'>Products</p>
						</Link>
						<Link to='/services'>
							<p className='header-menu-item'>Services</p>
						</Link>
						{location.pathname !== '/' ? undefined : (
							<NavLink to='map' smooth={true} duration={700}>
								<p className='header-menu-item'>Deposit Map</p>
							</NavLink>
						)}
						<Link to='/contacts'>
							<p className='header-menu-item'>Contact Us</p>
						</Link>
						<Link to='/faq'>
							<p className='header-menu-item'>FAQ</p>
						</Link>
					</div>
					<HeaderButton />
				</div>
			</div>
		</header>
	);
};

export default Header;
