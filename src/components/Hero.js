import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';
import MLightSrc from '../assets/hero/light-1.png';
import LLightSrc from '../assets/hero/light-2.png';
import RLightSrc from '../assets/hero/light-3.png';
import Button from './Button.js';

const Hero = () => {
	return (
		<Wrapper>
			<TopWrapper>
				<TitleWrapper>
					<Title>Light</Title>
					<Title>House</Title>
				</TitleWrapper>
				<MiddleLight
					src={MLightSrc}
					alt='Photo of pink and green hanging light.'
				/>
			</TopWrapper>
			<BottomWrapper>
				<LeftLight src={LLightSrc} alt='Photo of grey hanging light.' />
				<ContentWrapper>
					<Desccription>
						Light is at the foundation of space design. Lighthouse is a
						versatile piece suited to both living and dining spaces. Durable and
						easy to maintain, with a molded plastic seat and solid beech wood
						legs, Kaptain will see you through the years. Kaptain comes in a
						range of colours suited to any home.
					</Desccription>
					<Button label='Shop Now' />
				</ContentWrapper>
				<RightLight
					src={RLightSrc}
					alt='Photo of grenn and pink chandilier type hanging light.'
				/>
			</BottomWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.section`
padding-top: 0;
`;

const TopWrapper = styled.div``;

const BottomWrapper = styled.div``;

const TitleWrapper = styled.div`
	display: flex;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	margin: 3em 0;
`;

const Title = styled.h1`
	margin-inline: 4vw;
`;

const ContentWrapper = styled.div`
	text-align: center;
`;

const Desccription = styled.p`
	color: ${colors.dark_grey};
`;

const MiddleLight = styled.img``;

const LeftLight = styled.img`
	display: none;

	@media only screen and (min-width: 900px) {
		display: block;
	}
`;

const RightLight = styled.img`
	display: none;

	@media only screen and (min-width: 900px) {
		display: block;
	}
`;

export default Hero;
