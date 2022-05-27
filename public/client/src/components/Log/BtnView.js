import React from 'react';

const BtnView = ({ handleLog, type }) => {
	const handleBtn = e => {
		e.preventDefault();
		const id = e.target.id;
		handleLog(id);
	};
	return (
		<>
			{/* display connexion page */}
			{type === 'standard' && (
				<div class="row mt-2">
					<div class="col siginBtn">
						<h4 onClick={handleBtn} id="signUp">
							Vous n'avez pas de compte?
						</h4>
					</div>
					<div className="col-2"></div>
					<button
						class="btn btn-primary col"
						id="connexion"
						onClick={handleBtn}
					>
						connexion
					</button>
				</div>
			)}

			{/* btn specific */}
			{type === 'essaie' && (
				<div class="row mt-2">
					<div class="col siginBtn">
						<h4 id="signUp" onClick={handleBtn}>
							Vous n'avez pas de compte?
						</h4>
					</div>
					<div className="col-2"></div>
					<button class="btn btn-primary col" id="essaie" onClick={handleBtn}>
						Essaie
					</button>
				</div>
			)}
			{type === 'password' && (
				<div class="row mt-2">
					<div class="col siginBtn" id="prePassword" onClick={handleBtn}>
						<h4 id="prePassword" onClick={handleBtn}>
							Précedent
						</h4>
					</div>
					<div className="col-2"></div>
					<button class="btn btn-primary col" id="password" onClick={handleBtn}>
						Enregistrer
					</button>
				</div>
			)}
			{type === 'storeInfo' && (
				<div class="row mt-2">
					<div class="col siginBtn" id="preInfo" onClick={handleBtn}>
						<h4 id="preInfo" onClick={handleBtn}>
							Précedent
						</h4>
					</div>
					<div className="col-2"></div>
					<button class="btn btn-primary col" id="info" onClick={handleBtn}>
						Enregistrer
					</button>
				</div>
			)}
			{type === 'legal' && (
				<div class="row mt-2">
					<div class="col siginBtn" id="preLegal" onClick={handleBtn}>
						<h4 id="preLegal" onClick={handleBtn}>
							Précedent
						</h4>
					</div>
					<div className="col-2"></div>
					<button
						class="btn btn-primary col"
						id="legalInfo"
						onClick={handleBtn}
					>
						Enregistrer
					</button>
				</div>
			)}
			{type === 'statusInfo' && (
				<div class="row mt-2">
					<div class="col siginBtn" id="preStatus" onClick={handleBtn}>
						<h4 id="preStatus" onClick={handleBtn}>
							Précedent
						</h4>
					</div>
					<div className="col-2"></div>
					<button class="btn btn-primary col" id="status" onClick={handleBtn}>
						Enregistrer
					</button>
				</div>
			)}
			{type === 'userInfo' && (
				<div class="row mt-2">
					<div class="col siginBtn" id="preUser" onClick={handleBtn}>
						<h4 id="preUser" onClick={handleBtn}>
							Précedent
						</h4>
					</div>
					<div className="col-2"></div>
					<button class="btn btn-primary col" id="user" onClick={handleBtn}>
						Enregistrer
					</button>
				</div>
			)}
			{type === 'faqInfo' && (
				<div class="row mt-2">
					<div class="col siginBtn" id="preFaq" onClick={handleBtn}>
						<h4 id="preFaq" onClick={handleBtn}>
							Précedent
						</h4>
					</div>
					<div className="col-2"></div>
					<button class="btn btn-primary col" id="faq" onClick={handleBtn}>
						Enregistrer
					</button>
				</div>
			)}
			{type === 'fileInfo' && (
				<div class="row mt-2">
					<div class="col siginBtn" id="preFile" onClick={handleBtn}>
						<h4 id="preFile" onClick={handleBtn}>
							Précedent
						</h4>
					</div>
					<div className="col-2"></div>
					<button class="btn btn-primary col" id="file" onClick={handleBtn}>
						Enregistrer
					</button>
				</div>
			)}
			{type === 'create' && (
				<div class="row mt-2">
					<div class="col siginBtn" id="preCreate" onClick={handleBtn}>
						<h4 id="preCreate" onClick={handleBtn}>
							Recommencer
						</h4>
					</div>
					<div className="col-2"></div>
					<button class="btn btn-primary col" id="create" onClick={handleBtn}>
						Créer
					</button>
				</div>
			)}
		</>
	);
};

export default BtnView;
