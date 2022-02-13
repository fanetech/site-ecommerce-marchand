import React, { useEffect, useState } from 'react';

const LogPrimary = ({
	banniere,
	title1,
	title2,
	title3,
	description1,
	description2,
	description3,
	image1,
	image2,
	image3,
}) => {
	//show grid variable
	const [grid1, setGrid1] = useState(true);
	const [grid2, setGrid2] = useState(false);
	const [grid3, setGrid3] = useState(false);

	let baniere = banniere;
	let img2 = image2;
	let img1 = image1;
	let img3 = image3;

	useEffect(() => {
		if (title1 || description1 || image1) {
			setGrid1(true);
		}
		if (title2 || description2 || image2) {
			setGrid2(true);
		}
		if (title3 || description3 || image3) {
			setGrid3(true);
		}
	}, [
		title1,
		title2,
		title3,
		description1,
		description2,
		description3,
		image1,
		image2,
		image3,
	]);
	return (
		<>
			<main>
				{/*<!-- Navigation-->*/}
				<nav class="navbar navbar-expand-lg navbar-light bg-light navbar-product">
					<div class="container px-4 px-lg-5 navbar-container">
						<a class="navbar-brand" href="#!">
							Logo boutique
						</a>
						<button
							class="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarSupportedContent">
							<ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
								<li class="nav-item">
									<a class="nav-link active" aria-current="page" href="#!">
										Accueil
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#!">
										Produit
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#!">
										Nous contacter
									</a>
								</li>
								<li class="nav-item dropdown">
									<a
										class="nav-link dropdown-toggle"
										id="navbarDropdown"
										href="/"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										Boutique
									</a>
									<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
										<li>
											<a class="dropdown-item" href="#!">
												All Products
											</a>
										</li>
										<li>
											<hr class="dropdown-divider" />
										</li>
										<li>
											<a class="dropdown-item" href="#!">
												Popular Items
											</a>
										</li>
										<li>
											<a class="dropdown-item" href="#!">
												New Arrivals
											</a>
										</li>
									</ul>
								</li>
							</ul>
							<form class="d-flex">
								<button class="btn btn-outline-dark" type="submit">
									<i class="bi-cart-fill me-1"></i>
									Cart
									<span class="badge bg-dark text-white ms-1 rounded-pill">
										0
									</span>
								</button>
							</form>
						</div>
					</div>
				</nav>
				{/*<!-- Header-->*/}
				<header class="bg-dark py-5">
					<img className="main-img" src={baniere} alt="banniere" />
				</header>
				{/*<!-- Section-->*/}
				<section>
					{/* Main 1 */}

					{grid1 && (
						<div class="card mb-3 mt-2">
							<div class="row g-0">
								<div class="col-md-4">
									{image1 && (
										<img src={img1} class="img-fluid rounded-start" alt="..." />
									)}
								</div>
								<div class="col-md-8">
									<div class="card-body">
										{title1 && <h5 class="card-title">{title1}</h5>}
										{description1 && <p class="card-text">{description1}</p>}
									</div>
								</div>
							</div>
						</div>
					)}

					{/* grid 2 */}
					{grid2 && (
						<div class="card mb-3 mt-2">
							<div class="row g-0">
								<div class="col-md-8 mt-2">
									<div class="card-body">
										{title1 && <h5 class="card-title">{title2}</h5>}
										{description2 && <p class="card-text">{description2}</p>}
									</div>
								</div>
								<div class="col-md-4">
									{image2 && (
										<img src={img2} class="img-fluid rounded-start" alt="..." />
									)}
								</div>
							</div>
						</div>
					)}
					{grid3 && (
						<div class="card mb-3 mt-2">
							<div class="row g-0">
								<div class="col-md-8 mt-2">
									<div class="card-body">
										{title1 && <h5 class="card-title">{title3}</h5>}
										{description2 && <p class="card-text">{description3}</p>}
									</div>
								</div>
								<div class="col-md-4">
									{image2 && (
										<img src={img3} class="img-fluid rounded-start" alt="..." />
									)}
								</div>
							</div>
						</div>
					)}
				</section>
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
			</main>
		</>
	);
};

export default LogPrimary;
