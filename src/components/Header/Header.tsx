import React, { useState } from 'react';
import { HeaderButton, Marquee } from './components';
import { Link, NavLink } from 'react-router-dom';
import { BookMeetingComponent } from '../../common';

import './Header.scss';

type Props = {};

const Header = (props: Props) => {
	const [burgerMenuState, setBurgerMenuState] = useState<boolean>(false);

	function onBurgerMenuClick() {
		burgerMenuState ? closeBurgerMenu() : openBurgerMenu();
	}

	function openBurgerMenu() {
		setBurgerMenuState(true);
		document.body.style.overflow = 'hidden';
	}

	function closeBurgerMenu() {
		setBurgerMenuState(false);
		document.body.style.overflow = 'auto';
	}

	const [formState, setFormState] = useState<boolean>(false);

	function openMeetingForm() {
		setFormState(true);
		document.body.style.overflow = 'hidden';
	}

	return (
		<header className='header'>
			<BookMeetingComponent formState={formState} setFormState={setFormState} />
			<div className='container'>
				<div className='row header-row'>
					<Link className='logo-link' to='/' />
					<div className='header-menu row'>
						<Link to='/' className='header-menu-item-link'>
							<p className='header-menu-item'>Home</p>
						</Link>
						<div className='header-menu-item-wrapper header-menu-item-products'>
							<NavLink
								to='/products'
								className={({ isActive }) =>
									isActive
										? 'header-menu-item-link active'
										: 'header-menu-item-link'
								}
							>
								<p className='header-menu-item'>Products</p>
							</NavLink>
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
						</div>
						<div className='header-menu-item-wrapper header-menu-item-services'>
							<NavLink
								to='/services'
								className={({ isActive }) =>
									isActive
										? 'header-menu-item-link active'
										: 'header-menu-item-link'
								}
							>
								<p className='header-menu-item'>Services</p>
							</NavLink>
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
						</div>
						<NavLink
							to='/contacts'
							className={({ isActive }) =>
								isActive
									? 'header-menu-item-link active'
									: 'header-menu-item-link'
							}
						>
							<p className='header-menu-item'>Contact Us</p>
						</NavLink>
						<NavLink
							to='/knowledge_base'
							className={({ isActive }) =>
								isActive
									? 'header-menu-item-link active'
									: 'header-menu-item-link'
							}
						>
							<p className='header-menu-item'>Knowledge Base</p>
						</NavLink>
					</div>
					<div
						className={`burger-menu-btn ${burgerMenuState ? 'active' : ''}`}
						onClick={onBurgerMenuClick}
					></div>
					<div className='desktop-header-btn'>
						<HeaderButton openMeetingForm={openMeetingForm} />
					</div>
				</div>
				<div className={`burger-menu ${burgerMenuState ? 'active' : ''}`}>
					<div className='burger-menu-links-wrapper'>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive
									? 'header-menu-item-link active'
									: 'header-menu-item-link'
							}
							onClick={closeBurgerMenu}
						>
							<p className='header-menu-item'>Home</p>
						</NavLink>
						<NavLink
							to='/products'
							className={({ isActive }) =>
								isActive
									? 'header-menu-item-link active'
									: 'header-menu-item-link'
							}
							onClick={closeBurgerMenu}
						>
							<p className='header-menu-item'>Products</p>
						</NavLink>
						<NavLink
							to='/services'
							className={({ isActive }) =>
								isActive
									? 'header-menu-item-link active'
									: 'header-menu-item-link'
							}
							onClick={closeBurgerMenu}
						>
							<p className='header-menu-item'>Services</p>
						</NavLink>
						<NavLink
							to='/contacts'
							className={({ isActive }) =>
								isActive
									? 'header-menu-item-link active'
									: 'header-menu-item-link'
							}
							onClick={closeBurgerMenu}
						>
							<p className='header-menu-item'>Contact Us</p>
						</NavLink>
						<NavLink
							to='/knowledge_base'
							className={({ isActive }) =>
								isActive
									? 'header-menu-item-link active'
									: 'header-menu-item-link'
							}
							onClick={closeBurgerMenu}
						>
							<p className='header-menu-item'>Knowledge Base</p>
						</NavLink>
					</div>
					<div className='burger-menu-btn'>
						<HeaderButton openMeetingForm={openMeetingForm} />
					</div>
				</div>
			</div>
			<Marquee />
		</header>
	);
};

export default Header;
