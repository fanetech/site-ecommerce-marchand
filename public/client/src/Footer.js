import React from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
	const marchandData = useSelector(state => state.marchandReducer);
	return (
		<>
			{/*<!-- footer start -->*/}
			<footer>
				<div class="container">
					<div class="row">
						<div class="col-md-4">
							<div class="full">
								<div class="logo_footer">
									<a href="./">
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
								</div>
								<div class="information_f">
									<p>
										<strong>BOUTIQUE:</strong>{' '}
										{marchandData && marchandData?.marchand?.storeName}
									</p>
									<p>
										<strong>TELEPHONE:</strong>{' '}
										{marchandData && marchandData?.marchand?.phone}
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-8">
							<div class="row">
								<div class="col-md-7">
									<div class="row">
										<div class="col-md-6">
											<div class="widget_menu">
												<h3>Menu</h3>
												<ul>
													<li>
														<a href="/">Politique de confidentialité</a>
													</li>
													<li>
														<a href="#/">condition général d'utilisation</a>
													</li>
													<li>
														<a href="#/">condition général de vente</a>
													</li>
													<li>
														<a href="#/">faq</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-5">
									<div class="widget_menu">
										<h3>Newsletter</h3>
										<div class="information_f">
											<p>
												Abonné vous a notre newsletter et recévez des coupons de
												reduction
											</p>
										</div>
										<div class="form_sub">
											<form>
												<fieldset>
													<div class="field">
														<input
															type="email"
															placeholder="Enter Your Mail"
															name="email"
														/>
														<input type="submit" value="Subscribe" />
													</div>
												</fieldset>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
			{/*<!-- footer end -->*/}

			<div class="cpy_">
				<p class="mx-auto">
					© 2021 All Rights Reserved By{' '}
					<a href="https://html.design/">Free Html Templates</a>
					<br />
					Distributed By <a href="./https://themewagon.com/">ThemeWagon</a>
				</p>
			</div>
		</>
	);
};

export default Footer;
