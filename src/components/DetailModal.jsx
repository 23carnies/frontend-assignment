import React from "react";
import { Flex } from "./utilities";
import styled from "styled-components";
import CloseX from "../images/close.svg";
// import { MovieContext } from "../contexts/MovieContext";
// import * as MovieAPI from "../services";



const DetailModal = ({ showModal, movie }) => {

  return (
      <>{showModal ?  
        <Background>
    <Container>
      <Box>
        <h1>{movie.title}</h1>
        <button style={{ border: "1px solid #141e35" }}>
          <Close src={CloseX} alt="X" />
        </button>
      </Box>
      <Box>
        <Image
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={`${movie.title} cover`}
        />
        <InfoBox>
          <p>
            <b>Release date:</b>
            {movie.release_date}
          </p>
          <p>{movie.overview}</p>
          <p>
            <b>{movie.vote_average} / 10</b> ({movie.vote_count} total votes)
          </p>
        </InfoBox>
      </Box>
    </Container>
    </Background>
    : null }
    </>
  );
};

export default DetailModal;

const Background = styled.section`
    ${Flex};
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100vw;
    height: 100vh;
`;

const Container = styled.section`
  ${Flex({ fd: "column" })};
  background-color: #fff;
  width: 583px;
height: 474px;
`;

const Box = styled.div`
  ${Flex};
`;

const Close = styled.img`
  width: 13px;
  height: 13px;
  padding: 8.5px;
  /* border: 1px solid #141e35; */
`;

const Image = styled.img`
  width: 266px;
  height: 389px;
`;

const InfoBox = styled.div``;
