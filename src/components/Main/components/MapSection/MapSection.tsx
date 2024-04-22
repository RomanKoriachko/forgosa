import React, { useState } from 'react';

import { ButtonComponent } from '../../../../common';
import { Element } from 'react-scroll';

import './MapSection.scss';

type Props = {};

const MapSection = (props: Props) => {
	const [showMapState, setShowMapState] = useState('map-not-active');

	const showMap = () => {
		if (showMapState === 'map-not-active') {
			setShowMapState('map-active');
		} else {
			setShowMapState('map-not-active');
		}
	};

	const closeMap = () => {
		setShowMapState('map-not-active');
	};

	return (
		<section className='map-section'>
			<Element className='anchor-element' name='map'></Element>
			<ButtonComponent
				onCLickFunction={() => closeMap()}
				buttonText='show less'
				className={`close-map-btn ${showMapState}`}
			/>
			<div className={`desktop-map-wrapper map-wrapper ${showMapState}`}>
				<div className='container'>
					<div className='map-content'>
						<div className='map-text'>
							<div className='tablet-row'>
								<p className='map-content-header'>Deposit map</p>
							</div>
							<div className='map-content-wrapper'>
								<p className='subtitle'>
									Welcome to Deposit Map section! Here, you can explore all the
									deposits of our planet. Every deposit is marked, making it
									easier for you to find the resources you need. Whether you're
									a researcher, a miner, or an investor, this map is a valuable
									tool for anyone interested in understanding the Earth's
									resources. Start exploring today!
								</p>
								<ButtonComponent
									onCLickFunction={() => showMap()}
									buttonText='click and explore'
									className='show-map-btn'
								/>
							</div>
							<div className='mobile-button'>
								<a
									href='https://www.oilmap.xyz/'
									target='_blank'
									rel='noreferrer'
								>
									<ButtonComponent
										buttonText='click and explore'
										className=''
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className='map-overlap'>
					<iframe
						className='map'
						src='https://www.oilmap.xyz/'
						title='https://www.oilmap.xyz/'
					></iframe>
				</div>
			</div>
		</section>
	);
};

export default MapSection;
