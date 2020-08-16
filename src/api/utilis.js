export const isTimeout = res => {
	if (typeof res.data === 'string') {
		return res.data.includes('timed out');
	}
	return false;
};
