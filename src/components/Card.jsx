import React from 'react'
import styled from 'styled-components';
import { Flex } from './utilities';

const Card = ({movie}) => {
    return (
        <>
        <Outside style={{border:'1px solid black'}}>
        {/* <p>{movie.poster_path}</p> */}
        <Image src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
        <Vote><VoteAvg>{movie.vote_average}</VoteAvg></Vote>
        {/* <p>{movie.release_date}</p> */}
        <p>{movie.title}</p>

        </Outside>
        </>
    );
}
 
export default Card;

const Outside = styled.div`
    width: 280px;
    height: 346px;
    background-color: #fff;
    /* border: 1px solid #E1E3E6; */
    box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.1);
    margin: 26px;
    ${Flex({fd:'column'})}
    position: relative;
    border-radius: 8px;
`;

const Image = styled.img`
    border-radius: 7px 7px 0 0;
    width: 280px;
    height: 302px;

`;

const Vote = styled.div`
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 1px solid #000;
    background-color: #fff;
    ${Flex({ai:'center', jc:'center'})};
    position: absolute;
    top: 14px;
    left: 14px;
`;

const VoteAvg = styled.p`
    font-weight: 600;

`;