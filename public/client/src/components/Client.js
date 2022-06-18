import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { getMarchand } from '../actions/marchand.actions';
import API_BASIC from '../utility/api.service';
import { uidContext, uidContext2 } from '../AppContext';
import Marchand from '../espaces/Marchand';
import Test from './Test';

const Client = () => {
	const [uid2, setUid2] = useState(null);

	const dispatch = useDispatch();
	const uid = useContext(uidContext);

	const params = useParams();

	useEffect(() => {
		let storeSplit = params.store.replace('-', ' ');
		const data = {
			store: storeSplit,
		};
		API_BASIC.post('/marchand/store', data)
			.then(res => {
				if (res.data.msg === 'error') {
					console.log(res.data.content);
				} else {
					dispatch(getMarchand(res.data.marchand[0].id));
					setUid2(res?.data?.marchand[0]?.id);
					console.log(res.data.marchand[0].id);
				}
			})
			.catch(err => console.log(err));
	}, [uid2]);
	return (
		<div className="client-no-connect">
			<uidContext2.Provider value={uid2}>
				<Marchand />
			</uidContext2.Provider>
		</div>
	);
};

export default Client;
