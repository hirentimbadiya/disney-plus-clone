import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ShareIcon from "@mui/icons-material/Share";
import { useParams } from "react-router-dom";
import db from "../firebase";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  useEffect(() => {
    // grab the movie information from database
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          // save the movie data
          setMovie(doc.data());
        } else {
          // redirect to homepage
        }
      });
  }, []);

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg} alt="" />
          </Background>
          <ImageTitle>
            <img src={movie.titleImg} alt="" />
          </ImageTitle>
          <Controls>
            <Play>
              <PlayArrowIcon fontSize="large" />
              <span>Play</span>
            </Play>
            <Trailer>
              <PlayArrowIcon sx={`color : azure`} fontSize="large" />
              <span>Trailer</span>
            </Trailer>
            <Add>
              <AddIcon />
            </Add>
            <Share>
              <ShareIcon />
            </Share>
          </Controls>
          <SubTitles>{movie.subTitle}</SubTitles>
          <Description>{movie.description}</Description>
        </>
      )}
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  postion: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.7;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  margin-top: 60px;
  img {
    width: 100%;
    height: 100%;
    object-fit:contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 14px;
`;
const Play = styled.button`
  border-radius: 6px;
  font-size: 14px;
  display: flex;
  padding: 0px 10px;
  margin-right: 20px;
  align-items: center;
  height: 60px;
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgba(200, 200, 200);
  }
`;
const Trailer = styled(Play)`
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(240, 240, 240);
  color: white;
  &:hover {
    background: rgba(50, 50, 50, 0.9);
  }
`;
const Add = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  margin-right: 18px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  AddIcon {
    font-size: 50px;
  }
  &:hover {
    background: rgba(50, 50, 50);
    color: white;
  }
`;
const Share = styled(Add)`
  background: rgba(0, 0, 0, 0.8);
`;
const SubTitles = styled.div`
  min-height: 20px;
  margin-top: 26px;
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 19px;
  margin-top: 16px;
  max-width: 768px;
`;
