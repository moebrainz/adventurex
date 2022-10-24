import React from "react";
import styled from "styled-components";
import avatar1 from "../../assets/images/img_1.png";
import tagicon from "../../assets/images/x_tagicon.png";
import editicon from "../../assets/images/x_editicon.png";
import Button from "../buttons/Button";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const CardWrapper = styled.div`
  display: flex;
`;

const CardWrap = styled.div`
  width: 250px;
  height: 277px;
  align-items: center;
  padding: 1px;
`;
const SectionOneWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;

  img {
    height: 11px;
    width: 9.67px;
  }

  p {
    font-weight: 600;
    font-size: 14px;
    color: #32325d;
  }

  h6 {
    font-weight: 500;
    font-size: 12px;
    color: #32325d;
  }

  span {
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }
`;
const SectionTwoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding: 7px 0;

  h6 {
    font-weight: 400;
    font-size: 12px;
    color: #32325d;
    list-style: disc;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    color: #32325d;
  }
`;
const SectionThreeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 3px;
  justify-content: space-between;

  img {
    width: 29px;
    height: 33px;
    cursor: pointer;
  }
`;

const Imagewrapper = styled.div`
  width: 230px;
  height: 145px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 5px 0px;

  img {
    width: 100%;
    height: 100%;
  }

  &:hover img {
    backdrop-filter: blur(20px);
    opacity: 0.5;
    z-index: 100;
  }
`;

const CardContainer = styled.div`
  padding: 7px;
`;

export default ({
  bookednum,
  matchesnum,
  location,
  tags,
  record_id,
  banner,
}) => {
  const { listPackages } = useLogin();
  return (
    <>
      <CardWrapper className="">
        <CardWrap className="card border-0 ">
          <Imagewrapper className="banner_wrapper">
            <img src={banner} class="card-img-top" alt="..." />
          </Imagewrapper>
          <CardContainer className="card-body">
            <SectionOneWrapper>
              <p className="mb-0">{location}</p>
              <span>
                <img src={tagicon} alt="" className="" />
                <h6 className="mb-0 ps-1">{tags}</h6>
              </span>
            </SectionOneWrapper>
            <SectionTwoWrapper>
              <h6 className="mb-0 pe-1">{bookednum}</h6>
              <p className="mb-0 pe-2">Booked</p>
              <h6 className="mb-0 pe-1">{matchesnum}</h6>
              <p className="mb-0">Matches</p>
            </SectionTwoWrapper>
            <SectionThreeWrapper>
              <Link to={`viewtrip/${record_id}`}>
                <Button width={170} height={33} content="View Trip" />
              </Link>

              {/* {listPackages.map((e) => (
                <Link to={`viewtrip/${e._id}`} replace key={e._id}>
                  <Button width={170} height={33} content="View Trip" />
                </Link>
              ))} */}

              <div className="ps-3">
                <img src={editicon} alt="" />
              </div>
            </SectionThreeWrapper>
          </CardContainer>
        </CardWrap>
      </CardWrapper>
    </>
  );
};
