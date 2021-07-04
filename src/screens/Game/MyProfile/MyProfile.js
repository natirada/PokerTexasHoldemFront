import React, { useState, useEffect } from 'react';
import { Image, Text } from 'react-native';
import ProfileImage from '../../../components/common/ProfileImage/ProfileImage';
import s from './styles';
import { cardsImages } from '../../../assets/images';
import Chips from '../../../components/common/Chips/Chips';

const MyProfile = ({
	id,
	turnById,
	setTurnId,
	cards = [],
	actionPlayer,
	money = 100,
	isRoundEnded = false,
}) => {
	const [sumMoney, setSumMoney] = useState(money);
	const [stateAction, setStateAction] = useState({
		isChipVisable: false,
		moneyChip: 0,
	});

	useEffect(() => {
		console.log('my id ', id);
		console.log('actionPlayer ', actionPlayer);
		console.log(
			'-----------------------------------------------------------------'
		);

		if (actionPlayer && actionPlayer.playerId === id) {
			setStateAction({
				isChipVisable: true,
				moneyChip: actionPlayer.checkMoney,
			});
			setSumMoney(actionPlayer.money);
		}
	}, [actionPlayer]);

	return (
		<s.View>
			<s.Container>
				<ProfileImage id={id} turnById={turnById} setTurnId={setTurnId} />
				{cards.map((card, index) => (
					<Image
						key={index}
						resizeMode='contain'
						source={cardsImages[card.name]}
						style={{ width: 50, height: 100 }}
					/>
				))}
				<s.ChipContainer>
					<Chips
						isVisable={stateAction.isChipVisable}
						money={stateAction.moneyChip}
						direction='column'
						up={true}
						isRoundEnded={isRoundEnded}
					/>
				</s.ChipContainer>
			</s.Container>
			<Text style={{ color: 'white', fontSize: 16 }}>{sumMoney}$</Text>
		</s.View>
	);
};

export default MyProfile;
