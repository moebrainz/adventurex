import React from "react";
import styled from "styled-components";

const ImageIcon = styled.img`
  width: 49.51px;
  height: 49.51px;
`;

const CardWrapper = styled.div`
  width: 210px;
  height: 79.98px;
  box-shadow: 0px 13.7114px 24.3758px rgba(208, 210, 218, 0.15);
  border-radius: 6.09396px;
  border: 0;
  align-items: center;
  cursor: pointer;
`;

const CardContent = styled.h4`
  font-weight: 400;
  font-size: 12.1879px;
  color: #6779b1;
`;
const CardValue = styled.h3`
  font-weight: 700;
  font-size: 27.4228px;
  color: #32325d;
`;

const InfoCard = ({ cardcontent, cardvalue, cardicons }) => {
  return (
    <>
      <div>
        <CardWrapper className="card d-flex flex-row">
          <div className="ps-2 pe-3">
            <ImageIcon src={cardicons} />
          </div>

          <div>
            <CardContent>{cardcontent}</CardContent>
            <CardValue>{cardvalue}</CardValue>
          </div>
        </CardWrapper>
      </div>
    </>
  );
};

export default InfoCard;
