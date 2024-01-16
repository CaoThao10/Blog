import React from "react";
import styled from "styled-components";
import { useController } from "react-hook-form";
import IconEyeOpen from "../icon/IconEyeOpen";

const InputStyles = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  input {
    width: 100%;
    padding: ${(props) =>
      props.hasIcon ? "16px 60px 16px 20px" : "16px 20px"};
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.grayf1};
    border-radius: 8px;
    transition: all 0.2s linear;
    color: ${(props) => props.theme.black};
    font-size: 14px;
    /* width: 500px;

    padding: 14px;
    border-radius: 6px;
    transition: all 0.2s lines;
    border: 1px solid transparent;
    background-color: ${(props) => props.theme.grayLight}; */
  }

  input:focus {
    /* background-color: #fc9fab; */
    background-color: white;
    border-color: ${(props) => props.theme.primary};
  }

  input::-webkit-input-placeholder {
    color: #84878b;
  }

  input::-moz-input-placeholder {
    color: #84878b;
  }

  .input-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

const Input = ({
  name = "",
  type = "text",
  children,
  hasIcon = false,
  control,
  ...props
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <InputStyles hasIcon={hasIcon}>
      <input id={name} type={type} {...field} {...props} />
      {children ? <div className="input-icon">{children}</div> : null}
    </InputStyles>
  );
};

export default Input;
