import styled from 'styled-components';

import theme, { calculateHeight, calculateWidth } from '../../themes/theme';
import { Platform } from 'react-native';

const styles = {};

styles.Container = styled.View`
	flex-direction: row;
	width:${calculateWidth(30)}}px;
	height: 50px
	border: 2px solid black;
	background-color: white;
	position: absolute;
`;

export default styles;
