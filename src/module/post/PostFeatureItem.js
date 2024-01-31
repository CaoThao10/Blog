import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostTitle from "./PostTitle";
import PostMeta from "./PostMeta";
import PostImage from "./PostImage";

const PostFeatureItemStyles = styled.div`
  width: 100%;
  border-radius: 16px;
  position: relative;
  height: 169px;
  .post {
    &-image {
      width: 100%;
      height: 100%;
      border-radius: 16px;
    }
    /* &-category {
      display: inline-block;
      padding: 8px;
      border-radius: 8px;
      color: #6b6b6b;
      font-size: 14px;
      font-weight: 600;
      background-color: #f3edff;
      margin-bottom: 16px;
    } */

    &-info {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 14px;
      font-weight: 600;
      color: #6b6b6b;
      /* margin-top: auto; */
    }

    &-dot {
      display: inline-block;
      width: 4px;
      height: 4px;
      background-color: currentColor;
      border-radius: 100rem;
    }

    &-title {
      font-weight: bold;
      line-height: 1.5;
      display: block;
      font-size: 16px;
      margin-bottom: 8px;
      position: absolute;
      top: 80%;
      h3 {
        color: #ccc !important;
        margin-left: 20px;
      }
      a {
        color: #ccc !important;
        margin-left: 20px;
      }
    }
    &-overlay {
      position: absolute;
      inset: 0;
      border-radius: 16px;
      background-color: rgba(0, 0, 0, 0.75);
      mix-blend-mode: multiply;
      opacity: 0.6;
    }
    &-content {
      position: absolute;
      inset: 0;
      z-index: 10;
      padding: 20px;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: start;
      top: 0%;
    }
    &-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* margin-bottom: 16px; */
    }
  }

  @media screen and (min-width: 1024px) {
    height: 272px;
  }
  @media screen and (max-width: 1023.98px) {
    .post {
      &-content {
        padding: 15px;
      }
    }
  }
`;

const PostFeatureItem = () => {
  return (
    <PostFeatureItemStyles>
      <PostImage url="/img1.jpeg"></PostImage>
      <div className="post-overlay"></div>
      <div className="post-content">
        <div className="post-top">
          {/* <span className="post-category">Kiến thức</span> */}
          <PostCategory type="secondary">Kiến thức</PostCategory>
        </div>
        {/* <div className="post-info">
          <span className="post-time">Mar 23</span>
          <span className="post-dot"></span>
          <span className="post-author">Adiez Le</span>
        </div> */}
        <PostMeta></PostMeta>
      </div>
      {/* <div className="post-title">
        <h3>Hướng dẫn setup phòng cực chill</h3>
      </div> */}
      <PostTitle className="post-title">
        Hướng dẫn setup phòng cực chill
      </PostTitle>
    </PostFeatureItemStyles>
  );
};

export default PostFeatureItem;
