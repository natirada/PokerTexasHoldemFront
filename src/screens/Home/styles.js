import styled from 'styled-components';
import theme, { calculateWidth, calculateHeight } from '../../themes/theme';

const styles = {};

styles.Container = styled.View`
	flex: 1;
	width: 100%;
	justify-content: center;
	align-items: center;
	background-color: red;
`;
styles.RoomsContainer = styled.View`
width: 75%
	align-items: center;
	flex-direction: row;
	justify-content: space-around;
`;
styles.RoomContainer = styled.TouchableOpacity`
	width: ${calculateWidth(45)}px;
	aspect-ratio: 1;
	border-radius: 8px
	background-color: white;
	align-items: center;
	justify-content: center;
`;

export default styles;
