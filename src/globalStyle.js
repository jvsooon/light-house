import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        font-size: 16px;
        font-family: 'Roboto', Sans-Serif;
        line-height: 1.6;
    }

    button {
        font-family: 'Roboto', Sans-Serif;
    }

    body, h1, h2, h3, h4, ul, p {
        margin: 0;
    }
    
    img {
        max-width: 100%;
        display: block;
    }
    
    h1, h2, h3, h4 {
        font-family: 'Playfair Display', serif;
    }

    h1 {
        font-size: clamp(2.986rem, 1.5024rem + 7.4178vw, 7.993rem);    }

    h2 {
        font-size: clamp(1.802rem, 1.4316rem + 1.8519vw, 3.052rem);
    }

    header, main, footer {
        padding: 0 5%;
    }

    section {
        padding: 1em 0;
    }
`;

export default GlobalStyle;
