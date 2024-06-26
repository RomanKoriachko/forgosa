import React, { useEffect, useState } from 'react';

const SidebarWidget: React.FC = () => {
	const [shouldAddWidget, setShouldAddWidget] = useState<boolean>(true);

	useEffect(() => {
		if (shouldAddWidget) {
			const script = document.createElement('script');
			script.type = 'text/javascript';
			script.src =
				'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js';
			script.async = true;
			script.innerHTML = JSON.stringify({
				width: '100%',
				height: '100%',
				symbolsGroups: [
					{
						name: 'Indices',
						originalName: 'Indices',
						symbols: [
							{ name: 'PEPPERSTONE:GASOLINE', displayName: 'Gasoline' },
							{ name: 'FRED:DDFUELUSGULF', displayName: 'Diesel Fuel' },
							{ name: 'ECONOMICS:USCOSPRE	', displayName: 'Petroleum' },
						],
					},
					{
						name: 'Futures',
						originalName: 'Futures',
						symbols: [
							{ name: 'NYMEX:CL1!', displayName: 'WTI Crude Oil' },
							{ name: 'NYMEX:NG1!', displayName: 'Gas' },
							{ name: 'NYMEX:AGE1!', displayName: 'Gulf Coast Jet Fuel' },
							{ name: 'NYMEX:A1Q1!', displayName: 'NY Jet Fuel' },
							{ name: 'NYMEX:AGT1!', displayName: 'European Diesel' },
							{
								name: 'NYMEX:AZ71!',
								displayName:
									'ULSD 10ppm CIF MED (Platts) vs. Low Sulphur Gasoil Futures',
							},
							{
								name: 'NYMEX:EP11!',
								displayName:
									'ULSD 10ppm Cargoes CIF Med (Platts) vs. New York Harbor ULSD Futures',
							},
							{
								name: 'NYMEX:ALY1!',
								displayName: 'Gulf Coast ULSD',
							},
						],
					},
					{
						name: 'Bonds',
						originalName: 'Bonds',
						symbols: [
							{ name: 'CBOT:ZB1!', displayName: 'T-Bond' },
							{ name: 'CBOT:UB1!', displayName: 'Ultra T-Bond' },
							{ name: 'EUREX:FGBL1!', displayName: 'Euro Bund' },
							{ name: 'EUREX:FBTP1!', displayName: 'Euro BTP' },
							{ name: 'EUREX:FGBM1!', displayName: 'Euro BOBL' },
						],
					},
					{
						name: 'Forex',
						originalName: 'Forex',
						symbols: [
							{ name: 'FX:EURUSD', displayName: 'EUR to USD' },
							{ name: 'FX:GBPUSD', displayName: 'GBP to USD' },
							{ name: 'FX:USDJPY', displayName: 'USD to JPY' },
							{ name: 'FX:USDCHF', displayName: 'USD to CHF' },
							{ name: 'FX:AUDUSD', displayName: 'AUD to USD' },
							{ name: 'FX:USDCAD', displayName: 'USD to CAD' },
						],
					},
				],
				showSymbolLogo: true,
				isTransparent: true,
				colorTheme: 'dark',
				locale: 'en',
			});

			const widgetContainer = document.getElementsByClassName(
				'sidebar-tradingview-widget-container__widget'
			)[0];
			if (widgetContainer) {
				widgetContainer.appendChild(script);
			}
		}

		return () => {
			const widgetContainer = document.getElementsByClassName(
				'sidebar-tradingview-widget-container__widget'
			)[0];
			if (widgetContainer && widgetContainer.firstChild) {
				widgetContainer.removeChild(widgetContainer.firstChild);
			}
		};
	}, [shouldAddWidget]);

	useEffect(() => {
		setShouldAddWidget(true);
	}, []);

	return (
		<div className='tradingview-widget-container'>
			{shouldAddWidget && (
				<div className='sidebar-tradingview-widget-container__widget'></div>
			)}
			<div className='tradingview-widget-copyright'>
				<a
					href='https://www.tradingview.com/'
					rel='noopener nofollow noreferrer'
					target='_blank'
				>
					<span className='blue-text'>Track all markets on TradingView</span>
				</a>
			</div>
		</div>
	);
};

export default SidebarWidget;
