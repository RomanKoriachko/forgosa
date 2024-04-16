import React from 'react';

import './TypesOfTankersPage.scss';
import { PageButtons, PageTitle } from '../../../../common';
import { LinksSlider } from '../../components';

type Props = {};

const TypesOfTankersPage = (props: Props) => {
	return (
		<div className='faq-page types-of-tankers-page'>
			<PageTitle
				image='faq-bg-img.jpg'
				title='FAQ'
				subtitle='TYPES OF MODERN OIL TANKERS'
			/>
			<LinksSlider index={3} />
			<div className='page-content'>
				<div className='faq-page-container'>
					<p className='bold-text margin-bottom'>
						Oil tankers play a crucial role in the transportation of oil and its
						products across the globe. The two main types of oil tankers, crude
						tankers and product tankers, serve different purposes in the oil
						industry.
					</p>
					<p className='page-title'>CRUDE TANKERS:</p>
					<p>
						These tankers are designed to transport large quantities of
						unrefined crude oil. They are responsible for moving crude oil from
						the extraction point, often near oil wells or offshore platforms, to
						refineries. Crude tankers come in various sizes, including Very
						Large Crude Carriers (VLCCs) and Ultra Large Crude Carriers (ULCCs),
						capable of carrying massive amounts of crude oil.
					</p>
					<p className='page-title'>PRODUCT TANKERS:</p>
					<p>
						Product tankers are generally smaller in size compared to crude
						tankers. They are designed to transport refined petroleum products
						from refineries to locations closer to consumer markets. Refined
						products may include gasoline, diesel, jet fuel, and other processed
						petroleum derivatives.
					</p>
					<p>
						Product tankers are more flexible in terms of the variety of
						products they can transport compared to crude tankers. Both types of
						tankers are vital for the global energy supply chain, ensuring that
						crude oil is efficiently transported from extraction points to
						refineries and that refined products reach markets where they are
						needed. The shipping of oil involves careful consideration of safety
						measures and environmental concerns to prevent spills and accidents
						at sea.
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
								<td className='table-cell-alighn-left'>medium range tanker</td>
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
					<p className='page-title'>PRODUCT TANKER</p>
					<p>
						A product tanker is a type of tanker vessel designed for the
						transportation of refined petroleum products. These products can
						include various liquid commodities such as gasoline, diesel, jet
						fuel, and other refined oils. Unlike crude oil tankers, which
						transport unrefined petroleum, product tankers are specifically
						designed to carry finished products from refineries to distribution
						points or end-users.
					</p>
					<p className='margin-bottom'>
						Key features of product tankers include: Segregated Tanks: Product
						tankers are equipped with multiple segregated cargo tanks to allow
						for the transportation of different types of refined products. This
						is crucial to prevent contamination between different cargoes.
					</p>
					<p>
						<span>Pump Systems:</span> Product tankers are fitted with
						sophisticated pumping systems to facilitate the loading and
						unloading of various products efficiently.
					</p>
					<p>
						<span>Size Range:</span> Product tankers come in various sizes,
						ranging from small coastal tankers to larger vessels capable of
						longdistance international voyages. The size may vary based on the
						specific requirements of the trade routes and the volume of products
						to be transported.
					</p>
					<p>
						<span>Double Hulls:</span> Many modern product tankers are
						constructed with a double hull design to enhance safety and minimize
						the risk of oil spills in the event of a collision or grounding.
					</p>
					<p>
						Product tankers play a crucial role in the global distribution of
						refined petroleum products, ensuring a steady and efficient supply
						to meet consumer demand. Like other types of vessels, regulations
						and industry standards may influence the design and operation of
						product tankers, and advancements in technology continue to shape
						the industry. For the most current and specific information, it is
						advisable to consult maritime authorities or industry sources.
					</p>
					<p className='page-title'>PANAMAX TANKERS</p>
					<p>
						Panamax tankers refer to a specific size category of ships known as
						Panamax vessels that are designed to fit through the Panama Canal.
						The Panama Canal has size limitations, and ships that can navigate
						through it are classified based on these dimensions. Panamax tankers
						are specifically designed to maximize the canal's capacity.
					</p>
					<p>Panamax tankers typically have the following size constraints:</p>
					<p>
						<span>Length:</span> Up to approximately 294 meters (965 feet)
					</p>
					<p>
						<span>Beam (width):</span> Up to approximately 32.3 meters (106
						feet)
					</p>
					<p className='margin-bottom'>
						<span>Draft:</span> Up to approximately 12 meters (39.5 feet)
					</p>
					<p>
						These dimensions allow these vessels to transit the Panama Canal's
						locks, connecting the Atlantic and Pacific Oceans.
					</p>
					<p className='page-title'>AFRAMAX TANKERS</p>
					<p>
						An AFRAMAX tanker is a type of oil tanker that falls within a
						specific size range, known as AFRAMAX size. These vessels are
						commonly used for the transportation of crude oil and, to a lesser
						extent, refined petroleum products. The term "AFRAMAX" is derived
						from the Average Freight Rate Assessment (AFRA) system, which was
						developed by Shell Oil to standardize freight rates for tankers.
					</p>
					<p>Here are some key characteristics of AFRAMAX tankers:</p>
					<p>
						<span>Size:</span> AFRAMAX tankers typically have a deadweight
						tonnage (DWT) ranging from around 80,000 to 120,000 metric tons.
						This size range allows them to carry substantial quantities of crude
						oil.
					</p>
					<p>
						<span>Dimensions:</span> The dimensions of an AFRAMAX tanker are
						designed to be suitable for certain waterways and ports. While
						specific dimensions can vary, typical values include a length of
						approximately 230 to 250 meters, a beam (width) of around 32 meters,
						and a draft of about 12 meters.
					</p>
					<p>
						<span>Trade Routes:</span> AFRAMAX tankers are often employed for
						transporting crude oil over relatively short to medium distances.
						They are versatile vessels that can navigate in various regions, and
						their size allows them to access ports that may not be accessible to
						larger vessels like SUEZMAX or Very Large Crude Carriers (VLCCs).
					</p>
					<p>
						<span>Global Importance:</span> AFRAMAX tankers play a crucial role
						in the global oil transportation industry, facilitating the movement
						of crude oil from oil-producing regions to refineries or storage
						facilities. They are particularly important in regions where larger
						vessels may face navigational or port restrictions.
					</p>
					<p className='page-title'>SUEZMAX TANKERS</p>
					<p>
						SUEZMAX is another classification of oil tanker, referring to
						vessels that are designed to be the maximum size capable of
						transiting the Suez Canal. The SUEZMAX size is larger than AFRAMAX
						and smaller than the Very Large Crude Carriers (VLCCs). The Suez
						Canal has certain restrictions on vessel dimensions, and SUEZMAX
						tankers are built to maximize the cargo capacity while still being
						able to navigate through the canal.
					</p>
					<p>Key features of SUEZMAX tankers include:</p>
					<p>
						<span>Size:</span> SUEZMAX tankers typically have a deadweight
						tonnage (DWT) ranging from 120,000 to 200,000 metric tons. This size
						allows them to carry a significant amount of crude oil.
					</p>
					<p>
						<span>Dimensions:</span> The dimensions of a SUEZMAX tanker are
						constrained by the specifications of the Suez Canal. Typical values
						include a length of around 240 to 275 meters, a beam (width) of
						approximately 42 meters, and a draft of about 16 meters.
					</p>
					<p>
						<span>Trade Routes:</span> SUEZMAX tankers are often employed for
						long-haul voyages, transporting crude oil from oil-producing regions
						to refineries around the world. They can transit through the Suez
						Canal, providing access to both the Mediterranean and Red Seas.
					</p>
					<p className='margin-bottom'>
						<span>Cargo types:</span> While SUEZMAX tankers are primarily
						associated with the transport of crude oil, they can also be adapted
						for the shipment of other liquid cargoes, such as refined petroleum
						products.
					</p>
					<p>
						SUEZMAX tankers are significant players in the global oil
						transportation market, serving as a crucial link in the supply chain
						between oil-producing regions and refineries.
					</p>
					<p className='page-title'>VERY LARGE CRUDE CARRIER (VLCC)</p>
					<p>
						A Very Large Crude Carrier (VLCC) is a type of massive oil tanker
						designed for the transportation of large quantities of crude oil.
						VLCCs belong to the largest category of oil tankers and are
						characterized by their immense size and carrying capacity. These
						vessels play a crucial role in the global oil transportation
						industry, facilitating the movement of crude oil from major
						oil-producing regions to refineries and distribution centers.
					</p>
					<p>Key features of VLCCs include:</p>
					<p>
						<span>Size:</span> VLCCs typically have a deadweight tonnage (DWT)
						ranging from 200,000 to 320,000 metric tons. This immense size
						allows them to carry substantial volumes of crude oil.{' '}
					</p>
					<p>
						<span>Dimensions:</span> The dimensions of a VLCC are significant
						and are generally constrained by the specifications of major
						shipping lanes, ports, and the Suez Canal. Typical values include a
						length of around 320 to 330 meters, a beam (width) of about 60
						meters, and a draft of approximately 20 meters.
					</p>
					<p>
						<span>Trade Routes:</span> VLCCs are often employed for
						long-distance voyages, transporting crude oil from major
						oil-exporting countries to refineries and demand centers worldwide.
						They are capable of navigating through major shipping lanes,
						including the Suez Canal and the Strait of Malacca.
					</p>
					<p>
						<span>Cargo Types:</span> VLCCs are specifically designed for the
						transport of crude oil. They have large cargo holds with segregated
						compartments to handle different grades of crude oil.
					</p>
					<p className='margin-bottom'>
						<span>Global Significance:</span> VLCCs are critical in the global
						oil supply chain, providing an efficient means of transporting large
						quantities of crude oil across oceans. They are integral to the
						movement of oil from regions such as the Middle East to various
						parts of the world.
					</p>
					<p>
						Due to their size and strategic importance, VLCCs are subject to
						international regulations and safety standards.
					</p>
					<p className='page-title'>ULTRA LARGE CRUDE CARRIER (ULCC)</p>
					<p className='margin-bottom'>
						An Ultra Large Crude Carrier (ULCC) is a type of oil tanker that
						belongs to the largest class of vessels used for the transportation
						of crude oil. ULCCs are even larger than Very Large Crude Carriers
						(VLCCs) and have the capacity to carry extremely large quantities of
						crude oil over long distances.
					</p>
					<p>Key features of ULCCs include:</p>
					<p>
						<span>Size:</span> ULCCs are among the largest ships in the world,
						with a deadweight tonnage (DWT) exceeding 320,000 metric tons. These
						vessels are designed to carry massive amounts of crude oil.
					</p>
					<p>
						<span>Dimensions:</span> The dimensions of ULCCs are substantial,
						with typical values including a length of over 330 meters, a beam
						(width) of more than 60 meters, and a draft that can exceed 30
						meters. These dimensions allow them to navigate major shipping lanes
						and access deepwater ports.
					</p>
					<p>
						<span>Trade Routes:</span> ULCCs are often used for long-haul
						voyages, transporting crude oil from major oil-producing regions to
						refineries and demand centers around the world. They are capable of
						navigating through key maritime routes, including the Suez Canal and
						the Strait of Malacca.
					</p>
					<p>
						<span>Cargo Types:</span> Like VLCCs, ULCCs are designed
						specifically for the transportation of crude oil. They have large
						cargo holds with segregated compartments to handle different grades
						of crude oil.
					</p>
					<p className='margin-bottom'>
						<span>Global Significance:</span> ULCCs play a critical role in the
						global oil supply chain by facilitating the efficient movement of
						large volumes of crude oil across oceans. They are essential for
						connecting major oil-producing regions with refineries and markets
						worldwide.
					</p>
					<p className='orange-text'>
						As with any classification in the shipping industry, it's important
						to note that vessel sizes and classifications can evolve over time,
						and technological advancements or changes in industry standards may
						influence these specifications. For the most current and specific
						information, it is advisable to consult maritime authorities,
						shipping organizations, or industry publications.
					</p>
					<p className='page-title'>FLOATING STORAGE AND OFFLOADING (FSO)</p>
					<p>
						A Floating Storage and Offloading (FSO) unit is a type of floating
						vessel used in the oil and gas industry for the temporary storage of
						crude oil before it is offloaded to a tanker or transported via
						pipelines to refineries. FSO units are typically stationed near
						offshore oil fields, where they receive crude oil from production
						platforms.
					</p>
					<p>Key features of Floating Storage and Offloading units include:</p>
					<p>
						<span>Storage:</span> FSO units have large storage capacities,
						allowing them to store significant volumes of crude oil. The storage
						tanks on board are designed to handle the temporary accumulation of
						oil before it is transferred to other vessels or infrastructure.
					</p>
					<p>
						<span>Offloading:</span> FSOs are equipped with facilities for
						offloading crude oil to shuttle tankers or other transport vessels.
						This can be done through the use of hoses or loading arms, and the
						crude oil is then transported to refineries for processing.
					</p>
					<p>
						<span>Location:</span> FSO units are typically moored near offshore
						oil fields, where they serve as a floating storage facility. They
						can be permanently anchored or may be relocated to different
						locations as needed.
					</p>
					<p>
						<span>Conversion:</span> Some FSO units are converted from older oil
						tankers or ships that are no longer suitable for traditional
						transportation purposes. Converting these vessels into FSOs allows
						for their continued use in the oil and gas industry.
					</p>
					<p>
						<span>Role in Oil Fields:</span> FSO units play a crucial role in
						the production and transport of crude oil from offshore oil fields.
						They provide a flexible and temporary storage solution, especially
						in cases where pipeline infrastructure is not readily available or
						economically viable.
					</p>
					<p>
						FSO units contribute to the overall logistics and infrastructure of
						offshore oil and gas operations, providing a means to store and
						transfer crude oil efficiently. The use of FSOs can be influenced by
						factors such as the distance to onshore facilities, the availability
						of pipeline infrastructure, and economic considerations in the oil
						and gas industry.
					</p>
					<PageButtons fileName='TYPES_OF_OIL_TANKERS.pdf' />
				</div>
			</div>
		</div>
	);
};

export default TypesOfTankersPage;
