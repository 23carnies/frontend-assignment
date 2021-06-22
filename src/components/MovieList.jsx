import React, { useState, useEffect } from "react";
import Card from "./Card";
import * as MovieAPI from "../services";
import DetailModal from "./DetailModal";
import styled from "styled-components";
import { Flex } from "../components/utilities";

const MovieList = () => {
    const [showModal, setShowModal] = useState(false);
    // const openModal = () => setShowModal(!showModal);
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState("");

  const fetchMovies = async () => {
    return await MovieAPI.getMovies();
  };

  const fetchOneMovie = async (id) => {
    return await MovieAPI.getOneMovie(id).then((data) => setMovie(data));
  };

  useEffect(() => {
    fetchMovies().then((data) => setMovies(data));
  }, [movies]);

  return (
    <>
      <h1>Most Recent Movies</h1>
      <CardGroup>
        {movies.map((movie, idx) => (
          <ModalButton
            onClick={() => {
                setShowModal(true);
                fetchOneMovie(movie.id);
                console.log('help',movie.id)
            }}
            key={idx}
          >
            <Card movie={movie} />
          </ModalButton>
        ))}
      </CardGroup>
      <DetailModal movie={movie} showModal={showModal}/>
    </>
  );
};

export default MovieList;

const CardGroup = styled.div`
  ${Flex({})};
  flex-flow: row wrap;
`;

const ModalButton = styled.button`
  border: none;
  background-color: transparent;
`;
