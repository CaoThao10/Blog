import React from "react";
import PostTitle from "./PostTitle";
import PostMeta from "./PostMeta";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import styled from "styled-components";
import slugify from "slugify";
const PostAllItemStyles = styled.div`
  width: 100%;
  border-radius: 16px;
  position: relative;
  height: 169px;
  overflow: hidden;
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
      width: 100%;
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
const PostAllItem = ({ data }) => {
  if (!data || !data.id) return null;
  console.log(data);
  const date = new Date(data?.createdAt?.seconds * 1000);
  const formatDate = new Date(date).toLocaleDateString("vi-VI");
  const { category, user } = data;
  return (
    <PostAllItemStyles>
      <PostImage url={data.image} alt="unsplash"></PostImage>
      <div className="post-overlay"></div>
      <div className="post-content">
        <div className="post-top">
          {category?.name && (
            <PostCategory to={category.slug}>{category.name}</PostCategory>
          )}
          <PostMeta
            // to={slugify(user?.fullname || "", { lower: true })}
            to={slugify(user?.username || "", { lower: true })}
            authorName={user?.username}
            date={formatDate || ""}
          ></PostMeta>
        </div>
        <PostTitle to={data.slug} size="big">
          {data.title}
        </PostTitle>
      </div>
    </PostAllItemStyles>
  );
};

export default PostAllItem;
