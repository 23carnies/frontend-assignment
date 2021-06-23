import React, { useCallback, useEffect, useRef } from "react";
import { Flex } from "./utilities";
import styled from "styled-components";
import CloseX from "../images/close.svg";
import { below } from './utilities';
import Moment from 'moment';

const DetailModal = ({ showModal, setShowModal, movie }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <Container aria-label="dialog">
            <TitleBox>
              <Title>{movie.title}</Title>
              <Button
                aria-label="Close modal"
                onClick={() => setShowModal(false)}
              >
                <Close src={CloseX} alt="Close" />
              </Button>
            </TitleBox>
            <Box>
              <Image
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt={`${movie.title} cover`}
              />
              <InfoBox>
                <p>
                  <b>Release date: </b>
                  {Moment(movie.release_date).format('ll')}
                </p>
                <p>{movie.overview}</p>
                <p>
                  <b>{movie.vote_average} / 10</b> ({movie.vote_count} total
                  votes)
                </p>
              </InfoBox>
            </Box>
          </Container>
        </Background>
      ) : null}
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
  /* transform: translateY(0%); */
  overflow: scroll;
`;

const Container = styled.section`
  ${Flex({ fd: "column" })};
  background-color: #fff;
  max-height: 650px;
  max-width: 600px;
  padding: 25px;
  ${below.small`
    max-width: 400;
    overflow: scroll;
    padding: 105% 25px 15% 25px;
  `}
`;

const Box = styled.div`
  ${Flex({ ai: "flex-start" })};
  padding: 0 27px;
  ${below.small`
    flex-direction: column;
  `}
`;

const TitleBox = styled.div`
  ${Flex};
  margin-top: -20px;
  width: 100%;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 18px;
  width: 50%;
`;

const Close = styled.img`
  width: 13px;
  height: 13px;
  padding: 5px;
`;

const Button = styled.button`
  ${Flex({ ai: "center", jc: "center" })};
  background-color: #fff;
  border: 0;
  border: 1px solid #141e35;
  padding: 0;
  height: 22px;
  width: 22px;
  margin-left: 25%;
`;

const Image = styled.img`
  width: 266px;
  height: 389px;
  ${below.small`
    width: 300px;
  `}
`;

const InfoBox = styled.div`
  padding: 0 22px;
  margin-top: 0;
`;
