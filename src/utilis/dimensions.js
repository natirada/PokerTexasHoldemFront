import { Dimensions, PixelRatio } from 'react-native';

//Default guideline sizes are based on standard ~5" screen mobile device
const GUIDELINE_BASE_WIDTH = 360;
const GUIDELINE_BASE_HEIGHT = 640;

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

export const heightPixelRatio = amount =>
	PixelRatio.roundToNearestPixel(deviceHeight * amount);

export const widthPixelRatio = amount =>
	PixelRatio.roundToNearestPixel(deviceWidth * amount);

// Takes pixel of design and converts them to percents.
export const convertHeightPixelsToPercent = heightInPx =>
	heightInPx / GUIDELINE_BASE_HEIGHT;
export const convertWidthPixelsToPercent = widthInPx =>
	widthInPx / GUIDELINE_BASE_WIDTH;

// Combine the above functions to use in styles

export const calcHeight = px => {
	return heightPixelRatio(convertHeightPixelsToPercent(px));
};

export const calcWidth = px => widthPixelRatio(convertWidthPixelsToPercent(px));

const scaleWidth = deviceWidth / GUIDELINE_BASE_WIDTH;
const scaleHeight = deviceHeight / GUIDELINE_BASE_HEIGHT;

const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] =
	width < height ? [width, height] : [height, width];

export const scale1 = size => (shortDimension / GUIDELINE_BASE_WIDTH) * size;
export const verticalScale = size =>
	(longDimension / GUIDELINE_BASE_HEIGHT) * size;
export const moderateScale = (size, factor = 0.5) =>
	size + (scale1(size) - size) * factor;

const fontScale = Math.min(scaleWidth, scaleHeight);
export const calcFontSize = size => size * fontScale;
export const headerMenuHeight = deviceHeight * 0.0921;
