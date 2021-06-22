import React from "react";
import styled from "styled-components";
import { Flex } from "./utilities";

const Card = ({ movie }) => {
  return (
    <>
      <Container>
        <Image
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={`${movie.title} cover`}
        />
        <Vote>
          <VoteAvg>{movie.vote_average}</VoteAvg>
        </Vote>
        <Title>{movie.title}</Title>
      </Container>
    </>
  );
};

export default Card;

const Container = styled.div`
  width: 280px;
  height: 346px;
  background-color: #fff;
  box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.1);
  margin: 26px;
  ${Flex({ fd: "column" })}
  position: relative;
  border-radius: 8px;
  overflow: wrap;
`;

const Image = styled.img`
  border-radius: 7px 7px 0 0;
  width: 280px;
  height: 302px;
  /* margin-top: -8px; */
`;

const Vote = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid #000;
  background-color: #fff;
  ${Flex({ ai: "center", jc: "center" })};
  position: absolute;
  top: 14px;
  left: 14px;
`;

const VoteAvg = styled.p`
  font-weight: 600;
`;

const Title = styled.p`
  text-align: center;
  line-height: 20px;
  letter-spacing: -0.01em;
  padding: 0 20px;
  /* margin: 8px; */
`;
