import axios from 'axios';
import { DOMAINE_API, ENPPOIN_API } from './app.constant';
import { getCookie } from './utils';
const API_BASIC = axios.create({
	baseURL: `${DOMAINE_API}${ENPPOIN_API}`,
	headers: {
		'Content-Type': 'application/json',
		Authorization: `${getCookie('marchandJWT')}`,
	},

	timeout: '300000',
});

export default API_BASIC;
