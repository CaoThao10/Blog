import React from "react";
import styled from "styled-components";
import Heading from "../../components/layout/Heading";
import PostNewestLarge from "../post/PostNewestLarge";
import PostNewestItem from "../post/PostNewestItem";

const HomeNewestStyles = styled.div`
  margin: 0 20px;
  .layout {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 40px;
    margin-bottom: 40px;
    align-items: start;
  }

  .sidebar {
    margin: 20px 0;
    padding: 28px 20px;
    background: rgb(255, 0, 95);
    background: linear-gradient(
      9deg,
      rgba(255, 0, 95, 0.1) 0%,
      rgba(242, 0, 0, 0.3) 47%,
      rgba(245, 86, 0, 0.4) 96%
    );

    border-radius: 16px;
  }
  @media screen and (max-width: 1023.98px) {
    .layout {
      grid-template-columns: 100%;
    }
    .sidebar {
      padding: 14px 10px;
    }
  }
`;

const HomeNewest = () => {
  return (
    <HomeNewestStyles>
      <div className="container">
        <Heading>Mới nhất</Heading>
        <div className="layout">
          <PostNewestLarge></PostNewestLarge>
          <div className="right">
            <div className="sidebar">
              <PostNewestItem></PostNewestItem>
            </div>
            <div className="sidebar">
              <PostNewestItem></PostNewestItem>
            </div>
          </div>
        </div>
      </div>
    </HomeNewestStyles>
  );
};

export default HomeNewest;
