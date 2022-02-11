import React, { useEffect, useState } from 'react';
import LogPrimary from './LogPrimary';

const LogThird = ({ handledLog }) => {
	//left navbar variable
	//show send button
	const [main1btn, setMain1btn] = useState(false);
	const [main2btn, setMain2btn] = useState(false);

	//show balise
	const [showBan, setShowBan] = useState(false);
	const [showFav, setShowFav] = useState(false);

	//file upload variable and text variable to send DB
	const [fileBanniere, setFileBanniere] = useState('');
	const [fileFavicon, setFileFavicon] = useState('');
	const [fileImage1, setFileImage1] = useState('');
	const [fileImage2, setFileImage2] = useState('');
	const [image1, setImage1] = useState('');
	const [image2, setImage2] = useState('');

	const [title1, setTitle1] = useState('');
	const [title2, setTitle2] = useState('');
	const [description1, setDescription1] = useState('');
	const [description2, setDescription2] = useState('');

	//link of display picture
	const [banniere, setBanniere] = useState('');
	const [favicon, setFavicon] = useState('');

	const handledSend = e => {
		e.preventDefault();
		let id = e.target.id;

		//test variable main1 and send to DB
		if (id === 'main1') {
			let data = { main1: 'main1' };
			if (title1) {
				data.title1 = title1;
			}
			if (description1) {
				data.description1 = description1;
			}
			if (fileImage1) {
				data.fileImage1 = fileImage1;
				console.log(data);
			}

			//send main1 data to DB
			setMain1btn(false);
		}

		//test variable main2 and send to DB
		if (id === 'main2') {
			let data2 = { main1: 'main2' };
			if (title1) {
				data2.title2 = title2;
			}
			if (description2) {
				data2.description2 = description2;
			}
			if (fileImage2) {
				data2.fileImage2 = fileImage2;
				console.log(data2);
			}

			//send main1 data to DB
			setMain2btn(false);
		}
	};

	//header upload picture
	const handledUpload = e => {
		let id = e.target.id;
		if (id === 'ban') {
			setShowBan(false);
		}
		if (id === 'fav') {
			setShowFav(false);
		}
	};

	const handledPicture = e => {
		let id = e.target.id;
		if (id === 'ban') {
			setBanniere(URL.createObjectURL(e.target.files[0]));
			setFileBanniere(e.target.files[0]);
			setShowBan(true);
		}
		if (id === 'fav') {
			setFavicon(URL.createObjectURL(e.target.files[0]));
			setFileFavicon(e.target.files[0]);
			setShowFav(true);
		}
		if (id === 'image1') {
			setImage1(URL.createObjectURL(e.target.files[0]));
			setFileImage1(e.target.files[0]);
		}
		if (id === 'image2') {
			setImage2(URL.createObjectURL(e.target.files[0]));
			setFileImage2(e.target.files[0]);
		}
	};

	useEffect(() => {
		if (title2 || description2 || fileImage2) {
			setMain1btn(true);
			setMain2btn(true);
		}
	}, [title1, description1, fileImage1, title2, description2, fileImage2]);

	return (
		<div className="marchand-connect-container">
			<div id="layoutSidenav">
				<div id="layoutSidenav_nav">
					<nav
						class="sb-sidenav accordion sb-sidenav-dark"
						id="sidenavAccordion"
					>
						<div class="sb-sidenav-menu">
							<div class="nav">
								<div class="sb-sidenav-menu-heading">Core</div>
								<a class="nav-link" href="index.html">
									<div class="sb-nav-link-icon">
										<i class="fas fa-tachometer-alt"></i>
									</div>
									Espace de travail
								</a>

								<div class="sb-sidenav-menu-heading">Page d'Accueil</div>
								<div
									className="nav-link collapsed"
									data-bs-toggle="collapse"
									data-bs-target="#collapseLayouts"
									aria-expanded="false"
									aria-controls="collapseLayouts"
								>
									<div class="sb-nav-link-icon">
										<i class="fas fa-columns"></i>
									</div>
									Header
									<div class="sb-sidenav-collapse-arrow">
										<i class="fas fa-angle-down"></i>
									</div>
								</div>
								<div
									class="collapse"
									id="collapseLayouts"
									aria-labelledby="headingOne"
									data-bs-parent="#sidenavAccordion"
								>
									<nav class="sb-sidenav-menu-nested nav upload-pic">
										<div className="link">
											<div class="nav-link">Bannière</div>
											<div className="icon">
												<div className="upload-picture">
													<img src="./img/icons/picture.svg" alt="img" />
													<input
														type="file"
														id="ban"
														name="file"
														accept=".jpg, .png, .jpeg"
														onChange={e => handledPicture(e)}
													/>
												</div>
											</div>
										</div>

										{/* view banniere picture */}
										{showBan && (
											<div className="banniere-view">
												<img src={banniere} alt="banniere-view" />
												<button
													className="btn-ban"
													id="ban"
													onClick={handledUpload}
												>
													Enregistre
												</button>
											</div>
										)}

										{/* favicon */}
										<div class="nav-link">Favicon</div>
										<div className="icon">
											<div className="upload-picture">
												<img src="./img/icons/picture.svg" alt="img" />
												<input
													type="file"
													id="fav"
													name="file"
													accept=".jpg, .png, .jpeg"
													onChange={e => handledPicture(e)}
												/>
											</div>
										</div>

										{/* view favicon picture */}
										{showFav && (
											<div className="banniere-view">
												<img src={favicon} alt="banniere-view" />
												<button
													className="btn-ban"
													id="fav"
													onClick={handledUpload}
												>
													Enregistre
												</button>
											</div>
										)}
									</nav>
								</div>

								{/* main information */}
								<a
									className="nav-link collapsed"
									href="/"
									data-bs-toggle="collapse"
									data-bs-target="#collapsePages"
									aria-expanded="false"
									aria-controls="collapsePages"
								>
									<div class="sb-nav-link-icon">
										<i class="fas fa-book-open"></i>
									</div>
									Main
									<div class="sb-sidenav-collapse-arrow">
										<i class="fas fa-angle-down"></i>
									</div>
								</a>
								<div
									class="collapse"
									id="collapsePages"
									aria-labelledby="headingTwo"
									data-bs-parent="#sidenavAccordion"
								>
									<nav
										class="sb-sidenav-menu-nested nav accordion"
										id="sidenavAccordionPages"
									>
										<div
											className="nav-link collapsed"
											data-bs-toggle="collapse"
											data-bs-target="#pagesCollapseAuth"
											aria-expanded="false"
											aria-controls="pagesCollapseAuth"
										>
											Main 1
											<div class="sb-sidenav-collapse-arrow">
												<i class="fas fa-angle-down"></i>
											</div>
										</div>
										<div
											class="collapse"
											id="pagesCollapseAuth"
											aria-labelledby="headingOne"
											data-bs-parent="#sidenavAccordionPages"
										>
											<nav class="sb-sidenav-menu-nested nav">
												<form>
													<div class="mb-3">
														<label
															for="exampleFormControlInput1"
															class="form-label"
														>
															Titre
														</label>
														<input
															type="text"
															class="form-control"
															id="exampleFormControlInput1"
															placeholder="Votre titre ici..."
															value={title1}
															onChange={e => setTitle1(e.target.value)}
														/>
													</div>
													<div class="mb-3">
														<label
															for="exampleFormControlTextarea1"
															class="form-label"
														>
															Description
														</label>
														<textarea
															class="form-control"
															id="exampleFormControlTextarea1"
															rows="3"
															value={description1}
															onChange={e => setDescription1(e.target.value)}
														></textarea>
													</div>
													<label
														for="exampleFormControlTextarea1"
														class="form-label"
													>
														Image
													</label>
													<div className="icon">
														<div className="upload-picture">
															<img src="./img/icons/picture.svg" alt="img" />
															<input
																type="file"
																id="image1"
																name="file"
																accept=".jpg, .png, .jpeg"
																onChange={e => handledPicture(e)}
															/>
														</div>
													</div>

													{/* show button if useEffect condition is true */}
													{main1btn && (
														<button
															className="btn-nav "
															id="main1"
															onClick={handledSend}
														>
															Enregistre
														</button>
													)}
												</form>
											</nav>
										</div>

										<div
											className="nav-link collapsed"
											data-bs-toggle="collapse"
											data-bs-target="#pagesCollapseAuth"
											aria-expanded="false"
											aria-controls="pagesCollapseAuth"
										>
											Main 2
											<div class="sb-sidenav-collapse-arrow">
												<i class="fas fa-angle-down"></i>
											</div>
										</div>
										<div
											class="collapse"
											id="pagesCollapseAuth"
											aria-labelledby="headingOne"
											data-bs-parent="#sidenavAccordionPages"
										>
											<nav class="sb-sidenav-menu-nested nav">
												<form>
													<div class="mb-3">
														<label
															for="exampleFormControlInput1"
															class="form-label"
														>
															Titre
														</label>
														<input
															type="text"
															class="form-control"
															id="exampleFormControlInput1"
															placeholder="Votre titre ici..."
															value={title2}
															onChange={e => setTitle2(e.target.value)}
														/>
													</div>
													<div class="mb-3">
														<label
															for="exampleFormControlTextarea1"
															class="form-label"
														>
															Description
														</label>
														<textarea
															class="form-control"
															id="exampleFormControlTextarea1"
															rows="3"
															value={description2}
															onChange={e => setDescription2(e.target.value)}
														></textarea>
													</div>
													<label
														for="exampleFormControlTextarea1"
														class="form-label"
													>
														Image
													</label>
													<div className="icon">
														<div className="upload-picture">
															<img src="./img/icons/picture.svg" alt="img" />
															<input
																type="file"
																id="image2"
																name="file"
																accept=".jpg, .png, .jpeg"
																onChange={e => handledPicture(e)}
															/>
														</div>
													</div>
													{main2btn && (
														<button
															className="btn-nav "
															id="main2"
															onClick={handledSend}
														>
															Enregistre
														</button>
													)}
												</form>
											</nav>
										</div>
										<a
											className="nav-link collapsed"
											href="/"
											data-bs-toggle="collapse"
											data-bs-target="#pagesCollapseError"
											aria-expanded="false"
											aria-controls="pagesCollapseError"
										>
											Main 3
											<div class="sb-sidenav-collapse-arrow">
												<i class="fas fa-angle-down"></i>
											</div>
										</a>
										<div
											class="collapse"
											id="pagesCollapseError"
											aria-labelledby="headingOne"
											data-bs-parent="#sidenavAccordionPages"
										>
											<nav class="sb-sidenav-menu-nested nav">
												<a class="nav-link" href="login.html">
													Titre
												</a>
												<a class="nav-link" href="register.html">
													Description
												</a>
												<a class="nav-link" href="password.html">
													Image
												</a>
											</nav>
										</div>
									</nav>
								</div>
							</div>
						</div>
					</nav>
				</div>
				<div id="layoutSidenav_content">
					<LogPrimary
						ban={banniere}
						title1={title1}
						description1={description1}
						image1={image1}
						title2={title2}
						description2={description2}
						image2={image2}
					/>
					<footer class="py-4 bg-light mt-auto">
						<div class="container-fluid px-4">
							<div class="d-flex align-items-center justify-content-between small">
								<div class="text-muted">Copyright &copy; Fane store 2021</div>
								<div>
									<a href="/">page legal</a>
									&middot;
									<a href="/">Terms &amp; Conditions</a>
								</div>
							</div>
						</div>
					</footer>
				</div>
			</div>
		</div>
	);
};

export default LogThird;
