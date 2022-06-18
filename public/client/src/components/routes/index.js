import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MarchandConnect from '../../pages/MarchandConnected';
import Marchand from '../../espaces/Marchand';
import ProductPage from '../ProductPage';
import AddToCart from '../AddToCart';
import Client from '../Client';

const index = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/marchand" element={<Marchand />} />
				<Route exact path="/marchand/connect" element={<MarchandConnect />} />
				<Route exact path="/cart" element={<AddToCart />} />
				<Route path="/:store" element={<Client />} />
				<Route path="/product/:id" element={<Client />} />
				<Route path="*" element={<Navigate to={'/client'} />} />
			</Routes>
		</BrowserRouter>
	);
};

export default index;
