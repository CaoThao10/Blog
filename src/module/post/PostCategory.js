import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
const PostCategoryStyles = styled.div`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 10px;

  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  a {
    display: block;
    text-decoration: none;
    color: ${(props) => props.theme.gray6B};
  }
  ${(props) =>
    props.type === "primary" &&
    css`
      /* background-color: ${(props) => props.theme.grayF3}; */
      background: rgb(255, 0, 95);
      background: linear-gradient(
        9deg,
        rgba(255, 0, 95, 0.1) 0%,
        rgba(242, 0, 0, 0.3) 47%,
        rgba(245, 86, 0, 0.4) 96%
      );
    `};
  ${(props) =>
    props.type === "secondary" &&
    css`
      background-color: white;
    `};
  @media screen and (max-width: 1023.98px) {
    font-size: 10px;
  }
`;

const PostCategory = ({
  children,
  type = "primary",
  className = "",
  to = "",
}) => {
  return (
    <PostCategoryStyles type={type} className={`post-category ${className}`}>
      <Link to={`/category/${to}`}>{children}</Link>
    </PostCategoryStyles>
  );
};

export default PostCategory;
