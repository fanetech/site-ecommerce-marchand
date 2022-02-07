import React from 'react';
import Navbar from '../components/Navbar';
import Log from '../components/Log';

const Marchand = () => {
	return (
		<div className="marchand">
			<div className="navbar">
				<Navbar />
			</div>
			<Log />
		</div>
	);
};

export default Marchand;
