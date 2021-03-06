import React, { useState } from 'react';
import Navbar from '../Navbar';
import MarchandConnected from '../../pages/MarchandConnected';
import MarchandSignIn from './MarchandSignIn';

import MarchandSignUp from './MarchandSignUp';
const Index = () => {
	const [connexion, setConnexion] = useState(false);
	const [signUp, setSignUp] = useState(false);

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
								{signUp && (
									<MarchandSignUp
										setConnexion={setConnexion}
										setSignUp={setSignUp}
									/>
								)}
								{!signUp && (
									<MarchandSignIn
										setConnexion={setConnexion}
										setSignUp={setSignUp}
									/>
								)}
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
			{connexion && <MarchandConnected />}
		</div>
	);
};

export default Index;
