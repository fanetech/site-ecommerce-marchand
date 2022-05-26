import React from 'react';

const BtnView = ({ handeConnect }) => {
	const handleBtn = e => {
		e.preventDefault();
		const id = e.target.id;
		handeConnect(id);
	};
	return (
		<div class="row mt-2">
			<div class="col siginBtn" id="signUp" onClick={handleBtn}>
				Vous n'avez pas de compte?
			</div>
			<div className="col-2"></div>
			<button class="btn btn-primary col" id="connexion" onClick={handleBtn}>
				connexion
			</button>
		</div>
	);
};

export default BtnView;
