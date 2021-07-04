import openSicket from 'socket.io-client';
import { domain } from '../api/api';
let io;

export default socket = {
	init: () => {
		io = openSicket(domain);
		return io;
	},
	getIO: () => {
		if (!io) {
			throw new Error('Socket.io not intaialized');
		}
		return io;
	},
	disconnect: () => {
		if (!io) {
			throw new Error('Socket.io not intaialized');
		}
		io.disconnect();
	},
};
