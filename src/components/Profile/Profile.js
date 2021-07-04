import React, { useState, useRef, useEffect } from 'react';
import { Image, Text } from 'react-native';
import { cardsImages } from '../../assets/images';
import s from './styles';
import { RotationGestureHandler } from 'react-native-gesture-handler';
import Chips from '../common/Chips/Chips';

const Profile = ({
	cards = [],
	coords = {},
	isFliped = false,
	profile,
	money = 50,
	playerId = null,
	actionPlayer = null,
	isRoundEnded = false,
}) => {
	const [sumMoney, setSumMoney] = useState(money);
	const [stateAction, setStateAction] = useState({
		isChipVisable: false,
		moneyChip: 0,
	});

	useEffect(() => {
		console.log('actionPlayer ', actionPlayer);
		console.log('revial id', playerId);
		console.log(
			'----------------------------------------------------------------------'
		);

		if (actionPlayer && actionPlayer.playerId === playerId) {
			console.log('is pass the condition');
			setStateAction({
				isChipVisable: true,
				moneyChip: actionPlayer.checkMoney,
			});
			setSumMoney(actionPlayer.money);
		}
	}, [actionPlayer]);

	return (
		<>
			<s.Container
				top={coords.top}
				left={coords.left}
				bottom={coords.bottom}
				right={coords.right}
			>
				{profile}
				{isFliped &&
					cards.map((card, index) => (
						<Image
							key={index}
							resizeMode='contain'
							source={cardsImages[card.name]}
							style={{ width: 50, height: 100 }}
						/>
					))}
				<s.ChipContainer>
					<Chips
						direction='row'
						right={coords.left ? true : false}
						isVisable={stateAction.isChipVisable}
						money={stateAction.moneyChip}
						isRoundEnded={isRoundEnded}
					/>
				</s.ChipContainer>
				<Text style={{ color: 'white', fontSize: 16 }}>{sumMoney}$</Text>
			</s.Container>
		</>
	);
};

export default Profile;
