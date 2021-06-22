import React, { useState } from "react";
import logo from "../images/logo.svg";
import MovieList from "./MovieList";
// import DetailModal from "./DetailModal";
import GlobalStyle from "../GlobalStyle";

const App = () => {
//   const [showModal, setShowModal] = useState(false);
//   const openModal = () => setShowModal(!showModal);

  return (
    <>
      <img src={logo} alt="Timescale" />
      <hr />
      <MovieList />
      {/* <DetailModal  /> */}
      <GlobalStyle />
    </>
  );
};

export default App;
