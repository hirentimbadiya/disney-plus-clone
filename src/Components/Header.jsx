import React, { useEffect } from "react";
import { auth, provider } from "../firebase";
import styled from "styled-components";
import {
  selectUserName,
  selectUserPhoto,
  setLogin,
  setSignout,
} from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const username = useSelector(selectUserName);
  const userphoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history("/home");
      }
    });
  }, []);

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(
          setLogin({
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
          })
        );
        history("/home");
      })
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignout());
      history("/");
    });
  };

  return (
    <Nav>
      <Logo src="./images/logo.svg" alt="DisneyPlus Logo" />
      {!username ? (
        <LogInContainer>
          <Login onClick={signIn}>LogIn</Login>
        </LogInContainer>
      ) : (
        <>
          {" "}
          <NavMenu>
            <a href="/home">
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
          <SignOut>
            <UserImg src={userphoto} alt={username} />
            <DropDown>
              <DropDownItem>
                <img src="./images/home-icon.svg" alt="home" />
                <a href="/home">Home</a>
              </DropDownItem>
              <DropDownItem>
                <img src="./images/search-icon.svg" alt="home" />
                <a href="/home">Search</a>
              </DropDownItem>
              <DropDownItem>
                <img src="./images/watchlist-icon.svg" alt="home" />
                <a href="/home">Watchlist</a>
              </DropDownItem>
              <DropDownItem>
                <img src="./images/original-icon.svg" alt="home" />
                <a href="/home">Original</a>
              </DropDownItem>
              <DropDownItem>
                <img src="./images/series-icon.svg" alt="home" />
                <a href="/home">Series</a>
              </DropDownItem>
              <span onClick={signOut}>Sign Out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  display: fixed;
  z-index: 3;
  height: 70px;
  background: black;
  color: white;
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding 0px 36px;
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
      text-decoration: none;
        &:visited{
          color:white;
        }
        display:flex;
        align-items:center;
        padding 0 12px;
        cursor:pointer;
        img {
            height: 20px;   
            z-index: auto;
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
    @media(max-width: 768px){
      display: none;
    }
`;

const UserImg = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
`;

const Login = styled.div`
  border: 1px solid azure;
  padding: 8px 16px;
  border-radius: 5px;
  letter-spacing: 2px;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: all 0.2s ease 0s;

  &:hover {
    background: white;
    color: black;
    border-color: transparent;
  }
`;

const LogInContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgba(0 , 0 , 0 ,1);
  border: 1px solid rgba(150, 150, 150, 0.4);
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 120px;
  opacity: 0;
  z-index: 100;

  span {
    text-transform: uppercase;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    &:hover {
      color: rgba(0, 255, 0);
    }
  }
`;

const DropDownItem = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: flex-start;
    justify-content: flex-start;
    a {
      display: block;
      margin-bottom: 14px;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1.2px;
      text-decoration: none;
      color: white;
      font-family: Georgia, "Times New Roman", Times, serif;
      &:hover {
        color: rgba(0, 255, 0);
      }
    }
    img {
      width: 16px;
      height: 16px;
      margin-right: 7px;
    }
  }
`;

const SignOut = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
