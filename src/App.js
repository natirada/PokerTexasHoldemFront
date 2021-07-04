import React, { useEffect } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	Image,
} from 'react-native';
import Orientation from 'react-native-orientation';
import MainStack from './navigation';

const App = () => {
	useEffect(() => {
		Orientation.lockToLandscape();
	}, []);
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
