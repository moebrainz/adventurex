import React from "react";
import styled from "styled-components";
import filter from "../assets/dashboard/x_filter_icon.png";
// import signups from "../assets/dashboard/x_signup_icon.png";
// import completed from "../assets/dashboard/x_ctest.png";
// import uncompleted from "../assets/dashboard/x_uctest.png";
// import savedpackages from "../assets/dashboard/x_saved_packages.png";
// import bookedpackages from "../assets/dashboard/x_booked_packages.png";
import DashMockData from "../data/DashData";
import useLogin from "./hooks/useLogin";

import "../css/DashboardContent.css";
import InfoCard from "./card-reviews/InfoCard";

const DashContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
`;

const FilterWrapper = styled.div`
  border-bottom: 0.5px solid rgba(50, 50, 93, 0.4);
`;

const CardWrapper = styled.div`
  padding: 30px 0px 15px 30px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;
const DashboardContent = () => {
  const { auth } = useLogin();
  return (
    <>
      <div className="container-fluid">
        <DashContentWrapper>
          <div className="">
            <p className="_heading">{`Hello ${auth.firstName}`}</p>
            <p className="_subheading">Here is your latest report</p>
          </div>
          <div className="dash__section2 container-fluid px-0">
            <FilterWrapper>
              <div className="filter__button dropdown ">
                <div
                  className="border-0 filter__wrapper"
                  role="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <button className="border-0 bg-white ">Filter</button>
                  <div className="filter_icon_wrapper">
                    <img src={filter} className="filter__icon" alt="" />
                  </div>
                </div>

                <ul
                  className="dropdown-menu mt-2"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Daily
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Monthly
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Weekly
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Annually
                    </a>
                  </li>
                </ul>
              </div>
            </FilterWrapper>

            <CardWrapper className="">
              <div className="gap-4 p-3">
                <div className="d-flex flex-row flex-wrap gap-5 ">
                  {DashMockData.DataSummary.map((dashdata) => (
                    <InfoCard
                      cardicons={dashdata.cardicons}
                      cardcontent={dashdata.cardcontent}
                      cardvalue={dashdata.cardvalue}
                    />
                  ))}
                </div>
              </div>
            </CardWrapper>
          </div>
        </DashContentWrapper>
      </div>
    </>
  );
};

export default DashboardContent;
