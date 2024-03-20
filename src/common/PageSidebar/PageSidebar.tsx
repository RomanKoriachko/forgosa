import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import SidebarWidget from '../SidebarWidget/SidebarWidget';
import StickyBox from 'react-sticky-box';

import './PageSidebar.scss';

type Props = {};

type ArrDataType = {
	title: string;
	link: string;
	text: string;
};

const PageSidebar = (props: Props) => {
	const productsData = [
		{
			title: 'Petroleum',
			link: '/products/petroleum',
			text: "Petroleum fuel, a cornerstone of the modern energy landscape, encompasses a diverse range of fuels derived from crude oil—a fossil fuel extracted from beneath the Earth's surface.",
		},
		{
			title: 'JET FUEL',
			link: '/products/jet_fuel',
			text: 'Jet fuel, a specialized form of aviation fuel, is the lifeblood of the aviation industry, powering aircraft that connect distant corners of the globe...',
		},
		{
			title: 'DIESEL FUEL',
			link: '/products/diesel_fuel',
			text: 'Diesel fuel, a vital component of the global energy mix, plays a pivotal role in powering a wide array of transportation and industrial applications....',
		},
		{
			title: 'GASOLINE',
			link: '/products/gasoline',
			text: 'Gasoline, a hydrocarbon-based fuel derived primarily from crude oil, has been a cornerstone of the global energy landscape for over a century. Its significance stems from its role...',
		},
	];

	const servicesData = [
		{
			title: 'Fuel supplies',
			link: '/services/fuel_supplies',
			text: 'Gasoline, a hydrocarbon-based fuel derived primarily from crude oil, has been a cornerstone of the global energy landscape for over a century. Its significance stems from its role...',
		},
		{
			title: 'TOLLING',
			link: '/services/tolling',
			text: 'Jet fuel, a specialized form of aviation fuel, is the lifeblood of the aviation industry, powering aircraft that connect distant corners of the globe...',
		},
		{
			title: 'Freight Services',
			link: '/services/freight_services',
			text: 'Gasoline, a hydrocarbon-based fuel derived primarily from crude oil, has been a cornerstone of the global energy landscape for over a century. Its significance stems from its role...',
		},
		// {
		// 	title: 'Consulting',
		// 	link: '/services/consulting',
		// 	text: 'Gasoline, a hydrocarbon-based fuel derived primarily from crude oil, has been a cornerstone of the global energy landscape for over a century. Its significance stems from its role...',
		// },
	];

	const postsData = [
		{
			title: 'Supply Chain Resilience and Geopolitical Risks',
			link: '/supply_chain_resilience_and_geopolitical_risks',
			text: 'Gasoline, a hydrocarbon-based fuel derived primarily from crude oil, has been a cornerstone of the global energy landscape for over a century. Its significance stems from its role...',
		},
		{
			title: 'Price Volatility and Forecasting',
			link: '/price_volatility_and_forecasting',
			text: 'Jet fuel, a specialized form of aviation fuel, is the lifeblood of the aviation industry, powering aircraft that connect distant corners of the globe...',
		},
		{
			title: 'Environmental Regulations and Sustainable Practices',
			link: '/environmental_regulations_and_sustainable_practices',
			text: 'Gasoline, a hydrocarbon-based fuel derived primarily from crude oil, has been a cornerstone of the global energy landscape for over a century. Its significance stems from its role...',
		},
		{
			title: 'Global Energy Market Trends and Analysis',
			link: '/global_energy_market_trends_and_analysis',
			text: 'Gasoline, a hydrocarbon-based fuel derived primarily from crude oil, has been a cornerstone of the global energy landscape for over a century. Its significance stems from its role...',
		},
	];

	const location = useLocation();
	let currentArr: ArrDataType[] = [];

	if (location.pathname.includes('products')) {
		currentArr = productsData.filter((element) => {
			return !location.pathname.includes(element.link.toLowerCase());
		});
	} else if (location.pathname.includes('services')) {
		currentArr = servicesData.filter((element) => {
			return !location.pathname.includes(element.link.toLowerCase());
		});
	} else {
		currentArr = postsData.filter((element) => {
			return !location.pathname.includes(element.link.toLowerCase());
		});
	}

	return (
		<StickyBox className='sticky-box' offsetTop={140} offsetBottom={20}>
			<div className='page-sidebar'>
				<div className='page-sidebar-nav'>
					<div className='page-sidebar-nav-about'>
						<p>About Us</p>
						<p>
							Our company specializes in the supply of fuel to customers
							worldwide, with a focus on Southeast Asia and the Middle East
							regions.
						</p>
					</div>
					<div className='page-sidebar-nav-links'>
						{currentArr.map((element) => (
							<div key={element.title} className='nav-link-item'>
								<Link to={element.link}>
									<p>{element.title}</p>
								</Link>
								<p className='nav-link-item-description'>{element.text}</p>
							</div>
						))}
					</div>
				</div>
				<div className='page-sidebar-widjet'>
					<SidebarWidget />
				</div>
			</div>
		</StickyBox>
	);
};

export default PageSidebar;
