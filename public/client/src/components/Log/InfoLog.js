import React from 'react';

const InfoLog = ({ type }) => {
	return (
		<>
			{type === 'primary' && (
				<div>
					<h1 class="fst-italic lh-1 mb-4">
						Construisez votre boutique e-commerce
					</h1>
					<p class="mb-5">
						Propulser votre entreprise en le rendant plus visible.Des millions
						de marques parmi les plus prospères au monde font confiance à web
						site pour vendre, expédier et traiter rapidemment leurs commandes.
					</p>
				</div>
			)}

			{type === 'second' && (
				<div>
					<h1 class="fst-italic lh-1 mb-4">
						Entre les informations de votre boutique
					</h1>
				</div>
			)}

			{type === 'third' && (
				<div>
					<h1 class="fst-italic lh-1 mb-4">
						Entre les informations de vos pages légals
					</h1>
				</div>
			)}

			{type === 'fourth' && (
				<div>
					<h1 class="fst-italic lh-1 mb-4">quel produit vous vendez?</h1>
				</div>
			)}
		</>
	);
};

export default InfoLog;
