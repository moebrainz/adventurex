import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
  background-color: white;
  border: 1px solid #e5e4e4;
  border-radius: 8px;
  height: 3rem;
  width: 25rem;
  color: rgba(50, 50, 93, 0.8);

  font-weight: 600;
  cursor: pointer;
`;

const ButtonWhite = ({ width, content, height, type }) => {
  //   const content = {
  //     login: "Login",
  //     viewTrip: "View Trip",
  //     review: "Review",
  //   };
  return (
    <>
      <MyButton style={{ width, height }} type={type}>
        {content}
      </MyButton>
    </>
  );
};

export default ButtonWhite;
