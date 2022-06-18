import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductList = ({ handledProductItemView }) => {
	const products = useSelector(state => state.marchandReducer);
	const [items, setItems] = useState([]);

	const handledItems = product => {
		const _items = JSON.parse(localStorage.getItem('items'));
		if (_items) {
			const check = _items.find(p => product.id == p.id);
			if (!check) {
				setItems(prev => [...prev, product]);
			}
		}
	};

	useEffect(() => {
		localStorage.setItem('items', JSON.stringify(items));
	}, [items]);

	return (
		<>
			<section class="product_section layout_padding">
				<div class="container">
					<div class="heading_container heading_center">
						<h2>
							Nos <span>produits</span>
						</h2>
					</div>
					<div class="row">
						{products?.products &&
							products?.products?.map(product => {
								return (
									<div key={product.id} class="col-sm-6 col-md-4 col-lg-4">
										<div class="box">
											<div class="option_container">
												<div class="options">
													<a
														onClick={() => handledProductItemView(product.id)}
														className="option1"
													>
														Voir
													</a>
													<a
														class="option2"
														onClick={() => handledItems(product)}
													>
														Acheter
													</a>
												</div>
											</div>
											<div class="img-box">
												<img src={`./images/${product.picture}`} alt="" />
											</div>
											<div class="detail-box">
												<h5>{product.title}</h5>
												<h6>{product.sellPrice} Fcfa</h6>
											</div>
										</div>
									</div>
								);
							})}
					</div>
					<div class="btn-box">
						<a href="./">Voir plus</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default ProductList;
