import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';
import MLightSrc from '../assets/hero/light-1.png';
import LLightSrc from '../assets/hero/light-2.png';
import RLightSrc from '../assets/hero/light-3.png';
import Button from './Button.js';
import Pattern from '../assets/hero/pattern.svg';

const Hero = () => {
	const Dot = ({ color, yFix, size }) => {
		return <DotItem color={color} yFix={yFix} size={size}></DotItem>;
	};

	return (
		<Wrapper>
			<Background src={Pattern} />
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
				<LightContainer left={true} top={-14}>
					<Dot color={'#323230'} yFix={true} size={1.6} />
					<Light src={LLightSrc} alt='Photo of grey hanging light.' />
				</LightContainer>
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
				<LightContainer left={false} top={-10}>
					<Dot color={`${colors.light_grey}`} yFix={false} size={1.6} />
					<Light
						src={RLightSrc}
						alt='Photo of grenn and pink chandilier type hanging light.'
					/>
				</LightContainer>
			</BottomWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	padding-top: 0;
`;

const Background = styled.img`
	width: 100%;
	height: 50%;
	position: absolute;
	z-index: -1;
	left: 0;
	top: 8em;
	object-fit: fill;
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
	position: absolute;
	display: flex;
	justify-content: space-around;
	width: 90%;
	margin: 9vh 0;
`;

const Title = styled.h1``;

const ContentWrapper = styled.div`
	text-align: center;
	margin-top: 2em;

	@media (min-width: 1200px) {
		position: absolute;
		padding-inline: 29vw;
		left: 0;
	}
`;

const Description = styled.p`
	color: ${colors.dark_grey};
`;

const DotItem = styled.div`
	background: ${({ color }) => color};
	width: ${({ size }) => size}em;
	height: ${({ size }) => size}em;
	border-radius: 50%;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	margin-left: ${({ yFix }) => (yFix == true ? 0.4 : -0.2)}em;
	top: -1em;
`;

const LightContainer = styled.div`
	max-width: ${({ left }) => (left ? 400 : 150)}px;
	margin-left: ${({ left }) => (left ? '-3' : 0)}em;
	margin-top: ${({ top }) => top}em;
	position: relative;
	display: none;

	@media (min-width: 1200px) {
		display: block;
	}
`;

const MiddleLight = styled.img`
	width: 100%;
	max-width: 500px;
`;

const Light = styled.img``;

export default Hero;
