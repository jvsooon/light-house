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
					<Description>
						Light is at the foundation of space design. Lighthouse is a
						versatile piece suited to both living and dining spaces. Durable and
						easy to maintain, with a molded plastic seat and solid beech wood
						legs, Kaptain will see you through the years. Kaptain comes in a
						range of colours suited to any home.
					</Description>
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

const TopWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const BottomWrapper = styled.div`
	@media (min-width: 768px) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
`;

const TitleWrapper = styled.div`
	display: flex;
	position: absolute;
	justify-content: space-around;
	width: 50;
	/* border: 1px solid red; */
	/* left: 50%; */
	/* transform: translateX(-50%); */
	margin: 9vh 0;
`;

const Title = styled.h1`
	margin-inline: 7vw;
`;

const ContentWrapper = styled.div`
	text-align: center;
	margin: 2em 0;

	@media (min-width: 1200px) {
		position: absolute;
		padding-inline: 29vw;
		/* margin: 2em 19em; */
		left: 0;
	}
`;

const Description = styled.p`
	color: ${colors.dark_grey};
`;

const MiddleLight = styled.img`
	/* border: 1px solid red; */
	width: 100%;
	max-width: 500px;
`;

const LeftLight = styled.img`
	display: none;
	/* border: 1px solid red; */

	@media (min-width: 1200px) {
		display: block;
		max-width: 400px;
		margin-left: -2em;
		margin-top: -16em;
	}
`;

const RightLight = styled.img`
	display: none;
	/* border: 1px solid red; */

	@media (min-width: 1200px) {
		display: block;
		max-width: 150px;
		margin-top: -12em;
		height: 100%;
	}
`;

export default Hero;
