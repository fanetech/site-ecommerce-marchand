import { GET_MARCHAND } from '../actions/marchand.actions';

const initialState = {};

export default function marchandReducer(state = initialState, action) {
	switch (action.type) {
		case GET_MARCHAND:
			return action.payload;
		default:
			return state;
	}
}
