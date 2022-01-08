import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';
import Button from './Button.js';

const description =
	'Light is at the foundation of space design. Alongside architects, interior designers, lighting designers, engineers and dealers, we aim to improve the world through a single aspiration: creating better spaces to live. A fresh, modern take on the traditional captain living and dining spaces.';

const Carousels = () => {
	return (
		<Wrapper>
			<Row>
				<Title>Lighting Fixtures</Title>
				<Description>{description}</Description>
				<Button label='Shop Now' />
				<CaroueslContainer></CaroueslContainer>
			</Row>
		</Wrapper>
	);
};

const Wrapper = styled.section``;

const Row = styled.div``;

const Title = styled.h2``;

const Description = styled.p`
	color: ${colors.dark_grey};
`;

const CaroueslContainer = styled.div``;

export default Carousels;
