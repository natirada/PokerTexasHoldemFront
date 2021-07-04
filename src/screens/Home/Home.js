import React, { useEffect, useRef } from 'react';
import { Text, Button } from 'react-native';
import Socket from '../../socket/socket';

import { play } from '../../api/api';
import s from './styles';

const Home = props => {
	const socketRef = useRef(null);
	useEffect(() => {
		socketRef.current = Socket.init();
	}, []);
	const insertToRoom = room => {
		try {
			const payload = { username: 'Nati Rada', room };
			// socketRef.current.emit('joinRoom', payload);
			props.navigation.navigate('Game', { infoRoom: payload });
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<s.Container>
			<s.RoomsContainer>
				<s.RoomContainer onPress={() => insertToRoom(1)}>
					<Text style={{ fontSize: 16 }}>0-100K</Text>
				</s.RoomContainer>
				<s.RoomContainer onPress={() => insertToRoom(2)}>
					<Text style={{ fontSize: 16 }}>100k-500K</Text>
				</s.RoomContainer>
				<s.RoomContainer onPress={() => insertToRoom(3)}>
					<Text style={{ fontSize: 16 }}>500k-1000K</Text>
				</s.RoomContainer>
			</s.RoomsContainer>
			<Text>HOME</Text>
			<Button
				title='START GAME'
				onPress={() => props.navigation.navigate('Game')}
			/>
			<Button title='GO BACK' onPress={() => props.navigation.goBack()} />
		</s.Container>
	);
};

export default Home;
