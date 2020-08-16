import React, { useState, useEffect } from 'react';
import { ImageBackground, View, Text, Image, Button } from 'react-native';
import Profile from '../../components/Profile/Profile';
import s from './styles';
import card from '../../assets/images/cards/2C.png';
import { test, images } from '../../assets/images';
import backCard from '../../assets/images/cards/gray_back.png';
import FlipCard from 'react-native-flip-card';

const Game = props => {
	const [firstFlip, setFirstFlip] = useState(false);
	const [seconedFlip, setSeconedFlip] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setFirstFlip(true);
		}, 2000);

		setTimeout(() => {
			setSeconedFlip(true);
		}, 5000);
	}, []);
	return (
		<ImageBackground
			resizeMethod='resize'
			style={{ width: '100%', height: '100%' }}
			source={{
				uri:
					'https://img.zcool.cn/community/0157f85aa7e623a801206d96b83526.jpg@1280w_1l_2o_100sh.jpg',
			}}
		>
			<s.Container>
				<s.FlupContainer>
					<FlipCard
						friction={6}
						perspective={0}
						flipHorizontal={true}
						flipVertical={false}
						flip={firstFlip}
						clickable={false}
						useNativeDriver={true}
						onFlipEnd={isFlipEnd => {
							console.log('isFlipEnd', isFlipEnd);
						}}
						alignHeight={true}
						alignWidth={false}
					>
						{/* Face Side */}
						<s.View>
							<Image
								resizeMode='contain'
								source={backCard}
								style={{ width: 50, height: 100 }}
							/>
						</s.View>
						{/* Back Side */}
						<s.View>
							<Image
								resizeMode='contain'
								source={images['10C']}
								style={{ width: 50, height: 100 }}
							/>
						</s.View>
					</FlipCard>
					<FlipCard
						friction={6}
						perspective={0}
						flipHorizontal={true}
						flipVertical={false}
						flip={firstFlip}
						clickable={false}
						useNativeDriver={true}
						onFlipEnd={isFlipEnd => {
							console.log('isFlipEnd', isFlipEnd);
						}}
						alignHeight={true}
						alignWidth={false}
					>
						{/* Face Side */}
						<s.View>
							<Image
								resizeMode='contain'
								source={backCard}
								style={{ width: 50, height: 100 }}
							/>
						</s.View>
						{/* Back Side */}
						<s.View>
							<Image
								resizeMode='contain'
								source={card}
								style={{ width: 50, height: 100 }}
							/>
						</s.View>
					</FlipCard>
					<FlipCard
						friction={6}
						perspective={0}
						flipHorizontal={true}
						flipVertical={false}
						flip={firstFlip}
						clickable={false}
						useNativeDriver={true}
						onFlipEnd={isFlipEnd => {
							console.log('isFlipEnd', isFlipEnd);
						}}
						alignHeight={true}
						alignWidth={false}
					>
						{/* Face Side */}
						<s.View>
							<Image
								resizeMode='contain'
								source={backCard}
								style={{ width: 50, height: 100 }}
							/>
						</s.View>
						{/* Back Side */}
						<s.View>
							<Image
								resizeMode='contain'
								source={card}
								style={{ width: 50, height: 100 }}
							/>
						</s.View>
					</FlipCard>
					<FlipCard
						friction={6}
						perspective={0}
						flipHorizontal={true}
						flipVertical={false}
						flip={seconedFlip}
						clickable={false}
						useNativeDriver={true}
						onFlipEnd={isFlipEnd => {
							console.log('isFlipEnd', isFlipEnd);
						}}
						alignHeight={true}
						alignWidth={false}
					>
						{/* Face Side */}
						<s.View>
							<Image
								resizeMode='contain'
								source={backCard}
								style={{ width: 50, height: 100 }}
							/>
						</s.View>
						{/* Back Side */}
						<s.View>
							<Image
								resizeMode='contain'
								source={card}
								style={{ width: 50, height: 100 }}
							/>
						</s.View>
					</FlipCard>
					<FlipCard
						friction={6}
						perspective={0}
						flipHorizontal={true}
						flipVertical={false}
						flip={seconedFlip}
						clickable={false}
						useNativeDriver={true}
						onFlipEnd={isFlipEnd => {
							console.log('isFlipEnd', isFlipEnd);
						}}
						alignHeight={true}
						alignWidth={false}
					>
						{/* Face Side */}
						<s.View>
							<Image
								resizeMode='contain'
								source={backCard}
								style={{ width: 50, height: 100 }}
							/>
						</s.View>
						{/* Back Side */}
						<s.View>
							<Image
								resizeMode='contain'
								source={card}
								style={{ width: 50, height: 100 }}
							/>
						</s.View>
					</FlipCard>
				</s.FlupContainer>
				<s.CurrentProfileContainer>
					<Profile />
				</s.CurrentProfileContainer>
				<Button
					title='FLIP CARD'
					onPress={() => setFlip1(preState => !preState)}
				/>
			</s.Container>
		</ImageBackground>
	);
};

export default Game;
