import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { uidContext, uidContext2 } from '../AppContext';

const AddToCart = () => {
	const [checkItems, setCheckItem] = useState(true);
	const [products, setProducts] = useState([]);
	const [count, setCount] = useState(0);
	const uid = useContext(uidContext);
	const uid2 = useContext(uidContext2);
	const marchandData = useSelector(state => state.marchandReducer);
	let storeSplit = marchandData?.marchand?.storeName?.replace(' ', '-');
	console.log(storeSplit);
	useEffect(() => {
		const items = JSON.parse(localStorage.getItem('items'));
		if (!items) {
			setCheckItem(false);
		} else {
			setProducts(items);
			setCount(items?.reduce((total, item) => total + item.sellPrice, 0));
		}
	}, []);
	return (
		<div className="add-to-cart-container">
			<div class="container px-3 my-5 clearfix">
				{/*<!-- Shopping cart table -->*/}
				<div class="card">
					<div class="card-header">
						<h2>Panier</h2>
					</div>
					<div class="card-body">
						<div class="table-responsive">
							<table class="table table-bordered m-0">
								<thead>
									<tr>
										{/*<!-- Set columns width -->*/}
										<th class="text-center py-3 px-4" minWidth={400}>
											Nom du produits &amp; Details
										</th>
										<th class="text-right py-3 px-4" width={100}>
											Prix
										</th>
										<th class="text-center py-3 px-4" width={120}>
											Quantité
										</th>
										<th class="text-right py-3 px-4" width={100}>
											Total
										</th>
										<th class="text-center align-middle py-3 px-0" width={40}>
											<a
												href="/"
												class="shop-tooltip float-none text-light"
												title=""
												data-original-title="Clear cart"
											>
												<i class="ino ion-md-trash"></i>
											</a>
										</th>
									</tr>
								</thead>
								<tbody>
									{products.map(product => {
										return (
											<tr>
												<td class="p-4">
													<div class="media align-items-center">
														<img
															src={`./images/${product.picture}`}
															class="d-block ui-w-40 ui-bordered mr-4"
															alt=""
														/>

														<div class="media-body">
															<a href="/" class="d-block text-dark">
																{product.title}
															</a>
															{/*<small>
																<span class="text-muted">Color:</span>
																<span class="ui-product-color ui-product-color-sm align-text-bottom"></span>{' '}
																&nbsp;
																<span class="text-muted">Size: </span> EU 37
																&nbsp;
																<span class="text-muted">
																	Ships from:{' '}
																</span>{' '}
																China
															</small>*/}
														</div>
													</div>
												</td>
												<td class="text-right font-weight-semibold align-middle p-4">
													{product.sellPrice} F
												</td>
												<td class="align-middle p-4">
													<input
														type="text"
														class="form-control text-center"
														value="1"
													/>
												</td>
												<td class="text-right font-weight-semibold align-middle p-4">
													{count} F
												</td>
												<td class="text-center align-middle px-0">
													<a
														href="/"
														class="shop-tooltip close float-none text-danger"
														title=""
														data-original-title="Remove"
													>
														&#10005;
													</a>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
						{/*<!-- / Shopping cart table -->*/}

						<div class="d-flex flex-wrap justify-content-between align-items-center pb-4">
							<div class="mt-4">
								<label class="text-muted font-weight-normal">Promocode</label>
								<input type="text" placeholder="ABC" class="form-control" />
							</div>
							<div class="d-flex">
								<div class="text-right mt-4 mr-5">
									<label class="text-muted font-weight-normal m-0">
										Discount
									</label>
									<div class="text-large">
										<strong>0 F</strong>
									</div>
								</div>
								<div class="text-right mt-4">
									<label class="text-muted font-weight-normal m-0">
										Total price
									</label>
									<div class="text-large">
										<strong>{count} F </strong>
									</div>
								</div>
							</div>
						</div>

						<div class="float-right">
							{uid && !uid2 ? (
								<Link
									to={'/marchand'}
									class="btn btn-lg btn-default md-btn-flat mt-2 mr-3"
								>
									Continuer vos achats
								</Link>
							) : (
								<Link
									to={storeSplit}
									class="btn btn-lg btn-default md-btn-flat mt-2 mr-3"
								>
									Continuer vos achats
								</Link>
							)}

							<button type="button" class="btn btn-lg btn-primary mt-2">
								Checkout
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddToCart;
