import React, { useState } from "react";
import BookedTime from "moment";

import styled from "styled-components";
import search from "../../assets/images/x_search_icon.png";
import action from "../../assets/images/x_action.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import mockData from "../../data/AminData";

import "../../css/BookedPackages.css";

const BookedAdultTable = ({ data, availability }) => (
  <tr>
    <td>{data?.adult_firstName}</td>
    <td>{data?.adult_middleName}</td>
    <td>{data?.email_address}</td>
    <td>{BookedTime(availability).format("MM/DD/YY")}</td>
    {/* <td>
      {BookedTime(data?.start_date).format("MM/DD/YY")} -{" "}
      {BookedTime(data?.end_date).format("MM/DD/YY")}
    </td> */}
    <td>{data?.booking_no}</td>
    <td>
      <Link to="reviewdetails">
        <div className="action">
          <img src={action} />
        </div>
      </Link>
    </td>
  </tr>
);
const BookedTeenTable = ({ data, availability }) => (
  <tr>
    <td>{data?.teenager_firstName}</td>
    <td>{data?.teenager_middleName}</td>
    <td>{data?.email_address}</td>
    <td>{BookedTime(availability).format("MM/DD/YY")}</td>
    {/* <td>
      {BookedTime(data?.start_date).format("MM/DD/YY")} -{" "}
      {BookedTime(data?.end_date).format("MM/DD/YY")}
    </td> */}
    <td>{data?.booking_no}</td>
    <td>
      <Link to="reviewdetails">
        <div className="action">
          <img src={action} />
        </div>
      </Link>
    </td>
  </tr>
);
const BookedChildrenTable = ({ data, availability }) => (
  <tr>
    <td>{data?.child_firstName}</td>
    <td>{data?.child_middleName}</td>
    <td>{data?.email_address}</td>
    <td>{BookedTime(availability).format("MM/DD/YY")}</td>
    {/* <td>
      {BookedTime(data?.start_date).format("MM/DD/YY")} -{" "}
      {BookedTime(data?.end_date).format("MM/DD/YY")}
    </td> */}
    <td>{data?.booking_no}</td>
    <td>
      <Link to="reviewdetails">
        <div className="action">
          <img src={action} />
        </div>
      </Link>
    </td>
  </tr>
);
const BookedInfantTable = ({ data, availability }) => (
  <tr>
    <td>{data?.infant_firstName}</td>
    <td>{data?.infant_middleName}</td>
    <td>{data?.email_address}</td>
    <td>{BookedTime(availability).format("MM/DD/YY")}</td>
    {/* <td>
      {BookedTime(data?.start_date).format("MM/DD/YY")} -{" "}
      {BookedTime(data?.end_date).format("MM/DD/YY")}
    </td> */}
    <td>{data?.booking_no}</td>
    <td>
      <Link to="reviewdetails">
        <div className="action">
          <img src={action} />
        </div>
      </Link>
    </td>
  </tr>
);

// const BookedTable = ({ data }) => (
//   <tr>
//     <td>{data?.firstname}</td>
//     <td>{data?.lastname}</td>
//     <td>{data?.email_address}</td>
//     <td>
//       {BookedTime(data?.start_date).format("MM/DD/YY")} -{" "}
//       {BookedTime(data?.end_date).format("MM/DD/YY")}
//     </td>
//     <td>{data?.booking_no}</td>
//     <td>
//       <Link to="reviewdetails">
//         <div className="action">
//           <img src={action} />
//         </div>
//       </Link>
//     </td>
//   </tr>
// );

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
  let params = useParams();
  const [getBookedList, setGetBookedList] = React.useState("");
  const bookedUsers = JSON.parse(localStorage.getItem("bookedUsers"));

  React.useEffect(() => {
    const listUsers = bookedUsers?.findIndex((i) => i._id === params.id);
    console.log(listUsers);
    let booked = bookedUsers[listUsers];
    setGetBookedList(booked);
    // return () => viewList;
  }, []);

  console.log(getBookedList);
  // const navigate = useNavigate();

  // to={navigate("/booked")}

  return (
    <>
      <div className="container-fluid">
        <DashContentWrapper>
          <div className="">
            <nav className="breadcrumb_wrapper" aria-label="breadcrumb">
              <ol className="breadcrumb ol_list_breadcrumb">
                <li className="breadcrumb-item">
                  <Link to={""} className="breadcrumb_link">
                    Booked packages
                  </Link>{" "}
                </li>
                <li
                  className="breadcrumb-item active breadcrumb_current"
                  aria-current="page"
                >
                  Review
                </li>
              </ol>
            </nav>
            {/* <p className="_heading">Booked packages </p> */}
          </div>

          <div className="dash__section2 container-fluid px-1">
            <BookedWrapper className="container-fluid my-1 ">
              <div className="row bg-white p-3">
                <div className="d-flex flex-row justify-content-between align-items-center mb-5">
                  <div className="review_title">
                    {getBookedList?.packageId?.packageName}
                  </div>
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
                        {/* <th scope="col">DATE(From - To)</th> */}
                        <th scope="col">BOOKED DATE</th>
                        <th scope="col">BOOKING NO</th>
                        <th scope="col">ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {mockData.bookingData.map((bkdata, i) => (
                        <BookedTable data={bkdata} key={i} />
                      ))} */}
                      {getBookedList?.adults?.map((bkdata, i) => (
                        <BookedAdultTable
                          data={bkdata}
                          availability={getBookedList.updatedAt}
                          key={i}
                        />
                      ))}
                      {getBookedList?.teenagers?.map((bkdata, i) => (
                        <BookedTeenTable
                          data={bkdata}
                          availability={getBookedList.updatedAt}
                          key={i}
                        />
                      ))}
                      {getBookedList?.children?.map((bkdata, i) => (
                        <BookedChildrenTable
                          data={bkdata}
                          availability={getBookedList.updatedAt}
                          key={i}
                        />
                      ))}
                      {getBookedList?.infants?.map((bkdata, i) => (
                        <BookedInfantTable
                          data={bkdata}
                          availability={getBookedList.updatedAt}
                          key={i}
                        />
                      ))}
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
