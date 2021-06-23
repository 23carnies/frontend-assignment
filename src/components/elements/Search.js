import React, {useState} from 'react';
import styled from 'styled-components';

const Search = ({searchTerm, setSearchTerm}) => {
    

    return (
        <Input type="text" placeholder="  Search..." onChange={e => {
            setSearchTerm(e.target.value);
          }}></Input>
    );
}
 
export default Search;

const Input = styled.input`
    width: 180px;
    height: 36px;
    border: 1px solid #C0C4CC;
    border-radius: 2px;
`;