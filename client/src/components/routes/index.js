import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MarchandConnect from '../../espaces/MarchandConnect';
import Home from '../../pages/Home';
import Test from '../../pages/Test';

const index = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/marchand/connect" element={<MarchandConnect />} />
				<Route path="/test" element={<Test />} />
			</Routes>
		</BrowserRouter>
	);
};

export default index;
