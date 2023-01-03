import React, { useState } from "react";
import styled from "styled-components";
import search from "../../assets/images/x_search_icon.png";

import "../../css/BookedPackages.css";
import CardReview from "../card-reviews/CardReview";
import CardReviewData from "../../data/CardReview";
import getbooked from "../../api/getbooked";

const BOOKED_URL = "/all-trips";

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
  const [bookedPackages, getBookedPackages] = React.useState();

  const [err, setErr] = React.useState();

  const [allBooked, getAllBooked] = React.useState("");

  // const getBookings = React.useRef();

  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  console.log(searchInput, "from search");

  const token = localStorage.getItem("accessToken");

  // const handleBookedPackage = () => {
  //   fetch("https://thexplorex-backend.herokuapp.com/api/v1/admin/all-trips", {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then((response) =>
  //       // response.text();
  //       console.log(response, "this response")
  //     )
  //     .then(
  //       (result) => console.log(result, "this result")
  //       // getBookedPackages(result?.data);
  //     )
  //     .catch((error) => console.log("error", error));
  // };

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  React.useEffect(() => {
    const handleBookedPackage = () => {
      getbooked
        .get(BOOKED_URL, config)
        .then((res) => {
          getBookedPackages(res?.data?.data);
          setErr(res?.data?.data);
        })
        .catch((error) => {
          // setErr(error);
          if (error.response) {
            localStorage.setItem("err", JSON.stringify(error.response.status));
          }
          console.log(error.response.status, "error");
        });
    };

    // console.log(err, "error");

    const MsgErr = JSON.parse(localStorage.getItem("err"));

    console.log(MsgErr, "eooers");

    handleBookedPackage();

    // handleBooked();
  }, []);
  // let allBookings

  localStorage.setItem("bookedUsers", JSON.stringify(bookedPackages));

  const MyBookings = () => {
    return (
      <>
        {bookedPackages
          ?.filter((booked) => {
            if (searchInput === "") {
              //return empty
              return booked?.packageId;
            } else if (
              booked?.packageId?.packageName
                .toLowerCase()
                .includes(searchInput.toLowerCase())
            ) {
              //return the filtered result
              return booked?.packageId;
            }
          })
          ?.map((booked, i) => {
            // const unique = Array.from(new Set(booked?.packageId?._id));
            // const bookings = Array.from(booked?.packageId?.packageName);
            // const bookings =
            //   JSON.stringify(booked?.packageId[i]) ===
            //   JSON.stringify(booked?.packageId[i]);

            const bookings = booked?.booked;

            if (bookings === true) {
              // const bookingsId = booked?.packageId;

              // return console.log(bookingsId, "number of booked");
              return (
                <CardReview
                  key={i}
                  src={booked?.packageId?.thumbnail}
                  location={booked?.packageId?.packageName}
                  tags={booked.tags}
                  bookednum={booked.bookednum}
                  matchesnum={booked.matchesnum}
                  booked_Id={booked?._id}
                />
              );
            }

            // const unique = bookings?.filter((val, i) => {
            //   return bookings.indexOf(val) === i;
            // });

            // return (
            //   {if (bookings )

            //   })
            // return unique.map((book) => <div> {book}</div>);
            // console.log(allBookedPack, "returned all bookde");
          })}
      </>
    );
  };

  // console.log(getBookings.current, "booked package");

  // allBookings = bookedPackages?.map((booked) => {

  //   allBookings = [...new Set(booked?.packageId)];
  // })
  console.log(bookedPackages, "all booked packages");

  // console.log(<MyBookings />, "bookings in an array");

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
                    {/* {bookedPackages
                      ?.filter((card) => {
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
                            location={card?.packageId?.packageName}
                            tags={card.tags}
                            bookednum={card.bookednum}
                            matchesnum={card.matchesnum}
                          />
                        </div>
                      ))} */}
                    <MyBookings />
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
