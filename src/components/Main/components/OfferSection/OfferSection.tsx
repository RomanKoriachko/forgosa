import React from 'react';
import './OfferSection.scss';
import { Link } from 'react-router-dom';

type Props = {};

const OfferSection = (props: Props) => {
	const offerItemsArr = [
		{
			title: 'PETROLEUM',
			link: 'products/petroleum',
			subtitle:
				'Essential fossil fuel powering global transport, industries, and energy production, derived from crude oil.',
		},
		{
			title: 'GASOLINE',
			link: 'products/gasoline',
			subtitle:
				'High-energy liquid fuel vital for internal combustion engines, propelling cars, motorcycles, and various vehicles.',
		},
		{
			title: 'JET FUEL',
			link: 'products/jet_fuel',
			subtitle:
				'Specialized kerosene-based fuel crucial for powering jet engines in aviation and aerospace industries.',
		},
		{
			title: 'DIESEL FUEL',
			link: 'products/diesel_fuel',
			subtitle:
				'High-energy liquid for efficient combustion, powering trucks, buses, and industrial machinery globally.',
		},
	];
	return (
		<section className='offer-section'>
			<div className='container'>
				<div className='row offer-title-row'>
					<div className='offer-title-wrapper'>
						<p className='offer-title'>What We can offer</p>
						<p className='offer-subtitle'>
							We are a seasoned team of professionals in the fuel trading
							domain, committed to excellence, precision, and strategic success
							in every transaction. With a wealth of experience in our arsenal,
							we stand ready to graciously share our knowledge with you.
						</p>
					</div>
					<div className='offer-btn-wrapper'>
						<Link to='/products'>
							<div className='offer-btn'>
								<div className='offer-btn-small'></div>
							</div>
						</Link>
						<p className='offer-btn-label'>view all</p>
					</div>
				</div>
				<div className='offer-items-wrapper row'>
					{offerItemsArr.map((item, i) => (
						<div key={i} className={`offer-item offer-item-${i + 1}`}>
							<Link to={item.link}>
								<div className='offer-item-img'></div>
								<p className='offer-item-title'>{item.title}</p>
								<p className='offer-item-subtitle'>{item.subtitle}</p>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OfferSection;
