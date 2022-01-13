import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';
import Button from './Button.js';
import Carousel from './Carousel.js';

const description =
	'Light is at the foundation of space design. Alongside architects, interior designers, lighting designers, engineers and dealers, we aim to improve the world through a single aspiration: creating better spaces to live. A fresh, modern take on the traditional captain living and dining spaces.';
const carouselOne = ['slide-1', 'slide-2', 'slide-3'];
const carouselTwo = ['slide-4', 'slide-5', 'slide-6'];

const Carousels = () => {
	return (
		<Wrapper>
			<Row reverse={false}>
				<RowContent>
					<Title>Lighting Fixtures</Title>
					<Description>{description}</Description>
					<Button label='Shop Now' />
				</RowContent>
				<Carousel list={carouselOne} />
			</Row>
			<Row reverse={true}>
				<RowContent>
					<Title>Light your Way</Title>
					<Description>{description}</Description>
					<Button label='Shop Now' />
				</RowContent>
				<Carousel list={carouselTwo} />
			</Row>
		</Wrapper>
	);
};

const Wrapper = styled.section``;

const Row = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 2em 0;
	justify-content: space-between;

	button {
		align-self: center;
	}

	@media (min-width: 1024px) {
		flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
	}
`;

const RowContent = styled.div`
	flex: 0.8;

	@media (min-width: 900px) {
		padding: 0 2em;
	}
`;

const Title = styled.h2`
	/* Major Second -> Perfect Fourth */
	font-size: clamp(1.802rem, 1.0888rem + 3.5659vw, 4.209rem);
`;

const Description = styled.p`
	color: ${colors.dark_grey};
`;

export default Carousels;
