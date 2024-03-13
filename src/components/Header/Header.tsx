import React from 'react';
import './Header.scss';
import { HeaderButton, Marquee } from './components';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Link as NavPageLink } from 'react-scroll';

type Props = {};

const Header = (props: Props) => {
	const location = useLocation();
	return (
		<header className='header'>
			<div className='header-container'>
				<div className='row header-row'>
					<Link className='logo-link' to='/' />
					<div className='header-menu row'>
						<Link to='/' className='header-menu-item-link'>
							<p className='header-menu-item'>Home</p>
						</Link>
						<div className='header-menu-item-wrapper header-menu-item-products'>
							<Link to='/products' className='header-menu-item-link'>
								<p className='header-menu-item'>Products</p>
								<div className='header-menu-item-dropdown header-menu-item-dropdown-products'>
									<NavLink
										to='/products/gasoline'
										className={({ isActive }) => (isActive ? 'active' : '')}
									>
										<div className='dropdown-link-wrapper row'>
											<div className='link-circle'></div>
											<p>Gasoline</p>
										</div>
									</NavLink>
									<NavLink
										to='/products/petroleum'
										className={({ isActive }) => (isActive ? 'active' : '')}
									>
										<div className='dropdown-link-wrapper row'>
											<div className='link-circle'></div>
											<p>Petroleum</p>
										</div>
									</NavLink>
									<NavLink
										to='/products/jet_fuel'
										className={({ isActive }) => (isActive ? 'active' : '')}
									>
										<div className='dropdown-link-wrapper row'>
											<div className='link-circle'></div>
											<p>Jet Fuel</p>
										</div>
									</NavLink>
									<NavLink
										to='/products/diesel_fuel'
										className={({ isActive }) => (isActive ? 'active' : '')}
									>
										<div className='dropdown-link-wrapper row'>
											<div className='link-circle'></div>
											<p>Diesel Fuel</p>
										</div>
									</NavLink>
								</div>
							</Link>
						</div>
						<div className='header-menu-item-wrapper header-menu-item-services'>
							<Link to='/services' className='header-menu-item-link'>
								<p className='header-menu-item'>Services</p>
								<div className='header-menu-item-dropdown header-menu-item-dropdown-services'>
									<NavLink
										to='/services/fuel_supplies'
										className={({ isActive }) => (isActive ? 'active' : '')}
									>
										<div className='dropdown-link-wrapper row'>
											<div className='link-circle'></div>
											<p>Fuel supplies</p>
										</div>
									</NavLink>
									<NavLink
										to='/services/freight_services'
										className={({ isActive }) => (isActive ? 'active' : '')}
									>
										<div className='dropdown-link-wrapper row'>
											<div className='link-circle'></div>
											<p>Freight Services</p>
										</div>
									</NavLink>
									<NavLink
										to='/services/tolling'
										className={({ isActive }) => (isActive ? 'active' : '')}
									>
										<div className='dropdown-link-wrapper row'>
											<div className='link-circle'></div>
											<p>Tolling</p>
										</div>
									</NavLink>
								</div>
							</Link>
						</div>

						{location.pathname !== '/' ? undefined : (
							<NavPageLink
								to='map'
								smooth={true}
								duration={700}
								className='header-menu-item-link'
							>
								<p className='header-menu-item'>Deposit Map</p>
							</NavPageLink>
						)}
						<Link to='/contacts' className='header-menu-item-link'>
							<p className='header-menu-item'>Contact Us</p>
						</Link>
						<Link to='/faq' className='header-menu-item-link'>
							<p className='header-menu-item'>FAQ</p>
						</Link>
					</div>
					<HeaderButton />
				</div>
			</div>
			{location.pathname === '/' ? <Marquee /> : undefined}
		</header>
	);
};

export default Header;
