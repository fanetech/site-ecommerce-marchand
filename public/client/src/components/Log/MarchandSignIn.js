import { useState } from 'react';
import API_BASIC from '../../utility/api.service';
import BtnView from './BtnView';

const MarchandSignIn = ({ setSignUp, setConnexion }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorInfo, setErrorInfo] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handleLog = idAction => {
		const id = idAction;
		switch (id) {
			case 'connexion':
				if (email && password) {
					setIsLoading(true);
					const data = {
						username: email,
						password: password,
					};

					//send to server of verify
					API_BASIC.post('/authenticator/login', data)
						.then(res => {
							if (res.data.msg === 'error') {
								console.log(res.data.content);
							} else {
								console.log(res.data);
								document.cookie =
									'marchandJWT=' + res.data.token + '; path=/;expires=' + data;
								window.location = '/marchand';
							}
							setIsLoading(false);
						})
						.catch(err => {
							setIsLoading(false);
							console.error('signIn error =', err);
						});
				} else {
					setErrorInfo('Veuillez saisir tout les champs');
				}

				break;
			case 'signUp':
				setSignUp(true);

				break;

			default:
				break;
		}
	};
	return (
		<div class="row input-group-newsletter signup-container">
			<h1 class="fst-italic lh-1 mb-4">Connexion</h1>
			<div class="row">
				<label htmlFor="email">Email</label>
				<input
					class="form-control mt-2"
					id="email"
					type="email"
					defaultValue={email}
					placeholder="Veuillez entre votre email"
					onChange={e => setEmail(e.target.value)}
				/>
				<label htmlFor="password">Mot de passe</label>
				<input
					class="form-control mt-2"
					id="password"
					type="password"
					placeholder="Veuillez entre votre mot de passe"
					onChange={e => setPassword(e.target.value)}
				/>
			</div>
			<div className="error">{errorInfo}</div>

			{/* display btn  */}
			<BtnView handleLog={handleLog} type={'standard'} isLoading={isLoading} />
		</div>
	);
};
export default MarchandSignIn;
