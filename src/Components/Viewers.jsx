import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="disney" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="marvel" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="national" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="pixar" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="starwars" />
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
`;

const Wrap = styled.div`
  cursor:pointer;
  border: 3px solid rgba(222, 222, 222, 0.2);
  border-radius: 5%;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  &:hover{
    transform:scale(1.1);
    border: 3px solid rgba(222, 222, 222, 0.9);
  }
`;
