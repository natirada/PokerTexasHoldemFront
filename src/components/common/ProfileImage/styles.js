import styled from 'styled-components';
import { calculateWidth } from '../../../themes/theme';
const styles = {};

styles.Container = styled.View``;
styles.ImageContainer = styled.Image`
	background-color: white;
	border-radius: ${calculateWidth(40) / 2}px;
	width: ${calculateWidth(40)}px;
	height: ${calculateWidth(40)}px;
`;

export default styles;
