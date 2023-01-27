import React from "react";
import styled from "styled-components";
import { selectMovies } from "../features/Movie/movieSlice";
import { useSelector } from "react-redux";
function Movies() {

  const movies = useSelector(selectMovies);
  return (
    <Container>
      <h4>Movies Recommended For You</h4>
      <Content>
        {movies && movies.map((movie , key)=> (
          <Wrap key={key}>
           <img src={movie.cardImg} alt="movie" />
         </Wrap>
        ))}
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 3%;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(38, 57, 77) 0px 10px 15px -10px;
  transition : all 250ms cubic-bezier(0.25 , 0.46 , 0.45 , 0.94) 0s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.1);
    border: 3px solid rgba(249, 249, 249, 0.6);
  }
`;
