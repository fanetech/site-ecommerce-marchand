import React, { useEffect, useState } from 'react';

const Product = ({
	title11,
	title22,
	title33,
	description11,
	description22,
	description33,
	picture11,
	picture22,
	picture33,
}) => {
	//show grid variable
	const [grid11, setGrid11] = useState(true);
	const [grid22, setGrid22] = useState(false);
	const [grid33, setGrid33] = useState(false);

	let img2 = picture22;
	let img1 = picture11;
	let img3 = picture33;

	useEffect(() => {
		if (title11 || description11 || picture11) {
			setGrid11(true);
		}
		if (title22 || description22 || picture22) {
			setGrid22(true);
		}
		if (title33 || description33 || picture33) {
			setGrid33(true);
		}
	}, [
		title11,
		title22,
		title33,
		description11,
		description22,
		description33,
		picture11,
		picture22,
		picture33,
	]);
	return (
		<div className="product-container">
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
			<div className="product-view">produit</div>
			<div className="callToAction">call to action</div>
			<div className="grid">
				{grid11 && (
					<div class="card mb-3 mt-2">
						<div class="row g-0">
							<div class="col-md-4">
								{picture11 && (
									<img src={img1} class="img-fluid rounded-start" alt="..." />
								)}
							</div>
							<div class="col-md-8">
								<div class="card-body">
									{title11 && <h5 class="card-title">{title11}</h5>}
									{description11 && <p class="card-text">{description11}</p>}
								</div>
							</div>
						</div>
					</div>
				)}
				{grid11 && (
					<div class="card mb-3 mt-2">
						<div class="row g-0">
							<div class="col-md-4">
								{picture22 && (
									<img src={img2} class="img-fluid rounded-start" alt="..." />
								)}
							</div>
							<div class="col-md-8">
								<div class="card-body">
									{title22 && <h5 class="card-title">{title22}</h5>}
									{description22 && <p class="card-text">{description22}</p>}
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Product;
