import React, { useEffect, useState } from 'react';
import Routes from './components/routes';
import { uidContext } from './AppContext';
import API_BASIC from './utility/api.service';
import { useDispatch } from 'react-redux';
import { getMarchand } from './actions/marchand.actions';

function App() {
	const [uid, setUid] = useState(null);
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchUser = async () => {
			await API_BASIC.get('/authenticator/checkAuth')
				.then(res => {
					if (res.data.msg === 'success') {
						setUid(res.data.user[0].storeId);
					} else {
						console.error(res.data.content);
						//setUid('CLIENT');
					}
				})
				.catch(err => {
					console.error(err);
				});
		};
		fetchUser();
		if (uid) dispatch(getMarchand(uid));
	}, [uid]);

	return (
		<uidContext.Provider value={uid}>
			<Routes />
		</uidContext.Provider>
	);
}

export default App;
