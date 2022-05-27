import React, { useEffect, useState } from 'react';
import Routes from './components/routes';
import { uidContext } from './AppContext';

function App() {
	const [uid, setUid] = useState(null);

	return (
		<uidContext.Provider value={'1'}>
			<Routes />
		</uidContext.Provider>
	);
}

export default App;
