import React, { useState } from "react";
import styled from "styled-components";
import search from "../../assets/images/x_search_icon.png";
import action from "../../assets/images/x_action.png";

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
  input[type="date"] {
    opacity: 0;
    top: 0;
    left: 0;
    position: absolute;
  }

  th {
    font-weight: 500;
    font-size: 12px;
    color: rgba(50, 50, 93, 0.8);
    border-top: solid 1px #ccc;
    padding: 6px 0;
  }

  td {
    font-weight: 500;
    font-size: 14px;
    color: #32325d;
    padding: 10px 0;
    align-items: center;
  }

  img {
    cursor: pointer;
  }
`;

export default () => {
  return (
    <>
      <div className="container-fluid">
        <DashContentWrapper>
          <div className="">
            <p className="_heading">
              {`Booked packages > Review > HighTowers`}{" "}
            </p>
          </div>

          <div className="dash__section2 container-fluid px-1">
            <BookedWrapper className="container-fluid my-1 ">
              <div className="row bg-white p-3">
                <div className="">
                  {" "}
                  <p className="booked_revire_titles py-2">Account Details</p>
                </div>
                <div className="col-md-3 border-1 border-bottom py-4">
                  <p className="heading_booked_review">First name</p>
                  <p className="subheading_booked_review">Alicent</p>
                </div>
                <div className="col-md-3 border-1 border-bottom py-4">
                  <p className="heading_booked_review">Last name</p>
                  <p className="subheading_booked_review">Edoho</p>
                </div>
                <div className="col-md-3 border-1 border-bottom py-4">
                  <p className="heading_booked_review">Email</p>
                  <p className="subheading_booked_review">xyz@gmail.com</p>
                </div>
                <div className="col-md-3 border-1 border-bottom py-4">
                  <p className="heading_booked_review">Phone number</p>
                  <p className="subheading_booked_review">+324938773</p>
                </div>

                {/* secomd section starts */}
                <div className="d-flex flex-column flex-wrap">
                  <div className="d-flex flex-row py-3 ">
                    <button className="booked_bookings_button px-3 my-2 me-2">
                      Bookings
                    </button>
                    <button className="booked_bookings_button px-3 my-2 me-2">
                      Other Bookings
                    </button>
                  </div>

                  <div className="dash__section2 p-4">
                    <CardReview
                      location="Hightower"
                      tags={1000}
                      bookednum={100}
                      matchesnum={200}
                    />
                  </div>
                </div>
                {/* secomd section ends */}
              </div>
            </BookedWrapper>
          </div>
        </DashContentWrapper>
      </div>
    </>
  );
};
