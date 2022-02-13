import React from 'react';
import axios from 'axios';

const Test = () => {
	const handleTest = e => {
		e.preventDefault();
		console.log('entre');
		const data = {
			name: 'lougue',
			firstName: 'franck',
			storeName: 'sote',
			email: 'franck@gmail.com',
			phone: 0,
			compte: '0',
			logo: '/logo',
			favicon: '/favicon',
			description: 'ventement',
			baniere: '/banniere',
			legalPage: 'string',
			sellPage: 'string',
			useTerms: 'string',
			faq: 'string',
			createdAt: '2022-02-09T23:27:44.573Z',
			updatedAt: '2022-02-09T23:27:44.573Z',
			password: 'franck',
		};
		axios
			.post('http://localhost:8000/api/marchands', data)
			.then(res => {
				console.log('bien');
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<div>
			<button onClick={handleTest}>envoyer</button>
		</div>
	);
};

export default Test;
