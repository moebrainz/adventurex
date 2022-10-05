import React, { useState } from "react";
import styled from "styled-components";
import search from "../../assets/images/x_search_icon.png";

import "../../css/BookedPackages.css";
import CardReview from "../card-reviews/CardReview";

const DashContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
`;

const BookedWrapper = styled.div`
  padding: 30px 30px 15px 30px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  label {
    font-weight: 500;
    font-size: 14px;
    color: #32325d;
  }

  input:focus {
    box-shadow: unset !important;
  }
`;

export default () => {
  return (
    <>
      <div className="container-fluid">
        <DashContentWrapper>
          <div className="">
            <p className="_heading">Booked packages </p>
          </div>

          <div className="dash__section2 container-fluid px-0">
            <BookedWrapper className="container-fluid my-3">
              <div className="row">
                <div className="d-flex flex-row justify-content-center align-items-center mb-5">
                  <div className="d-flex flex-row justify-content-center align-items-center search_wrapper">
                    <div className="search_container ms-4 me-2">
                      <img src={search} alt="" />
                    </div>
                    <input
                      type="search"
                      placeholder="Search packages"
                      className="p-2 form-control border-0"
                    />
                  </div>
                </div>
                <div className="d-flex flex-row flex-wrap">
                  <div className="mx-2">
                    <CardReview
                      location="Hightower"
                      tags={1000}
                      bookednum={100}
                      matchesnum={200}
                    />
                  </div>
                  <div className="mx-2">
                    <CardReview
                      location="Hightower"
                      tags={1000}
                      bookednum={100}
                      matchesnum={200}
                    />
                  </div>
                  <div className="mx-2">
                    <CardReview
                      location="Hightower"
                      tags={1000}
                      bookednum={100}
                      matchesnum={200}
                    />
                  </div>
                </div>
              </div>
            </BookedWrapper>
          </div>
        </DashContentWrapper>
      </div>
    </>
  );
};
