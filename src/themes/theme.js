import { Dimensions } from 'react-native';

const SW = Dimensions.get('screen').width;
const SH = Dimensions.get('screen').height;
const fontScyle = Dimensions.get('screen').fontScale;

const theme = {
	SW,
	SH,
	fontScyle,
};

export const calculateWidth = width => {
	const ratio = width / 360;
	return SW * ratio;
};
export const calculateHeight = height => {
	const ratio = height / 640;
	return SH * ratio;
};

export default theme;
