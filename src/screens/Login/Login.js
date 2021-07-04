import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { login, testApi } from '../../api/api';
const Login = props => {
	const onLogin = async () => {
		try {
			const payload = { username: 'nati@gmail.com', password: 1234567 };
			const res = await login(payload);

			console.log('res', res);
		} catch (error) {
			console.log('error', error);
		}
	};

	const test = async () => {
		try {
			const res = await testApi();

			console.log('res', res);
		} catch (error) {
			console.log('error', error);
		}
	};

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Login</Text>
			<Button
				title='Click To Login'
				onPress={() => props.navigation.navigate('Home')}
			/>
			<Button
				title='START GAME!!'
				onPress={() => props.navigation.navigate('Game')}
			/>
		</View>
	);
};

export default Login;
