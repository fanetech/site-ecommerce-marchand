import React, { useState } from 'react';
import Navbar from '../Navbar';

import LogSecond from './LogSecond';
import LogThird from './LogThird';
const Index = () => {
	const [connexion, setConnexion] = useState(false);

	return (
		<div className="log-container">
			{connexion === false && (
				<>
					<div className="navbar">
						<Navbar />
					</div>
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
								<LogSecond setConnexion={setConnexion} />
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
				</>
			)}
			{connexion && <LogThird />}
		</div>
	);
};

export default Index;
