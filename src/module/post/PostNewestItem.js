import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostTitle from "./PostTitle";
import PostMeta from "./PostMeta";
import PostImage from "./PostImage";
//
const PostNewestItemStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  margin-bottom: 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid #ddd;

  &:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: 0;
  }
  .post {
    &-image {
      display: block;
      flex-shrink: 0;
      width: 180px;
      height: 130px;
      border-radius: 12px;
    }
    &-category {
      margin-bottom: 8px;
    }
    &-content {
      flex: 1;
    }

    &-title {
      /* margin-bottom: 8px; */
    }
  }
  @media screen and (max-width: 1023.98px) {
    margin-bottom: 14px;
    padding-bottom: 14px;
    .post {
      &-image {
        width: 140px;
        height: 100px;
      }
    }
  }
`;
const PostNewestItem = () => {
  return (
    <PostNewestItemStyles>
      {/* <PostImage url={data.image} alt="" to={data?.slug}></PostImage> */}
      {/* <img className="post-image" src="/img1.jpeg" alt="" /> */}
      <PostImage url="/img1.jpeg"></PostImage>
      <div className="post-overlay"></div>
      <div className="post-content">
        <PostCategory type="secondary">kiến thức</PostCategory>
        <PostTitle>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </PostTitle>
        <PostMeta></PostMeta>
      </div>
    </PostNewestItemStyles>
  );
};

export default PostNewestItem;
