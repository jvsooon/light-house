import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';

const MailingList = () => {
	return (
		<Wrapper>
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
	border-radius: 3em;
	text-align: center;
`;

const Left = styled.div`
	margin-bottom: 2em;
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
`;

const PreTitle = styled.span`
	font-size: 20px;
`;

const Title = styled.h3`
	font-family: 'Playfair Display', serif;
	font-weight: bold;
	font-size: 1.2rem;
	font-size: clamp(1.728rem, 1.6613rem + 0.3333vw, 1.953rem);
`;

const TextInput = styled.input`
	border: none;
	color: ${colors.light_grey};
	font-weight: bold;
	background: white;
	padding: 1.8em 1em;
	margin: 0.5em 0;
	border-radius: 1.5em;
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
`;

export default MailingList;
