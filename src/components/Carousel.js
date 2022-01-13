import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';

const variants = {
	enter: (direction) => {
		return {
			zIndex: 0,
			x: direction > 0 ? 200 : -200,
			opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 200 : -200,
			opacity: 0,
		};
	},
};

const Carousel = ({ list }) => {
	const [[page, direction], setPage] = useState([0, 0]);

	const imageIndex = wrap(0, list.length, page);

	const paginate = (newDirection) => {
		setPage([page + newDirection, newDirection]);
	};

	const PageIndicator = () => {
		return (
			<IndicatorContainer>
				{list.map((item, index) => (
					<SingleIndicator
						key={index}
						isSelected={index === imageIndex}
					></SingleIndicator>
				))}
			</IndicatorContainer>
		);
	};

	return (
		<CaroueslContainer>
			<AnimatePresence initial={false} custom={direction}>
				<MotionImage
					key={page}
					variants={variants}
					custom={direction}
					initial='enter'
					animate='center'
					exit='exit'
					src={require(`../assets/carousel/${list[imageIndex]}.jpg`)}
					alt={`Lighting fixture photo of slide ${imageIndex}`}
					transition={{
						x: { type: 'tween' },
					}}
				/>
			</AnimatePresence>
			<PageButton prev={true} onClick={() => paginate(-1)}>
				<IoChevronBack size={24} />
			</PageButton>
			<PageButton next={true} onClick={() => paginate(1)}>
				<IoChevronForward size={24} />
			</PageButton>
			<PageIndicator />
		</CaroueslContainer>
	);
};

const CaroueslContainer = styled.div`
	max-width: 450px;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;

const MotionImage = styled(motion.img)`
	border-radius: 25%;
`;

const PageButton = styled.div`
	top: calc(50% - 20px);
	position: absolute;
	background: lightgrey;
	border-radius: 30px;
	padding: 0.5em;
	opacity: 30%;
	display: flex;
	z-index: 2;
	right: ${({ next }) => (next ? 10 : null)}px;
	left: ${({ prev }) => (prev ? 10 : null)}px;
	cursor: pointer;

	:hover {
		opacity: 60%;
	}
`;

const IndicatorContainer = styled.div`
	position: absolute;
	top: 95%;
	display: flex;
	justify-content: center;
`;

const SingleIndicator = styled.div`
	background-color: ${({ isSelected }) =>
		isSelected ? 'black' : colors.light_grey};
	margin-inline: 0.3em;
	height: 10px;
	width: 10px;
	border-radius: 1em;
	margin-top: -1em;
	z-index: 1;
`;

export default Carousel;
