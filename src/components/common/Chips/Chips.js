import React from 'react';
import styles from './styles';
import { generalImage } from '../../../assets/images';
import Animation from '../Animated/Animated';

const Chips = ({
	isVisable = false,
	money = 50,
	direction = 'column',
	left = false,
	up = false,
	down = false,
	right = false,
	isRoundEnded = false,
}) => {
	return (
		<Animation
			direction={direction}
			left={left}
			up={up}
			down={down}
			right={right}
			isVisable={isVisable}
			isRoundEnded={isRoundEnded}
		>
			<styles.Container>
				<styles.Image resizeMethod='resize' source={generalImage.chip} />
				<styles.Text>{money}$</styles.Text>
			</styles.Container>
		</Animation>
	);
};

export default Chips;
