import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';
import Button from './Button.js';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';

const description =
	'Light is at the foundation of space design. Alongside architects, interior designers, lighting designers, engineers and dealers, we aim to improve the world through a single aspiration: creating better spaces to live. A fresh, modern take on the traditional captain living and dining spaces.';
const carouselOne = ['slide-1', 'slide-2', 'slide-3'];
const carouselTwo = ['slide-4', 'slide-5', 'slide-6'];
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

const Carousels = () => {
	const [[page, direction], setPage] = useState([0, 0]);

	const carouselOneIndex = wrap(0, carouselOne.length, page);

	const paginate = (newDirection) => {
		setPage([page + newDirection, newDirection]);
	};

	const Carousel = ({ list }) => {
		return (
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
						src={require(`../assets/carousel/${list[carouselOneIndex]}.jpg`)}
						alt={`Lighting fixture photo of slide ${carouselOneIndex}`}
					/>
				</ImagesContainer>
				<PageIndicator list={list} />
			</CaroueslContainer>
		);
	};

	const PageIndicator = ({ list }) => {
		return (
			<IndicatorContainer>
				{list.map((item, index) => (
					<SingleIndicator
						key={index}
						isSelected={index === carouselOneIndex}
					></SingleIndicator>
				))}
			</IndicatorContainer>
		);
	};

	return (
		<Wrapper>
			<Row>
				<Title>Lighting Fixtures</Title>
				<Description>{description}</Description>
				<Button label='Shop Now' />
				<AnimatePresence initial={false} custom={direction}>
					<Carousel list={carouselOne} />
				</AnimatePresence>
			</Row>
			<Row>
				<Title>Light your Way</Title>
				<Description>{description}</Description>
				<Button label='Shop Now' />
				<AnimatePresence initial={false} custom={direction}>
					<Carousel list={carouselTwo} />
				</AnimatePresence>
			</Row>
		</Wrapper>
	);
};

const Wrapper = styled.section``;

const Row = styled.div`
	display: flex;
	flex-direction: column;
	margin: 2em 0;

	button {
		align-self: center;
	}
`;

const Title = styled.h2``;

const Description = styled.p`
	color: ${colors.dark_grey};
`;

const CaroueslContainer = styled.div`
	position: relative;
	flex: 1;
`;

const ImagesContainer = styled.div``;

const MotionImage = styled(motion.img)`
	/* position: relative; */
	border-radius: 4em;
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

export default Carousels;
