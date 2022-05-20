import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<div class="container px-4 px-lg-5">
					<a class="navbar-brand" href="#!">
						FaneShop
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
									A-propos
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link " href="#!" role="button">
									Boutique
								</a>
							</li>
						</ul>
						<form class="d-flex">
							<NavLink exat to="user">
								<button class="btn btn-outline-dark" type="submit">
									Connexion
								</button>
							</NavLink>
						</form>
						<form class="d-flex ml-2">
							<NavLink exact to="/test">
								<button class="btn btn-outline-dark" type="submit">
									test
								</button>
							</NavLink>
						</form>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
