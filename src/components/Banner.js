import React from 'react';
import styled from 'styled-components';
import { IoChevronForward } from 'react-icons/io5';

const Banner = () => {
	return (
		<Wrapper>
			<Left>
				<LinkText>
					Design Gifts
					<br /> Under $200
				</LinkText>
				<LinkButton>
					<IoChevronForward size={24} />
				</LinkButton>
			</Left>
			<Divider />
			<Middle>
				<BannerTitle>Lighting Zone</BannerTitle>
			</Middle>
			<Divider />
			<Right>
				<LinkText>About Us</LinkText>
				<LinkButton>
					<IoChevronForward size={24} />
				</LinkButton>
			</Right>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-top: 1px solid black;
	border-bottom: 1px solid black;
	> div {
		margin: 1em 0;
		display: flex;
	}
`;

const Left = styled.div`
	align-items: center;
`;

const Middle = styled.div``;

const Right = styled.div`
	align-items: center;
`;

const Divider = styled.div`
	width: 80%;
	background: black;
	height: 1px;
`;

const BannerTitle = styled.span`
	font-size: clamp(2.986rem, 2.7404rem + 1.2281vw, 3.815rem);
	font-family: 'Playfair Display', serif;
	text-align: center;
	font-weight: bold;
`;

const LinkText = styled.span`
	margin-inline: 1em;
`;

const LinkButton = styled.div`
	background: white;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5em;
	border-radius: 2em;

	filter: drop-shadow(0 0.5rem 1rem rgba(0, 0, 0, 0.1));
`;

export default Banner;
