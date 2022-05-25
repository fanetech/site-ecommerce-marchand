import axios from 'axios';
import { DOMAINE_API, ENPPOIN_API } from './app.constant';
const API_BASIC = axios.create({
	baseURL: `${DOMAINE_API}${ENPPOIN_API}`,
	timeout: '300000',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default API_BASIC;
