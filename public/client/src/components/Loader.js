import React from 'react';
import ReactLoading from 'react-loading';

const Loader = () => {
	return (
		<>
			<ReactLoading
				type={'spin'}
				color={'#2a5555'}
				height={60}
				width={60}
				className="uid-loader"
			/>
		</>
	);
};

export default Loader;
