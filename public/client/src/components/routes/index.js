import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MarchandConnect from '../../pages/MarchandConnected';
import Marchand from '../../espaces/Marchand';

const index = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/marchand" element={<Marchand />} />
				<Route path="/marchand/connect" element={<MarchandConnect />} />
			</Routes>
		</BrowserRouter>
	);
};

export default index;
