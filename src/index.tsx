import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Main } from './components';
import {
	ContactsPage,
	FaqPage,
	ProductsPage,
	ServicesPage,
	ErrorPage,
	SupplyChainPostPage,
	PriceVolatillityPostPage,
	EnvironmentalPostPage,
	GlobalEnergyPostPage,
} from './pages';
import {
	DieselFuelPage,
	GasolinePage,
	JetFuelPage,
	PetroleumPage,
} from './pages/ProductsPage/pages';
import {
	ConsultingPage,
	FreightServisesPage,
	FuelSuppliesPage,
	TollingPage,
} from './pages/ServicesPage/pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Main />,
			},

			{
				element: <ProductsPage />,
				path: '/products',
			},
			{
				element: <GasolinePage />,
				path: '/products/gasoline',
			},
			{
				element: <PetroleumPage />,
				path: '/products/petroleum',
			},
			{
				element: <JetFuelPage />,
				path: '/products/jet_fuel',
			},
			{
				element: <DieselFuelPage />,
				path: '/products/diesel_fuel',
			},

			{
				element: <ServicesPage />,
				path: '/services',
			},
			{
				element: <FreightServisesPage />,
				path: '/services/freight_services',
			},
			{
				element: <FuelSuppliesPage />,
				path: '/services/fuel_supplies',
			},
			{
				element: <TollingPage />,
				path: '/services/tolling',
			},
			{
				element: <ConsultingPage />,
				path: '/services/consulting',
			},

			{
				element: <SupplyChainPostPage />,
				path: '/supply_chain_resilience_and_geopolitical_risks',
			},
			{
				element: <PriceVolatillityPostPage />,
				path: '/price_volatility_and_forecasting',
			},
			{
				element: <EnvironmentalPostPage />,
				path: '/environmental_regulations_and_sustainable_practices',
			},
			{
				element: <GlobalEnergyPostPage />,
				path: '/global_energy_market_trends_and_analysis',
			},

			{
				element: <ContactsPage />,
				path: '/contacts',
			},
			{
				element: <FaqPage />,
				path: '/faq',
			},
		],
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
