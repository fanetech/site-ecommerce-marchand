import React from 'react';
import { useSelector } from 'react-redux';
const Silder = () => {
	const marchandData = useSelector(state => state.marchandReducer);

	return (
		<>
			<section class="slider_section ">
				<div class="slider_bg_box">
					<img
						src={
							marchandData &&
							`./images/${marchandData?.marchand?.banniere ?? 'slider-bg.jpg'}`
						}
						alt=""
					/>
				</div>
				<div id="customCarousel1" class="carousel slide" data-ride="carousel">
					<div class="carousel-inner">
						<div class="carousel-item active">
							<div class="container ">
								<div class="row">
									<div class="col-md-7 col-lg-6 ">
										<div class="detail-box">
											<h1>
												<span>
													Bienvenu chez {marchandData?.marchand?.storeName}
												</span>
												<br />
												100% qualité
											</h1>
											<p>{marchandData?.marchand?.storeDescription}</p>
											<div class="btn-box">
												<a href="/jks" class="btn1">
													Je découvre
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="carousel-item ">
							<div class="container ">
								<div class="row">
									<div class="col-md-7 col-lg-6 ">
										<div class="detail-box">
											<h1>
												<span>20% de reduction</span>
												<br />
												chaque jours
											</h1>
											<p>{marchandData?.marchand?.storeDescription}</p>
											<div class="btn-box">
												<a href="/jks" class="btn1">
													Acheter maintemant
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="carousel-item">
							<div class="container ">
								<div class="row">
									<div class="col-md-7 col-lg-6 ">
										<div class="detail-box">
											<h1>
												<span>La qualité c'est chez nous</span>
												<br />
												Satisfait ou Remboursé
											</h1>
											<p>{marchandData?.marchand?.storeDescription}</p>
											<div class="btn-box">
												<a href="/jks" class="btn1">
													visité
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="container">
						<ol class="carousel-indicators">
							<li
								data-target="#customCarousel1"
								data-slide-to="0"
								class="active"
							></li>
							<li data-target="#customCarousel1" data-slide-to="1"></li>
							<li data-target="#customCarousel1" data-slide-to="2"></li>
						</ol>
					</div>
				</div>
			</section>
		</>
	);
};

export default Silder;
