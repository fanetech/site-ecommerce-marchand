import React, { useState } from 'react';
import Footer from '../../Footer';
import ProductList from '../ProductList';
import ProductPage from '../ProductPage';
import ShopNavbar from '../ShopNavbar';
import Silder from '../Silder';

const ClientView = () => {
	const [isProductItem, setIsProducItem] = useState(false);
	const [itemId, setItem] = useState('');
	const handledProductItemView = id => {
		setItem(id);
		setIsProducItem(true);
	};
	return (
		<>
			{!isProductItem && (
				<>
					<div class="hero_area hero-custom">
						{/*<!-- header section strats -->*/}
						<ShopNavbar />
						{/*<!-- end header section -->


         <!-- slider section -->*/}
						<Silder />

						{/*<!-- end slider section -->*/}
					</div>

					{/*<!-- product section -->*/}
					<ProductList handledProductItemView={handledProductItemView} />

					{/*<!-- end product section -->*/}
				</>
			)}
			{isProductItem && (
				<>
					<ProductPage
						handledProductItemView={handledProductItemView}
						setIsProducItem={setIsProducItem}
						itemId={itemId}
					/>
				</>
			)}
			<Footer />
		</>
	);
};

export default ClientView;
