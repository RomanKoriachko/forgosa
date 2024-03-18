import React from 'react';

import './IntroduceSection.scss';

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
							<button className='introduce-btn-info'>More information</button>
							<button className='introduce-btn-meet'>
								<div className='row'>
									<div className='introduce-btn-meet-img'></div>
									<p>Meeting with FOGROSA</p>
								</div>
							</button>
						</div>
						<button className='introduce-btn-info introduce-btn-info-mobile'>
							More information
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default IntroduceSection;
