import React, { useContext } from 'react';
import { uidContext, uidContext2 } from '../AppContext';
import ClientView from '../components/Log/ClientView';
import MarchandSideBar from '../components/Log/MarchandSideBar';

const MarchandConnected = () => {
	const uid = useContext(uidContext);
	const uid2 = useContext(uidContext2);
	return (
		<div className="marchand-connected-container">
			{uid && uid && !uid2 && (
				<div className="marchand-sidebar-container">
					<div className="icons">
						<div className="icons-bis">
							<MarchandSideBar />
						</div>
					</div>
				</div>
			)}
			<div className="client-container">
				<ClientView />
			</div>
		</div>
	);
};

export default MarchandConnected;
