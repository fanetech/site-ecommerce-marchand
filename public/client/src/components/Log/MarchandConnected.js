import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { getCookie } from '../utils';
import Product from './Product';
import ClientView from './ClientView';
import MarchandSideBar from './MarchandSideBar';

const MarchandConnected = ({ handledLog }) => {
	//file upload variable and text variable to send DB
	const [fileBanniere, setFileBanniere] = useState('');
	const [fileImage1, setFileImage1] = useState('');
	const [fileImage2, setFileImage2] = useState('');
	const [fileImage3, setFileImage3] = useState('');
	const [image1, setImage1] = useState('');
	const [image2, setImage2] = useState('');
	const [image3, setImage3] = useState('');

	const [title1, setTitle1] = useState('');
	const [title2, setTitle2] = useState('');
	const [title3, setTitle3] = useState('');
	const [description1, setDescription1] = useState('');
	const [description2, setDescription2] = useState('');
	const [description3, setDescription3] = useState('');

	//link of display picture
	const [banniere, setBanniere] = useState('');

	const handledSend = e => {
		e.preventDefault();
		let id = e.target.id;

		//test variable main1 and send to DB
		if (id === 'main1') {
			let data = {};
			if (title1) {
				data.title1 = title1;
			}
			if (description1) {
				data.description1 = description1;
			}

			//send main1 data to DB
			//setMain1btn(false);
			axios
				.put(`http://localhost:8000/api/marchands/${getCookie('jwt')}`, data)
				.then(res => {
					if (fileImage1) {
						let formData = new FormData();
						formData.append('file', fileImage1);

						axios
							.post(
								`http://localhost:8000/api/marchand/${getCookie('jwt')}/img1`,
								formData,
							)
							.then(res => {
								console.log('enregistré');
							})
							.catch(err => {
								console.log(err);
							});
					}
				})
				.catch(err => {
					console.log(err);
				});
		}

		//test variable main2 and send to DB
		if (id === 'main2') {
			let data2 = {};
			if (title1) {
				data2.title2 = title2;
			}
			if (description2) {
				data2.description2 = description2;
			}
			//send main1 data to DB
			//setMain2btn(false);
			axios
				.put(`http://localhost:8000/api/marchands/${getCookie('jwt')}`, data2)
				.then(res => {
					if (fileImage2) {
						let formData = new FormData();
						formData.append('file', fileImage2);

						axios
							.post(
								`http://localhost:8000/api/marchand/${getCookie('jwt')}/img2`,
								formData,
							)
							.then(res => {
								console.log('enregistré');
							})
							.catch(err => {
								console.log(err);
							});
					}
				})
				.catch(err => {
					console.log(err);
				});
		}

		//test variable main3 and send to DB
		if (id === 'main3') {
			let data3 = {};
			if (title3) {
				data3.title3 = title3;
			}
			if (description3) {
				data3.description3 = description3;
			}
			//send main1 data to DB
			//setMain2btn(false);
			axios
				.put(`http://localhost:8000/api/marchands/${getCookie('jwt')}`, data3)
				.then(res => {
					if (fileImage3) {
						let formData = new FormData();
						formData.append('file', fileImage3);

						axios
							.post(
								`http://localhost:8000/api/marchand/${getCookie('jwt')}/img3`,
								formData,
							)
							.then(res => {
								console.log(res.data);
							})
							.catch(err => {
								console.log(err);
							});
					}
				})

				.catch(err => {
					console.log(err);
				});
		}
	};

	//header upload picture header
	const handledUpload = e => {
		let formData = new FormData();
		formData.append('file', fileBanniere);
		let id = e.target.id;
		if (id === 'ban') {
			axios
				.post(
					`http://localhost:8000/api/marchand/${getCookie('jwt')}/banniere`,
					formData,
				)
				.then(res => {
					axios
						.get(`http://localhost:8000/api/marchands/${getCookie('jwt')}`)
						.then(res => {
							console.log('bannière mis à jour');
						})
						.catch(err => {
							console.log(err);
						});
				})
				.catch(err => {
					console.log(err);
				});
		}
	};

	//handle image
	const handledPicture = e => {
		let id = e.target.id;
		if (id === 'ban') {
			setBanniere(URL.createObjectURL(e.target.files[0]));
			setFileBanniere(e.target.files[0]);
		}

		if (id === 'image1') {
			setImage1(URL.createObjectURL(e.target.files[0]));
			setFileImage1(e.target.files[0]);
		}
		if (id === 'image2') {
			setImage2(URL.createObjectURL(e.target.files[0]));
			setFileImage2(e.target.files[0]);
		}
		if (id === 'image3') {
			setImage3(URL.createObjectURL(e.target.files[0]));
			setFileImage3(e.target.files[0]);
		}
	};

	useEffect(() => {
		const getData = () => {
			axios
				.get(`http://localhost:8000/api/marchands/${getCookie('jwt')}`)
				.then(res => {
					let data = res.data;
					setBanniere('/img/uploads/' + data.baniere);

					setTitle1(data.title1);
					setDescription1(data.description1);
					setImage1('/img/uploads/' + data.image1);

					setTitle2(data.title2);
					setDescription2(data.description2);
					setImage2('/img/uploads/' + data.image2);

					setTitle3(data.title3);
					setDescription3(data.description3);
					setImage3('/img/uploads/' + data.image3);

					console.log(data);
				})
				.catch(err => {
					console.log(err);
				});
			//Get product
		};
		getData();
	}, []);

	return (
		<div className="marchand-connected-container">
			<div className="marchand-sidebar-container">
				<MarchandSideBar />
			</div>
			<div className="client-container">
				<ClientView
					banniere={banniere}
					title1={title1}
					title2={title2}
					title3={title3}
					description1={description1}
					description2={description2}
					description3={description3}
					image1={image1}
					image2={image2}
					image3={image3}
				/>
			</div>
		</div>
	);
};

export default MarchandConnected;
