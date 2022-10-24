import React, { useState } from "react";
import styled from "styled-components";
import search from "../../assets/images/x_search_icon.png";

import "../../css/BookedPackages.css";
import CardReview from "../card-reviews/CardReview";
import CardReviewData from "../../data/CardReview";

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
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  console.log(searchInput, "from search");

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
                      onChange={handleChange}
                      value={searchInput}
                    />
                  </div>
                </div>
                <div className="">
                  <div className=" d-flex flex-row flex-wrap">
                    {CardReviewData.preview
                      .filter((card) => {
                        if (searchInput === "") {
                          //return empty
                          return card;
                        } else if (
                          card.location_title
                            .toLowerCase()
                            .includes(searchInput.toLowerCase())
                        ) {
                          //return the filtered result
                          return card;
                        }
                      })
                      .map((card, i) => (
                        <div className="m-1">
                          <CardReview
                            key={i}
                            location={card.location_title}
                            tags={card.tags}
                            bookednum={card.bookednum}
                            matchesnum={card.matchesnum}
                          />
                        </div>
                      ))}
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
