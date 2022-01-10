import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';
import { IoMenu, IoBag, IoClose } from 'react-icons/io5';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDrawer = () => setIsOpen(!isOpen);

	return (
		<Header>
			<Nav>
				<LogoText>Solace</LogoText>
				<MenuOpen onClick={toggleDrawer}>
					<IoMenu size={24} />
				</MenuOpen>
				<NavMenuWrapper isOpen={isOpen}>
					<MenuClose onClick={toggleDrawer}>
						<IoClose size={24} />
					</MenuClose>
					<NavMenu>
						<NavMenuItem>
							<NavItemLink href='#!'>About Us</NavItemLink>
						</NavMenuItem>
						<NavMenuItem>
							<NavItemLink href='#!'>Brand</NavItemLink>
						</NavMenuItem>
						<NavMenuItem>
							<NavItemLink href='#!'>Light</NavItemLink>
						</NavMenuItem>
						<NavMenuItem>
							<NavItemLink href='#!'>Shop</NavItemLink>
						</NavMenuItem>
						<NavMenuItem>
							<NavItemLink href='#!'>Contact</NavItemLink>
						</NavMenuItem>
					</NavMenu>
				</NavMenuWrapper>
			</Nav>
		</Header>
	);
};

const Header = styled.header`
	border-bottom: thin solid ${colors.light_grey};
`;

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 1em 0;
`;

const LogoText = styled.span`
	font-weight: bold;
	font-size: 1.2rem;
`;

const NavMenuWrapper = styled.div`
	height: 100vh;
	width: 70%;
	position: fixed;
	right: 0;
	top: 0;
	transform: translateX(${({ isOpen }) => (isOpen ? 0 : '100%')});
	transition: all 0.3s ease-in-out;
	background: white;
	box-shadow: 0px 0 5px 1px rgba(0, 0, 0, 0.2);
	z-index: 1;
	padding: 1em 1em;

	@media (min-width: 600px) {
		position: unset;
		background: none;
		height: unset;
		padding: 2em 0;
	}
`;

const NavMenu = styled.ul`
	list-style: none;
	padding: 0;
	display: flex;
	flex-direction: column;
	height: 100%;

	@media (min-width: 600px) {
		flex-direction: row;
	}
`;

const NavMenuItem = styled.li`
	margin: 0.5em 0;
`;

const NavItemLink = styled.a`
	text-decoration: none;
	font-weight: 600;
	color: black;
	cursor: pointer;
`;

const MenuOpen = styled.div`
	cursor: pointer;
	display: flex;

	@media (min-width: 600px) {
		display: none;
	}
`;

const MenuClose = styled.div`
	cursor: pointer;

	@media (min-width: 600px) {
		display: none;
	}
`;

export default Navbar;
