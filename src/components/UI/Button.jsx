import React from "react";
import styled from "styled-components";

const Button = ({ title, className, style }) => {
  return (
    <Wrapper className={className} style={style}>
      {title}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  padding: 0.4rem;
  color: #49184e;
  cursor: pointer;
  transition: 0.15s ease-in-out;
  outline: none;
  border: solid 1px;
  background: #f1d8f3;

  &:hover {
    border: solid 1px #f1d8f3;
    background-color: transparent;
    color: #f1d8f3;
  }
`;
export default Button;
