import React from "react";
import styled from "styled-components";
function LogIn() {
  return (
    <Container>
      <Content>
        <LogoOne src="images/cta-logo-one.svg" alt="logo" />
        <SignUP>GET ALL HERE</SignUP>
        <Description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius iure
          similique, quibusdam iste architecto sed deserunt assumenda fugiat
          mollitia itaque?
        </Description>
        <LogoTwo src="images/cta-logo-two.png" alt="logo"/>
      </Content>
    </Container>
  );
}

export default LogIn;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  &:before {
    opacity: 0.56;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    content: "";
    background-image: url("images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
`;

const Content = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 65%;
  display: flex;
  flex-direction: column;
  
`;
const LogoOne = styled.img``;

const SignUP = styled.a`
  width: 100%;
  background: blue;
  font-weight: bold;
  padding: 17px 0;
  text-align: center;
  color: azure;
  border-radius: 10px;
  font-size: 20px;
  word-spacing: 2px;
  letter-spacing: 2px;
  cursor: pointer;
  box-shadow: rgb(38, 57, 77) 0px 10px 15px -10px;
  transition : all 250ms cubic-bezier(0.25 , 0.46 , 0.45 , 0.94) 0s;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: midnightblue;
    color: rgb(0, 255, 0);
    transform: scale(1.09);
  }
`;

const Description = styled.div`
  width : 100%;
  font-size : 13px;
  letter-spacing : 2px;
  text-align : center;
  line-height: 2;
`

const LogoTwo = styled(LogoOne)`
  margin-top: 20px;
`;
