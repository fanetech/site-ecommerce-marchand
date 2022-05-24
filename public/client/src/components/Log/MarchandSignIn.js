import { useState } from 'react';

const MarchandSignIn = ({ setIsConnect }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorInfo, setErrorInfo] = useState('');

	const handeConnect = () => {
		if (email && password) {
			const data = {
				email: email,
				password: password,
			};
			setIsConnect(true);
			console.log('bien passé');
			//send to server of verify
		} else {
			setErrorInfo('Veuillez saisir tout les champs');
		}
	};
	return (
		<div class="row input-group-newsletter">
			<h1 class="fst-italic lh-1 mb-4">Connexion</h1>
			<div class="row">
				<input
					class="form-control mt-2"
					id="email"
					type="email"
					placeholder="Email"
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
			<div className="error">{errorInfo}</div>
			<div class="row mt-2">
				<button class="btn btn-primary" id="connexion" onClick={handeConnect}>
					connexion
				</button>
			</div>
		</div>
	);
};
export default MarchandSignIn;
