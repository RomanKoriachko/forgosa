import React from 'react';

import './KeyTransactionPage.scss';
import { PageButtons, PageTitle } from '../../../../common';
import { LinksSlider } from '../../components';

type Props = {};

const KeyTransactionPage = (props: Props) => {
	return (
		<div className='key-transactions-page'>
			<PageTitle
				image='faq-bg-img.png'
				title='FAQ'
				subtitle='KEY TRANSACTION PROCEDURES & TERMS OF DELIVERY'
			/>
			<LinksSlider index={0} />
			<div className='page-content'>
				<div className='small-container'>
					<p className='big-text'>FREE ON BOARD (FOB)</p>
					<p className='page-title'>WHAT IS FREE ON BOARD?</p>
					<p>
						In straightforward terms, the FOB Incoterm represents an arrangement
						between a buyer and a seller, wherein the cost of the goods sold
						encompasses the delivery to a designated port, marking the transfer
						of ownership from the seller to the buyer. To put it differently, as
						soon as the goods are loaded onto the ship and declared "on board,"
						any potential risk of damage or loss transitions from the seller to
						the buyer.
					</p>
					<p>
						FOB is applicable exclusively to shipments utilizing ocean freight.
						Within FOB terms, the buyer assumes both the responsibility and cost
						of the goods starting from the moment they depart from the seller's
						premises until they reach the specified destination port.
					</p>
					<p className='page-title'>
						WHAT IS THE DIFFERENCE BETWEEN FOB ORIGIN AND FOB DESTINATION?
					</p>
					<p>
						There are two types of FOB terms: FOB shipping point (or FOB origin)
						and FOB destination.
					</p>
					<p>
						<span>FOB Origin means</span> that the buyer takes ownership of the
						goods at the point of origin and is responsible for any risks
						associated with transporting them from there.
					</p>
					<p>
						<span>FOB Destination means</span> that the seller holds onto
						ownership until it reaches its final destination and is responsible
						for risk associated with transit.
					</p>
					<p className='page-title'>OBLIGATIONS UNDER THE FOB INCOTERM</p>
					<p className='bold-text'>Exporter Obligations:</p>
					<p>• Packaging and loading the goods as per industry standards.</p>
					<p>
						• Providing necessary shipping documentation for export customs
						clearance, as well as covering all the export duties and taxes{' '}
					</p>
					<p>• Delivering the goods to a designated port </p>
					<p className='margin-bottom'>
						• Covering the origin terminal handling charges (OTHC)
					</p>
					<p className='bold-text'>Importer Obligations:</p>
					<p>• Paying for the cost of goods</p>
					<p>
						• Covering the freight and insurance costs associated with
						transportation.
					</p>
					<p>
						• Handling customs clearance at the port of entry and any import
						duties or taxes that apply.
					</p>
					<p>
						• Covering unloading and inland transportation costs to its
						warehouse or place of delivery
					</p>
					<p>• Import duties, customs clearance, and any other taxes or fees</p>
					<p className='page-title'>FOB POINT OF RISK TRANSFER</p>
					<p>
						The moment at which the transfer of risk shifts from the seller to
						the buyer hinges on whether FOB origin or FOB destination is
						employed.
					</p>
					<p>
						With FOB Origin, the risk of damage or loss transitions from the
						seller to the buyer upon loading the goods onto the transporting
						vessel at the origin port. Consequently, any damages, losses, or
						delays that may arise during transit become the responsibility of
						the buyer.
					</p>
					<p className='margin-bottom'>
						Conversely, under FOB Destination, the transfer of risk takes place
						upon the goods reaching their destination and being unloaded. In
						this scenario, the seller assumes responsibility for any associated
						costs, damages, or losses incurred throughout the transit.
					</p>
					<p className='big-text'>COST, INSURANCE AND FREIGHT (CIF)</p>
					<p className='page-title'>
						WHAT DOES COST, INSURANCE, AND FREIGHT (CIF) ENTAIL?
					</p>
					<p>
						Cost, insurance, and freight (CIF) constitutes an international
						shipping arrangement wherein a seller covers the expenses for a
						buyer's order, including insurance and freight charges, while the
						goods are in transit. This agreement exclusively pertains to goods
						transported via waterways, seas, or oceans.
					</p>
					<p>
						The merchandise is shipped to the buyer's designated port as
						stipulated in the sales contract. Once loaded onto the vessel, the
						risk of loss or damage shifts from the seller to the buyer.
						Nevertheless, the responsibility for insuring the cargo and covering
						freight costs remains with the seller.{' '}
					</p>
					<p>
						CIF bears similarities to carriage and insurance paid to (CIP);
						however, CIF is specifically designed for sea and waterway
						shipments, whereas CIP is applicable to various modes of transport,
						including truck shipments.
					</p>
					<p className='page-title'>
						GRASPING THE CONCEPT OF COST, INSURANCE, AND FREIGHT (CIF)
					</p>
					<p>
						The contractual stipulations of CIF delineate the point at which the
						seller's liability concludes and the buyer's liability commences.
						CIF is exclusively employed for the shipment of goods overseas or
						via a waterway.
					</p>
					<p>
						The seller is tasked with covering the expenses and freight
						associated with transporting the goods to the buyer's designated
						port of arrival. Typically, exporters with direct access to shipping
						vessels opt for CIF. Nonetheless, the buyer also bears
						responsibilities, as outlined below.
					</p>
					<p className='page-title'>SELLER'S OBLIGATIONS</p>
					<p>
						According to CIF terms, the seller is accountable for the following
						responsibilities:
					</p>
					<p>• Procuring export licenses for the product.</p>
					<p>• Facilitating product inspections.</p>
					<p>
						• Bearing any charges or fees associated with shipping and loading
						the goods to the seller's port.{' '}
					</p>
					<p>• Covering packaging costs for exporting the cargo.</p>
					<p>
						• Settling fees for customs clearance, duty, and taxes related to
						exporting.
					</p>
					<p>
						• Assuming the cost of shipping the freight via sea or waterway from
						the seller's port to the buyer's designated port of arrival.
					</p>
					<p>
						• Undertaking the cost of insuring the shipment up until the buyer's
						port of destination.
					</p>
					<p>
						• Taking responsibility for any damage or destruction to the goods.
						Additionally, the seller is obliged to deliver the goods to the ship
						within the agreed-upon timeframe and furnish proof of delivery and
						loading.
					</p>
					<p className='page-title'>BUYER'S DUTIES</p>
					<p>
						Upon the goods' arrival at the buyer's destination port, the buyer
						takes on the responsibility for the expenses linked to importing and
						delivering the goods. These costs encompass:
					</p>
					<p>• Unloading the product at the port terminal.</p>
					<p>
						• Transferring the product within the terminal and to the delivery
						site.
					</p>
					<p>
						• Covering custom duty charges associated with importing the goods.{' '}
					</p>
					<p>
						• Meeting charges for transporting, unloading, and delivering the
						goods to the final destination.
					</p>
					<p className='page-title'>RISK TRANSFER CONSIDERATIONS</p>
					<p>
						It is crucial to recognize that in international shipping, the
						transfer of risk and cost between the buyer and seller varies
						depending on the type of shipping agreement in place. Specifically,
						under CIF, the points of risk and cost transfer differ. The precise
						terms outlined in the contract dictate when the liability for the
						goods shifts from the seller to the buyer.
					</p>
					<p>
						As the seller bears the expenses of shipping, freight, and insurance
						until the cargo reaches the buyer's designated port, the cost
						transfer occurs upon the goods' arrival at the buyer's port.
						However, the transfer of risk takes place from the seller to the
						buyer when the goods are loaded onto the vessel. Even though the
						seller is responsible for obtaining insurance, the buyer assumes
						ownership of the goods upon loading onto the ship. If any damage
						occurs during transit, it is the buyer's responsibility to file a
						claim with the seller's insurance company.
					</p>
					<p className='page-title'>UNIQUE CONSIDERATIONS</p>
					<p>
						Given that the buyer shoulders the risk only upon the loading of the
						cargo onto the vessel, specific scenarios may render a CIF agreement
						less suitable. Notably, situations involving containerized cargo
						shipments present challenges. In these instances, goods might remain
						in a container for an extended period before loading onto the vessel
						at the seller's port.
					</p>
					<p className='margin-bottom'>
						In such cases, CIF poses a risk to the buyer because the goods may
						not be insured while residing in the container awaiting vessel
						loading. Consequently, CIF agreements may not be the most
						appropriate choice for shipments involving containerized cargo due
						to the potential exposure to risk during this interim period.
					</p>
					<p className='big-text'>SHIP-TO-SHIP (STS) TRANSFER OPERATION</p>
					<p>
						A Ship-to-Ship (STS) transfer operation refers to the process of
						transferring cargo between seagoing ships positioned alongside each
						other, either while stationary or in motion. This method is commonly
						employed for the transfer of various cargoes, including crude oil,
						liquefied gas (LPG or LNG), bulk cargo, and petroleum products. It
						is essential to note that the term "STS transfer" is specifically
						used in the context of civilian merchant vessels, distinguishing it
						from underway replenishment, a term utilized by the US Navy for
						similar but typically more complex operations between naval vessels
						while underway.
					</p>
					<p>
						While the majority of cargo operations occur between a ship and a
						land-based terminal, there are instances where transferring cargo
						directly between two ships in open seas becomes advantageous. This
						maneuver is termed a ship-toship operation. In this scenario, one
						vessel serves as the terminal (the delivering vessel, often referred
						to as STBL or Mother Vessel), while the other moors alongside,
						acting as the recipient (the daughter vessel). This method allows
						for flexible and efficient cargo transfers, especially in locations
						where land-based terminals may not be readily available or
						practical.
					</p>
					<p className='page-title'>REASONS FOR LIGHTENING A VESSEL:</p>
					<p>
						<span>• Harbor Entry or Re-floating:</span> Lightening a vessel may
						be necessary before entering a harbor with shallow waters or for
						re-floating purposes, especially if the ship is carrying a heavy
						load that needs to be reduced for safe navigation.{' '}
					</p>
					<p>
						<span>• Bunkering Operations:</span> To facilitate bunkering
						operations, where the vessel needs to take on fuel, it may be
						advantageous to lighten the ship to ensure safe and efficient fuel
						transfer.{' '}
					</p>
					<p>
						<span>• Time Constraints:</span> In cases of tight schedules,
						lightening a vessel can help save time by enabling quicker and more
						efficient cargo handling, especially in busy ports or during
						critical operational timelines.{' '}
					</p>
					<p>
						<span>• Commercial Transactions:</span> Commercial reasons, such as
						changes in cargo ownership during transit, may necessitate
						lightening a vessel. This allows for the smooth transfer of cargo
						ownership while the ship is still at sea.{' '}
					</p>
					<p>
						<span>• Emergency Situations:</span> Following a grounding or
						similar incidents, lightening a vessel becomes crucial for emergency
						reasons. Removing part of the cargo helps in refloating the ship and
						minimizing potential damage.{' '}
					</p>
					<p className='margin-bottom'>
						<span>• Sanctions Evasion:</span> Unfortunately, in some cases,
						vessels may be lightened for the purpose of evading sanctions. By
						transferring cargo at sea, parties involved may attempt to bypass
						legal restrictions imposed on certain ports or destinations.
					</p>
					<p className='bold-text'>
						It's important to note that while lightening a vessel can be a
						practical solution for various operational and safety reasons, any
						attempt to use this process for illegal activities, such as
						sanctions evasion, is subject to international laws and regulations.
					</p>
					<p className='page-title'>
						DUE DILIGENCE IN SHIP-TO-SHIP TRANSFER OPERATIONS
					</p>
					<p className='margin-bottom'>
						Ship-to-ship (STS) transfer operations, whether conducted at open
						sea or outer port limits (OPL), involve several parties, including
						the participating vessels, the Service Provider supplying STS
						equipment, and the qualified Mooring Master (Person in Overall
						Advisory Control, POAC). Despite the absence of direct contractual
						relationships among these entities, both Masters are responsible for
						ensuring safety. Consequently, the exercise of due diligence before
						commencing the STS operation is imperative, serving as the primary
						means to guarantee safety. Due diligence should be observed in
						various phases of the Ship-to-Ship operation:
					</p>
					<p>
						<span>• Ship Nomination and Clearance Requests:</span> Ensuring that
						nominated ships are fit for the transfer operation and obtaining
						necessary clearance requests.
					</p>
					<p>
						<span>• Appointment of Service Provider and POAC:</span> Selecting a
						competent Service Provider and qualified Mooring Master to oversee
						the operation.
					</p>
					<p>
						<span>• Technical Advice to the Master:</span> Providing technical
						advice to the Master by the technical Operator of the vessel.
					</p>
					<p>
						<span>• Risk Assessment Procedure:</span> Conducting a comprehensive
						risk assessment to identify and mitigate potential hazards.
					</p>
					<p className='margin-bottom'>
						<span>• Assessment of the STS Location:</span> Evaluating the
						suitability and safety of the chosen STS location.
					</p>
					<p>
						The level of due diligence exercised is guided by SOLAS Chapter IX
						(the ISM Code), emphasizing the assessment of "objective evidence"
						to ensure safety. This evidence includes past STS records, crew
						experience, lessons learned from incidents, performance data of
						vessels and Service Providers, and adherence to industry best
						practices. Access to such data is facilitated by relevant services,
						some of which are open-source.
					</p>
					<p>
						While the term "due diligence" may lack precision, its application
						becomes crucial during incident investigations or litigation.
						Technical operators must be able to demonstrate compliance with both
						commercial guidelines and statutory requirements, thereby justifying
						their commitment to safety.
					</p>
					<PageButtons />
				</div>
			</div>
		</div>
	);
};

export default KeyTransactionPage;
