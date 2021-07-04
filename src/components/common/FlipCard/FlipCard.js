import React from 'react';
import { Image } from 'react-native';
import FlipCardRN from 'react-native-flip-card';
import { test, cardsImages } from '../../../assets/images';
import backCard from '../../../assets/images/cards/gray_back.png';
import s from './styles';

const FlipCard = ({ flip, cardName }) => {
	return (
		<s.Container>
			<FlipCardRN
				flipHorizontal={true}
				flipVertical={false}
				flip={flip}
				clickable={true}
				useNativeDriver={false}
				onFlipEnd={isFlipEnd => {
					console.log('isFlipEnd', isFlipEnd);
				}}
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
						source={cardsImages[cardName]}
						style={{ width: 50, height: 100 }}
					/>
				</s.View>
			</FlipCardRN>
		</s.Container>
	);
};

export default FlipCard;
