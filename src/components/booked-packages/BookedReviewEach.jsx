import React, { useState } from "react";
import styled from "styled-components";
import search from "../../assets/images/x_search_icon.png";
import action from "../../assets/images/x_action.png";
import { Link, useNavigate } from "react-router-dom";

import "../../css/BookedPackages.css";
import CardReview from "../card-reviews/CardReview";
import CardBooked from "../card-reviews/CardBooked";

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
  const navigate = useNavigate();

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className="container-fluid">
        <DashContentWrapper>
          <div className="">
            <p className="_heading">
              <nav className="breadcrumb_wrapper" aria-label="breadcrumb">
                <ol className="breadcrumb ol_list_breadcrumb">
                  <li className="breadcrumb-item">
                    <Link
                      onClick={() => navigate(-2)}
                      className="breadcrumb_link"
                    >
                      Booked packages
                    </Link>{" "}
                  </li>
                  <li className="breadcrumb-item">
                    <Link
                      onClick={() => navigate(-1)}
                      className="breadcrumb_link"
                    >
                      Review
                    </Link>{" "}
                  </li>
                  <li
                    className="breadcrumb-item active breadcrumb_current"
                    aria-current="page"
                  >
                    Hightowers
                  </li>
                </ol>
              </nav>
              {/* {`Booked packages > Review > HighTowers`}{" "} */}
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
                    <button
                      type="button"
                      className={
                        toggleState === 1
                          ? "booked_bookings_button px-3 my-2 me-2"
                          : "unactive-tabs px-3 my-2 me-2"
                      }
                      onClick={() => toggleTab(1)}
                    >
                      Bookings
                    </button>
                    <button
                      type="button"
                      className={
                        toggleState === 2
                          ? "booked_bookings_button px-3 my-2 me-2"
                          : "unactive-tabs px-3 my-2 me-2"
                      }
                      onClick={() => toggleTab(2)}
                    >
                      Other Bookings
                    </button>

                    {/* <button className="booked_bookings_button  ">
                      Bookings
                    </button>
                    <button className="booked_bookings_button px-3 my-2 me-2">
                      Other Bookings
                    </button> */}
                  </div>

                  <div
                    className={
                      toggleState === 1
                        ? "content  active-content dash__section2 p-4"
                        : "content dash__section2 p-4"
                    }
                  >
                    <CardBooked
                      location="Hightower"
                      tags={1000}
                      bookednum={100}
                      matchesnum={200}
                    />
                  </div>
                  <div
                    className={
                      toggleState === 2
                        ? "content  active-content dash__section2 p-4"
                        : "content dash__section2 p-4"
                    }
                  >
                    <div className="py-1 mb-3 border-bottom">
                      <div className="d-flex flex-row col-xl-5 button_row bg-white">
                        <button className="booked_button_otherbookings m-2 px-1">
                          Saved
                        </button>
                        <button className="booked_button_otherbookings m-2 px-1">
                          Booked
                        </button>
                        <button className="booked_button_otherbookings m-2 px-1">
                          Expired
                        </button>
                      </div>
                    </div>
                    <CardBooked
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
