import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	addProduct,
	editProduct,
	fileProduct,
	getMarchand,
} from '../actions/marchand.actions';
import { uidContext, uidContext2 } from '../AppContext';
import API_BASIC from '../utility/api.service';
import Loader from './Loader';

const ModalCreateProduct = ({ type, productEdit, setIsEdit }) => {
	const [category, setCategory] = useState(productEdit.category ?? '');
	const [title, setTitle] = useState(productEdit.title ?? '');
	const [description, setDescription] = useState(productEdit.description ?? '');
	const [initialPrice, setInitialPrice] = useState(
		productEdit.initialPrice ?? '',
	);
	const [sellPrice, setSellPrice] = useState(productEdit.sellPrice ?? '');
	const [stock, setStock] = useState(productEdit.stock ?? '');
	const [file, setFile] = useState(null);
	const [message, setMessage] = useState('');
	const dispatch = useDispatch();
	const uid = useContext(uidContext);
	const uid2 = useContext(uidContext2);

	const [isDelete, setIsDelete] = useState(false);
	const [isAdd, setIsAdd] = useState(false);
	const [isEditProduct, setIsEditProduct] = useState(false);

	const marchandData = useSelector(state => state.marchandReducer);

	const handledSubmit = async e => {
		e.preventDefault();
		setMessage('');

		if (
			category &&
			title &&
			description &&
			initialPrice &&
			sellPrice &&
			stock &&
			file
		) {
			setIsAdd(true);
			const dataFile = new FormData();
			dataFile.append('category', category);
			dataFile.append('description', description);
			dataFile.append('title', title);
			dataFile.append('sellPrice', sellPrice);
			dataFile.append('stock', stock);
			dataFile.append('initialPrice', initialPrice);
			dataFile.append('marchandId', marchandData?.marchand?.id);
			dataFile.append('file', file);

			//await dispatch(addProduct(dataFile));
			API_BASIC.post('/product/add', dataFile)
				.then(res => {
					console.log(res.data);
					dispatch(getMarchand(uid ?? uid2));
					setIsAdd(false);
				})
				.catch(err => console.log(err));
		} else {
			setMessage('Tout les champs doivent être renseigne');
		}
		//cancel();
	};
	const handledEdit = async e => {
		e.preventDefault();
		if (
			category &&
			title &&
			description &&
			initialPrice &&
			sellPrice &&
			stock &&
			productEdit.id
		) {
			setIsEditProduct(true);

			const data = {
				category: category,
				description: description,
				title: title,
				sellPrice: sellPrice,
				stock: stock,
				initialPrice: initialPrice,
			};
			const id = productEdit.id;

			await dispatch(editProduct(data, id));
			if (file) {
				const dataFile = new FormData();
				dataFile.append('file', file);
				dataFile.append('productId', id);

				API_BASIC.post(`/product/upload`, dataFile)
					.then(async res => {
						setIsEditProduct(false);
						await dispatch(getMarchand(uid));
						setIsEdit(false);
					})
					.catch(err => console.log(err));
			} else {
				await dispatch(getMarchand(uid));
				setIsEditProduct(false);
				setIsEdit(false);
			}
		} else {
			setMessage('Tout les champs doivent être renseigne');
		}
	};
	const handleDelete = e => {
		setIsDelete(true);
		e.preventDefault();
		const id = productEdit.id;
		API_BASIC.delete(`/product/delete/${id}`)
			.then(res => {
				console.log(res.data);
				dispatch(getMarchand(uid));
				setIsDelete(false);
				setIsEdit(false);
			})
			.catch(err => console.log(err));
	};

	const cancel = () => {
		setCategory('');
		setTitle('');
		setDescription('');
		setInitialPrice('');
		setSellPrice('');
		setStock('');
		setFile(null);
	};
	const handledFile = e => {
		if (e?.target?.files[0]) setFile(e?.target?.files[0]);
	};

	return (
		<>
			{!type && (
				<>
					<h3>Créer un produit</h3>
					<form onSubmit={handledSubmit}>
						<div class="form-group">
							<label for="exampleFormControlSelect1">Catégorie</label>
							<select
								class="form-control"
								id="exampleFormControlSelect1"
								onChange={e => setCategory(e.target.value)}
							>
								<option>vetement</option>
								<option>appareil elecronique</option>
								<option>meuble</option>
								<option>Formation</option>
								<option>Nouriture</option>
							</select>
						</div>
						<div class="form-group">
							<label for="exampleFormControlInput1">Titre</label>
							<input
								type="text"
								class="form-control"
								placeholder="Titre du produit"
								onChange={e => setTitle(e.target.value)}
							/>
						</div>
						<div class="form-group">
							<label for="exampleFormControlTextarea1">Description</label>
							<textarea
								class="form-control"
								id="exampleFormControlTextarea1"
								placeholder="Description du produit"
								onChange={e => setDescription(e.target.value)}
								rows="3"
							></textarea>
						</div>
						<div class="form-group">
							<label for="exampleFormControlInput1">Prix initial</label>
							<input
								type="number"
								class="form-control"
								placeholder="Prix initial de votre produit"
								onChange={e => setInitialPrice(e.target.value)}
							/>
						</div>
						<div class="form-group">
							<label for="exampleFormControlInput1">Prix de vente</label>
							<input
								type="number"
								class="form-control"
								placeholder="Prix de vente de votre produit"
								onChange={e => setSellPrice(e.target.value)}
							/>
						</div>
						<div class="form-group">
							<label for="exampleFormControlInput1">Stock</label>
							<input
								type="number"
								class="form-control"
								placeholder="Stock du produit"
								onChange={e => setStock(e.target.value)}
							/>
						</div>
						<div class="form-group">
							<label for="exampleFormControlFile1">Image</label>
							<input
								type="file"
								class="form-control-file"
								id="exampleFormControlFile1"
								onChange={handledFile}
							/>
						</div>
						<div className="error">{message}</div>
						<div className="btn-container">
							{isAdd ? (
								<div className="btn-marchand">
									<Loader />
								</div>
							) : (
								<button type="submit" class="btn btn-primary btn-color mb-2">
									Enregistrer
								</button>
							)}
						</div>
					</form>
				</>
			)}
			{type && (
				<>
					<h3>Edition de Produit</h3>
					<div>
						<div class="form-group">
							<label for="exampleFormControlSelect1">Catégorie</label>
							<select
								class="form-control"
								id="exampleFormControlSelect1"
								onChange={e => setCategory(e.target.value)}
								defaultValue={productEdit.category}
							>
								<option>vetement</option>
								<option>appareil elecronique</option>
								<option>meuble</option>
								<option>Formation</option>
								<option>Nouriture</option>
							</select>
						</div>
						<div class="form-group">
							<label for="exampleFormControlInput1">Titre</label>
							<input
								type="text"
								class="form-control"
								placeholder="Titre du produit"
								onChange={e => setTitle(e.target.value)}
								defaultValue={productEdit.title}
							/>
						</div>
						<div class="form-group">
							<label for="exampleFormControlTextarea1">Description</label>
							<textarea
								class="form-control"
								id="exampleFormControlTextarea1"
								placeholder="Description du produit"
								onChange={e => setDescription(e.target.value)}
								defaultValue={productEdit.description}
								rows="3"
							></textarea>
						</div>
						<div class="form-group">
							<label for="exampleFormControlInput1">Prix initial</label>
							<input
								type="number"
								class="form-control"
								placeholder="Prix initial de votre produit"
								onChange={e => setInitialPrice(e.target.value)}
								defaultValue={productEdit.initialPrice}
							/>
						</div>
						<div class="form-group">
							<label for="exampleFormControlInput1">Prix de vente</label>
							<input
								type="number"
								class="form-control"
								placeholder="Prix de vente de votre produit"
								onChange={e => setSellPrice(e.target.value)}
								defaultValue={productEdit.sellPrice}
							/>
						</div>
						<div class="form-group">
							<label for="exampleFormControlInput1">Stock</label>
							<input
								type="number"
								class="form-control"
								placeholder="Stock du produit"
								onChange={e => setStock(e.target.value)}
								defaultValue={productEdit.stock}
							/>
						</div>
						<div class="form-group">
							<label for="exampleFormControlFile1">Image</label>
							<input
								type="file"
								class="form-control-file"
								id="exampleFormControlFile1"
								onChange={handledFile}
							/>
						</div>
						<div className="error">{message}</div>
						<div className="btn-container">
							{isDelete ? (
								<div className="btn-marchand">
									<Loader />
								</div>
							) : (
								<button
									type="submit"
									id="delete"
									class="btn btn-danger btn-color btn-delete mb-2 "
									onClick={handleDelete}
								>
									Supprimer
								</button>
							)}
							{isEditProduct ? (
								<div className="btn-marchand">
									<Loader />
								</div>
							) : (
								<button
									type="submit"
									id="submit"
									class="btn btn-primary btn-color mb-2"
									onClick={handledEdit}
								>
									Editer
								</button>
							)}
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default ModalCreateProduct;
