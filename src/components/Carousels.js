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

	return (
		<Wrapper>
			<Row>
				{/* <Title>Lighting Fixtures</Title>
				<Description>{description}</Description>
				<Button label='Shop Now' /> */}
				<CaroueslContainer>
					<ButtonContainer>
						<PageButton onClick={() => paginate(-1)}>
							<IoChevronBack size={24} />
						</PageButton>
						<PageButton onClick={() => paginate(1)}>
							<IoChevronForward size={24} />
						</PageButton>
					</ButtonContainer>
					<AnimatePresence initial={false} custom={direction}>
						<ImagesContainer>
							<MotionImage
								key={page}
								variants={variants}
								initial='enter'
								animate='center'
								exit='exit'
								src={require(`../assets/carousel/${carouselOne[carouselOneIndex]}.jpg`)}
							/>
						</ImagesContainer>
					</AnimatePresence>
				</CaroueslContainer>
			</Row>
		</Wrapper>
	);
};

const Wrapper = styled.section``;

const Row = styled.div`
	display: flex;
	flex-direction: column;

	button {
		align-self: center;
	}
	border: 1px solid red;
`;

const Title = styled.h2``;

const Description = styled.p`
	color: ${colors.dark_grey};
`;

const CaroueslContainer = styled.div`
	position: relative;
	flex: 1;
`;

const ImagesContainer = styled.div`
	/* min-height: calc(20em - 10vw); */
	/* min-width: calc(20em - 10vw); */
	/* min-width: 400; */
	border: 1px solid red;
`;

const MotionImage = styled(motion.img)`
	position: absolute;
	border-radius: 4em;
	/* max-width: 400px; */
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	/* margin-top: 20vh; */
	/* position: relative; */
	z-index: 1;
	border: 1px solid red;
`;

const PageButton = styled.div`
	background: lightgrey;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5em;
	border-radius: 2em;
`;

export default Carousels;
