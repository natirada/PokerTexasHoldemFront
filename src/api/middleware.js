import axios from 'axios/index';

export const instance = axios.create();

instance.defaults.headers.common['Content-Type'] = 'application/json';
// instance.defaults.params.appid = API_KEY;

// instance.interceptors.request.use(
// 	function(config) {
// 		// Do something before request is sent
// 		return config;
// 	},
// 	function(error) {
// 		// Do something with request error
// 		return Promise.reject(error);
// 	}
// );
// instance.interceptors.response.use(null, async error => {
// 	return error;
// });

// To see all the requests in the Dev tools in the network tab.
XMLHttpRequest = GLOBAL.originalXMLHttpRequest
	? GLOBAL.originalXMLHttpRequest
	: GLOBAL.XMLHttpRequest;
