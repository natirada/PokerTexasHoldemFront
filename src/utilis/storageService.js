import AsyncStorage from '@react-native-community/async-storage';

export const getItem = async key => {
	try {
		const item = await AsyncStorage.getItem(key);
		return item;
	} catch (e) {
		console.log('get AsyncStorage error: ' + e);
	}
};

export const setItem = async (key, value) => {
	try {
		await AsyncStorage.setItem(key, value);
	} catch (e) {
		console.log('set AsyncStorage error: ' + e);
	}
};
export const removeItemValue = async key => {
	try {
		await AsyncStorage.removeItem(key);
		return true;
	} catch (exception) {
		return false;
	}
};
