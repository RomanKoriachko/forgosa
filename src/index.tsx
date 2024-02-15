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
} from './pages';

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
				element: <ServicesPage />,
				path: '/services',
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
