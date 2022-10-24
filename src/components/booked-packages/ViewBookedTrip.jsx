import React from "react";
import ReviewTime from "moment";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import editicon from "../../assets/images/x_editicon.png";
import viewbig from "../../assets/images/x_viewtrip_img.png";
import viewsm1 from "../../assets/images/x_viewtrip_sm1.png";
import viewsm2 from "../../assets/images/x_viewtrip_sm2.png";

import ReviewData from "../../data/ReviewData";

import "../../css/ViewReviewTrip.css";

const PassengerDetails = ({ passengerdata }) => (
  <tr>
    <td>{passengerdata?.title}</td>
    <td>{passengerdata?.firstname}</td>
    <td>{passengerdata?.middlename}</td>
    <td>{passengerdata?.lastname}</td>
    <td>{ReviewTime(passengerdata?.dob).format("DD-MM-YYYY")}</td>
  </tr>
);

const ContactInfopart1 = ({ part1 }) => (
  <tr>
    <td>{part1?.title}</td>
    <td>{part1?.firstname}</td>
    <td>{part1?.middlename}</td>
    <td>{part1?.lastname}</td>
    <td>{part1?.email}</td>
  </tr>
);

const ContactInfopart2 = ({ part2 }) => (
  <tr>
    <td>{part2?.number}</td>
    <td>{part2?.nationality}</td>
    <td>{part2?.region}</td>
    <td>{part2?.address}</td>
  </tr>
);

const EContactInfopart1 = ({ part1 }) => (
  <tr>
    <td>{part1?.title}</td>
    <td>{part1?.firstname}</td>
    <td>{part1?.middlename}</td>
    <td>{part1?.lastname}</td>
    <td>{part1?.email}</td>
  </tr>
);

const EContactInfopart2 = ({ part2 }) => (
  <tr>
    <td>{part2?.number}</td>
    <td>{part2?.nationality}</td>
    <td>{part2?.region}</td>
    <td>{part2?.address}</td>
  </tr>
);

const DashContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
`;

const CardWrapper = styled.div`
  padding: 30px 30px 15px 30px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
export default () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-fluid">
        <DashContentWrapper>
          <div className="">
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
          </div>
          <div className="dash__section2 container-fluid px-0">
            <CardWrapper className="container-fluid">
              <div className=" row">
                <div className=" col-xl-8">
                  <div className="view_bigimg">
                    <img src={viewbig} alt="" />
                  </div>
                </div>
                <div className="d-flex flex-row flex-wrap col-xl-4">
                  <div className="d-flex flex-row ">
                    <div className="view_smimg">
                      <img src={viewsm1} alt="" className=" mx-2 " />
                    </div>
                    <div className="view_smimg">
                      <img src={viewsm1} alt="" className=" mx-2 " />
                    </div>
                  </div>
                  <div className="d-flex flex-row ">
                    <div className="view_smimg">
                      <img src={viewsm2} alt="" className=" mx-2 " />
                    </div>
                    <div className="view_smimg">
                      <img src={viewsm2} alt="" className=" mx-2 " />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-baseline">
                <div className="col-xl-8">
                  <span className="d-flex flex-row pt-4 pb-3 align-items-center">
                    <h5 className="pe-3 mb-0 _heading">
                      {ReviewData.ReviewDetails.map((e) => e.title)}
                    </h5>{" "}
                    <div>
                      <img src={editicon} alt="" className="edit_icon" />
                    </div>
                  </span>

                  <p className="_subheading">
                    {ReviewData.ReviewDetails.map((e) => e.description)}
                  </p>
                </div>
                <div className="col-xl-4 ps-1">
                  {/* left section */}
                  <div>
                    {ReviewData.ReviewDetails.map((tdetails) => (
                      <>
                        {/* left first section */}
                        <div className="row ">
                          <div className="col">
                            <p className="_heading_leftsection mb-1">
                              Trip Duration
                            </p>
                            <p className="_subheading_leftsection">
                              {tdetails.trip_details.tripduration}
                            </p>
                          </div>
                          <div className="col">
                            <p className="_heading_leftsection mb-1">
                              Age Range
                            </p>
                            <p className="_subheading_leftsection">
                              {" "}
                              {tdetails.trip_details.agerange}
                            </p>
                          </div>

                          <div className="col">
                            <p className="_heading_leftsection mb-1">
                              Trip Price
                            </p>
                            <p className="_subheading_leftsection">
                              {tdetails.trip_details.amount}
                            </p>
                          </div>
                        </div>

                        {/* left section section */}
                        <div className="row">
                          <div className="col">
                            <p className="_heading_leftsection mb-1">
                              Travel Style
                            </p>
                            <p className="_subheading_leftsection">
                              {tdetails.trip_details.travelstyle}
                            </p>
                          </div>
                          <div className="col">
                            <p className="_heading_leftsection mb-1">
                              Price Per Person
                            </p>
                            <p className="_subheading_leftsection">
                              {tdetails.trip_details.price_per_person}
                            </p>
                          </div>
                          <div className="col">
                            <p className="_heading_leftsection mb-1">
                              Accomodation
                            </p>
                            <img src="" alt="" />
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-8">
                  <h5 className="_heading">Other Activities</h5>
                  <div className="d-flex flex-row flex-wrap">
                    {ReviewData.ReviewDetails.map((activities, i) =>
                      activities.other_act.map((e, j) => (
                        <div className="badge rounded-pill pill" key={j}>
                          <p className=" p-2 mb-0">{e}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
                <div className="col-xl-4 ps-1">
                  <h5 className="_heading">What's included</h5>
                  <div className="d-flex flex-row flex-wrap">
                    {ReviewData.ReviewDetails.map((activities, i) =>
                      activities.Included.map((e, j) => (
                        <div className="badge rounded-pill pill m-2" key={j}>
                          <p className=" p-2 mb-0">{e}</p>
                        </div>
                      ))
                    )}

                    <div></div>
                  </div>
                </div>
              </div>

              {/* Inserting the next rows (review details) */}
              <div className="row">
                <div className="col-xl-9">
                  {/* Passengers Details */}
                  <div>
                    <p className="booking_id">
                      Booking ID - <span>4243424</span>{" "}
                    </p>
                    <p className="booked_title">Passengers Details</p>
                    <p className="booked_cat">Adult</p>
                    <div className="d-flex flex-row flex-wrap">
                      <table class="table table-borderless">
                        <thead className="table_head">
                          <tr>
                            <th>Title</th>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Last Name</th>
                            <th>Date of Birth</th>
                          </tr>
                        </thead>
                        <tbody className="table_body">
                          {ReviewData.ReviewDetails.map((pdata, i) => (
                            <PassengerDetails
                              passengerdata={pdata.personal_dt}
                              key={i}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* contact info */}
                  <div>
                    <p className="booked_title">Contact Information</p>
                    <div className="d-flex flex-row flex-wrap">
                      <table class="table table-borderless">
                        <thead className="table_head">
                          <tr>
                            <th>Title</th>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                          </tr>
                        </thead>
                        <tbody className="table_body">
                          {ReviewData.ReviewDetails.map((cinfo, i) => (
                            <ContactInfopart1 part1={cinfo.cinfo} key={i} />
                          ))}
                        </tbody>
                        <thead className="table_head">
                          <tr>
                            <th>Phone Number</th>
                            <th>Nationality</th>
                            <th>Region</th>
                            <th>Address</th>
                          </tr>
                        </thead>
                        <tbody className="table_body">
                          {ReviewData.ReviewDetails.map((cinfo, i) => (
                            <ContactInfopart2 part2={cinfo.cinfo} key={i} />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* emergency contact info */}
                  <div>
                    <p className="booked_title">
                      Emergency Contact Information
                    </p>
                    <div className="d-flex flex-row flex-wrap">
                      <table class="table table-borderless">
                        <thead className="table_head">
                          <tr>
                            <th>Title</th>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                          </tr>
                        </thead>
                        <tbody className="table_body">
                          {ReviewData.ReviewDetails.map((cinfo, i) => (
                            <EContactInfopart1 part1={cinfo.einfo} key={i} />
                          ))}
                        </tbody>
                        <thead className="table_head">
                          <tr>
                            <th>Phone umber</th>
                            <th>Nationality</th>
                            <th>Region</th>
                            <th>Address</th>
                          </tr>
                        </thead>
                        <tbody className="table_body">
                          {ReviewData.ReviewDetails.map((cinfo, i) => (
                            <EContactInfopart2 part2={cinfo.einfo} key={i} />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* payment details */}
                  <div className="col-xl-6 col-md-6">
                    <div>
                      <p className="booked_title">Payment Details</p>

                      <div className="d-flex flex-row flex-wrap">
                        <table class="table table-borderless">
                          <thead className="table_head">
                            <tr>
                              <th>Amount</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody className="table_body">
                            <tr>
                              <td>$15000</td>
                              <td>Successful</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardWrapper>
          </div>
        </DashContentWrapper>
      </div>
    </>
  );
};
