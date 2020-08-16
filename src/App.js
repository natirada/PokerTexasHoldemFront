import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	Image,
} from 'react-native';
import Game from './screens/Game/Game';
import Login from './screens/Login/Login';
import MainStack from './navigation';

const App = () => {
	return (
		<>
			<StatusBar barStyle='dark-content' />
			<View style={{ flex: 1 }}>
				<MainStack />
			</View>
			<SafeAreaView></SafeAreaView>
		</>
	);
};

export default App;
