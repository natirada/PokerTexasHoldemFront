import styled from 'styled-components';
import theme, { calculateHeight, calculateWidth } from '../../themes/theme';
import { calcWidth } from '../../utilis/dimensions';

const styles = {};

styles.Container = styled.View`
	flex: 1;
	width: 100%;
	height: 100%;
`;

styles.ProfileContainer = styled.View`
	border: 2px solid black;
	width: 40%;
`;

styles.CurrentProfileContainer = styled.View`
	width: 100%;
	align-items: center;
	justify-content: flex-end;
	border: 1px solid green;
	align-self: flex-end;
`;

styles.FlupContainer = styled.View`
	flex-direction: row;
	position: absolute;
	width: 60%;
	top: 30%;
	align-self: center;
	justify-content: space-around;
`;
styles.View = styled.View`
	width: 55px;
`;

styles.BtnContainer = styled.View`
	flex-direction: row;
`;

styles.MyProfileContainer = styled.View`
	align-self: center;
	position: absolute;
	bottom: 10px;
`;

styles.SliderContainer = styled.View`
	left: ${calcWidth(220)}px;
	position: absolute;
	bottom: 50px;
`;

styles.ActionsButtonsontainer = styled.View`
	align-self: center;
	position: absolute;
	bottom: 10px;
	left: 0;
`;

styles.Image = styled.Image`
	width: 40px;
	height: 40px;
`;
styles.Btn = styled.TouchableOpacity`
	align-self: flex-end;
	position: absolute;
	top: 5px;
	right: 5px;
	z-index: 99;
`;

styles.IntialChipConatiner = styled.View`
	position: absolute;
	top: ${calculateHeight(100)}px;
	left: ${calculateWidth(170)}px;
`;

// width: 100%;
// border: 1px solid green;
// position: absolute;
// top: 50%;

export default styles;
