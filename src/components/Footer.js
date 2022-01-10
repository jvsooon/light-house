import React from 'react';
import styled from 'styled-components';
import { IoLogoTwitter } from 'react-icons/io5';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { colors } from '../utils/colors';

const columnsInfo = [
	{
		label: 'Lighting Spot',
		links: ['About Us', 'Gift Cards'],
	},
	{
		label: 'Need Help',
		links: ['Home Deliveries', 'Returns & Exchanges', 'Shipping & Deliveries'],
	},
	{
		label: 'Support',
		links: ['Community', 'Contact Us', 'License'],
	},
	{
		label: 'Information',
		links: ['Privacy Policy', 'Terms & Conditions'],
	},
];

const Footer = () => {
	return (
		<Wrapper>
			<Column>
				<LogoText>Solace</LogoText>
			</Column>
			{columnsInfo.map((item, index) => (
				<Column key={index}>
					<ColumnTitle>{item.label}</ColumnTitle>
					{item.links.map((linkLabel, index) => (
						<Links key={index} href='!'>
							{linkLabel}
						</Links>
					))}
					{index == 0 && (
						<SocialContainer>
							<IoLogoTwitter size={24} />
							<FaFacebookF size={24} />
							<FaInstagram size={24} />
						</SocialContainer>
					)}
				</Column>
			))}
		</Wrapper>
	);
};

const Wrapper = styled.footer`
	display: flex;
	flex-wrap: wrap;
    padding: 2em 1em;
`;

const Column = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1em 0;
	min-width: 10em;
	margin-right: 5em;
`;

const ColumnTitle = styled.span`
	font-weight: bold;
	font-size: 18px;
`;

const LogoText = styled.span`
	font-weight: bold;
	font-size: 1.2rem;
`;

const Links = styled.a`
	text-decoration: none;
	cursor: pointer;
	color: ${colors.dark_grey};
`;

const SocialContainer = styled.div`
	* {
		margin-right: 1em;
		margin-top: 0.5em;
		cursor: pointer;
	}
`;

export default Footer;
