import React from 'react';
import s from './styles';

const ActionsButtons = ({ onPressFold, onPressRise, onPressCheck }) => {
	return (
		<s.Container>
			<s.Btn onPress={onPressFold}>
				<s.Text>FOLD</s.Text>
			</s.Btn>
			<s.Btn onPress={onPressRise}>
				<s.Text>RISE</s.Text>
			</s.Btn>
			<s.Btn onPress={onPressCheck}>
				<s.Text>CHECK</s.Text>
			</s.Btn>
		</s.Container>
	);
};

export default ActionsButtons;
