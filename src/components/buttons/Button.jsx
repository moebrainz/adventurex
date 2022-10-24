import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
  background-color: #024626;
  border-radius: 8px;
  height: 3rem;
  width: 25rem;
  border: 0;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Button = ({ width, content, height, onClick, type }) => {
  //   const content = {
  //     login: "Login",
  //     viewTrip: "View Trip",
  //     review: "Review",
  //   };
  return (
    <>
      <MyButton style={{ width, height }} onClick={onClick} type={type}>
        {content}
      </MyButton>
    </>
  );
};

export default Button;
