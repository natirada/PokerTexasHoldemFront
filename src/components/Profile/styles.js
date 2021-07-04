import styled from 'styled-components';

import theme, { calculateHeight, calculateWidth } from '../../themes/theme';
import { Platform } from 'react-native';

const styles = {};

const isIOS = Platform.OS === 'ios';
const yLength = theme.SH;
const xLength = theme.SW;

styles.Container = styled.View`
	flex-direction: column;
	position: absolute;
	justify-content: center;
	align-content: center;
	align-items: center;
	${({ top }) => `top: ${top * yLength}px;`}
	${({ left }) => (left ? `left: ${left * xLength}px;` : null)}
	${({ right }) => (right ? `right: ${right * xLength}px;` : null)}
	${({ bottom }) => (bottom ? `right: ${bottom * yLength}px;` : null)}
`;

styles.FooterContainer = styled.View`
	border: 2px solid black;
	width: 40%;
`;

styles.ChipContainer = styled.View`
	align-self: center;
	justify-content: center;
	align-content: center;
	align-items: center;
	position: absolute;
`;

export default styles;
