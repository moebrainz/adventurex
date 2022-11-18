import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import editicon from "../../assets/images/x_editicon.png";
import viewbig from "../../assets/images/x_viewtrip_img.png";
import viewsm1 from "../../assets/images/x_viewtrip_sm1.png";
import viewsm2 from "../../assets/images/x_viewtrip_sm2.png";
import useLogin from "../hooks/useLogin";

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
  let params = useParams();
  const [getviewList, setGetViewList] = React.useState("");

  const { listPackages } = useLogin();

  React.useEffect(() => {
    const viewPackages = listPackages.findIndex((i) => i._id === params.id);
    let viewList = listPackages[viewPackages];
    setGetViewList(viewList);
    // return () => viewList;
  }, []);

  // let included = getviewList.included;
  // const style = tStyle.replace("_", " ");
  // console.log(included, "from included");
  // console.log(style, "from travel style");
  // console.log(getviewList, "corresponding data to the package number");

  // console.log(params, "from params");
  return (
    <>
      <div className="container-fluid">
        <DashContentWrapper>
          <div className=" row">
            <nav className="breadcrumb_wrapper" aria-label="breadcrumb">
              <ol className="breadcrumb ol_list_breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/overview" className="breadcrumb_link">
                    Overview
                  </Link>{" "}
                </li>
                <li
                  className="breadcrumb-item active breadcrumb_current"
                  aria-current="page"
                >{`Hiking & Walking`}</li>
              </ol>
            </nav>
            {/* <p className="_heading">{`Overview > Hiking & Walking`} </p> */}
          </div>
          <div className="dash__section2 container-fluid px-0">
            <CardWrapper className="container-fluid">
              <div className=" row">
                <div className=" col-xl-8">
                  <div className="view_bigimg">
                    <img src={getviewList.bannerImg} alt="" />
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
                    <h5 className="pe-3 mb-0 _heading">
                      {getviewList.packageName}
                    </h5>{" "}
                    {/* {`Hiking & Walking`} */}
                    {/* <div>
                      <img src={editicon} alt="" className="edit_icon" />
                    </div> */}
                  </span>

                  <p className="_subheading">{getviewList.about}</p>
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
                        <p className="_subheading_leftsection">
                          {getviewList.tripDuration}
                        </p>
                      </div>
                      <div className="col">
                        <p className="_heading_leftsection mb-1">Age Range</p>
                        <p className="_subheading_leftsection">
                          {`${getviewList.ageRange}`}{" "}
                        </p>
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
                        <p className="_subheading_leftsection">
                          {getviewList.travelStyle}
                        </p>
                      </div>
                      <div className="col">
                        <p className="_heading_leftsection mb-1">
                          Price Per Person
                        </p>
                        <p className="_subheading_leftsection">{`$${getviewList.pricePerPerson}`}</p>
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
                  <h5 className="_heading"> Activities</h5>
                  <div className="d-flex flex-row flex-wrap">
                    {getviewList.activities?.map((list, i) => {
                      let a_list = JSON.parse(list);
                      console.log(a_list, "this list");

                      return a_list.map((e) => (
                        <div
                          className="badge rounded-pill pill my-2 mx-2"
                          key={i}
                        >
                          <p className=" p-2 mb-0">{e?.value}</p>
                          {console.log(e?.value, "values")}
                        </div>
                      ));
                    })}
                  </div>
                </div>
                {/* <div className="col-xl-4 ps-1">
                  <h5 className="_heading">What's included</h5>
                  <div className="d-flex flex-row flex-wrap">
                    {getviewList.included?.map((list) => {
                      let a_list = JSON.parse(list);

                      console.log(a_list, "this list");
                      return a_list.map((e, i) => (
                        <div
                          className="badge rounded-pill pill my-2 mx-2"
                          key={i}
                        >
                          {console.log(
                            JSON.stringify(localStorage?.setItem("list", e[1])),
                            "from storage list"
                          )}
                          <p className=" p-2 mb-0">{e?.value}</p>
                        </div>
                      ));
                    })}

                    <div></div>
                  </div>
                </div> */}
              </div>
              {/* 
              For Inserting the next rows
              <div className="row"></div> */}
            </CardWrapper>
          </div>
        </DashContentWrapper>
      </div>
    </>
  );
};
