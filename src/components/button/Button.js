import React from "react";
import styled from "styled-components";
import LoadingSpinner from "../loading/LoadingSpinner";
import PropTypes from "prop-types";

const ButtonStyles = styled.button`
  cursor: pointer;
  padding: 0 20px;
  width: 100%;
  line-height: 1;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  height: ${(props) => props.height || "50px"};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 20px 0px;
  background: rgb(255, 0, 95);
  background: linear-gradient(
    90deg,
    rgba(255, 0, 95, 0.9445028011204482) 0%,
    rgba(242, 0, 0, 1) 47%,
    rgba(245, 86, 0, 0.8688725490196079) 96%
  );
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const Button = ({
  type = "button",
  onClick = () => {},
  children,
  ...props
}) => {
  const { isLoading } = props;
  const child = !!isLoading ? <LoadingSpinner></LoadingSpinner> : children;
  return (
    <ButtonStyles type={type} onClick={onClick} {...props}>
      {child}
    </ButtonStyles>
  );
};

Button.prototype = {
  type: PropTypes.oneOf(["button", "submit"]).isRequired,
};

export default Button;
