import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MarchandConnect from '../../espaces/MarchandConnect';
import Marchand from '../../espaces/Marchand';
import Home from '../../pages/Home';
import Test from '../../pages/Test';

const index = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Marchand />} />
				<Route path="/marchand/connect" element={<MarchandConnect />} />
				<Route path="/test" element={<Test />} />
				<Route path="/user" element={<Test />} />
			</Routes>
		</BrowserRouter>
	);
};

export default index;
