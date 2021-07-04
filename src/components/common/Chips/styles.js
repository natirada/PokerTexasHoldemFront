import styled from 'styled-components';
import { calculateHeight, calculateWidth } from '../../../themes/theme';

const styles = {};

styles.Container = styled.View`
	flex-direction: row;
	align-items: center;
`;
styles.Image = styled.Image`
	width: ${calculateHeight(45)}px;
	height: ${calculateHeight(45)}px;
`;

styles.Text = styled.Text`
	color: white;
`;

export default styles;
