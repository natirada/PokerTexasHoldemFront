import styled from 'styled-components';

const styles = {};

styles.Container = styled.View`
	flex: 1;
	flex-direction: row;
`;

styles.Btn = styled.TouchableOpacity`
	width: 75px;
	height: 50px;
	align-items: center;
	justify-content: center;
	background-color: gray;
	border-radius: 2px;
	margin: 2px;
`;

styles.Text = styled.Text`
	color: white;
	font-size: 16px;
`;

export default styles;
