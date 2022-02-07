import React, { useState } from 'react';

const LogThird = ({ handledLog }) => {
	//object to recored all info to lega page
	const [data, setData] = useState([]);

	//variable to get
	const [legalPage, setLegalPage] = useState('');
	const [statusPage, setStatusPage] = useState('');
	const [userPage, setUserPage] = useState('');
	const [faqPage, setFaqPage] = useState('');

	//handle show fields
	const [legal, setLegal] = useState(true);
	const [status, setStatus] = useState(false);
	const [user, setUser] = useState(false);
	const [faq, setFaq] = useState(false);

	const thirdHandle = e => {
		e.preventDefault();

		//test and add data to data hooks and go next field
		if (e.target.id === 'legal') {
			setData([...data, legalPage]);
			setLegal(false);
			setStatus(true);
		}

		if (e.target.id === 'status') {
			setData([...data, statusPage]);
			setStatus(false);
			setUser(true);
		}
		if (e.target.id === 'user') {
			setData([...data, userPage]);
			setUser(false);
			setFaq(true);
		}

		if (e.target.id === 'faq') {
			let key = { key: 'third' };
			setData([...data, faqPage]);
			setData([...data, key]);
			handledLog(data);
			setFaq(false);
		}
	};

	return (
		<>
			{legal && (
				<div className="row input-group-newsletter">
					<h5>Etape 1/4 : Page légal</h5>
					<textarea
						className="form-control mt-2"
						id="decription"
						placeholder="Texte de votre page légal..."
						onChange={e => setLegalPage(e.target.value)}
					/>
					<div class="row mt-2">
						<button
							className="btn btn-primary"
							id="legal"
							onClick={thirdHandle}
						>
							Enregistrer
						</button>
					</div>
				</div>
			)}

			{/* show status global to sell  field*/}
			{status && (
				<div className="row input-group-newsletter">
					<h5>Etape 2/4 : Conditions générales de ventes </h5>
					<textarea
						className="form-control mt-2"
						id="description"
						placeholder="Texte de votre page conditions générale de ventes..."
						onChange={e => setStatusPage(e.target.value)}
					/>
					<div class="row mt-2">
						<button
							className="btn btn-primary"
							id="status"
							onClick={thirdHandle}
						>
							Enregistrer
						</button>
					</div>
				</div>
			)}

			{/* show status Using data visitor*/}
			{user && (
				<div className="row input-group-newsletter  mt-2">
					<h5>Etape 3/4 : Conditions générales d'utilisations </h5>
					<textarea
						className="form-control mt-2"
						id="description"
						placeholder="Texte de votre page condition d'utilisation des données de vos clients..."
						onChange={e => setUserPage(e.target.value)}
					/>
					<div class="row mt-2">
						<button className="btn btn-primary" id="user" onClick={thirdHandle}>
							Validé
						</button>
					</div>
				</div>
			)}

			{/* show faq*/}
			{faq && (
				<div className="row input-group-newsletter  mt-2">
					<h5>Etape 3/4 : FAQ </h5>
					<textarea
						className="form-control mt-2"
						id="description"
						placeholder="Texte de votre page faq..."
						onChange={e => setFaqPage(e.target.value)}
					/>
					<div class="row mt-2">
						<button className="btn btn-primary" id="faq" onClick={thirdHandle}>
							Validé
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default LogThird;
