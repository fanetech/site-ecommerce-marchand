import React, { useEffect, useState } from 'react';

const ClientView = ({
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
	const [grid1, setGrid1] = useState(false);
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
			<div id="layoutSidenav_content">
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
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
							laboriosam praesentium nulla blanditiis illum voluptas voluptate
							similique accusamus minima sint voluptatum modi officiis et quis
							cupiditate, eveniet assumenda expedita illo amet consequuntur
							pariatur? Non, eius velit tempore quis perspiciatis sapiente
							obcaecati minima, corrupti numquam perferendis iusto? A nam
							commodi laborum facilis fuga repudiandae similique beatae
							excepturi necessitatibus. Veniam minima ex voluptates qui culpa
							aliquam, minus totam voluptatum magnam eius voluptatibus
							architecto id nostrum quo, quasi explicabo? Tenetur dignissimos
							ipsum molestias! Illum provident non consequuntur. Delectus totam
							debitis commodi est possimus eveniet cum atque quidem dolorem
							praesentium molestiae optio, perferendis doloribus quasi deserunt
							placeat, facilis rem odit et accusantium mollitia dolore aperiam
							culpa nisi? Aliquam veritatis, non voluptates saepe nam, totam
							maxime ratione dolor debitis aperiam repellendus corrupti soluta
							illum omnis! Corrupti enim sunt, vel doloremque placeat, sit
							eveniet blanditiis eum ad eius, exercitationem quis laboriosam
							consequatur ipsum. Minus perferendis sapiente laudantium
							cupiditate quo? Unde, quam obcaecati quas, consectetur quo
							officiis ab repellendus quos sapiente fuga sint libero provident,
							quidem dolor expedita doloribus repudiandae corrupti
							necessitatibus aliquam ducimus harum maxime. Tempora ipsum
							dolorum, commodi enim laudantium distinctio quis culpa eos
							voluptas voluptatem sed, reprehenderit veniam harum. Velit non
							ratione ad consequuntur, voluptas repudiandae? Facere ipsa ipsam
							nemo eligendi iste repudiandae veritatis et illo atque? Fugiat
							quod, vitae molestiae numquam, voluptatum nesciunt deleniti velit
							rerum sed repellat minima sequi inventore ad sapiente perferendis
							repudiandae ullam, officiis sit est error pariatur! Molestias
							repellat sed dolor nemo sapiente possimus ad neque reprehenderit,
							consequuntur dolore quam ipsum deleniti nostrum. Sapiente rerum
							labore numquam amet minus reiciendis incidunt unde, recusandae
							neque. Aliquam eius deserunt excepturi enim aperiam fugit
							obcaecati itaque sequi nostrum, natus ullam praesentium minus
							facere optio corrupti ipsam! Iure quaerat sunt labore voluptate
							quidem enim quod alias. Nobis laboriosam officia a doloremque,
							consequuntur exercitationem magnam eaque alias minus reiciendis
							tempora eius animi! Consequatur ullam autem fugiat libero illo
							temporibus, sapiente at quam ipsum alias iste saepe veniam
							distinctio quisquam nostrum quo delectus quasi? Expedita magnam,
							nam ducimus numquam nobis architecto optio laborum aperiam porro,
							hic, perspiciatis incidunt totam! Minima dignissimos minus earum
							sequi quas exercitationem reiciendis, ratione consequatur sed
							cupiditate animi nisi ducimus odio ipsum autem eaque unde placeat
							sint nam nemo aliquid? Error optio maxime suscipit eos placeat
							iste quas sit voluptatibus, nulla expedita praesentium dolorum vel
							non! Fuga veniam odio possimus molestias dolorem libero nemo
							necessitatibus doloremque vitae veritatis sed dignissimos quasi,
							error aperiam consequatur natus! Ducimus dolorem molestias
							deserunt libero reprehenderit error maxime aperiam quisquam eum
							voluptatem numquam nisi, dolorum fugit dolor iste perferendis,
							facilis maiores aliquid autem repudiandae iusto alias! Voluptate
							numquam eligendi unde sit mollitia ut repellendus alias veritatis
							vitae cumque, quos esse expedita. Sequi accusamus non sit, nihil
							fugiat culpa ea id laudantium aliquam deleniti tempora nobis
							voluptatum harum dolores ut aliquid similique velit maxime illo
							quibusdam sapiente reiciendis nam numquam. Asperiores similique
							facilis culpa delectus. Delectus nulla nostrum laborum esse eaque
							sint, in corporis pariatur tempore assumenda dolore natus
							molestiae aliquam! Incidunt rem numquam cumque inventore aliquid.
						</p>
					</header>
					{/*<!-- Section-->*/}
					<section>
						{/* Main 1 */}

						{grid1 && (
							<div class="card mb-3 mt-2">
								<div class="row g-0">
									<div class="col-md-4">
										{image1 && (
											<img
												src={img1}
												class="img-fluid rounded-start"
												alt="..."
											/>
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
											<img
												src={img2}
												class="img-fluid rounded-start"
												alt="..."
											/>
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
											<img
												src={img3}
												class="img-fluid rounded-start"
												alt="..."
											/>
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
			</div>
		</>
	);
};

export default ClientView;
