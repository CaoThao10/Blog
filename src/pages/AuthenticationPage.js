import React, { Children } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const AuthenticationPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .logo {
    width: 100px;
  }
  .heading {
    background: -webkit-linear-gradient(
      90deg,
      rgba(253, 29, 29, 1) 0%,
      rgba(253, 29, 29, 1) 37%,
      rgba(252, 176, 69, 1) 86%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    margin-top: 10px;
  }

  .have-account {
    /* margin-bottom: 20px; */
    width: 100%;
    a {
      display: inline-block;
      color: ${(props) => props.theme.primary};
    }
  }
`;

const AuthenticationPage = ({ children }) => {
  return (
    <AuthenticationPageStyles>
      <div className="container">
        <NavLink to="/">
          <img src="/logo2.png" alt="" className="logo" />
        </NavLink>
        <h2 className="heading">Monkey Blogging</h2>
        {children}
      </div>
    </AuthenticationPageStyles>
  );
};

export default AuthenticationPage;
