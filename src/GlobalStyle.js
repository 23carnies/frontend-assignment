import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


html {
  box-sizing: border-box;
  overflow-y: scroll;
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
}

p {
  font-size: 16px;
}

b,
strong {
  font-weight: 600;
}

button {
  cursor: pointer;
}

`;

export default GlobalStyle;