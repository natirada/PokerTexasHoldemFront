import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// components
import Login from '../screens/Login/Login';
import Game from '../screens/Game/Game';

const Stack = createStackNavigator();
const config = {
	animation: 'timing',
};

const MainStack = ({ isConnect = false }) => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					gestureEnabled: false,

					transitionSpec: {
						open: config,
						close: config,
					},
				}}
			>
				{isConnect ? (
					<Stack.Screen name='Game' component={Game} />
				) : (
					<>
						<Stack.Screen name='Login' component={Login} />
						<Stack.Screen name='Game' component={Game} />
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainStack;
