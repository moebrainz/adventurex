import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import editicon from "../../assets/images/x_editicon.png";
import viewbig from "../../assets/images/x_viewtrip_img.png";
import viewsm1 from "../../assets/images/x_viewtrip_sm1.png";
import viewsm2 from "../../assets/images/x_viewtrip_sm2.png";

import "../../css/ViewReviewTrip.css";

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
                  {/* <div className="row ">
                    <div className="col ">
                      <div className="view_smimg">
                        <img src={viewsm2} alt="" className=" mx-2 mb-2" />
                      </div>
                      <div className="view_smimg">
                        <img src={viewsm2} alt="" className=" mx-2 mb-2" />
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="row align-items-baseline">
                <div className="col-xl-8">
                  <span className="d-flex flex-row pt-4 pb-3 align-items-center">
                    <h5 className="pe-3 mb-0 _heading">{`Hiking & Walking`}</h5>{" "}
                    <div>
                      <img src={editicon} alt="" className="edit_icon" />
                    </div>
                  </span>

                  <p className="_subheading">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. At id amet non, id tincidunt. Fames in diam sit quis eget consectetur pretium augue. Sed donec aliquam amet fermentum sem. Egestas justo, accumsan tortor suspendisse. Vitae purus molestie diam lacus scelerisque. Accumsan orci nibh ullamcorper hac venenatis gravida ut aliquam. Rhoncus, morbi tortor leo diam. Sed maecenas nisl pretium at nunc aliquet. Ac lectus.`}</p>
                </div>
                <div className="col-xl-4 ps-1">
                  {/* left section */}
                  <div>
                    {/* left first section */}
                    <div className="row ">
                      <div className="col">
                        <p className="_heading_leftsection mb-1">
                          Trip Duration
                        </p>
                        <p className="_subheading_leftsection">3 - 5 Hours</p>
                      </div>
                      <div className="col">
                        <p className="_heading_leftsection mb-1">Age Range</p>
                        <p className="_subheading_leftsection">14 - 25 years</p>
                      </div>
                      <div className="col">
                        <p className="_heading_leftsection mb-1">Trip Price</p>
                        <p className="_subheading_leftsection">$15000</p>
                      </div>
                    </div>
                    {/* left section section */}
                    <div className="row">
                      <div className="col">
                        <p className="_heading_leftsection mb-1">
                          Travel Style
                        </p>
                        <p className="_subheading_leftsection">Small group</p>
                      </div>
                      <div className="col">
                        <p className="_heading_leftsection mb-1">
                          Price Per Person
                        </p>
                        <p className="_subheading_leftsection">$25</p>
                      </div>
                      <div className="col">
                        <p className="_heading_leftsection mb-1">
                          Accomodation
                        </p>
                        <img src="" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-8">
                  <h5 className="_heading">Other Activities</h5>
                  <div className="d-flex flex-row flex-wrap">
                    <div className="badge rounded-pill pill ">
                      <p className=" p-2 mb-0">Bikings</p>
                    </div>
                    <div className="badge rounded-pill pill ">
                      <p className=" p-2  mb-0">Snow Boarding</p>
                    </div>
                    <div className="badge rounded-pill pill ">
                      <p className=" p-2  mb-0">Cooking</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 ps-1">
                  <h5 className="_heading">What's included</h5>
                  <div className="d-flex flex-row flex-wrap">
                    <div className="badge rounded-pill pill my-2">
                      <p className=" p-2 mb-0">Bikings</p>
                    </div>
                    <div className="badge rounded-pill pill my-2 ">
                      <p className=" p-2  mb-0">Snow Boarding</p>
                    </div>
                    <div className="badge rounded-pill pill my-2">
                      <p className=" p-2  mb-0">Cooking</p>
                    </div>

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
                          <tr>
                            <td>Mr</td>
                            <td>Maguire</td>
                            <td>Harry</td>
                            <td>John</td>
                            <td>23-03-1990</td>
                          </tr>
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
                            <th>xyz@gmail.com</th>
                          </tr>
                        </thead>
                        <tbody className="table_body">
                          <tr>
                            <td>Mr</td>
                            <td>Maguire</td>
                            <td>Harry</td>
                            <td>John</td>
                            <td>23-03-1990</td>
                          </tr>
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
                          <tr>
                            <td>+341242313</td>
                            <td>Kenyan</td>
                            <td>Coastal</td>
                            <td>xyz street</td>
                          </tr>
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
                            <th>xyz@gmail.com</th>
                          </tr>
                        </thead>
                        <tbody className="table_body">
                          <tr>
                            <td>Mr</td>
                            <td>Maguire</td>
                            <td>Harry</td>
                            <td>John</td>
                            <td>23-03-1990</td>
                          </tr>
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
                          <tr>
                            <td>+341242313</td>
                            <td>Kenyan</td>
                            <td>Coastal</td>
                            <td>xyz street</td>
                          </tr>
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
