import React, { useRef, useEffect, useState } from 'react';
import { Animated, Text, View } from 'react-native';
import theme from '../../../themes/theme';
import { deviceWidth, deviceHeight } from '../../../utilis/dimensions';
const getY = (direction, isUp) => {
	let y = direction === 'column' ? theme.SH * 0.07 : 0;
	if (isUp) y *= -2.5;
	return y;
};

const getX = (direction, isRight) => {
	let x = direction === 'row' ? theme.SH * 0.18 * -1 : 0;
	if (isRight) x *= -1;
	return x;
};

const Animation = ({
	isVisable = false,
	children,
	isRoundEnded = false,
	direction,
	style = {},
	left = false,
	up = false,
	right = false,
	down = false,
}) => {
	const animated = useRef(new Animated.ValueXY()).current; // Initial value for opacity: 0

	const [opacity, setOpacity] = useState(0);
	const ref = useRef(null);
	useEffect(() => {
		if (isVisable) {
			startAnim();
			setOpacity(1);
		} else {
			setOpacity(0);
			removeAnimation();
		}
	}, [isVisable]);

	useEffect(() => {
		isRoundEnded && moveToDiler();
	}, [isRoundEnded]);

	const startAnim = () => {
		const x = getX(direction, right);
		const y = getY(direction, up);
		Animated.timing(animated, {
			toValue: { x, y },
			duration: 500,
			useNativeDriver: true,
		}).start();
	};

	const removeAnimation = () => {
		Animated.timing(animated, {
			toValue: { x: 0, y: 0 },
			useNativeDriver: true,
		}).start();
	};

	const moveToDiler = () => {
		ref.current.measure((x, y, width, height, pageX, pageY) => {
			console.log('measure', x, y, width, height, pageX, pageY);
			setTimeout(() => {
				const targetX = deviceWidth / 2;
				const targetY = deviceHeight / 4;
				const x = Math.floor(targetX - pageX);
				const y = Math.floor(targetY - pageY);
				console.log('x', x);
				console.log('y', y);
				Animated.timing(animated, {
					toValue: {
						x,
						y,
					},
					useNativeDriver: true,
				}).start(() => {
					//setOpacity(0);
					Animated.timing(animated, {
						toValue: {
							x: 0,
							y: 0,
						},
						useNativeDriver: true,
					}).start();
				});
			}, 500);
		});

		// Animated.spring(animated, {
		// 	toValue: { x, y },
		// 	duration: 1000,
		// 	useNativeDriver: true,
		// }).start();
		console.warn('moveToDiler');
	};

	return (
		<View ref={ref}>
			<Animated.View // Special animatable View
				style={{
					...style,
					opacity, // Bind opacity to animated value
					transform: [
						{
							translateY: animated.y,
						},
						{
							translateX: animated.x,
						},
					],
				}}
			>
				{children}
			</Animated.View>
		</View>
	);
};

export default Animation;
