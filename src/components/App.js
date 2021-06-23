import React, { useState } from "react";
import logo from "../images/logo.svg";
import MovieList from "./MovieList";
import styled from 'styled-components';
import GlobalStyle from "../GlobalStyle";
import { Flex } from "./utilities";
import Search from './elements/Search';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Main>
    <Nav>
      <img src={logo} alt="Timescale" />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </Nav>
      <hr />
      <MovieList searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <GlobalStyle />
    </Main>
  );
};

export default App;

const Main = styled.main`
  width: 90vw;
  padding: 0 5%;
`;

const Nav = styled.nav`
  ${Flex({jc:'space-between'})};

`;