import React, { useContext } from 'react';
import { uidContext2 } from '../AppContext';

const Test = () => {
	const uid = useContext(uidContext2);
	console.log(uid);
	return <div>test</div>;
};

export default Test;
