import React, { useState } from "react";
import styled from "styled-components";
import search from "../../assets/images/x_search_icon.png";
import action from "../../assets/images/x_action.png";
import { Link } from "react-router-dom";

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
            <p className="_heading">Booked packages </p>
          </div>

          <div className="dash__section2 container-fluid px-1">
            <BookedWrapper className="container-fluid my-1 ">
              <div className="row bg-white p-3">
                <div className="d-flex flex-row justify-content-between align-items-center mb-5">
                  <div className="review_title">HighTower</div>
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
                  <div className="input_date">
                    <label htmlFor="datebooked" className="form-label pt-2">
                      Date Booked
                    </label>

                    <input
                      type="date"
                      className="form-control mb-4"
                      placeholder="Date Booked"
                      aria-label="Date Booked"
                      id="datebooked"
                      multiple="true"
                    />
                    <span className="dropdown-toggle"></span>
                  </div>
                </div>
                {/* secomd section starts */}
                <div className="d-flex flex-row flex-wrap">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">FIRSTNAME</th>
                        <th scope="col">LASTNAME</th>
                        <th scope="col">EMAIL ADDRESS</th>
                        <th scope="col">DATE(From - To)</th>
                        <th scope="col">BOOKING NO</th>
                        <th scope="col">ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Harry</td>
                        <td>Maguire</td>
                        <td>harry@gmail.com</td>
                        <td>07/21/22 - 07/21/22</td>
                        <td>32323232</td>
                        <td>
                          <Link to="reviewdetails">
                            <div className="action">
                              <img src={action} />
                            </div>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>Jonny</td>
                        <td>Deep</td>
                        <td>jonny@gmail.com</td>
                        <td>07/21/22 - 07/21/22</td>
                        <td>32323232</td>
                        <td>
                          <Link to="reviewdetails">
                            <div className="action">
                              <img src={action} />
                            </div>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>Luke</td>
                        <td>Sky-Walker</td>
                        <td>luke@gmail.com</td>
                        <td>07/21/22 - 07/21/22</td>
                        <td>32323232</td>
                        <td>
                          <Link to="reviewdetails">
                            <div className="action">
                              <img src={action} />
                            </div>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
