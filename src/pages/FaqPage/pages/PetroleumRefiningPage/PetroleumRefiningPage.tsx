import React from 'react';

import './PetroleumRefiningPage.scss';
import { PageButtons, PageTitle } from '../../../../common';
import { LinksSlider } from '../../components';

type Props = {};

const PetroleumRefiningPage = (props: Props) => {
	return (
		<div className='faq-page petroleum-refining-page'>
			<PageTitle
				image='faq-bg-img.jpg'
				title='knowledge base'
				subtitle='PETROLEUM REFINING PROCESSES'
			/>
			<LinksSlider index={2} />
			<div className='page-content'>
				<div className='faq-page-container'>
					<p className='bold-text margin-bottom'>
						Petroleum refining is the process of converting crude oil into
						various useful products through physical and chemical
						transformations. The primary goal is to separate and upgrade the
						different components of crude oil to produce valuable fuels and
						other products..
					</p>
					<p>
						These processes are part of a complex and integrated refining
						system, and their combination can vary depending on the desired
						output and the characteristics of the crude oil being processed.
						Refineries are designed to produce a range of products, including
						gasoline, diesel, jet fuel, lubricants, and various petrochemical
						feedstocks. Here are some key petroleum refining processes:
					</p>
					<div className='page-img'>
						<img
							src='../../../../../images/petroleum-refining-page-img.png'
							alt=''
						/>
					</div>
					<p className='page-title'>DISTILLATION</p>
					<p>
						• Description: Crude oil is heated in a distillation tower, and the
						different components evaporate at different temperatures. The vapors
						rise through the tower, and as they cool, they condense into liquids
						at various levels.
					</p>
					<p>
						• Products: Fractions like naphtha, kerosene, diesel, and heavier
						residues are obtained.
					</p>
					<p className='page-title'>CRACKING</p>
					<p>
						• Description: Heavy hydrocarbons are broken down into lighter ones
						by heat or catalysts. This process is essential for increasing the
						yield of valuable products like gasoline.
					</p>
					<p>• Products: Gasoline, diesel, and other valuable hydrocarbons.</p>
					<p className='page-title'>REFORMING</p>
					<p>
						• Description: Reforming involves restructuring the molecular
						structure of naphtha to enhance its octane rating. This is often
						done with the help of catalysts.
					</p>
					<p>• Products: High-octane gasoline and hydrogen.</p>
					<p className='page-title'>HYDROTREATING</p>
					<p>
						• Description: This process removes impurities, such as sulfur,
						nitrogen, and metals, from various fractions using hydrogen under
						high pressure and temperature
					</p>
					<p>• Products: Cleaned fractions with reduced impurities.</p>
					<p className='page-title'>HYDROCRACKING</p>
					<p>
						• Description: Hydrocracking combines hydrogen and catalysts to
						break down heavy hydrocarbons into lighter, more valuable products.{' '}
					</p>
					<p>
						• Products: High-quality diesel, jet fuel, and other valuable
						hydrocarbons.
					</p>
					<p className='page-title'>ISOMERIZATION</p>
					<p>
						• Description: Isomerization converts straight-chain hydrocarbons
						into their branched isomers, improving the octane rating of
						gasoline.
					</p>
					<p>• Products: High-octane gasoline.</p>
					<p className='page-title'>ALKYLATION</p>
					<p>
						• Description: Alkylation combines small olefin molecules with
						isobutane to produce high-octane gasoline components.
					</p>
					<p>• Products: High-octane gasoline.</p>
					<p className='page-title'>CATALYTIC REFORMING</p>
					<p>
						• Description: Catalytic reforming uses a catalyst to rearrange
						hydrocarbons, producing high-octane gasoline and hydrogen.
					</p>
					<p>• Products: High-octane gasoline and hydrogen.</p>
					<p className='page-title'>DESULFURIZATION</p>
					<p>
						• Description: Desulfurization processes reduce the sulfur content
						in various fractions to meet environmental regulations.
					</p>
					<p>• Products: Low-sulfur fuels.</p>
					<p className='page-title'>GAS TREATING:</p>
					<p>
						• Description: Gas treating processes remove contaminants, such as
						hydrogen sulfide and carbon dioxide, from gases produced during
						refining.
					</p>
					<p>• Products: Cleaned gases.</p>
					<p className='page-title big-text'>PRIMARY END-PRODUCTS</p>
					<p className='bold-text margin-bottom'>
						Petroleum refining is a complex process that transforms crude oil
						into various end-products. Here's a breakdown of the primary
						end-products in each category:
					</p>
					<p className='page-title'>LIGHT DISTILLATES:</p>
					<p>
						• C1 Components: Simple hydrocarbons, typically gases such as
						methane and ethane.
					</p>
					<p>
						• Liquefied Petroleum Gas (LPG): A mixture of propane and butane,
						used as fuel.
					</p>
					<p>
						• Light Naphtha: A liquid mixture of hydrocarbons with a low boiling
						point.
					</p>
					<p>• Gasoline: A fuel for internal combustion engines.</p>
					<p>
						• Heavy Naphtha: A liquid mixture of hydrocarbons with a slightly
						higher boiling point.
					</p>
					<p className='page-title'>MIDDLE DISTILLATES:</p>
					<p>
						• Kerosene Oil: Used as a fuel for jet engines, lamps, and heating.
					</p>
					<p>
						• Automotive and Railroad Diesel Fuels: Fuels for diesel engines
						used in transportation.
					</p>
					<p>• Residential Heating Fuel: Used for heating homes. </p>
					<p>
						• Other Light Fuel Oils: Additional light fuel oils with various
						applications.
					</p>
					<p className='page-title'>HEAVY DISTILLATES:</p>
					<p>• Heavy Fuel Oils: Used in industrial boilers and power plants.</p>
					<p>
						• Wax: Used in various applications such as candles and polishes.
					</p>
					<p>
						• Lubricating Oils: Used for lubrication in engines and machinery.
					</p>
					<p>• Asphalt: Used in road construction and waterproofing.</p>
					<p className='page-title'>OTHER USEFUL END PRODUCT:</p>
					<p>
						• Coke (Similar to Coal): A solid carbon material used as a fuel and
						in various industrial processes.
					</p>
					<p>
						• Elemental Sulfur: Extracted as a byproduct, used in the chemical
						industry and for sulfuric acid production.
					</p>
					<p>
						Each of these end-products serves different purposes and has diverse
						applications across industries. Refineries employ various processes,
						including distillation, cracking, and treatment, to separate and
						refine crude oil into these valuable products. The versatility of
						these end-products makes them essential components in various
						sectors, ranging from transportation to manufacturing.
					</p>
					<PageButtons fileName='PETROLEUM_REFINING_PROCESSES.pdf' />
				</div>
			</div>
		</div>
	);
};

export default PetroleumRefiningPage;
