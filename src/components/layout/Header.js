import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Button from "../button/Button";
import { useAuth } from "../../contexts/auth-context";

const HeaderStyled = styled.header`
  margin: 20px 0;
  .header {
    /* padding-top: 10px; */
    display: flex;
    height: 60px;
    max-width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0px 100px;
    /* background: rgb(255, 0, 95);
    background: linear-gradient(
      90deg,
      rgba(255, 0, 95, 0.9445028011204482) 0%,
      rgba(242, 0, 0, 1) 47%,
      rgba(245, 86, 0, 0.8688725490196079) 96%
    ); */
    /* background-color: hsla(0, 100%, 70%, 0.3); */
  }

  .img {
    height: 40px;
  }

  .title {
    display: flex;
    text-decoration: none;
    align-items: center;
    span {
      color: ${(props) => props.theme.primary};
      font-size: 18px;
      padding: 0 20px;

      font-weight: 700;
    }
  }

  .box-search {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0px 15px;
    border-radius: 20px;
    background-color: white;
    border: 1px solid rgb(255, 0, 95);
    /* padding: 5px 5px; */
  }
  .search {
    padding: 0 10px;
  }

  .menu-list {
    display: flex;
  }
  .menu {
    display: flex;
    margin: 0;
    padding: 0;
  }
  .menu-item {
    list-style: none;
    a {
      color: ${(props) => props.theme.primary};
      font-size: 18px;
      padding: 0 20px;
      text-decoration: none;
      font-weight: 500;
    }
  }
  .menu-list {
    display: flex;
    align-items: center;
    a {
      text-decoration: none;
    }
  }

  .header-auth {
    /* color: ${(props) => props.theme.primary}; */
    font-size: 18px;
    /* font-weight: 500; */
    /* background-color: white; */
    padding: 5px;
    /* border-radius: 8px; */
    /* border: 1px solid rgb(255, 0, 95); */
  }

  .header-name {
    color: ${(props) => props.theme.primary};
  }
  /* .btn {
    background: rgb(255, 0, 95);
    background: linear-gradient(
      90deg,
      rgba(255, 0, 95, 0.9445028011204482) 0%,
      rgba(242, 0, 0, 1) 47%,
      rgba(245, 86, 0, 0.8688725490196079) 96%
    );
    border-radius: 6px;
    color: white;
    font-size: 16px;
    font-weight: 500;
    margin-left: 100px;
  } */

  .button {
    text-decoration: none !important;
  }
`;

const HomeMenuLinks = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/blog",
    title: "Blog",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];

function getLastName(name) {
  if (!name) {
    return "...";
  }
  const length = name.split(" ").length;
  return name.split(" ")[length - 1];
}

const Header = () => {
  const { userInfo } = useAuth();
  return (
    <HeaderStyled>
      <div className="header">
        <div className="title">
          <NavLink to="/">
            <img className="img" src="/logo2.png" alt="" />
          </NavLink>
          <span>Citrus Blush Blogs</span>
          <div className="box-search">
            <input className="search" type="text" placeholder="Search"></input>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 11H11.71L11.43 10.73C12.4439 9.55402 13.0011 8.0527 13 6.5C13 5.21442 12.6188 3.95772 11.9046 2.8888C11.1903 1.81988 10.1752 0.986756 8.98744 0.494786C7.79973 0.00281635 6.49279 -0.125905 5.23192 0.124899C3.97104 0.375703 2.81285 0.994767 1.90381 1.90381C0.994767 2.81285 0.375703 3.97104 0.124899 5.23192C-0.125905 6.49279 0.00281635 7.79973 0.494786 8.98744C0.986756 10.1752 1.81988 11.1903 2.8888 11.9046C3.95772 12.6188 5.21442 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                fill="rgb(255, 0, 95)"
              />
            </svg>
          </div>
        </div>
        <div className="menu-list">
          <ul className="menu">
            {HomeMenuLinks.map((item) => (
              <li className="menu-item">
                <NavLink to={item.url}>{item.title}</NavLink>
              </li>
            ))}
          </ul>
          {!userInfo ? (
            <Button className="button" type="button" to="/sign-up">
              Sign in
            </Button>
          ) : (
            <div className="header-auth">
              <span>Welcome back, </span>
              <strong className="header-name">
                {getLastName(userInfo?.displayName)}
              </strong>
            </div>
          )}
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
