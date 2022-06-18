import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MarchandSideBar from './Log/MarchandSideBar';
import ShopNavbar from './ShopNavbar';

import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import ProductList from './ProductList';

const ProductPage = ({ setIsProducItem, itemId, handledProductItemView }) => {
	const products = useSelector(state => state.marchandReducer);
	const product = products?.products?.find(p => p.id == itemId);

	return (
		<>
			<ShopNavbar />
			<div className="cross-contenair-item">
				<span
					className="cross"
					onClick={e => {
						e.preventDefault();
						setIsProducItem(false);
					}}
				>
					&#10005;
				</span>
			</div>
			<div className="product-page-container">
				<div class="container">
					<div class="card card-idem">
						<div class="container-fliud">
							<div class="wrapper row">
								<div className="preview col-md-6">
									<img src={`./images/${product.picture}`} alt="pic" />
								</div>
								<div class="details col-md-6">
									<h3 class="product-title">{product.title}</h3>
									<div class="rating">
										<div class="stars">
											<span class="fa fa-star checked"></span>
											<span class="fa fa-star checked"></span>
											<span class="fa fa-star checked"></span>
											<span class="fa fa-star"></span>
											<span class="fa fa-star"></span>
										</div>
										<span class="review-no">41 reviews</span>
									</div>
									<p class="product-description">{product.description}</p>
									<h4 class="price">
										Prix: <span>{product.sellPrice} Fcfa</span>
									</h4>
									<p class="vote">
										<strong>91%</strong> de personnes on achéter cet produit!{' '}
										<strong>(87 votes)</strong>
									</p>

									<div class="action">
										<PayPalScriptProvider
											options={{
												'client-id':
													'ATwJNv2CRrM3Lywpi_R7CyEbca4edMJAfuEtnKDN4OzHq5ohRorW5P40SpaHlVv7LiuaOwjnev5PV_Vu',
											}}
										>
											<PayPalButtons
												style={{ layout: 'horizontal' }}
												fundingSource="paypal"
												disabled={false}
												createOrder={(data, actions) => {
													return actions.order
														.create({
															purchase_units: [
																{
																	amount: {
																		value: '2',
																		breakdown: {
																			item_total: {
																				currency_code: 'USD',
																				value: '2',
																			},
																		},
																	},
																	items: [
																		{
																			name: 'donation-example',
																			quantity: '1',
																			unit_amount: {
																				currency_code: 'USD',
																				value: '2',
																			},
																			category: 'DONATION',
																		},
																	],
																},
															],
														})
														.then(orderId => {
															// Your code here after create the donation
															return orderId;
														});
												}}
												onApprove={function (data, actions) {
													return actions.order.capture().then(function () {
														alert('Payement reussi');
													});
												}}
											/>
										</PayPalScriptProvider>
										{/*<button class="like btn btn-default" type="button">
										<span class="fa fa-heart"></span>
									</button>*/}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ProductList handledProductItemView={handledProductItemView} />
		</>
	);
};

export default ProductPage;
