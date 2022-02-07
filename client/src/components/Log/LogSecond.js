import React, { useState } from 'react';

const LogSecond = ({ handledLog }) => {
	const [name, setName] = useState('');
	const [firstName, setFirstName] = useState('');
	const [store, setStore] = useState('');
	const [description, setDescription] = useState('');
	const [phone, setPhone] = useState('');
	const primaryHandle = e => {
		e.preventDefault();
		if (name && firstName && store && description) {
			const data = {
				name,
				firstName,
				store,
				description,
				phone,
				key: 'second',
			};

			//send data
			handledLog(data);

			//reset varablie to null
			setDescription('');
			setName('');
			setFirstName('');
			setStore('');
			setPhone('');
		}
	};

	return (
		<div class="row input-group-newsletter">
			<div class="row">
				<input
					class="form-control"
					id="name"
					type="text"
					placeholder="Entre votre nom..."
					onChange={e => setName(e.target.value)}
				/>
				<input
					class="form-control mt-2"
					id="firstName"
					type="text"
					placeholder="Entre votre prenom..."
					onChange={e => setFirstName(e.target.value)}
				/>
				<input
					class="form-control mt-2"
					id="store"
					type="text"
					placeholder="Entre le nom de votre boutique..."
					onChange={e => setStore(e.target.value)}
				/>
				<input
					class="form-control mt-2"
					id="phone"
					type="tel"
					placeholder="Entre votre numéro de téléphone..."
					onChange={e => setPhone(e.target.value)}
				/>
				<textarea
					className="form-control mt-2"
					id="decription"
					placeholder="Décrivez votre boutique..."
					onChange={e => setDescription(e.target.value)}
				/>
			</div>
			<div class="row mt-2">
				<button
					className="btn btn-primary"
					id="submitButton"
					onClick={primaryHandle}
				>
					Enregistrer
				</button>
			</div>
		</div>
	);
};

export default LogSecond;
