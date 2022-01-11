import Navbar from './components/Navbar.js';
import GlobalStyle from './globalStyle';
import styled from 'styled-components';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

const Wrapper = styled.div`
	max-width: 87.5em;
	margin: 0 auto;
`;

const App = () => {
	return (
		<Wrapper>
			<GlobalStyle />
			<Navbar />
			<Main />
			{/* <Footer /> */}
		</Wrapper>
	);
};

export default App;
