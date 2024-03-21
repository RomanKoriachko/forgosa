import React from 'react';

import './IntroduceSection.scss';
import { Link } from 'react-scroll';

type Props = {};

const IntroduceSection = (props: Props) => {
	return (
		<section className='introduce-section'>
			<div className='introduce-section-bg'></div>
			<div className='small-container'>
				<div className='introduce-content'>
					<div>
						<p className='introduce-title'>
							Empowering Commerce through Strategic Fuel Brokerage Solutions.
						</p>
						<p className='introduce-subtitle'>Your TRUST, our ENERGY</p>
						<div className='row introduce-button-wrapper'>
							<Link to='experience' smooth={true} duration={700}>
								<button className='introduce-btn-info'>More information</button>
							</Link>
							<button className='introduce-btn-meet'>
								<div className='row'>
									<div className='introduce-btn-meet-img'></div>
									<p>Meeting with FOGROSA</p>
								</div>
							</button>
						</div>
						<Link to='experience' smooth={true} duration={700}>
							<button className='introduce-btn-info introduce-btn-info-mobile'>
								More information
							</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default IntroduceSection;
