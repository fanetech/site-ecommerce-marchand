import React, { useState } from 'react';
import axios from 'axios';

const LogSecond = ({ setConnexion }) => {
	const [errorInfo, setErrorInfo] = useState('');
	const [primary, setPrimary] = useState(true);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	//second
	const [second, setSecond] = useState(false);
	const [name, setName] = useState('');
	const [firstName, setFirstName] = useState('');
	const [store, setStore] = useState('');
	const [description, setDescription] = useState('');
	const [phone, setPhone] = useState('');

	//third
	//legal page variable
	const [thirdLegalPage, setThirdLegalPage] = useState(false);
	const [legalPage, setLegalPage] = useState('');

	//status page varialble
	const [thirdStatusPage, setThirdStatusPage] = useState(false);
	const [statusPage, setStatusPage] = useState('');

	//user terms page varaible
	const [thirdUserPage, setThirdUserPage] = useState(false);
	const [userPage, setUserPage] = useState('');

	//faq page variable
	const [thirdFaqPage, setThirdFaqPage] = useState(false);
	const [faqPage, setFaqPage] = useState('');

	//picture variable
	const [showPicture, setShowPicture] = useState(false);
	const [postPicture, setPostPicture] = useState(null);
	const [file, setFile] = useState();

	//validation information variable
	const [showValid, setShowValid] = useState(false);
	const handleLog = e => {
		e.preventDefault();
		let id = e.target.id;
		if (id === 'primary') {
			setErrorInfo('');
			if (password && email) {
				setPrimary(false);
				setSecond(true);
			} else {
				setErrorInfo('veuillez remplir votre email et votre mot de passe');
			}
		}

		if (id === 'second') {
			setErrorInfo('');
			if (name && firstName && store && description) {
				setSecond(false);
				setThirdLegalPage(true);
			} else {
				setErrorInfo('veuillez remplir bien remplir toutes les champs');
			}
		}

		//legal page handled
		if (id === 'legal') {
			setErrorInfo('');
			if (legalPage) {
				setThirdLegalPage(false);
				setThirdStatusPage(true);
			} else {
				setErrorInfo('veuillez remplir bien remplir votre page legal');
			}
		}

		//status page handled
		if (id === 'status') {
			setErrorInfo('');
			if (statusPage) {
				setThirdStatusPage(false);
				setThirdUserPage(true);
			} else {
				setErrorInfo(
					'veuillez remplir bien remplir vos conditions générales de ventes ',
				);
			}
		}

		//user terms page handled
		if (id === 'user') {
			setErrorInfo('');
			if (userPage) {
				setThirdUserPage(false);
				setShowPicture(true);
			} else {
				setErrorInfo(
					'veuillez remplir bien remplir vos conditions générales de ventes ',
				);
			}
		}

		//faq
		if (id === 'faq') {
			setErrorInfo('');
			if (faqPage) {
				setThirdFaqPage(false);
				setShowPicture(true);
			} else {
				setErrorInfo(
					'veuillez remplir bien remplir vos conditions générales de ventes ',
				);
			}
		}

		//upload logo
		if (id === 'logo') {
			setErrorInfo(' ');
			if (file != null) {
				setShowPicture(false);
				setShowValid(true);
			} else {
				setErrorInfo('veuillez charger une image pour votre logo ');
			}
		}

		//create store
		if (id === 'create') {
			const data = {
				name: name,
				firstName: firstName,
				storeName: store,
				email: email,
				phone: Number(phone),
				compte: '0',
				logo: 'client/public/img/logo.png',
				favicon: 'client/public/img/favicon.ico',
				description: description,
				baniere: 'client/public/img/banniere.jpg',
				legalPage: legalPage,
				sellPage: statusPage,
				useTerms: userPage,
				faq: faqPage,
				password: password,
			};
			//console.log(data);
			axios
				.post('http://localhost:8000/api/marchands', data)
				.then(res => {
					document.cookie = 'jwt=' + res.data.id + '; path=/;expires=' + data;
					setConnexion(true);
				})
				.catch(err => {
					console.log(err);
				});
		}
	};

	const handledPicture = e => {
		setErrorInfo('');
		setPostPicture(URL.createObjectURL(e.target.files[0]));
		setFile(e.target.files[0]);
	};

	return (
		<>
			<form id="contactForm" data-sb-form-api-token="API_TOKEN">
				{primary && (
					<div class="row input-group-newsletter">
						<h1 class="fst-italic lh-1 mb-4">
							Construisez votre boutique e-commerce
						</h1>
						<p class="mb-5">
							Propulser votre entreprise en le rendant plus visible.Des millions
							de marques parmi les plus prospères au monde font confiance à web
							site pour vendre, expédier et traiter rapidemment leurs commandes.
						</p>
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
						<div className="error">{errorInfo}</div>
						<div class="row mt-2">
							<button class="btn btn-primary" id="primary" onClick={handleLog}>
								Essaie
							</button>
						</div>
					</div>
				)}

				{/*second*/}
				{second && (
					<div class="row input-group-newsletter">
						<h1 class="fst-italic lh-1 mb-4">
							Entre les informations de votre boutique
						</h1>
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
						<div className="error">{errorInfo}</div>
						<div class="row mt-2">
							<button
								className="btn btn-primary"
								id="second"
								onClick={handleLog}
							>
								Enregistrer
							</button>
						</div>
					</div>
				)}

				{/* display legal page */}
				{thirdLegalPage && (
					<div className="row input-group-newsletter">
						<h1 class="fst-italic lh-1 mb-4">
							Entre les informations de vos pages légals
						</h1>
						<h5>Etape 1/4 : Page légal</h5>
						<textarea
							className="form-control mt-2"
							id="description"
							placeholder="Texte de votre page légal..."
							onChange={e => setLegalPage(e.target.value)}
						/>
						<div className="error">{errorInfo}</div>
						<div class="row mt-2">
							<button
								className="btn btn-primary"
								id="legal"
								onClick={handleLog}
							>
								Enregistrer
							</button>
						</div>
					</div>
				)}

				{/* show status global to sell  field*/}
				{thirdStatusPage && (
					<div className="row input-group-newsletter">
						<h1 class="fst-italic lh-1 mb-4">
							Entre les informations de vos pages légals
						</h1>
						<h5>Etape 2/4 : Conditions générales de ventes </h5>
						<textarea
							className="form-control mt-2"
							id="description"
							placeholder="Texte de votre page conditions générale de ventes..."
							onChange={e => setStatusPage(e.target.value)}
						/>
						<div class="row mt-2">
							<div className="error">{errorInfo}</div>
							<button
								className="btn btn-primary"
								id="status"
								onClick={handleLog}
							>
								Enregistrer
							</button>
						</div>
					</div>
				)}

				{/* show status Using data visitor*/}
				{thirdUserPage && (
					<div className="row input-group-newsletter  mt-2">
						<h1 class="fst-italic lh-1 mb-4">
							Entre les informations de vos pages légals
						</h1>
						<h5>Etape 3/4 : Conditions générales d'utilisations </h5>
						<textarea
							className="form-control mt-2"
							id="user"
							placeholder="Texte de votre page condition d'utilisation des données de vos clients..."
							onChange={e => setUserPage(e.target.value)}
						/>
						<div className="error">{errorInfo}</div>
						<div class="row mt-2">
							<button className="btn btn-primary" id="user" onClick={handleLog}>
								Validé
							</button>
						</div>
					</div>
				)}

				{/* show faq*/}
				{thirdFaqPage && (
					<div className="row input-group-newsletter  mt-2">
						<h1 class="fst-italic lh-1 mb-4">
							Entre les informations de vos pages légals
						</h1>
						<h5>Etape 3/4 : FAQ </h5>
						<textarea
							className="form-control mt-2"
							id="faq"
							placeholder="Texte de votre page faq..."
							onChange={e => setFaqPage(e.target.value)}
						/>
						<div className="error">{errorInfo}</div>
						<div class="row mt-2">
							<button className="btn btn-primary" id="faq" onClick={handleLog}>
								Validé
							</button>
						</div>
					</div>
				)}

				{/* show picture uplaod */}
				{showPicture && (
					<>
						<div className="pic-container">
							<h4 class="fst-italic lh-1 mb-4">Un logo pour votre boutique</h4>
							<div className="icon">
								<div className="upload-picture">
									<img src="./img/icons/picture.svg" alt="img" />
									<input
										type="file"
										id="logo"
										name="file"
										accept=".jpg, .png, .jpeg"
										onChange={e => handledPicture(e)}
									/>
								</div>
							</div>
							<div className="pic-view">
								<img src={postPicture} alt="" />
								<div className="message-preview">preview</div>
							</div>
						</div>
						<div className="error">{errorInfo}</div>
						<div class="row mt-2">
							<button class="btn btn-primary" id="logo" onClick={handleLog}>
								Enregister
							</button>
						</div>
					</>
				)}

				{/* validation view */}
				{showValid && (
					<div class="row input-group-newsletter">
						<h1 class="fst-italic lh-1 mb-4">Verification</h1>
						<p class="mb-5">
							Etes-vous sûr de la validité de vos informations. si oui nous
							passerons a la creation de votre boutique et nous mettons a votre
							disposition un template de base.
						</p>
						<div class="row"></div>
						<div className="error">{errorInfo}</div>
						<div class="row mt-2">
							<button class="btn btn-primary" id="create" onClick={handleLog}>
								Créer
							</button>
						</div>
					</div>
				)}
			</form>
		</>
	);
};

export default LogSecond;
