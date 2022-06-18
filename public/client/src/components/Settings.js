import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMarchand } from '../actions/marchand.actions';
import { uidContext, uidContext2 } from '../AppContext';
import API_BASIC from '../utility/api.service';
import Loader from './Loader';

const Settings = () => {
	const marchandData = useSelector(state => state.marchandReducer);
	const dispatch = useDispatch();
	const uid = useContext(uidContext);
	const uid2 = useContext(uidContext2);
	const [file, setFile] = useState(null);
	const [isLogo, setIsLogo] = useState(false);
	const [isBan, setIsBan] = useState(false);
	const [success, setSuccess] = useState('');
	const [error, setError] = useState('');

	const handledUpload = e => {
		const id = e.target.id;
		setError('');
		setSuccess('');
		if (file !== null) {
			const dataFile = new FormData();
			dataFile.append('file', file);
			dataFile.append('marchandId', marchandData?.marchand?.id);
			switch (id) {
				case 'logo':
					setIsLogo(true);
					dataFile.append('type', 'logo');
					API_BASIC.post(`/marchand/upload`, dataFile)
						.then(res => {
							if (res.data.msg === 'error') {
								setError(res.data.content);
								setIsLogo(false);
							} else {
								setSuccess(res.data.content);
								dispatch(getMarchand(uid ?? uid2));
								setIsLogo(false);
							}
						})
						.catch(err => {
							console.log(err);
							setIsLogo(false);
						});

					break;
				case 'ban':
					setIsBan(true);
					dataFile.append('type', 'ban');
					API_BASIC.post(`/marchand/upload`, dataFile)
						.then(res => {
							if (res.data.msg === 'error') {
								setError(res.data.content);
								setIsBan(false);
							} else {
								setSuccess(res.data.content);
								dispatch(getMarchand(uid ?? uid2));
								setIsBan(false);
							}
							console.log(res.data);
						})
						.catch(err => {
							console.log(err);
							setIsBan(false);
						});
					break;

				default:
					break;
			}
		} else {
			setError('Veuillez choisir une image');
		}
	};

	const handledFile = e => {
		if (e?.target?.files[0]) setFile(e?.target?.files[0]);
	};
	return (
		<div>
			<h3>Paramètres</h3>
			<div className="form-group">
				<h4 className="error">{error}</h4>
				<h4 className="success">{success}</h4>
				<div class="form-group">
					<label for="exampleFormControlFile1">Logo</label>
					<input
						type="file"
						class="form-control-file"
						id="exampleFormControlFile1"
						onChange={handledFile}
					/>
					<div className="btn-container">
						{isLogo ? (
							<div className="btn-marchand">
								<Loader />
							</div>
						) : (
							<button
								type="submit"
								id="logo"
								class="btn btn-primary btn-color mb-2"
								onClick={handledUpload}
							>
								Enregistrer
							</button>
						)}
					</div>
				</div>
				<div class="form-group">
					<label for="exampleFormControlFile1">Bannière</label>
					<input
						type="file"
						class="form-control-file"
						id="exampleFormControlFile1"
						onChange={handledFile}
					/>
					<div className="btn-container">
						{isBan ? (
							<div className="btn-marchand">
								<Loader />
							</div>
						) : (
							<button
								type="submit"
								id="ban"
								class="btn btn-primary btn-color mb-2"
								onClick={handledUpload}
							>
								Enregistrer
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Settings;
