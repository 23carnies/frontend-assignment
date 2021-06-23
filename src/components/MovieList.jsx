import React, { useState, useEffect } from "react";
import Card from "./Card";
import * as MovieAPI from "../services";
import DetailModal from "./DetailModal";
import styled from "styled-components";
import { Flex } from "../components/utilities";

const MovieList = ({ searchTerm, setSearchTerm }) => {
  const [showModal, setShowModal] = useState(false);
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
      <Headline>Most Recent Movies</Headline>
      <CardGroup>
        {movies
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((movie, idx) => (
            <ModalButton
              onClick={() => {
                setShowModal(true);
                fetchOneMovie(movie.id);
              }}
              key={idx}
            >
              <Card movie={movie} />
            </ModalButton>
          ))}
      </CardGroup>
      <DetailModal
        movie={movie}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default MovieList;

const Headline = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
`;

const CardGroup = styled.div`
  ${Flex({})};
  flex-flow: row wrap;
`;

const ModalButton = styled.button`
  border: none;
  background-color: transparent;
`;
