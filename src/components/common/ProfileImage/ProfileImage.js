import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import s from './styles';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { generalImage } from '../../../assets/images';
import { calculateWidth } from '../../../themes/theme';

const ProfileImage = ({ id, turnById, setTurnId }) => {
	const circularProgressRef = useRef(null);
	const isStartAnimation = useRef(false);
	const [tintColor, settintColor] = useState('green');

	useEffect(() => {
		if (turnById === id) {
			startTimerAnimation();
		} else {
			dismissProgress();
		}
	}, [turnById]);

	const startTimerAnimation = useCallback(() => {
		settintColor('green');
		isStartAnimation.current = true;
		const duriation = 1000 * 15; //15 sec
		circularProgressRef.current.reAnimate(0, 100, duriation);
	}, []);

	const dismissProgress = () => settintColor('transparent');

	const onAnimationComplete = state => {
		console.log('onAnimationComplete', state);
		if (isStartAnimation.current && state.finished) dismissProgress();
	};

	return (
		<s.Container>
			<AnimatedCircularProgress
				ref={circularProgressRef}
				size={calculateWidth(45)}
				fill={0}
				width={4}
				rotation={0}
				tintColor={tintColor}
				onAnimationComplete={state => onAnimationComplete(state)}
				childrenContainerStyle={{
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				{fiil => <s.ImageContainer source={generalImage.defaultProfile} />}
			</AnimatedCircularProgress>
		</s.Container>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		paddingVertical: 20,
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	circles: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	progress: {
		margin: 10,
	},
});
export default ProfileImage;
