import React, { useState, useEffect } from "react";
import Card from './Card';
import * as MovieAPI from "../services";
// import { data } from "browserslist";
import styled from 'styled-components';
import { Flex } from '../components/utilities';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    return await MovieAPI.getMovies();
  };

  useEffect(() => {
      fetchMovies()
      .then((data) => {
        //   const movieCount = Object.keys(data.results)
          const allMovies = Object.values(data.results)
          console.log(allMovies.release_date)
        //   console.log('list',allMovies)
          setMovies(allMovies)
      })
  },[])

  

  return (
    <>
    <h1>Most Recent Movies</h1>
    <CardGroup>

    {movies.map((movie,idx) =>
        <Card 
        movie={movie}
        />
        )}
        </CardGroup>
    </>
    );

};

export default MovieList;

const CardGroup = styled.div`
    ${Flex({})};
    flex-flow: row wrap;
    margin: 80px 24px 27px 121px;
`;