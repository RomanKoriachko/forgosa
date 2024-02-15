import React from 'react';

import './ProductsPage.scss';
import { PageTitle } from '../../common';

type Props = {};

const ProductsPage = (props: Props) => {
	return (
		<div>
			<PageTitle image='products-bg-img.png' title='Products' />
		</div>
	);
};

export default ProductsPage;
