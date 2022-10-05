import React from "react";
import styled from "styled-components";

const MyInput = styled.input`
  height: 3rem;
  width: 100%;
  color: black;
  border: 0;

  &:focus-visible {
    border: 0;
    outline: 0;
  }
`;

const Wrapper = styled.div`
  border-radius: 0.5rem;
  border: solid #cdcbcb;
  align-items: center;
  padding: 0.5rem 0.5rem 0.5rem 2rem;
`;

const Icon = styled.img`
  width: 1.3rem;
  height: 1.3rem;
`;
const Input = ({
  type,
  title,
  icon,
  icon2,
  placeholder,
  height,
  width,
  passEyeClick,
}) => {
  return (
    <>
      <h6>{title}</h6>
      <div className="ps-0 mb-4">
        <Wrapper className="d-flex flex-row">
          <div className="col-1 align-items-center justify-content-center">
            <Icon src={icon} style={{ height, width }} />
          </div>
          <div className="col-10">
            <MyInput placeholder={placeholder} type={type} />
          </div>
          <div className="col-1 align-items-center">
            <Icon
              src={icon2}
              style={{ height: "18px", width: "23px", cursor: "pointer" }}
              onClick={passEyeClick}
            />
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Input;
