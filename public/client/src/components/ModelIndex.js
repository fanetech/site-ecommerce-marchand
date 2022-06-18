import React, { useState } from 'react';
import ModalCreateProduct from './ModalCreateProduct';
import Produits from './Produits';
import SellMarchand from './SellMarchand';
import Settings from './Settings';

const ModelIndex = () => {
	const [modal, setModal] = useState('main');
	const handledModal = idModal => {
		idModal.preventDefault();
		const id = idModal.target.value;
	};
	return (
		<div className="modal-container">
			<div className="cross-contenair">
				<span
					className="cross"
					onClick={e => {
						e.preventDefault();
						setModal('main');
					}}
				>
					&#10005;
				</span>
			</div>
			{modal === 'main' && (
				<>
					<h3>Menu</h3>
					<ul class="nav flex-column">
						<li class="nav-item box-custom product-list-container ">
							<div
								class="nav-link active btn-marchand "
								onClick={e => {
									e.preventDefault();
									setModal('createProduct');
								}}
							>
								<span data-feather="file"></span>
								Créer produit
							</div>
						</li>
						<hr className="tag" />
						<li class="nav-item box-custom product-list-container">
							<div
								class="nav-link active btn-marchand"
								onClick={e => {
									e.preventDefault();
									setModal('products');
								}}
							>
								<span data-feather="file"></span>
								Liste des Produits
							</div>
						</li>
						<hr className="tag" />
						<li class="nav-item box-custom product-list-container">
							<div
								class="nav-link active btn-marchand"
								onClick={e => {
									e.preventDefault();
									setModal('sell');
								}}
							>
								<span data-feather="file"></span>
								Commandes
							</div>
						</li>
						<hr className="tag" />
						<li class="nav-item box-custom product-list-container">
							<div
								class="nav-link active btn-marchand"
								onClick={e => {
									e.preventDefault();
									setModal('settings');
								}}
							>
								Paramètres
							</div>
						</li>
						<hr className="tag" />
					</ul>
				</>
			)}
			{modal === 'createProduct' && (
				<ModalCreateProduct
					type={false}
					productEdit={{
						category: '',
						title: '',
						description: '',
						initialPrice: '',
						sellPrice: '',
						stock: '',
					}}
				/>
			)}
			{modal === 'products' && <Produits />}
			{modal === 'sell' && <SellMarchand />}
			{modal === 'settings' && <Settings />}
		</div>
	);
};

export default ModelIndex;
