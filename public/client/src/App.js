import React, { useEffect, useState } from 'react';
import Routes from './components/routes';
import { uidContext } from './AppContext';
import API_BASIC from './utility/api.service';

function App() {
	const [uid, setUid] = useState(null);
	useEffect(() => {
		const fetchUser = async () => {
			await API_BASIC.get('/authenticator/checkAuth')
				.then(res => {
					if (res.data.msg === 'success') {
						setUid(res.data.user[0].id);
					} else {
						console.error(res.data.content);
					}
				})
				.catch(err => {
					console.error(err);
				});
		};
		fetchUser();
	}, [uid]);

	return (
		<uidContext.Provider value={uid}>
			<Routes />
		</uidContext.Provider>
	);
}

export default App;
