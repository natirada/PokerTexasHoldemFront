import { setItem, getItem } from './storageService';
let id = null;
function getRandomInt(max = 999999) {
	return Math.floor(Math.random() * Math.floor(max));
}

async function setID() {
	try {
		const idJson = await getItem('id');

		if (id !== null) {
			id = JSON.parse(idJson);
		} else {
			const newID = getRandomInt();
			id = newID;
			await setItem('id', JSON.stringify(newID));
		}
	} catch (error) {
		console.log(error);
	}
}

setID();

export const getID = () => {
	console.log('id bedore retun', id);
	return id;
};
