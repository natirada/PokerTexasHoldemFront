import React from 'react';
import SliderCore from '@react-native-community/slider';

const Slider = ({ onValueChange = () => {} }) => {
	return (
		<SliderCore
			style={{ width: 100, height: 40, transform: [{ rotate: '-90deg' }] }}
			minimumValue={0}
			maximumValue={100}
			onValueChange={value => onValueChange(value)}
			or
			minimumTrackTintColor='#FFFFFF'
			maximumTrackTintColor='#000000'
		/>
	);
};

export default Slider;
