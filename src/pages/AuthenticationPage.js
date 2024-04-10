import React, { Children } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const AuthenticationPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .header {
    width: 100%;
    max-width: 1260px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

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
    margin: 10px 0;
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
      <div className="header">
        <NavLink to="/">
          <img src="/logo2.png" alt="" className="logo" />
        </NavLink>
        <h2 className="heading text-2xl font-bold">Citrus Blush Blogs</h2>
        {children}
      </div>
    </AuthenticationPageStyles>
  );
};

export default AuthenticationPage;
