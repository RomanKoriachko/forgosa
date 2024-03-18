import React from 'react';

import { PageButtons, PageTitle } from '../../../../common';
import { LinksSlider } from '../../components';

import './CrudeOilPage.scss';

type Props = {};

const CrudeOilPage = (props: Props) => {
	return (
		<div className='faq-page crude-oil-page'>
			<PageTitle
				image='faq-bg-img.png'
				title='FAQ'
				subtitle='crude oil & petroleum products'
			/>
			<LinksSlider index={1} />
			<div className='page-content'>
				<div className='faq-page-container'>
					<p className='bold-text'>
						Petroleum products are materials derived from crude oil (petroleum)
						as it is processed in oil refineries. Unlike petrochemicals, which
						are a collection of well-defined usually pure organic compounds,
						petroleum products are complex mixtures. Most petroleum is converted
						into petroleum products, which include several classes of fuels.
					</p>
					<p>
						Capital expenditures. Carbon capture and storage (CCS) Process by
						which carbon dioxide emissions are captured and removed from the
						atmosphere and then stored, normally via injection into a secure
						underground geological formation
					</p>
					<p className='page-title'>PETROLEUM (CRUDE OIL)</p>
					<p>
						Petroleum, commonly known as crude oil or simply oil, is a naturally
						occurring liquid mixture with a yellowish-black hue, primarily
						composed of hydrocarbons. It is found in geological formations and
						encompasses both unprocessed crude oil and refined petroleum
						products. Oil drilling is the primary method for petroleum
						extraction, conducted following studies of structural geology,
						sedimentary basin analysis, and reservoir characterization.
						Unconventional reserves such as oil sands and oil shale also exist.
						In the petroleum industry, crude oil is classified based on its
						production location (e.g., West Texas Intermediate, Brent, or Oman),
						API gravity (a density measure), and sulfur content. Density
						categorizes crude oil as light, medium, or heavy, while sulfur
						content distinguishes between sweet (low sulfur) and sour (high
						sulfur) varieties. Geographic location is crucial, affecting
						transportation costs to refineries. Light, sweet crude oil is
						preferable as it yields more gasoline and commands higher prices due
						to environmental advantages and lower refining requirements to meet
						sulfur standards. Crude oil assay analysis in laboratories reveals
						unique molecular characteristics of each oil. Benchmark oils, such
						as West Texas Intermediate (WTI), Brent Blend, Dubai-Oman, Tapis,
						Minas, OPEC Reference Basket, Midway Sunset Heavy, and Western
						Canadian Select, are used for pricing worldwide. However, declining
						production of these benchmarks has led to the increasing use of
						other oils in actual trades. Upon extraction, crude oil undergoes
						refining and separation, primarily through distillation, yielding
						various products for direct use or manufacturing. These products
						range from petrol (gasoline), diesel, and kerosene to asphalt and
						chemical reagents (ethylene, propylene, butene, acrylic acid,
						para-xylene), essential in the production of plastics, pesticides,
						and pharmaceuticals.
					</p>
					<p className='page-title'>FUEL OIL</p>
					<p>
						Fuel oil encompasses various fractions obtained through the
						distillation of petroleum (crude oil), including distillates
						(lighter fractions) and residues (heavier fractions). This category
						includes diverse types such as heavy fuel oil (bunker fuel), marine
						fuel oil (MFO), furnace oil (FO), gas oil (gasoil), heating oils
						(e.g., home heating oil), and diesel fuel. The term "fuel oil"
						broadly encompasses any liquid fuel burned in furnaces or boilers
						for heat generation (heating oils) or used in engines for power
						generation (motor fuels). However, it typically excludes other
						liquid oils with a flash point of approximately 42 °C (108 °F) and
						oils burned in cotton- or wool-wick burners. In a more stringent
						sense, fuel oil specifically refers to the heaviest commercial fuels
						derived from crude oil, exceeding the weight of gasoline (petrol)
						and naphtha. Comprising long-chain hydrocarbons, including alkanes,
						cycloalkanes, and aromatics, fuel oil exhibits a composition
						distinct from smaller molecules like propane, naphtha, gasoline, and
						kerosene, which have lower boiling points and are separated at the
						initial stages of fractional distillation. On the contrary, heavier
						petroleum-derived oils like diesel fuel and lubricating oil are less
						volatile and distill more slowly. In the United States, various fuel
						grades are classified based on specific characteristics. While
						trends generally hold true, different organizations may have
						distinct numerical specifications for these fuel grades. The
						following outlines key aspects of six fuel grades:
					</p>
					<p className='page-title'>NUMBER 1 FUEL OIL:</p>
					<p>
						Also known as Diesel No. 1, kerosene, and jet fuel. Volatile
						distillate oil designed for vaporizing pot-type burners and
						high-performance/clean diesel engines. Boils off immediately after
						the heavy naphtha cut used for gasoline. Former names include coal
						oil, stove oil, and range oil.
					</p>
					<p className='page-title'>NUMBER 2 FUEL OIL:</p>
					<p>
						Distillate home heating oil. Used in trucks and some cars as diesel
						No. 2 with a cetane number limit describing ignition quality.
						Typically obtained from the light gas oil cut. Historical use of the
						term "gasoil" refers to its use in enriching water gas manufacture.
					</p>
					<p className='page-title'>NUMBER 3 FUEL OIL:</p>
					<p>
						Formerly a distillate oil for burners requiring low-viscosity fuel.
						ASTM merged this grade into the Number 2 specification, and the term
						has rarely been used since the mid-20th century.
					</p>
					<p className='page-title'>NUMBER 4 FUEL OIL:</p>
					<p>
						Also known as Bunker A. Commercial heating oil for burner
						installations lacking preheaters. May be obtained from the heavy gas
						oil cut.
					</p>
					<p className='page-title'>NUMBER 5 FUEL OIL:</p>
					<p>
						Residual-type industrial heating oil requiring preheating to 77–104
						°C (171–219 °F) for proper atomization at burners. Sometimes
						referred to as Bunker B. May be obtained from the heavy gas oil cut
						or be a blend of residual oil with enough Number 2 oil to adjust
						viscosity for pumpability without preheating.
					</p>
					<p className='page-title'>NUMBER 6 FUEL OIL:</p>
					<p>
						High-viscosity residual oil requiring preheating to 104–127 °C
						(219–261 °F). Residual means the material remaining after more
						valuable cuts of crude oil have boiled off. May be known as residual
						fuel oil (RFO), Bunker C by Navy specification, or PS-400 by Pacific
						Specification. Contains impurities such as 2% water and 0.5% mineral
						oil.
					</p>
					<p className='page-title'>HEAVY FUEL OIL (HFO) OR BUNKER FUEL</p>
					<p>
						Heavy fuel oil (HFO), also known as bunker fuel or residual fuel
						oil, falls into the category of fuel oils characterized by a
						tar-like consistency. It is the residual product remaining after the
						distillation and cracking processes of petroleum. Due to its origin,
						HFO contains various contaminants, including aromatics, sulfur, and
						nitrogen. Consequently, when HFO is burned, the emissions produced
						are generally more polluting compared to other cleaner fuel oils.
						HFO is primarily utilized as a fuel source for marine vessel
						propulsion, particularly in marine diesel engines. This preference
						is largely driven by its relatively low cost compared to cleaner
						fuel alternatives like distillates. However, it is essential to note
						that the environmental impact of HFO combustion has raised concerns
						due to its higher emissions of pollutants. Efforts to address
						environmental sustainability in the maritime industry often involve
						exploring cleaner and more ecofriendly alternatives to heavy fuel
						oil.
					</p>
					<p className='page-title'>MARINE FUEL OIL (MFO)</p>
					<p>
						In the maritime industry, a distinct classification system is
						employed for different types of fuel oils:
					</p>
					<p>
						• MGO (Marine Gas Oil): Roughly equivalent to no. 2 fuel oil, MGO is
						produced exclusively from distillate. It is characterized by its
						relatively cleaner composition.
					</p>
					<p>
						• MDO (Marine Diesel Oil): Roughly equivalent to no. 3 fuel oil, MDO
						is a blend of heavy gasoil that may contain minimal amounts of black
						refinery feedstocks. It possesses a low viscosity, up to 12 cSt,
						allowing it to be used in internal combustion engines without the
						need for heating.
					</p>
					<p>
						• IFO (Intermediate Fuel Oil): Roughly equivalent to no. 4 fuel oil,
						IFO is a blend of gasoil and heavy fuel oil. It contains less gasoil
						than marine diesel oil.
					</p>
					<p>
						• HFO (Heavy Fuel Oil): Pure or nearly pure residual oil, HFO is
						roughly equivalent to no. 5 and no. 6 fuel oil. It is a dense and
						viscous fuel commonly used in marine applications.
					</p>
					<p className='margin-bottom'>
						• NSFO (Navy Special Fuel Oil): Another term for no. 5 HFO, often
						used in naval applications.
					</p>
					<p>
						It's noteworthy that marine diesel oil contains some heavy fuel oil,
						distinguishing it from regular diesel, and is designed to meet the
						specific requirements of marine engines. This classification system
						is essential for the maritime industry to ensure proper fuel
						selection based on the specific needs and characteristics of
						different types of vessels and engines.
					</p>
					<p className='page-title'>HEATING OIL (HHO)</p>
					<p>
						Heating oil, a type of fuel oil, refers to any petroleum product or
						oil used for heating purposes. This commonly includes low viscosity
						grades of fuel oil utilized in furnaces or boilers for home heating
						and in other buildings. The abbreviation HHO is often used for home
						heating oil. In terms of chemical composition, most heating oil
						products are very similar to diesel fuel employed as motor fuel.
						However, motor fuel is typically subjected to higher fuel taxes. To
						prevent tax evasion, many countries incorporate fuel dyes into
						heating oil. These dyes enable law enforcement to verify if a driver
						is avoiding fuel taxes. In the European Union, Solvent Yellow 124
						has been added as a "Euromarker" since 2002. In the United Kingdom,
						untaxed diesel is commonly referred to as "red diesel."
					</p>
					<p className='page-title'>DIESEL FUEL OR GASOIL</p>
					<p>
						Diesel fuel, also known as diesel oil or historically heavy oil, is
						a specialized liquid fuel designed for use in diesel engines—
						internal combustion engines that achieve fuel ignition through
						compression of inlet air, followed by fuel injection, without the
						need for a spark. Therefore, diesel fuel must possess favorable
						compression ignition characteristics. The predominant form of diesel
						fuel is a specific fractional distillate derived from petroleum fuel
						oil. However, alternative sources like biodiesel, biomass to liquid
						(BTL), or gas to liquid (GTL) diesel are gaining prominence. To
						distinguish these alternatives, diesel derived from petroleum is
						occasionally termed Petro diesel in academic contexts. Diesel fuel
						is standardized in many countries, with the European Union adopting
						the EN 590 standard. Ultra-low-sulfur diesel (ULSD), characterized
						by significantly reduced sulfur content, is widely prevalent in the
						United Kingdom, mainland Europe, and North America as of 2016.
						Diesel fuel goes by various colloquial names, commonly referred to
						as simply diesel. In the United Kingdom, road-use diesel is known as
						diesel or, at times, white diesel to differentiate it from red
						diesel—a subsidized agricultural-only product with a distinctive
						colored dye. The official term for white diesel is DERV,
						representing diesel-engine road vehicle. In Australia, diesel fuel
						is referred to as distillate (distinct from an older sense of
						"distillate" referring to a different motor fuel), while in
						Indonesia (as well as in Israel), it is recognized as Solar, a
						trademarked name from the national petroleum company Pertamina. The
						term gas oil (French: gazole) is also occasionally used to refer to
						diesel fuel. To ensure consistent quality, diesel fuel undergoes
						standardization, defining properties such as cetane number, density,
						flash point, sulfur content, or biodiesel content. Diesel fuel
						standards include EN 590 (European Union), ASTM D975 (United
						States), GOST R 52368 (Russia), NATO F 54 (NATO), and DIN 51601
						(formerly used in West Germany, now obsolete). Historically, diesel
						fuel contained higher sulfur levels. European emission standards and
						preferential taxation have compelled oil refineries to significantly
						reduce sulfur levels in diesel fuels. In the European Union, sulfur
						content has notably decreased over the past two decades. The current
						standard, Euro 5 implemented in 2009, allows for a maximum sulfur
						content of 10 ppm.
					</p>
					<p className='page-title'>GASOLINE (PETROL)</p>
					<p className='margin-bottom'>
						Gasoline, also referred to as petrol or gas, is a clear, yellowish,
						and flammable liquid widely utilized as a fuel for sparkignited
						internal combustion engines. It is produced through the fractional
						distillation of petroleum and enhanced with additives, constituting
						organic compounds.The fuel characteristics of a gasoline blend,
						crucial for preventing engine knocking and ensuring efficiency in
						reciprocating engines, are determined by its octane rating. Lead
						compounds are generally excluded in modern automotive gasoline,
						except for specific applications in aviation, off-road vehicles, and
						racing cars. Gasoline has the potential to enter the environment in
						various forms-uncombusted liquid, flammable liquid, or vaporduring
						its production, handling, transport, and delivery stages, posing
						environmental and health concerns. The combustion of gasoline
						releases carbon dioxide (CO2), contributing to climate change. In
						2021, oil products, including gasoline, were responsible for
						approximately 32% of global CO2 emissions. Commercial gasoline is a
						complex mixture of hydrocarbons designed to meet diverse engine
						performance specifications. The chemical composition of gasoline is
						not precisely defined, varying with factors such as season, crude
						oil sources, refinery processing units, and chosen blend stocks
						during production. Produced in oil refineries, gasoline is derived
						from crude oil through distillation. Roughly 72 liters of gasoline
						can be obtained from a 160-liter barrel of crude oil. Virgin or
						straight-run gasoline, separated through distillation, does not meet
						modern engine specifications but can be blended to meet the required
						standards. The primary components of gasoline include a homogeneous
						mix of small hydrocarbons (C4-C12), encompassing paraffins, olefins,
						and naphthenes. The specific ratio of molecules depends on variables
						such as the refinery, crude oil feed, and gasoline grade.
					</p>
					<p>Key refinery streams employed in gasoline production include:</p>
					<p>
						• Straight-run gasoline (naphtha): Distilled directly from crude
						oil, low in aromatics, and devoid of olefins, contributing up to 20%
						to the finished gasoline.
					</p>
					<p>
						• Reformate: Produced in a catalytic reformer, featuring high octane
						and a notable aromatic content.
					</p>
					<p>
						• Catalytic cracked gasoline: Produced with a catalytic cracker,
						characterized by a moderate octane, high olefin content, and
						moderate aromatics.
					</p>
					<p>
						• Hydrocrackate: Produced with a hydrocracker, featuring a medium to
						low octane and moderate aromatic levels.
					</p>
					<p>
						• Alkylate: Produced in an alkylation unit, lacking aromatics or
						olefins and boasting a high Motor Octane Number.
					</p>
					<p>
						• Isomerate: Obtained by isomerizing low-octane straight-run
						gasoline, featuring a medium Research Octane Number (RON) and Motor
						Octane Number (MON).
					</p>
					<p className='margin-bottom'>
						• Butane: Blended in limited quantities, subject to Reid Vapor
						Pressure (RVP) specifications.
					</p>
					<p>
						The octane rating, measured relative to a mixture of
						2,2,4-trimethylpentane and n-heptane, exhibits global variations.
						Different countries adhere to diverse octane rating conventions,
						such as Research Octane Number (RON) or Anti-Knock Index (AKI).
						Standard gasoline options may include 95 RON, while premium or
						high-performance alternatives offer higher ratings. In the U.S.,
						unleaded fuels range from 85 to 94 AKI (91-99 RON).
					</p>
					<p className='page-title'>KEROSENE</p>
					<p className='margin-bottom'>
						Kerosene, or paraffin, is a combustible hydrocarbon liquid which is
						derived from petroleum. It is widely used as a fuel in aviation as
						well as households. It is sometimes spelled kerosine in scientific
						and industrial usage. Kerosene is widely used to power jet engines
						of aircraft (jet fuel), as well as some rocket engines in a highly
						refined form called RP-1. It is also commonly used as a cooking and
						lighting fuel, and for fire toys such as poi. In parts of Asia,
						kerosene is sometimes used as fuel for small outboard motors or even
						motorcycles. World total kerosene consumption for all purposes is
						equivalent to about 5,500,000 barrels per day as of July 2023. The
						term kerosene is common in much of Argentina, Australia, Canada,
						India, New Zealand, Nigeria, and the United States, while the term
						paraffin (or a closely related variant) is used in Chile, Eastern
						Africa, South Africa, Norway, and the United Kingdom. The term lamp
						oil, or the equivalent in the local languages, is common in the
						majority of Asia and the Southeastern United States.
					</p>
					<p>
						To prevent confusion between kerosene and the much more flammable
						and volatile gasoline (petrol), some jurisdictions regulate markings
						or colorings for containers used to store or dispense kerosene. For
						example, in the United States, Pennsylvania requires that portable
						containers used at retail service stations for kerosene be colored
						blue, as opposed to red (for gasoline) or yellow (for diesel).
					</p>
					<p className='page-title'>JET FUEL OR AVIATION TURBINE FUEL (ATF)</p>
					<p className='margin-bottom'>
						Jet fuel or aviation turbine fuel (ATF, also abbreviated AVTUR) is a
						type of aviation fuel designed for use in aircraft powered by
						gas-turbine engines. It is colorless to straw-colored in appearance.
						The most commonly used fuels for commercial aviation are Jet A and
						Jet A-1, which are produced to a standardized international
						specification. The only other jet fuel commonly used in civilian
						turbine-engine powered aviation is Jet B, which is used for its
						enhanced cold-weather performance.
					</p>
					<p className='margin-bottom'>
						Jet fuel is a mixture of a variety of hydrocarbons. Because the
						exact composition of jet fuel varies widely based on petroleum
						source, it is impossible to define jet fuel as a ratio of specific
						hydrocarbons. Jet fuel is therefore defined as a performance
						specification rather than a chemical compound. Furthermore, the
						range of molecular mass between hydrocarbons (or different carbon
						numbers) is defined by the requirements for the product, such as the
						freezing point or smoke point. Kerosene-type jet fuel (including Jet
						A and Jet A-1, JP-5, and JP-8) has a carbon number distribution
						between about 8 and 16 (carbon atoms per molecule); wide-cut or
						naphtha-type jet fuel (including Jet B and JP-4), between about 5
						and 15.
					</p>
					<p className='margin-bottom'>
						Most jet fuels in use are kerosene-based. British standards derived
						from standards for kerosene use for lamps—known as paraffin in the
						UK—whereas American standards derived from aviation gasoline
						practices.
					</p>
					<p className='margin-bottom'>
						Jet A specification fuel has been used in the United States since
						the 1950s and is usually not available outside the United States and
						a few Canadian airports such as Toronto and Vancouver, whereas Jet
						A-1 is the standard specification fuel used in the rest of the world
						other than Russia and the CIS members where TS-1 is the most common
						standard. Both Jet A and Jet A-1 have a flash point higher than 38
						°C (100 °F), with an autoignition temperature of 210 °C (410 °F).
					</p>
					<p className='page-title'>DIFFERENCES BETWEEN JET A AND JET A-1</p>
					<p>The primary difference is the lower freezing point of A-1:</p>
					<p>Jet A's is −40 °C (−40 °F)</p>
					<p>Jet A-1's is −47 °C (−53 °F)</p>
					<p>
						The other difference is the mandatory addition of an anti-static
						additive to Jet A-1.
					</p>
					<p className='page-title'>JET B</p>
					<p>
						Jet B is a naphtha-kerosene fuel that is used for its enhanced
						cold-weather performance. However, Jet B's lighter composition makes
						it more dangerous to handle. For this reason, it is rarely used,
						except in very cold climates. A blend of approximately 30% kerosene
						and 70% gasoline, it is known as wide-cut fuel. It has a very low
						freezing point of −60 °C (−76 °F), and a low flash point as well. It
						is primarily used in some military aircraft. It is also used in
						northern Canada, Alaska, and sometimes Russia, because of its low
						freezing point.
					</p>
					<p className='page-title'>TS-1</p>
					<p>
						TS-1 is a jet fuel made to Russian standard GOST 10227 for enhanced
						cold-weather performance. It has somewhat higher volatility than Jet
						A-1 (flash point is 28 °C (82 °F) minimum). It has a very low
						freezing point, below −50 °C (−58 °F).
					</p>
					<p className='page-title'>BITUMEN</p>
					<p className='margin-bottom'>
						Bitumen, an extremely viscous component of petroleum, can exist as a
						sticky, black liquid or a seemingly solid mass that exhibits
						liquid-like behavior over extended time scales. In the United
						States, this substance is commonly known as asphalt. Whether found
						in natural deposits or derived from petroleum refining, bitumen is
						categorized as a pitch. confusion, the phrases "liquid asphalt,"
						"asphalt binder," or "asphalt cement" are used in the U.S.
					</p>
					<p className='margin-bottom'>
						Seventy percent of annual bitumen production is dedicated to road
						construction, its primary application. In this context, bitumen
						serves to bind aggregate particles such as gravel, creating a
						material known as asphalt concrete, colloquially referred to as
						asphalt. Its additional key uses include bituminous waterproofing
						products like roofing felt and roof sealant.
					</p>
					<p className='margin-bottom'>
						In materials sciences and engineering, the terms "asphalt" and
						"bitumen" are often used interchangeably, encompassing both natural
						and manufactured forms of the substance. However, there is regional
						variation in the prevalence of these terms. Geologists worldwide
						typically favor the term "bitumen" for the naturally occurring
						material. Conversely, for the manufactured material, a refined
						residue from the distillation process of specific crude oils,
						"bitumen" is the more prevalent term in many regions. In American
						English, however, "asphalt" is more commonly employed. To mitigate
					</p>
					<p className='page-title'>PETROLEUM NAPHTHA</p>
					<p className='margin-bottom'>
						Petroleum naphtha is an intermediate hydrocarbon liquid stream
						obtained from the refining of crude oil, identified by CAS number
						64742-48-9. Typically, it undergoes a desulfurization process
						followed by catalytic reforming. This reforming process serves to
						rearrange or restructure the hydrocarbon molecules present in the
						naphtha, as well as break down some molecules into smaller
						components. The end result is a high-octane element used in the
						production of gasoline (or petrol).
					</p>
					<p className='margin-bottom'>
						Given the diverse sources of petroleum crude oil globally, each with
						its unique composition or assay, and the variety of petroleum
						refineries worldwide, each designed for specific crude oils, naphtha
						is a broad term. Refineries produce their own naphthas, each with
						distinct initial and final boiling points, as well as other physical
						and compositional characteristics.
					</p>
					<p className='margin-bottom'>
						Naphthas can also be derived from alternative sources such as coal
						tar, shale deposits, tar sands, and the destructive distillation of
						wood. This diversity in origins contributes to the range of naphtha
						types with varying properties and applications.
					</p>
					<p className='page-title'>LIQUEFIED PETROLEUM GAS (LPG)</p>
					<p className='margin-bottom'>
						Liquefied Petroleum Gas (LPG), also known as Liquid Petroleum Gas,
						is a fuel gas composed of a flammable mixture of hydrocarbon gases,
						including propane, propylene, butylene, isobutane, and n-butane.{' '}
					</p>
					<p className='margin-bottom'>
						LPG finds application as a fuel gas in heating appliances, cooking
						equipment, and vehicles. Additionally, it is increasingly utilized
						as an aerosol propellant and refrigerant, serving as an
						environmentally friendly alternative to chlorofluorocarbons,
						contributing to efforts to reduce damage to the ozone layer. In the
						context of vehicle fuel, LPG is commonly referred to as autogas or
						simply gas.
					</p>
					<p className='margin-bottom'>
						The production of LPG involves refining petroleum or "wet" natural
						gas, and it is predominantly derived from fossil fuel sources. This
						manufacturing process occurs during the refining of petroleum (crude
						oil) or by extracting it from petroleum or natural gas streams as
						they emerge from the ground. Currently, LPG contributes
						approximately 3% of all energy consumed, burning relatively cleanly
						with minimal soot and sulfur emissions. As a gaseous fuel, it does
						not pose ground or water pollution hazards, but it can contribute to
						air pollution. LPG boasts a typical specific calorific value of 46.1
						MJ/kg, surpassing the values of 42.5 MJ/kg for fuel oil and 43.5
						MJ/kg for premium-grade petrol (gasoline).{' '}
					</p>
					<p>
						Beyond its role as an energy carrier, LPG holds promise as a
						feedstock in the chemical industry for synthesizing olefins such as
						ethylene and propylene.
					</p>
					<PageButtons />
				</div>
			</div>
		</div>
	);
};

export default CrudeOilPage;
