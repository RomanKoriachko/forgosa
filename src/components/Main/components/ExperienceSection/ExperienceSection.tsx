import React from 'react';
import './ExperienceSection.scss';

type Props = {};

const ExperienceSection = (props: Props) => {
	return (
		<section className='experience-section'>
			<div className='small-container'>
				<div className='experience-title-wrapper'>
					<p className='experience-title'>our team's experience</p>
					<p className='experience-subtitle'>
						Our company specializes in the supply of fuel to customers
						worldwide, with a focus on Southeast Asia and the Middle East
						regions.{' '}
					</p>
				</div>
				<div className='experience-content-wrapper'>
					<p className='experience-text'>
						Fogrosa™ group of petroleum companies , a dynamic international firm
						headquartered in Dubai, United Arab Emirates, and in Muscat, Oman is
						experiencing rapid growth. Our primary objective is to facilitate
						our clients with direct contracts and competitive pricing directly
						sourced from manufacturers. Recognizing the critical role of coal in
						steel production, we actively cultivate enduring partnerships with
						esteemed manufacturers to ensure a consistent and dependable supply
						for our clients. Our seasoned team is dedicated to delivering
						exceptional customer service, collaborating closely with clients to
						fulfill their specific needs.
					</p>
					<p>
						At Fogrosa™, our core values prioritize quality and sustainability,
						guiding our partnerships with manufacturers who share these
						principles. We firmly believe that responsible sourcing and ethical
						business practices are integral to establishing enduring
						relationships with our customers and securing the ongoing success of
						our enterprise. In essence, Fogrosa™ group of petroleum companies
						stands as a trusted and respected global coal supplier. Our
						unwavering commitment to quality, sustainability, and customer
						service distinguishes us from the competition, reinforcing our
						pledge to provide clients with an unparalleled experience.
					</p>
				</div>
			</div>
		</section>
	);
};

export default ExperienceSection;
