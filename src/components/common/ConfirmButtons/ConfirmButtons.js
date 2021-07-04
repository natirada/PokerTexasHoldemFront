import React from 'react';
import s from './styles';

const ConfirmButtons = ({ onCancel = () => {}, onConfirm = () => {} }) => {
	return (
		<s.Container>
			<s.Btn onPress={onConfirm}>
				<s.Text>OK</s.Text>
			</s.Btn>
			<s.Btn onPress={onCancel}>
				<s.Text>CANCEL</s.Text>
			</s.Btn>
		</s.Container>
	);
};

export default ConfirmButtons;
