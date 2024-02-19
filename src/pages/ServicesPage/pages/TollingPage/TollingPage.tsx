import React from 'react';

import './TollingPage.scss';
import { PageSidebar, PageTitle } from '../../../../common';

type Props = {};

const TollingPage = (props: Props) => {
	return (
		<div className='tolling-page'>
			<PageTitle image='tolling-page-img.png' title='Tolling' link='services' />
			<div className='small-container'>
				<div className='page-container'>
					<div className='page-content'>
						<p className='page-content-title'>
							Fogrosa: Your Partner in the World of Oil Refining
						</p>
						<p className='page-content-text'>
							Fogrosa is not just a company; it's a reliable strategic partner
							for oil refineries, offering a wide range of services, including
							crude oil supply and tolling. Our collaboration aims to enhance
							the efficiency of your production and ensure a steady supply of
							high-quality raw materials.
						</p>
						<p className='page-content-subtitle'>
							High-Quality Supplies: Light, Heavy Crude, and Blends
						</p>
						<p className='page-content-text'>
							We specialize not only in supplying light and heavy crude but also
							provide a unique opportunity to order blends tailored to your
							requirements. Our company guarantees a high standard of raw
							materials, making us the ideal choice for your production needs.
						</p>
						<p className='page-content-subtitle'>
							Flexibility in Tolling: Tailored to You
						</p>
						<p className='page-content-text'>
							Fogrosa provides flexible tolling conditions, allowing our
							partners to optimize their production processes. We ensure precise
							alignment with your technological requirements, supporting
							efficient resource utilization and maximum productivity.
						</p>
						<p className='page-content-subtitle'>
							Technological Innovation and Environmental Responsibility
						</p>
						<p className='page-content-text'>
							We integrate cutting-edge technologies into the oil refining
							industry, striving for sustainable development and reducing
							environmental impact. Collaborating with Fogrosa is a step toward
							eco-conscious and efficient production.
						</p>
						<p className='page-content-subtitle'>
							Reliable Partnership for Long-Term Success
						</p>
						<p className='page-content-text'>
							We value long-term relationships and guarantee transparency at
							every stage of collaboration. Fogrosa is your partner, ready to
							support your business and make your oil refining more successful.
						</p>
						<p className='page-content-text'>
							Fogrosa invites oil refineries to collaborate. We are prepared to
							provide you not only with high-quality raw materials but also
							individualized solutions for your production. Contact us to
							discuss how we can help you reach new heights in your business.
						</p>
					</div>
					<PageSidebar />
				</div>
			</div>
		</div>
	);
};

export default TollingPage;
