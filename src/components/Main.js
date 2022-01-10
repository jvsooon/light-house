import React from 'react';
import styled from 'styled-components';
import Hero from './Hero.js';
import Carousels from './Carousels.js';
import Banner from './Banner.js';
import Products from './Products.js';
import MailingList from './MailingList.js';

const Main = () => {
	return (
		<MainWrapper>
			<Hero />
			<Carousels />
			<Banner />
			<Products />
			<MailingList />
		</MainWrapper>
	);
};

const MainWrapper = styled.main``;

export default Main;
