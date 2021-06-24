import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "../../images/search.svg";
import { Flex } from "../utilities";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <Container>
      <Icon src={SearchIcon} alt="Search icon" aria-hidden="true" />
      <Input
        title="search"
        type="text"
        placeholder="Search for a movie"
        aria-label="search"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      ></Input>
    </Container>
  );
};

export default Search;

const Container = styled.div`
  ${Flex({ ai: "center" })}
  width:180px;
  height: 36px;
  border: 1px solid #ccc;
  border-radius: 2px;
  overflow: hidden;
  :focus-within Icon {
    display: none;
  }
`;

const Icon = styled.img`
  padding: 0 1% 0 1%;
  margin-left: 10px;
  width: 20px;
  height: 20px;
  z-index: 20;
`;

const Input = styled.input`
  border: none;
  padding: 0.5rem;
  outline: none;
`;
