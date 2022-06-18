import React, { useContext, useEffect } from 'react';
import Home from '../pages/Home';
import { uidContext, uidContext2 } from '../AppContext';
import MarchandConnected from '../pages/MarchandConnected';

const Marchand = () => {
	const uid = useContext(uidContext);
	const uid2 = useContext(uidContext2);

	console.log(uid2);
	useEffect(() => {
		console.log(uid);
	}, [uid]);

	return (
		<div className="marchand">
			{(uid || uid2) && (
				<>
					<MarchandConnected />
				</>
			)}
			{!uid && !uid2 && (
				<>
					<Home />
				</>
			)}
		</div>
	);
};

export default Marchand;
