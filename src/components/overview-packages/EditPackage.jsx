import React, { useState } from "react";
import styled from "styled-components";
// import download from "../assets/images/x_download_icon.png";
import { Link, useNavigate } from "react-router-dom";

import "../../css/EditPackage.css";
import Button from "../buttons/Button";
import ButtonWhite from "../buttons/ButtonWhite";
import InputFIle from "../inputs/InputFIle";
import InputFilesm from "../inputs/InputFilesm";

const DashContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
`;

const EditWrapper = styled.div`
  padding: 30px 30px 15px 30px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  input {
    background: rgba(247, 249, 248, 0.8);
  }

  select {
    /* background: rgba(247, 249, 248, 0.8); */
    padding: 8px;
  }

  textarea {
    background: rgba(247, 249, 248, 0.8);
  }

  label {
    font-weight: 500;
    font-size: 14px;
    color: #32325d;
  }
`;

export default () => {
  const navigate = useNavigate();

  let [inputData, setInputData] = useState("");
  let [pilldisplay, setPilldisplay] = useState([]);

  let [inputData2, setInputData2] = useState("");
  let [pilldisplay2, setPilldisplay2] = useState([]);

  console.log(pilldisplay);

  const addPill = () => {
    if (!inputData) return;
    setPilldisplay([
      ...pilldisplay,
      {
        id: pilldisplay.length,
        value: inputData,
      },
    ]);
    setInputData("");
  };

  const removePillHandler = (e) => {
    let x = e.target.getAttribute("removePills");
    setPilldisplay(pilldisplay.filter((pills) => pills.value !== x));
  };

  const addPill2 = () => {
    if (!inputData2) return;
    setPilldisplay2([
      ...pilldisplay2,
      {
        id: pilldisplay2.length,
        value: inputData2,
      },
    ]);
    setInputData2("");
  };

  const removePillHandler2 = (e) => {
    let x = e.target.getAttribute("removePills");
    setPilldisplay2(pilldisplay2.filter((pills) => pills.value !== x));
  };
  return (
    <>
      <div className="container-fluid">
        <DashContentWrapper>
          <div className="row">
            <nav className="breadcrumb_wrapper" aria-label="breadcrumb">
              <ol className="breadcrumb ol_list_breadcrumb">
                <li className="breadcrumb-item">
                  <Link to={navigate("/overview")} className="breadcrumb_link">
                    Overview
                  </Link>{" "}
                </li>
                <li
                  className="breadcrumb-item active breadcrumb_current"
                  aria-current="page"
                >{`Hiking & Walking`}</li>
              </ol>
            </nav>
          </div>
          <div className="dash__section2 container-fluid px-0">
            <EditWrapper className="container-fluid">
              <div className="container bg-white p-5 border-round form_wrapper m-0">
                <div className="row g-5">
                  {/* left section */}
                  <div className="col-md-6 border-right">
                    <label htmlFor="nameofpackage" className="form-label">
                      Name of Package
                    </label>
                    <input
                      type="text"
                      className="form-control mb-4"
                      placeholder="Name of Package"
                      aria-label="Name of package"
                      id="nameofpackage"
                    />
                    <label
                      htmlFor="expiringdate"
                      className="form-label"
                    >{`Expiring date (optional)`}</label>
                    <input
                      type="date"
                      className="form-control mb-4"
                      placeholder="Expiring Date"
                      aria-label="Exoiring date"
                      id="expiringdate"
                    />

                    <label htmlFor="itinerary" className="form-label">
                      Itinerary
                    </label>
                    <textarea
                      type="text"
                      className="form-control mb-4"
                      placeholder="Itinerary"
                      aria-label="Itinerary"
                      id="nameofpackage"
                    />
                    <InputFIle title="Thumbnail" />
                    <InputFIle title="Banner" />

                    <label htmlFor="priceperperson" className="form-label">
                      Price per Person
                    </label>
                    <input
                      type="text"
                      className="form-control mb-4"
                      placeholder="Price per person"
                      aria-label="Price per person"
                      id="priceperperson"
                    />
                    <label htmlFor="tripcode" className="form-label">
                      Trip code
                    </label>
                    <input
                      type="text"
                      className="form-control mb-4"
                      placeholder="Trip code"
                      aria-label="Trip code"
                      id="tripcode"
                    />
                  </div>
                  {/* left section end*/}

                  {/* right section */}
                  <div className="col-md-6">
                    <label htmlFor="travelstyle" className="form-label">
                      Travel Style
                    </label>
                    <div className="select_wrapper">
                      <select
                        className=" form-select mb-4"
                        name="Travel Style"
                        aria-label="Travel Style"
                        id="travelstyle"
                        defaultValue="Self Guided"
                      >
                        <option value="Self Guided">Self Guided</option>
                        <option value="Small Group < 12">{`Small Group < 12`}</option>
                        <option value="Large Group 20 >">{`Large Group 20 >`}</option>
                      </select>
                    </div>

                    <label htmlFor="expiringdate" className="form-label">
                      Age range
                    </label>
                    <div className="select_wrapper">
                      <select
                        className=" form-select mb-4"
                        name="agerange"
                        id="agerange"
                        defaultValue="5-9"
                      >
                        <option value="5-9">5-9</option>
                        <option value="10-15">10-15</option>
                        <option value="16-20">16-20</option>
                        <option value="20-30">20-30</option>
                        <option value="50 and above">50 and above</option>
                      </select>
                    </div>

                    <label htmlFor="accomodationlodging" className="form-label">
                      Accomodation/Lodging
                    </label>
                    <div className="select_wrapper mb-4">
                      <select
                        className=" form-select"
                        name="accomodationlodging "
                        id="accomodationlodging"
                        defaultValue="2 star"
                      >
                        <option value="2 star">2 star</option>
                        <option value="3 star">3 star</option>
                        <option value="4 star">4 star</option>
                        <option value="5 star">5 star</option>
                      </select>
                    </div>

                    <label htmlFor="priceperperson" className="form-label">
                      Activities
                    </label>
                    <div className="mb-4">
                      <div className="pill_display p-3 mb-1">
                        {pilldisplay.map((pill) => (
                          <button
                            className="pill_button_display pe-2"
                            key={pill.id}
                          >
                            {pill.value}

                            <span
                              className="pill_button_cancel"
                              removePills={pill.value}
                              onClick={removePillHandler}
                            >
                              {" "}
                              | X
                            </span>
                          </button>
                        ))}
                        <button className="pill_button_display pe-2">
                          Biking{" "}
                          <span className="pill_button_cancel"> | X</span>
                        </button>
                      </div>

                      <div className="pill_display_s2 p-1">
                        <input
                          type=""
                          className="form-control me-2 border-0"
                          placeholder="Type activities..."
                          aria-label="Type activities"
                          id="activities"
                          value={inputData}
                          onChange={(e) => setInputData(e.target.value.trim())}
                          // pilldisplay.activities = e.target.value;
                          name="activities"
                        />
                        <button className="pill_button" onClick={addPill}>
                          {" "}
                          Add
                        </button>
                      </div>
                    </div>

                    <label htmlFor="priceperperson" className="form-label">
                      What's included
                    </label>
                    <div className="mb-4">
                      <div className="pill_display p-3 mb-1">
                        {pilldisplay2.map((pill) => (
                          <button className="pill_button_display" key={pill.id}>
                            {pill.value}

                            <span
                              className="pill_button_cancel"
                              removePills={pill.value}
                              onClick={removePillHandler2}
                            >
                              {" "}
                              | X
                            </span>
                          </button>
                        ))}
                        <button className="pill_button_display pe-2">
                          Biking{" "}
                          <span className="pill_button_cancel"> | X</span>
                        </button>
                      </div>

                      <div className="pill_display_s2 p-1">
                        <input
                          type=""
                          className="form-control me-2 border-0"
                          placeholder="Whats included..."
                          aria-label="What's included"
                          id="included"
                          value={inputData2}
                          onChange={(e) => setInputData2(e.target.value.trim())}
                          // pilldisplay.activities = e.target.value;
                          name="included"
                        />
                        <button className="pill_button" onClick={addPill2}>
                          {" "}
                          Add
                        </button>
                      </div>
                    </div>
                    <div className="file_inputsm">
                      <InputFilesm title={`Cites & Attractions`} />
                    </div>

                    <div className="d-flex flex-row flex-wrap">
                      <div className="pe-3 py-2">
                        <Button width={200} height={45} content="ADD PACKAGE" />
                      </div>
                      <div className="py-2">
                        <ButtonWhite
                          width={150}
                          height={45}
                          content="SAVE DRAFT"
                        />
                      </div>
                    </div>
                  </div>
                  {/* right section ended */}
                </div>
              </div>
            </EditWrapper>
          </div>
        </DashContentWrapper>
      </div>
    </>
  );
};
