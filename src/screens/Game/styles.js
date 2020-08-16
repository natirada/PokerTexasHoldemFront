import styled from 'styled-components';
import theme from '../../themes/theme';

const styles = {};

styles.Container = styled.View`
	flex: 1;
	width: 100%;
`;

styles.ProfileContainer = styled.View`
	border: 2px solid black;
	width: 40%;
`;

styles.CurrentProfileContainer = styled.View`
	position: absolute;
	bottom: ${theme.SH * 0.1}px;
	width: 100%;
	align-items: center;
	border: 1px solid green;
`;

styles.FlupContainer = styled.View`
	flex-direction: row;
	position: absolute;
	width: ${theme.SW * 0.75};
	top: ${theme.SW * 0.3};
	align-self: center;
	justify-content: space-around;
	border: 1px solid green;
`;
styles.View = styled.View`
	width: 55px;
`;
// width: 100%;
// border: 1px solid green;
// position: absolute;
// top: 50%;

export default styles;
