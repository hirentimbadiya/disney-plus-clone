import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="disney" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source 
            src="/videos/1564674844-disney.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="marvel" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="national" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="pixar" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="starwars" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  padding: 30px 0;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 3%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  cursor: pointer;
  border: 3px solid rgba(222, 222, 222, 0.2);
  border-radius: 10px;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  position: relative;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 1;
    opacity: 1;
    display: block;
    position: absolute;
    top: 0;
    transition: opacity 500ms ease-in-out 0s;
  }
  &:hover {
    transform: scale(1.1);
    border: 3px solid rgba(222, 222, 222, 0.9);
    video{
      opacity: 1;
    }
  }
  video {
    background-image : url('/videos/1608229455-star-wars.mp4');
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    opacity: 0.1;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;
