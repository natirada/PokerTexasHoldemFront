import { instance } from './middleware';
import querystring from 'querystring';
export const login = async payload => {
	// const options = {
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 	},
	// };
	const data = querystring.stringify(payload);
	console.log('data', data);
	return instance.post('http://localhost:4005/user/login', data);
};

export const testApi = async () => {
	return instance.get('http://localhost:4005/user/test');
};
