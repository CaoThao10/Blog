import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
const PostMetaStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-weight: 600;
  /* color: #3b3b3b; */
  color: inherit;
  a {
    text-decoration: none;
    color: inherit;
  }
  .post {
    &-dot {
      display: inline-block;
      width: 4px;
      height: 4px;
      background-color: currentColor;
      /* background-color: white */
      border-radius: 100rem;
    }
    &-author {
      span {
        text-decoration: none;
      }
    }
  }
  @media screen and (max-width: 1023.98px) {
    font-size: 10px;
    gap: 6px;
  }
`;

const PostMeta = ({
  date = "23",
  authorName = "",
  className = "",
  to = "",
}) => {
  return (
    <PostMetaStyles className={`post-meta ${className}`}>
      <span className="post-time">{date}</span>
      <span className="post-dot"></span>
      <NavLink to={to}>
        <span className="post-author">{authorName}</span>
      </NavLink>
    </PostMetaStyles>
  );
};

export default PostMeta;
