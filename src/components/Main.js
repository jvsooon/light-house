import React from 'react';
import styled from 'styled-components';
import Hero from './Hero.js';
import Carousels from './Carousels.js';

const Main = () => {
	return (
		<MainWrapper>
			<Hero />
			<Carousels />
		</MainWrapper>
	);
};

const MainWrapper = styled.main``;

export default Main;
