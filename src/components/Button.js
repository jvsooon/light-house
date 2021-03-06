import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';

const Button = ({ label }) => {
	return <Btn>{label}</Btn>;
};

const Btn = styled.button`
	background: ${colors.dark_pink};
	border: none;
	font-weight: bold;
	padding: 1.5em 4em;
	margin: 2em 0;
	border-radius: 2em;
	transition: all 0.3s ease-in-out;
	cursor: pointer;

	&:hover {
		filter: drop-shadow(0 0.5rem 1rem rgba(0, 0, 0, 0.1));
	}
`;

export default Button;
