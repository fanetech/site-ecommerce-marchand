import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ShopNavbar = () => {
	const marchandData = useSelector(state => state.marchandReducer);
	return (
		<>
			<header class="header_section">
				<div class="container fixe-navbar">
					<nav class="navbar navbar-expand-lg custom_nav-container ">
						<a class="navbar-brand" href="index.html">
							<img
								width={130}
								height={70}
								src={
									marchandData &&
									`./images/${marchandData?.marchand?.logo ?? 'logo.png'}`
								}
								alt="pic"
							/>
						</a>
						<button
							class="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class=""> </span>
						</button>
						<div class="collapse navbar-collapse" id="navbarSupportedContent">
							<ul class="navbar-nav">
								<li class="nav-item active">
									<Link to={'/marchand'} class="nav-link">
										Accueil <span class="sr-only">(current)</span>
									</Link>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="product.html">
										Produits
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="contact.html">
										Contact
									</a>
								</li>
								<li class="nav-item">
									<Link to={'/cart'} class="nav-link">
										panier
									</Link>
								</li>
								<form class="form-inline">
									<button
										class="btn  my-2 my-sm-0 nav_search-btn"
										type="submit"
									>
										<i class="fa fa-search" aria-hidden="true"></i>
									</button>
								</form>
							</ul>
						</div>
					</nav>
				</div>
			</header>
		</>
	);
};

export default ShopNavbar;
