import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
	ImageBackground,
	View,
	Text,
	Image,
	Button,
	SafeAreaView,
	Platform,
} from 'react-native';
import openSicket from 'socket.io-client';
import Profile from '../../components/Profile/Profile';
import s from './styles';
import FlipCard from '../../components/common/FlipCard/FlipCard';
import { testApi } from '../../api/api';
import { postions } from './constans';
import theme from '../../themes/theme';
import ProfileImage from '../../components/common/ProfileImage/ProfileImage';
import MyProfile from './MyProfile/MyProfile';
import { generalImage } from '../../assets/images';
import Socket from '../../socket/socket';
import ActionsButtons from '../../components/common/ActionsButtons/ActionsButtons';
import { getID } from '../../utilis/uniqueId';
import Chips from '../../components/common/Chips/Chips';
import Slider from '../../components/common/Slider/Slider';
import MyActions from './components/MyActions/MyActions';

const Game = props => {
	const [flopState, setFlopState] = useState({
		firstFlip: false,
		seconedFlip: false,
		thirdFlip: false,
	});
	const [turnId, setTurnId] = useState(-1);
	const [myTurn, setMyTurn] = useState(false);
	const [actionPlayer, setActionPlayer] = useState({
		playerId: null,
		money: null,
		checkMoney: null,
	});
	const [arrFloop, setArrFloop] = useState([]);
	const [rivalPlayers, setRivalPlayers] = useState([]);
	const [myCards, setMyCards] = useState([]);
	const [isRoundEnded, setIsRoundEnded] = useState(false);
	const socketRef = useRef(null);
	const playerId = useRef(getID());

	useEffect(() => {
		socketRef.current = Socket.getIO();
		const payload = props.route.params.infoRoom;
		payload.playerId = playerId.current;

		socketRef.current.on('play', data => {
			console.log('data', data);
		});
		socketRef.current.on('playerAction', data => {
			console.log('---->> playerAction', data);

			setActionPlayer({ ...data });
		});

		socketRef.current.on('roomUsers', data => {
			console.log(' roomUsers data', data);
			setArrFloop(data.flop);
			//const payload = data.players.map(el => el.cards);
			setRivalPlayers(data.players);

			const mycards = data.players.find(
				player => player.id === playerId.current
			).cards;
			console.log();
			if (mycards) setMyCards(mycards);
			const winner = data.players.reduce((acc, curr) => {
				return acc.score > curr.score ? acc : curr;
			});
		});

		socketRef.current.on('turn', playerTurn => {
			setIsRoundEnded(false);

			setTurnId(playerTurn.playerIdTurn);
			if (playerTurn.playerIdTurn === playerId.current) {
				setMyTurn(true);
			} else {
				setMyTurn(false);
			}
		});

		socketRef.current.on('roundEnded', data => {
			roundEnded(data);
		});

		socketRef.current.emit('joinRoom', payload);
	}, []);

	const roundEnded = data => {
		console.log('roundEnded', data);
		setIsRoundEnded(true);
		flipNextCards();
	};

	const flipNextCards = () => {
		setFlopState(preState => {
			const key = Object.keys(preState).find(key => !preState[key]);
			if (!key) return preState;
			const newState = { ...preState };
			newState[key] = true;
			return newState;
		});
		// const currFlopState = { ...flopState };
		// const sectionFlip = Object.keys(currFlopState).find(
		// 	el => !currFlopState[el]
		// );

		// console.log('currFlopState', currFlopState);
		// console.log('sectionFlip', sectionFlip);

		// if (sectionFlip) {
		// 	currFlopState[sectionFlip] = true;
		// 	setFlopState({ ...currFlopState });
		// 	console.log('setFlopState', flopState);
		// }
	};

	const getCurrentControlFlop = index => {
		console.log('index', index);

		if (index < 3) return flopState.firstFlip;
		else if (index === 3) flopState.seconedFlip;
		else if (index === 4) flopState.thirdFlip;
	};

	const onPressFold = () => {};

	const onPressRise = (raise = 0) => {
		console.log(' the player rise with =', raise);
		const payload = {
			playerId: playerId.current,
			action: 'RASIE',
			raise,
		};
		socketRef.current.emit('play', payload);
	};

	const onPressCheck = () => {
		const payload = {
			playerId: playerId.current,
			action: 'CHEEK',
		};
		socketRef.current.emit('play', payload);
	};

	const exitRoom = () => {
		socketRef.current.emit('exitRoom');
		props.navigation.goBack();
	};

	const startGame = async () => {
		socketRef.current.emit('play', `message from room number:`);
		//	const res = await testApi();
	};

	const flipStustus = useMemo(() => {
		const { firstFlip, seconedFlip, thirdFlip } = flopState;
		return [firstFlip, firstFlip, firstFlip, seconedFlip, thirdFlip];
	}, [flopState]);

	return (
		<ImageBackground
			resizeMethod='resize'
			style={{ width: '100%', height: '100%' }}
			source={generalImage.pokerDesk}
		>
			<s.Container>
				<s.Btn onPress={exitRoom}>
					<s.Image source={generalImage.exit} />
				</s.Btn>
				<s.IntialChipConatiner>
					<Chips money={250} />
				</s.IntialChipConatiner>
				<s.FlupContainer>
					{arrFloop.map((card, index) => (
						<FlipCard
							key={index}
							cardName={card.name}
							flip={flipStustus[index]}
						/>
					))}
				</s.FlupContainer>
				{rivalPlayers.map(
					(rivalPlayer, index) =>
						rivalPlayer.id !== playerId.current && (
							<Profile
								key={index}
								cards={rivalPlayer.cards}
								coords={postions[index]}
								isRoundEnded={isRoundEnded}
								actionPlayer={actionPlayer}
								playerId={rivalPlayer.id}
								profile={
									<ProfileImage
										id={rivalPlayer.id}
										turnById={turnId}
										setTurnId={setTurnId}
									/>
								}
							/>
						)
				)}
				<s.MyProfileContainer>
					<MyProfile
						id={playerId.current}
						turnById={turnId}
						setTurnId={setTurnId}
						cards={myCards}
						actionPlayer={actionPlayer}
						isRoundEnded={isRoundEnded}
					/>
				</s.MyProfileContainer>
				{myTurn && (
					<MyActions
						onPressFold={onPressFold}
						onPressRise={onPressRise}
						onPressCheck={onPressCheck}
					/>
				)}
			</s.Container>
		</ImageBackground>
	);
};

export default Game;
