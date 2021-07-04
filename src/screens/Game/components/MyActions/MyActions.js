import React, { useState } from 'react';
import ActionsButtons from '../../../../components/common/ActionsButtons/ActionsButtons';
import s from './styles';
import Slider from '../../../../components/common/Slider/Slider';
import ConfirmButtons from '../../../../components/common/ConfirmButtons/ConfirmButtons';

const MyActions = ({ onPressFold, onPressRise, onPressCheck }) => {
	const [isRise, setisRise] = useState(false);
	const [sliderValue, setsliderValue] = useState(0);

	const onConfirm = () => {
		onPressRise(sliderValue);
	};

	const onValueChange = value => setsliderValue(Math.floor(value));
	const onCancel = () => {
		setisRise(false);
		setsliderValue(0);
	};

	return (
		<>
			{isRise && (
				<s.SliderContainer>
					<s.Text>{sliderValue}$</s.Text>
					<Slider onValueChange={onValueChange} />
				</s.SliderContainer>
			)}
			{isRise ? (
				<s.ConfirmButtonsontainer>
					<ConfirmButtons onCancel={onCancel} onConfirm={onConfirm} />
				</s.ConfirmButtonsontainer>
			) : (
				<s.ActionsButtonsContainer>
					<ActionsButtons
						onPressFold={onPressFold}
						onPressRise={() => setisRise(true)}
						onPressCheck={onPressCheck}
					/>
				</s.ActionsButtonsContainer>
			)}
		</>
	);
};

export default MyActions;
