import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ModalCreateProduct from './ModalCreateProduct';

const Produits = () => {
	const products = useSelector(state => state.marchandReducer);
	const [product, setProduct] = useState({});
	const [type, setType] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const handledProduct = product => {
		setProduct(product);
		setType(true);
		setIsEdit(true);
	};
	return (
		<>
			{!isEdit && (
				<div>
					<h3>Liste des produits</h3>
					<ul class="box">
						{products?.products &&
							products?.products?.map(marchand => {
								return (
									<>
										<li
											key={marchand.id}
											className="box-custom product-list-container"
											onClick={() => handledProduct(marchand)}
										>
											<div class="img-box">
												<img
													src={`./images/${marchand.picture}`}
													alt=""
													width={50}
													height={50}
												/>
											</div>
											<div class="detail-box product-custom">
												<h5>{marchand.title}</h5>
											</div>
											<div className="price product-custom">
												<h6>{marchand.sellPrice}</h6>
											</div>
										</li>
										<hr className="tag" />
									</>
								);
							})}
					</ul>
				</div>
			)}
			{isEdit && (
				<ModalCreateProduct
					type={type}
					setIsEdit={setIsEdit}
					productEdit={product}
				/>
			)}
		</>
	);
};

export default Produits;
