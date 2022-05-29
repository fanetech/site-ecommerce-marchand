import React, { useContext } from 'react';
import Home from '../pages/Home';
import { uidContext } from '../AppContext';
import MarchandConnected from '../pages/MarchandConnected';

const Marchand = () => {
	const uid = useContext(uidContext);

	return (
		<div className="marchand">
			{uid ? (
				<>
					<MarchandConnected />
				</>
			) : (
				<>
					<Home />
				</>
			)}
		</div>
	);
};

export default Marchand;
