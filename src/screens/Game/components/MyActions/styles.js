import styled from 'styled-components';
import { calcWidth, calcHeight } from '../../../../utilis/dimensions';

const styles = {};

styles.Container = styled.View``;

styles.ActionsButtonsContainer = styled.View`
	align-self: center;
	justify-content: center;
	position: absolute;
	bottom: 10px;
	left: 0;
`;

styles.ConfirmButtonsontainer = styled.View`
	align-self: center;
	justify-content: center;
	position: absolute;
	bottom: 10px;
	right: 0;
`;

styles.SliderContainer = styled.View`
	left: ${calcWidth(210)}px;
	position: absolute;
	width: ${calcWidth(60)}px;
	height: ${calcHeight(180)}px;
	justify-content: space-between;
	align-items: center;
	bottom: 50px;
`;

styles.Text = styled.Text`
	color: white;
	font-size: 18px;
`;

export default styles;
