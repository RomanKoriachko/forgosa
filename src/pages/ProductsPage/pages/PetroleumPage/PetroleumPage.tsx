import React from 'react';

import './PetroleumPage.scss';
import { PageSidebar, PageTitle } from '../../../../common';
import { Helmet } from 'react-helmet-async';

type Props = {};

const PetroleumPage = (props: Props) => {
	return (
		<div className='petroleum-page'>
			<Helmet>
				<title>Fogrosa - Petroleum</title>
				<meta property='og:title' content='Fogrosa - Petroleum' />
				<meta property='telegram:title' content='Fogrosa - Petroleum' />
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
				image='petroleum-page-img.jpg'
				title='Petroleum'
				link='products'
			/>
			<div className='small-container'>
				<div className='page-container'>
					<div className='page-content'>
						<p className='page-content-text'>
							In the intricate tapestry of global commerce, few resources hold
							as much significance as petroleum – the unrefined essence of
							energy, innovation, and progress. As a vital raw material, crude
							oil serves as the lifeblood of modern industry, fueling economies,
							powering innovation, and shaping the fabric of our everyday lives.
							Join us as we delve into the multifaceted world of petroleum,
							uncovering its importance as a critical raw material in the modern
							era.
						</p>
						<p className='page-content-title'>
							Unveiling the Source: Understanding Crude Oil
						</p>
						<p className='page-content-text'>
							At the heart of the petroleum industry lies crude oil – a
							naturally occurring, unrefined mixture of hydrocarbons extracted
							from beneath the Earth's surface. Formed over millions of years
							through the decomposition of organic matter, crude oil exists in
							various grades and compositions, each possessing unique properties
							and applications. From light, sweet crude to heavy, sour blends,
							the diversity of crude oil plays a pivotal role in meeting the
							diverse needs of industries worldwide.
						</p>
						<div className='page-content-img-wrapper'>
							<img
								src='../../../../../images/petroleum-fuel-page-content-img.png'
								alt='gasoline article'
							/>
						</div>
						<p className='page-content-title'>
							Fueling Progress: The Versatile Applications of Crude Oil
						</p>
						<p className='page-content-text'>
							Crude oil serves as the foundational building block for a myriad
							of essential products that permeate our daily lives. From
							transportation fuels such as gasoline, diesel, and jet fuel to
							petrochemicals used in plastics, pharmaceuticals, and fertilizers,
							the applications of crude oil are vast and far-reaching. Beyond
							fuel and chemicals, crude oil finds utility in lubricants, asphalt
							for road construction, and even in the manufacturing of synthetic
							fibers and cosmetics. As the backbone of countless industries,
							crude oil is indispensable to the functioning of modern society.
						</p>
						<p className='page-content-text'>
							<span>
								Economic Engine: Crude Oil's Impact on Global Trade and
								Commerce.
							</span>
							The significance of crude oil extends beyond its utility; it plays
							a central role in driving global trade and commerce. As one of the
							world's most traded commodities, crude oil influences financial
							markets, currencies, and geopolitical relations. Fluctuations in
							crude oil prices can have far-reaching implications, impacting
							inflation rates, consumer spending, and the profitability of
							industries dependent on energy. The extraction, refining, and
							transportation of crude oil create employment opportunities and
							drive economic growth in regions rich in petroleum resources.
						</p>
						<p className='page-content-text'>
							<span>
								Environmental Considerations: Balancing Progress and
								Sustainability.
							</span>
							While crude oil is indispensable to modern industry, its
							extraction, processing, and combustion contribute to environmental
							challenges such as air and water pollution, habitat destruction,
							and climate change. As society grapples with the imperative of
							sustainability, the petroleum industry is evolving to embrace
							cleaner technologies, reduce emissions, and enhance energy
							efficiency. Initiatives such as carbon capture and storage,
							renewable energy integration, and investments in green
							technologies are shaping the future of petroleum production and
							consumption, paving the way for a more sustainable energy
							landscape.
						</p>
						<p className='page-content-text'>
							<span>
								Conclusion: Crude Oil - A Precious Resource in a Changing World.
							</span>
							In an era defined by innovation and progress, crude oil remains a
							cornerstone of modern industry, powering economies, driving
							innovation, and fueling progress. Its versatility, ubiquity, and
							strategic importance underscore its status as an indispensable raw
							material in the global marketplace. As we navigate the
							complexities of the modern world, the responsible stewardship of
							crude oil resources and the pursuit of sustainable practices are
							imperative for ensuring a prosperous and resilient future for
							generations to come.
						</p>
					</div>
					<PageSidebar />
				</div>
				<div className='page-btn-row'>
					<button className='page-btn-item page-btn-download'>
						Download document
					</button>
					<button className='page-btn-item page-btn-form'>
						Fill out the form
					</button>
				</div>
			</div>
		</div>
	);
};

export default PetroleumPage;
