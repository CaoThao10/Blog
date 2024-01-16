import React, { Children } from "react";
import styled from "styled-components";

const AuthenticationPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
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
`;

const AuthenticationPage = ({ children }) => {
  return (
    <AuthenticationPageStyles>
      <div className="container">
        <img src="/logo1.png" alt="" className="logo" />
        <h2 className="heading">Monkey Blogging</h2>
        {children}
      </div>
    </AuthenticationPageStyles>
  );
};

export default AuthenticationPage;
