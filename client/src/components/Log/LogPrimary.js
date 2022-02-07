import React, { useState } from 'react';

const LogPrimary = ({ handledLog, primary }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const primaryHandle = e => {
		e.preventDefault();
		if (email && password) {
			const data1 = {
				email: email,
				password: password,
				key: 'primary',
			};
			handledLog(data1);
			setEmail('');
			setPassword('');
		}
	};
	return (
		<div class="row input-group-newsletter">
			<div class="row">
				<input
					class="form-control"
					id="email"
					type="email"
					placeholder="Entre votre addresse email..."
					onChange={e => setEmail(e.target.value)}
				/>
				<input
					class="form-control mt-2"
					id="password"
					type="password"
					placeholder="Mot de passe"
					onChange={e => setPassword(e.target.value)}
				/>
			</div>
			<div class="row mt-2">
				<button
					class="btn btn-primary"
					id="submitButton"
					onClick={primaryHandle}
				>
					Créer
				</button>
			</div>
		</div>
	);
};

export default LogPrimary;
