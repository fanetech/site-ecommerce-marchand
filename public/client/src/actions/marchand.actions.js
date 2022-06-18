import API_BASIC from '../utility/api.service';

export const GET_MARCHAND = 'GET_MARCHAND';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const FILE_PRODUCT = 'FILE_PRODUCT';

export const getMarchand = uid => {
	return dispatch => {
		API_BASIC.get(`/marchand/show/detail/${uid}`)
			.then(res => {
				dispatch({ type: GET_MARCHAND, payload: res.data });
			})
			.catch(err => {
				console.error('marchand get action error =', err);
			});
	};
};

export const addProduct = data => {
	return dispatch => {
		API_BASIC.post('/product/add', data)
			.then(res => {
				console.log(res.data);
			})
			.catch(err => console.log(err));
	};
};
export const editProduct = (data, id) => {
	return dispatch => {
		API_BASIC.put(`/product/edit/${id}`, data)
			.then(res => {
				console.log(res.data);
			})
			.catch(err => console.log(err));
	};
};
export const fileProduct = data => {
	return dispatch => {
		API_BASIC.post(`/product/upload`, data)
			.then(res => {
				console.log(res.data);
			})
			.catch(err => console.log(err));
	};
};
