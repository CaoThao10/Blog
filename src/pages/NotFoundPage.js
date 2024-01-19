import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NotFoundPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  .logo {
    height: 150px;
    margin-bottom: 20px;
  }
  .opps {
    /* color: ${(props) => props.theme.primary}; */
    color: rgb(255, 0, 95);
    color: linear-gradient(
      90deg,
      rgba(255, 0, 95, 0.9445028011204482) 0%,
      rgba(242, 0, 0, 1) 47%,
      rgba(245, 86, 0, 0.8688725490196079) 96%
    );
    font-size: 22px;
    margin-bottom: 20px;
  }
  .back {
    text-decoration: none;
    background: rgb(255, 0, 95);
    background: linear-gradient(
      90deg,
      rgba(255, 0, 95, 0.9445028011204482) 0%,
      rgba(242, 0, 0, 1) 47%,
      rgba(245, 86, 0, 0.8688725490196079) 96%
    );
    color: white;
    font-size: 18px;
    font-weight: 500;
    padding: 5px 10px;
    border-radius: 8px;
    margin-bottom: 20px;
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundPageStyles>
      <NavLink to="/">
        <img className="logo" src="/logo2.png" alt="" />
      </NavLink>
      <h3 className="opps">Opps! This page does not exist</h3>
      <NavLink to="/" className="back">
        Back to Home page
      </NavLink>
    </NotFoundPageStyles>
  );
};

export default NotFoundPage;
