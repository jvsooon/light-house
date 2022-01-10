import React from 'react';
import styled from 'styled-components';

const images = ['product-1', 'product-2', 'product-3', 'product-4'];
const imageLabels = [
	'Chandeliers',
	'Pendant Lighting',
	'Wall Lights',
	'Outdoor Lighting',
];

const Products = () => {
	return (
		<Wrapper>
			{images.map((imageName, index) => (
				<Product key={index}>
					<Image src={require(`../assets/products/${images[index]}.jpg`)} />
					<Label>{imageLabels[index]}</Label>
					<Description>Any Room's Focal Point</Description>
				</Product>
			))}
		</Wrapper>
	);
};

const Wrapper = styled.section``;

const Product = styled.div`
	margin: 2em 0;
`;

const Image = styled.img`
	border-radius: 4em;
	min-height: 27em;
	object-fit: cover;
`;

const Label = styled.span`
	display: block;
	text-align: center;
	margin-top: 1em;
`;

const Description = styled.p`
	text-align: center;
`;

export default Products;
