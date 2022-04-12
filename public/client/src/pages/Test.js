import React, { useState } from 'react';

const Test = ({ log, errorInfo }) => {
	return (
		<div className="test-container">
			<form id="contactForm" data-sb-form-api-token="API_TOKEN">
				{log && (
					<div class="row input-group-newsletter">
						<h1 class="fst-italic lh-1 mb-4">
							Construisez votre boutique e-commerce
						</h1>
						<p class="mb-5">
							Propulser votre entreprise en le rendant plus visible.Des millions
							de marques parmi les plus prospères au monde font confiance à web
							site pour vendre, expédier et traiter rapidemment leurs commandes.
						</p>
						<div class="row">
							<input
								class="form-control"
								id="email"
								type="email"
								placeholder="Entre votre addresse email..."
							/>
							<input
								class="form-control mt-2"
								id="password"
								type="password"
								placeholder="Mot de passe"
							/>
						</div>
						<div className="error">{errorInfo}</div>
						<div class="row mt-2">
							<button class="btn btn-primary" id="primary">
								Essaie
							</button>
						</div>
					</div>
				)}
			</form>
		</div>
	);
};

export default Test;
