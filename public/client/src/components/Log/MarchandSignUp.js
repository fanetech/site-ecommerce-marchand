import React, { useState } from 'react';
import axios from 'axios';
import API_BASIC from '../../utility/api.service';
import BtnView from './BtnView';
import MarchandSignIn from './MarchandSignIn';

const MarchandSignUp = ({ setConnexion, setSignUp }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [btnType, setBtnType] = useState('essaie');
	const [formSubmit, setFormSubmit] = useState(false);
	const [isRegistered, setIsRegistered] = useState(false);

	const [errorInfo, setErrorInfo] = useState('');
	const [primary, setPrimary] = useState(true);
	const [primaryConfirm, setPrimaryConfirm] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirme, setPasswordConfirme] = useState('');

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
	const handleLog = idAction => {
		let id = idAction;
		setErrorInfo('');
		switch (id) {
			case 'signUp':
				setSignUp(false);

				break;
			case 'essaie':
				setErrorInfo('');
				if (email) {
					setPrimary(false);
					setPrimaryConfirm(true);
					setBtnType('password');
				} else {
					setErrorInfo('veuillez remplir votre email et votre mot de passe');
				}

				break;
			case 'prePassword':
				setPrimary(true);
				setPrimaryConfirm(false);
				setBtnType('essaie');
				break;
			case 'password':
				setErrorInfo('');
				if (password && passwordConfirme) {
					if (password === passwordConfirme) {
						setPrimaryConfirm(false);
						setSecond(true);
						setBtnType('storeInfo');
					} else {
						setErrorInfo('Mot de passe non identique');
					}
				} else {
					setErrorInfo('veuillez remplir votre email et votre mot de passe');
				}
				break;
			case 'preInfo':
				setPrimaryConfirm(true);
				setSecond(false);
				setBtnType('password');
				break;
			case 'info':
				setErrorInfo('');
				if (name && firstName && store && description && phone) {
					if (Number(phone)) {
						setSecond(false);
						setThirdLegalPage(true);
						setBtnType('legal');
					} else {
						setErrorInfo('Le champ numéro doit être des chiffres');
					}
				} else {
					setErrorInfo('veuillez bien remplir toutes les champs');
				}

				break;
			case 'preLegal':
				setSecond(true);
				setThirdLegalPage(false);
				setBtnType('storeInfo');
				break;
			case 'legalInfo':
				if (legalPage) {
					setErrorInfo('');
					setThirdLegalPage(false);
					setThirdStatusPage(true);
					setBtnType('statusInfo');
				} else {
					setErrorInfo('veuillez entre vos pages légals');
				}
				break;
			case 'preStatus':
				setThirdLegalPage(true);
				setThirdStatusPage(false);
				setBtnType('legal');
				break;
			case 'status':
				if (statusPage) {
					setThirdStatusPage(false);
					setThirdUserPage(true);
					setBtnType('userInfo');
				} else {
					setErrorInfo(
						'veuillez remplir bien remplir vos conditions générales de ventes ',
					);
				}
				break;
			case 'preUser':
				setThirdStatusPage(true);
				setThirdUserPage(false);
				setBtnType('statusInfo');
				break;
			case 'user':
				setErrorInfo('');
				if (userPage) {
					setThirdUserPage(false);
					setThirdFaqPage(true);
					setBtnType('faqInfo');
				} else {
					setErrorInfo(
						'veuillez remplir bien remplir vos conditions générales de ventes ',
					);
				}
				break;
			case 'preFaq':
				setThirdUserPage(true);
				setThirdFaqPage(false);
				setBtnType('userInfo');
				break;
			case 'faq':
				setErrorInfo('');
				if (faqPage) {
					setThirdFaqPage(false);
					setShowValid(true);
					setBtnType('create');
				} else {
					setErrorInfo(
						'veuillez remplir bien remplir vos conditions générales de ventes ',
					);
				}
				break;
			case 'preFile':
				setThirdFaqPage(true);
				setShowPicture(false);
				setBtnType('faqInfo');
				break;
			case 'file':
				setErrorInfo(' ');
				if (file != null) {
					setShowPicture(false);
					setShowValid(true);
					setBtnType('create');
				} else {
					setErrorInfo('veuillez charger une image pour votre logo ');
				}
				break;
			case 'preCreate':
				setPrimary(true);
				setShowValid(false);
				cancel();
				setBtnType('essaie');
				break;
			case 'create':
				setIsLoading(true);
				const data = {
					email: email,
					name: name,
					firstName: firstName,
					storeName: store,
					phone: phone,
					description: description,
					legalPage: legalPage,
					sellPage: statusPage,
					useTerme: userPage,
					faq: faqPage,
				};

				//add data marchand to db
				API_BASIC.post('/marchand/add', data)
					.then(res => {
						if (res.data.msg === 'error') {
							setErrorInfo(res.data.content);
							setIsLoading(false);
						} else {
							const dataUser = {
								email: email,
								role: 'ROLE_MARCHAND',
								password: password,
								userId: res.data.marchand.id,
							};

							//add data for user authenticator
							API_BASIC.post('/authenticator/register', dataUser)
								.then(res => {
									if (res.data.msg === 'error') {
										setErrorInfo(res.data.content);
									} else {
										console.log(res.data);
										setFormSubmit(true);
										setIsLoading(false);
									}
								})
								.catch(err => {
									setIsLoading(false);
									console.error('signUp error =', err);
								});
						}
					})
					.catch(err => {
						console.log(err);
						setIsLoading(false);
					});
				break;
			default:
				break;
		}
	};

	const handledPicture = e => {
		setErrorInfo('');
		setPostPicture(URL.createObjectURL(e.target.files[0]));
		setFile(e.target.files[0]);
	};
	const cancel = () => {
		setEmail('');
		setPassword('');
		setPasswordConfirme('');
		setStore('');
		setName('');
		setFirstName('');
		setDescription('');
		setPhone('');
		setFaqPage('');
		setUserPage('');
		setLegalPage('');
		setStatusPage('');
	};

	return (
		<>
			{formSubmit ? (
				<>
					<MarchandSignIn setSignUp={setSignUp} setConnexion={setConnexion} />
					<h4 className="success submit-signup-info">
						Enregistrement reussi, veuillez vous connecter
					</h4>
				</>
			) : (
				<form id="contactForm" data-sb-form-api-token="API_TOKEN">
					<div class="row input-group-newsletter signup-container">
						{primary && (
							<>
								<h1 class="fst-italic lh-1 mb-4">
									Construisez votre boutique e-commerce
								</h1>
								<p class="mb-5">
									Propulser votre entreprise en le rendant plus visible.Des
									millions de marques parmi les plus prospères au monde font
									confiance à web site pour vendre, expédier et traiter
									rapidemment leurs commandes.
								</p>
								<div class="row">
									<label htmlFor="email">Email</label>
									<input
										class="form-control"
										id="email"
										type="email"
										defaultValue={email}
										placeholder="Entre votre addresse email..."
										onChange={e => setEmail(e.target.value)}
									/>

									<div className="error">{errorInfo}</div>
								</div>
							</>
						)}
						{primaryConfirm && (
							<>
								<h1 class="fst-italic lh-1 mb-4">Creer votre mot de passe</h1>
								<div class="row">
									<label htmlFor="password">Mot de passe</label>
									<input
										class="form-control mt-2"
										id="password"
										type="password"
										defaultValue={password}
										placeholder="Mot de passe de plus de 8 caractère"
										onChange={e => setPassword(e.target.value)}
									/>
									<label htmlFor="passwordConfirm">
										Confirmer mot de passe
									</label>
									<input
										class="form-control mt-2"
										id="passwordConfirm"
										type="password"
										defaultValue={passwordConfirme}
										placeholder="Confirmez votre mot de passe"
										onChange={e => setPasswordConfirme(e.target.value)}
									/>
								</div>
								<div className="error">{errorInfo}</div>
							</>
						)}

						{/*second*/}
						{second && (
							<>
								{/*<h1 class="fst-italic lh-1 mb-4">
									Entre les informations de votre boutique
								</h1>*/}
								<div class="row">
									<label htmlFor="name">Nom</label>
									<input
										class="form-control"
										id="name"
										type="text"
										defaultValue={name}
										placeholder="Entre votre nom"
										onChange={e => setName(e.target.value)}
									/>
									<label htmlFor="firstName">Prenom</label>
									<input
										class="form-control mt-2"
										id="firstName"
										type="text"
										defaultValue={firstName}
										placeholder="Entre votre prenom"
										onChange={e => setFirstName(e.target.value)}
									/>
									<label htmlFor="store">Nom de boutique</label>
									<input
										class="form-control mt-2"
										id="store"
										type="text"
										defaultValue={store}
										placeholder="Entre le nom de votre boutique"
										onChange={e => setStore(e.target.value)}
									/>
									<label htmlFor="phone">Numéro de téléphone</label>
									<input
										class="form-control mt-2"
										id="phone"
										type="tel"
										defaultValue={phone}
										placeholder="Veuillez entre des chiffres"
										onChange={e => setPhone(e.target.value)}
									/>
									<label htmlFor="description">Description de boutique</label>
									<textarea
										className="form-control mt-2"
										id="decription"
										defaultValue={description}
										placeholder="Décrivez votre boutique..."
										onChange={e => setDescription(e.target.value)}
									/>
								</div>
								<div className="error">{errorInfo}</div>
							</>
						)}

						{/* display legal page */}
						{thirdLegalPage && (
							<>
								<h1 class="fst-italic lh-1 mb-4">
									Entre les informations de vos pages légals
								</h1>
								<h5>Etape 1/4 : Page légal</h5>
								<textarea
									className="form-control mt-2"
									id="description"
									defaultValue={legalPage}
									placeholder="Texte de votre page légal..."
									onChange={e => setLegalPage(e.target.value)}
								/>
								<div className="error">{errorInfo}</div>
							</>
						)}

						{/* show status global to sell  field*/}
						{thirdStatusPage && (
							<>
								<h1 class="fst-italic lh-1 mb-4">
									Entre les informations de vos pages légals
								</h1>
								<h5>Etape 2/4 : Conditions générales de ventes </h5>
								<textarea
									className="form-control mt-2"
									id="description"
									defaultValue={statusPage}
									placeholder="Texte de votre page conditions générale de ventes..."
									onChange={e => setStatusPage(e.target.value)}
								/>
								<div className="error">{errorInfo}</div>
							</>
						)}

						{/* show status Using data visitor*/}
						{thirdUserPage && (
							<>
								<h1 class="fst-italic lh-1 mb-4">
									Entre les informations de vos pages légals
								</h1>
								<h5>Etape 3/4 : Conditions générales d'utilisations </h5>
								<textarea
									className="form-control mt-2"
									id="user"
									defaultValue={userPage}
									placeholder="Texte de votre page condition d'utilisation des données de vos clients..."
									onChange={e => setUserPage(e.target.value)}
								/>
								<div className="error">{errorInfo}</div>
							</>
						)}

						{/* show faq*/}
						{thirdFaqPage && (
							<div className="row input-group-newsletter  mt-2">
								<h1 class="fst-italic lh-1 mb-4">
									Entre les informations de vos pages légals
								</h1>
								<h5>Etape 4/4 : FAQ </h5>
								<textarea
									className="form-control mt-2"
									id="faq"
									defaultValue={faqPage}
									placeholder="Texte de votre page faq..."
									onChange={e => setFaqPage(e.target.value)}
								/>
								<div className="error">{errorInfo}</div>
							</div>
						)}

						{/* show picture uplaod */}
						{showPicture && (
							<>
								<div className="pic-container">
									<h4 class="fst-italic lh-1 mb-4">
										Un logo pour votre boutique
									</h4>
									<div className="icon">
										<div className="upload-picture">
											<img src="./img/icons/picture.svg" alt="img" />
											<input
												type="file"
												id="logo"
												name="file"
												defaultValue={File}
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
							</>
						)}

						{/* validation view */}
						{showValid && (
							<>
								<h1 class="fst-italic lh-1 mb-4">Verification</h1>
								<p class="mb-5">
									Etes-vous sûr de la validité de vos informations. si oui nous
									passerons a la creation de votre boutique et nous mettons a
									votre disposition un template de base.
								</p>
								<div class="row"></div>
								<div className="error">{errorInfo}</div>
							</>
						)}
						<BtnView
							type={btnType}
							handleLog={handleLog}
							isLoading={isLoading}
						/>
					</div>
				</form>
			)}
		</>
	);
};

export default MarchandSignUp;
