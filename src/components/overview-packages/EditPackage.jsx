import React, { useState } from "react";
import styled from "styled-components";
// import download from "../assets/images/x_download_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

import Button from "../buttons/Button";
import ButtonWhite from "../buttons/ButtonWhite";
// import InputThumbnail from "../inputs/InputThumbnail";
import InputFIle from "../inputs/InputFIle";
import InputFilesm from "../inputs/InputFilesm";
import useLogin from "../../components/hooks/useLogin";
//import InputSmall from "../inputs/InputSmall";
import postaxios from "../../api/postaxios";

import "../../css/EditPackage.css";

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

const PACKAGE_URL = "/add-package";

export default () => {
  const navigate = useNavigate();
  const toast = useToast();

  //call the global state that stores the images
  let { thumbImg } = useLogin();

  //collect all data
  const [isLoading, setIsLoading] = React.useState(false);

  //DATA STATES FOR EACH INPUTS
  const [packageName, setPackageName] = React.useState("");
  const [expiringDate, setExpiringDate] = React.useState("");
  const [itinery, seItitinery] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [tripCode, setTripCode] = React.useState("");
  const [travelStyle, setTravelStyle] = React.useState("");
  const [ageRange, setAgeRange] = React.useState("");
  const [accomodationLodging, setAccomodationLodging] = React.useState("");
  const [thumbnail, setThumbnail] = React.useState("");
  const [bannerthumbnail, setBannerthumbnail] = React.useState("");
  const [travelDuration, setTravelDuration] = React.useState("");
  const [file, setFile] = React.useState([]);

  let [inputData, setInputData] = useState("");
  let [pilldisplay, setPilldisplay] = useState([]);

  let [inputData2, setInputData2] = useState("");
  let [pilldisplay2, setPilldisplay2] = useState([]);

  let [loading, setLoading] = React.useState(false);
  let apStle = {
    display: "block",
    margin: "0 auto",
    borderColor: "white",
  };

  // console.log(pilldisplay);
  //handle pill function
  const addPill = (e) => {
    e.preventDefault();

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

  const addPill2 = (e) => {
    e.preventDefault();

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

  const handleAddPackage = async (e) => {
    e.preventDefault();

    const packages = {
      package_name: packageName,
      epiring_date: expiringDate,
      itenerary: itinery,
      price_per_person: price,
      trip_code: tripCode,
      travel_style: travelStyle,
      age_range: ageRange,
      accomodation: accomodationLodging,
      activities: pilldisplay,
      included: pilldisplay2,
      thumbnail: thumbnail,
      banner: bannerthumbnail,
      // travel_duration: travelDuration,
      // attractions: file,
    };

    let frmD = new FormData();
    frmD.append("package_name", packageName);
    frmD.append("epiring_date", expiringDate);
    frmD.append("itenerary", itinery);
    frmD.append("price_per_person", price);
    frmD.append("trip_code", tripCode);
    frmD.append("travel_style", travelStyle);
    frmD.append("age_range", ageRange);
    frmD.append("accomodation", accomodationLodging);
    frmD.append("activities", JSON.stringify(pilldisplay));
    frmD.append("included", JSON.stringify(pilldisplay2));
    frmD.append("thumbnail", thumbnail);
    frmD.append("banner", bannerthumbnail);
    frmD.append("travel_duration", travelDuration);

    console.log(frmD);
    // let sendData = JSON.stringify({ packages });
    setLoading(true);

    const response = await postaxios.post(PACKAGE_URL, frmD);

    try {
      if (response || response?.data?.success === true) {
        return toast(
          response?.data?.message || {
            position: "bottom-right",
            title: "Package created.",
            description: "Your package have been added successfully.",
            status: "success",
            duration: 9000,
            isClosable: true,
          }
        );
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message, "error occured");
      if (response.error || response?.data?.success !== true) {
        return toast(
          response?.data?.message || {
            position: "bottom-right",
            title: "Error Creating Package.",
            description: "Please check the fields and input required fields.",
            status: "error",
            duration: 9000,
            isClosable: true,
          }
        );
      }
    }
    setLoading(false);

    // .catch((e) => ({ error: e }));
    // setLoading(true);

    // if (response || response?.data?.success === true) {
    //   return toast(
    //     response?.data?.message || {
    //       position: "bottom-right",
    //       title: "Package created.",
    //       description: "Your package have been added successfully.",
    //       status: "success",
    //       duration: 9000,
    //       isClosable: true,
    //     }
    //   );
    // }

    //  else {
    //     return toast(
    //       response?.data?.message || {
    //         position: "bottom-right",
    //         title: "Package created.",
    //         description: "Your package have been added successfully.",
    //         status: "success",
    //         duration: 9000,
    //         isClosable: true,
    //       }
    //     );
    //   }

    // console.log(response);
  };
  // console.log(packageName);

  return (
    <>
      {" "}
      <div className="container-fluid">
        <DashContentWrapper>
          <div className="row">
            <nav className="breadcrumb_wrapper" aria-label="breadcrumb">
              <ol className="breadcrumb ol_list_breadcrumb">
                <li className="breadcrumb-item">
                  <Link
                    onClick={() => navigate(-1)}
                    className="breadcrumb_link"
                  >
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
              {/* {loading ? (
                <div className="spinner_wrapper">
                  <Spinner thickness="4px" size="lg" color="#0fa05a" />
                </div>
              ) : ( */}
              <div className="container bg-white p-5 border-round form_wrapper m-0">
                <form onSubmit={handleAddPackage}>
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
                        // aria-label="Name of package"
                        id="nameofpackage"
                        name="packageName"
                        value={packageName}
                        onChange={(e) => setPackageName(e.target.value)}
                        // required
                      />
                      <label
                        htmlFor="expiringdate"
                        className="form-label"
                      >{`Expiring date (optional)`}</label>
                      <input
                        type="date"
                        className="form-control mb-4"
                        // aria-label="Exoiring date"
                        id="expiringdate"
                        name="expiringDate"
                        value={expiringDate}
                        onChange={(e) => setExpiringDate(e.target.value)}
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
                        name="itinery"
                        value={itinery}
                        onChange={(e) => seItitinery(e.target.value)}
                      />
                      <InputFIle
                        title="Thumbnail"
                        onChange={(e) => setThumbnail(e)}
                      />
                      <InputFIle
                        title="Banner"
                        onChange={(e) => setBannerthumbnail(e)}
                      />

                      {/* <InputThumbnail
                        title="Thumbnail"
                        thumbvalue={thumbnail}
                        onChange={(e) => setThumbnail(e)}
                      />

                      <InputThumbnail
                        title="Banner"
                        onChange={(e) => setBannerthumbnail(e)}
                      /> */}

                      <label htmlFor="priceperperson" className="form-label">
                        Price per Person
                      </label>
                      <input
                        type="text"
                        className="form-control mb-4"
                        placeholder="Price per person"
                        aria-label="Price per person"
                        id="priceperperson"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
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
                        name="tripCode"
                        value={tripCode}
                        onChange={(e) => setTripCode(e.target.value)}
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
                          name="travelStyle"
                          aria-label="Travel Style"
                          id="travelstyle"
                          value={travelStyle}
                          onChange={(e) => setTravelStyle(e.target.value)}
                        >
                          <option value="self_guided">Self Guided</option>
                          <option value="small_group">{`Small Group < 12`}</option>
                          <option value="large_group">{`Large Group 20 >`}</option>
                        </select>
                      </div>

                      <label htmlFor="tripcode" className="form-label">
                        Travel Duration
                      </label>
                      <input
                        type="text"
                        className="form-control mb-4"
                        placeholder="Travel Duration"
                        aria-label="Trip code"
                        id="tripcode"
                        name="tripCode"
                        value={travelDuration}
                        onChange={(e) => setTravelDuration(e.target.value)}
                      />

                      <label htmlFor="expiringdate" className="form-label">
                        Age range
                      </label>
                      <div className="select_wrapper">
                        <select
                          className=" form-select mb-4"
                          name="ageRange"
                          id="agerange"
                          value={ageRange}
                          onChange={(e) => setAgeRange(e.target.value)}
                        >
                          <option value="5-9">5-9</option>
                          <option value="10-15">10-15</option>
                          <option value="16-20">16-20</option>
                          <option value="20-30">20-30</option>
                          <option value="50 and above">50 and above</option>
                        </select>
                      </div>

                      <label
                        htmlFor="accomodationlodging"
                        className="form-label"
                      >
                        Accomodation/Lodging
                      </label>
                      <div className="select_wrapper mb-4">
                        <select
                          className=" form-select"
                          name="accomodationLodging "
                          id="accomodationlodging"
                          value={accomodationLodging}
                          onChange={(e) =>
                            setAccomodationLodging(e.target.value)
                          }
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
                          {/* <button className="pill_button_display pe-2">
                              Biking{" "}
                              <span className="pill_button_cancel"> | X</span>
                            </button> */}
                        </div>

                        <div className="pill_display_s2 p-1">
                          <input
                            type=""
                            className="form-control me-2 border-0"
                            placeholder="Type activities..."
                            aria-label="Type activities"
                            id="activities"
                            value={inputData}
                            onChange={(e) =>
                              setInputData(e.target.value.trim())
                            }
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
                            <button
                              className="pill_button_display"
                              key={pill.id}
                            >
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
                          {/* <button className="pill_button_display pe-2">
                              Biking{" "}
                              <span className="pill_button_cancel"> | X</span>
                            </button> */}
                        </div>

                        <div className="pill_display_s2 p-1">
                          <input
                            type=""
                            className="form-control me-2 border-0"
                            placeholder="Whats included..."
                            aria-label="What's included"
                            id="included"
                            value={inputData2}
                            onChange={(e) =>
                              setInputData2(e.target.value.trim())
                            }
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
                        <InputFilesm
                          title={`Cites & Attractions`}
                          inputname="file"
                          onChange={(e) => setFile(e)}
                        />
                      </div>

                      <div className="d-flex flex-row flex-wrap">
                        <div className="pe-3 py-2">
                          <Button
                            width={200}
                            height={45}
                            content="ADD PACKAGE"
                            type="submit"
                          />
                        </div>
                        <div className="py-2">
                          <ButtonWhite
                            width={150}
                            height={45}
                            content="SAVE DRAFT"
                            type="submit"
                          />
                        </div>
                      </div>
                    </div>
                    {/* right section ended */}
                  </div>
                </form>
              </div>
              {/* )} */}
            </EditWrapper>
          </div>
        </DashContentWrapper>
      </div>
    </>
  );
};
