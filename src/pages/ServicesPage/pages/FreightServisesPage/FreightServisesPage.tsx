import React from 'react';

import './FreightServisesPage.scss';
import { PageSidebar, PageTitle } from '../../../../common';
import { Helmet } from 'react-helmet-async';

type Props = {};

const FreightServisesPage = (props: Props) => {
	return (
		<div className='freight-sevrices-page'>
			<Helmet>
				<title>Fogrosa - Freight Services</title>
				<meta property='og:title' content='Fogrosa - Freight Services' />
				<meta property='telegram:title' content='Fogrosa - Freight Services' />
				<meta
					name='description'
					content='Our company specializes in the supply of fuel to customers worldwide, with a focus on Southeast Asia and the Middle East regions.'
				/>
				<meta
					property='og:description'
					content='Our company specializes in the supply of fuel to customers worldwide, with a focus on Southeast Asia and the Middle East regions.'
				/>
				<meta
					property='telegram:description'
					content='Our company specializes in the supply of fuel to customers worldwide, with a focus on Southeast Asia and the Middle East regions.'
				/>
			</Helmet>
			<PageTitle
				image='freight-services-img.jpg'
				title='Freight Services'
				link='services'
			/>
			<div className='small-container'>
				<div className='page-container'>
					<div className='page-content'>
						<p className='page-content-text'>
							Welcome to our dedicated page for Freight Services catering
							specifically to the oil and petroleum industry. Our comprehensive
							shipping solutions are tailored to meet the unique requirements of
							transporting oil and petroleum products efficiently and securely.
						</p>
						<p className='service-title'>OUR SPECIALIZED SERVICES</p>
						<p className='service-subtitle'>Safe and Secure Transport</p>
						<p className='page-content-text'>
							Trust in our commitment to the safe and secure transportation of
							oil and petroleum products. We employ rigorous safety protocols
							and compliance measures to ensure the integrity of your cargo
						</p>
						<p className='service-subtitle'>Specialized Tanker Fleet</p>
						<p className='page-content-text'>
							Benefit from our diverse fleet of specialized tankers designed for
							the transportation of crude oil, refined products, and various
							petroleum derivatives. Our fleet is equipped to handle the
							specific needs of the oil and gas sector.
						</p>
						<p className='service-subtitle'>Global Logistics Network</p>
						<p className='page-content-text'>
							Seamlessly navigate the complexities of global logistics with our
							extensive network. We connect you to major ports and destinations
							worldwide, facilitating smooth and efficient shipments.
						</p>
						<p className='service-subtitle'>Customized Solutions</p>
						<p className='page-content-text'>
							Recognizing the diverse nature of oil and petroleum products, we
							provide tailored shipping solutions to accommodate your unique
							cargo specifications. Our team works closely with you to address
							specific challenges and requirements.
						</p>
						<p className='service-subtitle'>Quality Assurance</p>
						<p className='page-content-text'>
							Ensure the quality of your oil and petroleum products throughout
							the shipping process. Our quality assurance practices guarantee
							that your cargo reaches its destination in optimal condition.
						</p>
						<p className='service-subtitle'>Compliance and Regulations</p>
						<p className='page-content-text'>
							Navigate international regulations and compliance seamlessly with
							our experienced team. We stay abreast of industry regulations to
							ensure that your shipments meet all necessary standards.
						</p>
						<p className='service-subtitle'>DIP&PAY Services</p>
						<p className='page-content-text'>
							Streamline your transactions with our DIP&PAY services, offering a
							transparent and accurate process for dip inspections and payments.
							Enhance efficiency and reduce the risk of discrepancies in cargo
							quantity.
						</p>
						<p className='service-subtitle'>WHY CHOOSE OUR FREIGHT SERVICES</p>
						<p className='page-content-text no-margin'>
							<span>Industry Expertise:</span> Leverage our deep industry
							knowledge and experience in oil and petroleum shipping.
						</p>
						<p className='page-content-text no-margin'>
							<span>Reliability:</span> Count on our track record of reliable
							and timely deliveries, meeting the stringent demands of the oil
							and gas sector.
						</p>
						<p className='page-content-text no-margin'>
							<span>End-to-End Solutions:</span> From loading to unloading, our
							end-to-end solutions cover every aspect of the shipping process.
						</p>
						<p className='page-content-text'>
							<span>Customer-Centric Approach:</span> Enjoy personalized
							customer support and a dedicated team committed to your
							satisfaction.
						</p>
						<p className='page-content-text'>
							Explore the efficiency and reliability of our Freight Services for
							Oil and Petroleum Products. Whether you are shipping crude oil,
							refined products, or specialty chemicals, we have the expertise to
							ensure the success of your shipments. Contact us today to discuss
							your specific freight needs and experience a seamless shipping
							journey with us.
						</p>
						<table className='page-content-table'>
							<thead>
								<tr>
									<th scope='col'>afra scale</th>
									<th scope='col' colSpan={3}>
										flexible market scale
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Class</td>
									<td>size in dwt</td>
									<td>class</td>
									<td>size in dwt</td>
								</tr>
								<tr>
									<td className='table-cell-alighn-left'>
										general purpose tanker
									</td>
									<td>6,000-24,999</td>
									<td>product tanker</td>
									<td>6,000-60,000</td>
								</tr>
								<tr>
									<td className='table-cell-alighn-left'>
										medium range tanker
									</td>
									<td>25,000-44,999</td>
									<td>panamax</td>
									<td>60,000-80,000</td>
								</tr>
								<tr>
									<td className='table-cell-alighn-left'>lr1 - long range 1</td>
									<td>45,000-79,999</td>
									<td>aframax</td>
									<td>80,000-120,000</td>
								</tr>
								<tr>
									<td className='table-cell-alighn-left'>lr2 - long range 2</td>
									<td>80,000-159,999</td>
									<td>suezmax</td>
									<td>120,000-200,000</td>
								</tr>
								<tr>
									<td className='table-cell-alighn-left'>
										vlcc - very large crude carrier
									</td>
									<td>160,000-319,999</td>
									<td>vlcc</td>
									<td>200,000-320,000</td>
								</tr>
								<tr>
									<td className='table-cell-alighn-left'>
										ulcc - ultra large crude carrier
									</td>
									<td>above 320,000</td>
									<td>ulcc</td>
									<td>above 320,000</td>
								</tr>
								<tr>
									<td className='table-cell-alighn-left'>
										fso - floating storage and offloading unit
									</td>
									<td>above 320,000</td>
									<td>fs0</td>
									<td>above 320,000</td>
								</tr>
							</tbody>
						</table>
					</div>
					<PageSidebar />
				</div>
			</div>
		</div>
	);
};

export default FreightServisesPage;
