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
    auth.signInWithPopup(provider).then((result) => {
      dispatch(
        setLogin({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        })
      );
      history("/home");
    });
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
          <UserImg onClick={signOut} src={userphoto} alt={username} />
        </>
      )}
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
