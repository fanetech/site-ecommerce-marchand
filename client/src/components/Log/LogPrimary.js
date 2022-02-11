import React, { useEffect, useState } from 'react';

const LogPrimary = ({
	ban,
	title1,
	description1,
	image1,
	title2,
	description2,
	image2,
}) => {
	//show grid variable
	const [grid1, setGrid1] = useState(true);
	const [grid2, setGrid2] = useState(false);

	useEffect(() => {
		if (title1 || description1 || image1) {
			setGrid1(true);
		}
		if (title2 || description2 || image2) {
			setGrid2(true);
		}
	}, [title1, description1, image1, title2, description2, image2]);
	return (
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
				<img className="banniere-pic" src="./img/banniere.jpg" alt="banniere" />
				{/*<div class="container px-4 px-lg-5 my-5">
				</div>*/}
			</header>
			{/*<!-- Section-->*/}
			<section>
				{/* Main 1 */}

				{grid1 && (
					<div class="card mb-3 mt-2">
						<div class="row g-0">
							<div class="col-md-4">
								{image1 && (
									<img src={image1} class="img-fluid rounded-start" alt="..." />
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
									<img src={image2} class="img-fluid rounded-start" alt="..." />
								)}
							</div>
						</div>
					</div>
				)}
			</section>
		</main>
	);
};

export default LogPrimary;
