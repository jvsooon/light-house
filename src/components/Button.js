import React from 'react'
import styled from 'styled-components';
import { colors } from '../utils/colors';

const Button = ({label}) => {
    return (
        <Btn>
            {label}
        </Btn>
    )
}

const Btn = styled.button`
	background: ${colors.dark_pink};
	border: none;
	font-weight: bold;
	padding: 1em 3em;
	margin: 3em 0;
	border-radius: 2em;
	transition: all 0.3s ease-in-out;

	&:hover {
		filter: drop-shadow(0 0.5rem 1rem rgba(0, 0, 0, 0.1));
	}
`;

export default Button
