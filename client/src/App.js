import React, { useEffect, useState } from 'react';
import Routes from './components/routes';
import axios from 'axios';
function App() {
	const [auteur, setAuteur] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:8000/auteur')
			.then(res => {
				setAuteur(res.data.auteur);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	}, []);

	return <Routes />;
}

export default App;
