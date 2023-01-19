import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <Nav>
      <Logo src="./images/logo.svg" alt="DisneyPlus Logo" />
      <NavMenu>
        <a>
          <img src="./images/home-icon.svg" alt="Home-Logo" />
          <span>HOME</span>
        </a>
        <a>
          <img src="./images/search-icon.svg" alt="Home-Logo" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="./images/watchlist-icon.svg" alt="Home-Logo" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="./images/original-icon.svg" alt="Home-Logo" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="./images/movie-icon.svg" alt="Home-Logo" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="./images/series-icon.svg" alt="Home-Logo" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="./images/hiren  compressed.png" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: black;
  color: white;
  display: flex;
  align-items:center;
  padding 0px 36px;
  overflow-x:hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
    display:flex;
    flex:1;
    margin-left : 27px;
    align-items:center; 
    a{
        display:flex;
        align-items:center;
        padding 0 12px;
        cursor:pointer;
        img {
            height: 20px;   
        }
        span{
            font-size:13px;
            letter-spacing:1.45px;
            position:relative;
            &:after{
                content : "";
                height: 2px;
                background : white;
                position : absolute;
                left : 0;
                right: 0;
                bottom : -6px;
                opacity : 0;
                transition : all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; 
                transform: scaleX(0);
            }
        }
        &:hover{
            span: after{
                transform: scaleX(1);
                opacity : 1;
            }
        }
    }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;
