import React, { useEffect } from 'react';

const Marquee: React.FC = () => {
	useEffect(() => {
		const script = document.createElement('script');
		script.src =
			'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
		script.async = true;
		script.innerHTML = `
      {
        "symbols": [
            {
              "description": "",
              "proName": "NYMEX:JKM1!"
            },
            {
              "description": "",
              "proName": "NYMEX:MTF1!"
            },
            {
              "description": "",
              "proName": "NYMEX:AZ71!"
            },
            {
              "description": "",
              "proName": "NYMEX:AGE1!"
            },
            {
              "description": "",
              "proName": "NYMEX:A1Q1!"
            },
            {
              "description": "",
              "proName": "NYMEX:EP11!"
            },
            {
              "description": "",
              "proName": "NYMEX:ALY1!"
            },
            {
              "description": "",
              "proName": "NYMEX:AGT1!"
            }
          ],
        "showSymbolLogo": true,
        "isTransparent": false,
        "displayMode": "adaptive",
        "colorTheme": "dark",
        "locale": "en"
      }`;
		const container = document.querySelector(
			'.tradingview-widget-container__widget'
		);
		if (container) {
			container.appendChild(script);
		}

		return () => {
			if (container && container.firstChild) {
				container.removeChild(container.firstChild);
			}
		};
	}, []);

	return (
		<div className='tradingview-widget-container'>
			<div className='tradingview-widget-container__widget'></div>
		</div>
	);
};

export default Marquee;
