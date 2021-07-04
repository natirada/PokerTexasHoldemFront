import { instance } from './middleware';
import querystring from 'querystring';

export const domain = 'http://localhost:4005';
//export const domain = 'https://pokertexasholdem.herokuapp.com';

export const login = async payload => {
	// const options = {
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 	},
	// };
	const data = querystring.stringify(payload);
	console.log('data', data);
	return instance.post(`${domain}/user/login`, data);
};

export const testApi = async () => {
	return instance.get(`${domain}/user/test`);
};
export const play = async () => {
	return instance.post(`${domain}/game/play`);
};
