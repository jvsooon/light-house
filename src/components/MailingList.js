import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';
import Pattern from '../assets/pattern-2.svg';

const MailingList = () => {
	return (
		<Wrapper>
			<BGPattern src={Pattern} />
			<Left>
				<PreTitle>Join the mailing list</PreTitle>
				<Title>
					Be the first to get
					<br /> content updates
				</Title>
			</Left>
			<Right>
				<TextInput placeholder='Full Name' />
				<TextInput placeholder='Your Email' />
				<Button>Subscribe</Button>
			</Right>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	background: ${colors.light_pink};
	padding: 2em;
	margin: 2em 0;
	border-radius: 3em;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;

	@media (min-width: 900px) {
		flex-direction: row;
		justify-content: space-between;
		text-align: left;
		padding: 2em 4em;
	}
`;

const BGPattern = styled.img`
	position: absolute;
	width: 100%;
	left: 0;
	top: 0;
	object-fit: fill;
	height: 100%;
	z-index: 0;
`;

const Left = styled.div`
	margin-bottom: 2em;
	z-index: 1;
`;

const Right = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 25em;
	width: 100%;
	z-index: 1;
`;

const PreTitle = styled.span`
	font-size: 1.5em;
`;

const Title = styled.h3`
	font-family: 'Playfair Display', serif;
	font-weight: bold;
	font-size: 1.2rem;
	font-size: clamp(1.728rem, 1.5381rem + 0.9496vw, 2.369rem);
`;

const TextInput = styled.input`
	border: none;
	color: ${colors.light_grey};
	font-weight: bold;
	background: white;
	padding: 1.8em 1em;
	margin: 0.5em 0;
	border-radius: 1.5em;

	:focus {
		outline-color: ${colors.dark_grey};
	}
`;

const Button = styled.button`
	background: ${colors.dark_pink};
	border: none;
	font-weight: bold;
	padding: 1.8em 4em;
	margin: 2em 0;
	border-radius: 3em;
	transition: all 0.3s ease-in-out;
	align-self: center;

	&:hover {
		filter: drop-shadow(0 0.5rem 1rem rgba(0, 0, 0, 0.1));
	}

	@media (min-width: 900px) {
		align-self: start;
	}
`;

export default MailingList;
