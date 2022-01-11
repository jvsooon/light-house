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
	const carouselIndex = wrap(0, list.length, page);

	const paginate = (newDirection) => {
		setPage([page + newDirection, newDirection]);
	};

	const PageIndicator = () => {
		return (
			<IndicatorContainer>
				{list.map((item, index) => (
					<SingleIndicator
						key={index}
						isSelected={index === carouselIndex}
					></SingleIndicator>
				))}
			</IndicatorContainer>
		);
	};

	return (
		<AnimatePresence initial={false} custom={direction}>
			<CaroueslContainer>
				<ButtonContainer>
					<PageButton onClick={() => paginate(-1)}>
						<IoChevronBack size={24} />
					</PageButton>
					<PageButton onClick={() => paginate(1)}>
						<IoChevronForward size={24} />
					</PageButton>
				</ButtonContainer>
				<ImagesContainer>
					<MotionImage
						key={page}
						variants={variants}
						initial='enter'
						animate='center'
						exit='exit'
						src={require(`../assets/carousel/${list[carouselIndex]}.jpg`)}
						alt={`Lighting fixture photo of slide ${carouselIndex}`}
					/>
				</ImagesContainer>
				<PageIndicator />
			</CaroueslContainer>
		</AnimatePresence>
	);
};

const CaroueslContainer = styled.div`
	position: relative;
	margin: 1em 0;
	max-width: 400px;
`;

const ImagesContainer = styled.div``;

const MotionImage = styled(motion.img)`
	/* position: relative; */
	border-radius: 25%;
	width: 100%;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	padding-inline: 0.5em;
	z-index: 1;
`;

const PageButton = styled.div`
	background: lightgrey;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5em;
	border-radius: 2em;
	opacity: 30%;
	transition: all 0.3s ease-in-out;

	:hover {
		opacity: 50%;
	}
`;

const IndicatorContainer = styled.div`
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
