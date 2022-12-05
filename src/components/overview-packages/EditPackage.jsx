import React, { useState, useRef } from "react";
import styled from "styled-components";
// import download from "../assets/images/x_download_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import explorexLoader from "../../assets/explore.gif";

import Button from "../buttons/Button";
import ButtonWhite from "../buttons/ButtonWhite";
// import InputThumbnail from "../inputs/InputThumbnail";
import InputFIle from "../inputs/InputFIle";
import InputFilesm from "../inputs/InputFilesm";
// import useLogin from "../../components/hooks/useLogin";
import useLogin from "../hooks/useLogin";

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

  span {
    background: rgba(247, 249, 248, 0.8);
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

const PACKAGE_LIVE_URL = "/live-package";
const PACKAGE_DRAFT_URL = "/draft-package";

export default () => {
  const navigate = useNavigate();
  const toast = useToast();

  //call on use ref
  const dateRef = useRef();
  const timeRef = useRef();

  //call the global state that stores the images
  const { auth } = useLogin();

  //config
  // const token = auth.accessToken;
  const admin = localStorage.getItem("accessToken");

  const config = {
    headers: { Authorization: `Bearer ${admin}` },
  };

  // axiox.post("{url}", "{body}", { headers: reqHeader });

  //collect all data
  const [isLoading, setIsLoading] = React.useState(false);

  //DATA STATES FOR EACH INPUTS
  const [packageName, setPackageName] = React.useState("");
  // const [expiringDate, setExpiringDate] = React.useState("");
  const [availabilityDate, setAvailabilityDate] = React.useState("");
  const [availabilityTime, setAvailabilityTime] = React.useState("");
  const [about, setAbout] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [infantBilling, setInfantBilling] = React.useState("");
  // const [tripCode, setTripCode] = React.useState("");
  const [travelStyle, setTravelStyle] = React.useState("");
  const [pricePerInfant, setPricePerInfant] = React.useState("");
  const [ageRange, setAgeRange] = React.useState("");
  const [accomodationLodging, setAccomodationLodging] = React.useState("");
  const [thumbnail, setThumbnail] = React.useState("");
  const [bannerthumbnail, setBannerthumbnail] = React.useState("");
  const [travelDuration, setTravelDuration] = React.useState("");
  let [citiesImages, setCitiesImages] = React.useState([""]);
  // let [addCitiesImages, setAddCitiesImages] = React.useState("");

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

  //function for adding cities images in an array
  // const addImages = (e) => {
  //   e.preventDefault();

  //   if (!addCitiesImages) return;
  //   setCitiesImages([
  //     ...citiesImages,
  //     {
  //       id: citiesImages.length,
  //       value: addCitiesImages,
  //     },
  //   ]);
  //   setAddCitiesImages("");
  // };

  // console.log(bannerthumbnail, "banner thumb");
  // console.log(thumbnail, "banner thumb");
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

  //add package function
  const handleAddPackage = async (e) => {
    e.preventDefault();

    let reqHeader = new Headers();
    reqHeader.append("Authorization", `Bearer ${admin}`);

    const packages = {
      packageName: packageName,
      about: about,
      availabilityDate: availabilityDate,
      availabilityTime: availabilityTime,
      pricePerPerson: price,
      travelStyle: travelStyle,
      ageRange: ageRange,
      accomodation: accomodationLodging,
      activities: pilldisplay,
      thumbnail: thumbnail,
      bannerImg: bannerthumbnail,
      tripDuration: travelDuration,
      citiesImages: citiesImages,
      withInfant: pricePerInfant,
    };

    let frmD = new FormData();
    frmD.append("packageName", packageName);
    frmD.append("about", about);
    frmD.append("pricePerPerson", price);
    frmD.append("availabilityDate", availabilityDate);
    frmD.append("availabilityTime", availabilityTime);
    // frmD.append("pricePerPerson", price);
    frmD.append("travelStyle", travelStyle);
    // frmD.append("infantBilling", infantBilling);
    frmD.append("ageRange", ageRange);
    frmD.append("accomodation", accomodationLodging);
    frmD.append("activities", JSON.stringify(pilldisplay));
    frmD.append("thumbnail", thumbnail);
    frmD.append("bannerImg", bannerthumbnail);
    frmD.append("tripDuration", travelDuration);
    frmD.append("withInfant", pricePerInfant);
    for (let i = 0; i < citiesImages.length; i++) {
      frmD.append("citiesImages", citiesImages[i]);
      // formData.append(files[i].name, files[i])
    }

    console.log(frmD, "all data");
    // let sendData = JSON.stringify({ packages });
    setLoading(true);

    // console.log(response, "from response");
    // console.log(config);

    // return console.log(response, "response");

    try {
      const response = await postaxios.post(PACKAGE_LIVE_URL, frmD, {
        headers: { Authorization: `Bearer ${admin}` },
      });
      setLoading(false);

      // console.log(
      //   response?.data?.message,
      //   response?.data?.status,
      //   "frm response"
      // );
      if (response && response?.data?.status === "ok") {
        return toast({
          position: "bottom",
          title: "Created.",
          description: response?.data?.message,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      setLoading(false);
      return toast({
        position: "bottom",
        title: "Error",
        description: "Error Adding Package",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }

    // setLoading(false);

    // setLoading(false);
    //   console.log(error.message, "error occured");
    //   if (response.error || response?.data?.success !== true) {
    //     return toast({
    //       position: "bottom-right",
    //       title: "Unauthoriseze user",
    //       description: response?.data?.message,
    //       status: "error",
    //       duration: 9000,
    //       isClosable: true,
    //     });
    //   }

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

  // add package draft function

  const handleDraftPackage = async (e) => {
    e.preventDefault();

    let reqHeader = new Headers();
    reqHeader.append("Authorization", `Bearer ${admin}`);

    const packages = {
      packageName: packageName,
      about: about,
      availabilityDate: availabilityDate,
      availabilityTime: availabilityTime,
      pricePerPerson: price,
      travelStyle: travelStyle,
      ageRange: ageRange,
      accomodation: accomodationLodging,
      activities: pilldisplay,
      thumbnail: thumbnail,
      bannerImg: bannerthumbnail,
      tripDuration: travelDuration,
      citiesImages: citiesImages,
      withInfant: pricePerInfant,
    };

    let frmD = new FormData();
    frmD.append("packageName", packageName);
    frmD.append("about", about);
    frmD.append("pricePerPerson", price);
    frmD.append("availabilityDate", availabilityDate);
    frmD.append("availabilityTime", availabilityTime);
    // frmD.append("pricePerPerson", price);
    frmD.append("travelStyle", travelStyle);
    // frmD.append("infantBilling", infantBilling);
    frmD.append("ageRange", ageRange);
    frmD.append("accomodation", accomodationLodging);
    frmD.append("activities", JSON.stringify(pilldisplay));
    frmD.append("thumbnail", thumbnail);
    frmD.append("bannerImg", bannerthumbnail);
    frmD.append("tripDuration", travelDuration);
    frmD.append("withInfant", pricePerInfant);
    frmD.append("citiesImages", citiesImages);

    console.log(frmD, "all data");
    // let sendData = JSON.stringify({ packages });
    setLoading(true);

    // console.log(response, "from response");
    // console.log(config);

    // return console.log(response, "response");

    try {
      const response = await postaxios.post(PACKAGE_LIVE_URL, frmD, {
        headers: { Authorization: `Bearer ${admin}` },
      });
      setLoading(false);

      // console.log(
      //   response?.data?.message,
      //   response?.data?.status,
      //   "frm response"
      // );
      if (response && response?.data?.status === "ok") {
        return toast({
          position: "bottom",
          title: "Created.",
          description: response?.data?.message,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      setLoading(false);
      return toast({
        position: "bottom",
        title: "Error",
        description: "Error Adding Package",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }

    // setLoading(false);

    // setLoading(false);
    //   console.log(error.message, "error occured");
    //   if (response.error || response?.data?.success !== true) {
    //     return toast({
    //       position: "bottom-right",
    //       title: "Unauthoriseze user",
    //       description: response?.data?.message,
    //       status: "error",
    //       duration: 9000,
    //       isClosable: true,
    //     });
    //   }

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

  console.log(citiesImages, "c images");

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
              {loading ? (
                <div className="spinner_wrapper">
                  {/* <Spinner thickness="4px" size="lg" color="#0fa05a" /> */}
                  <div className="loader_wrapper">
                    <img src={explorexLoader} alt="" />
                  </div>
                </div>
              ) : (
                <div className="container bg-white p-5 border-round form_wrapper m-0">
                  <form onSubmit={handleAddPackage}>
                    <div className="row g-5">
                      {/* left section */}

                      {/* package Name */}
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

                        {/* Availability */}
                        <label htmlFor="itinerary" className="form-label">
                          Availability
                        </label>
                        <div className="availability_wrapper">
                          <input
                            className="form-control mb-4"
                            type="text"
                            ref={dateRef}
                            placeholder="Choose a date"
                            onFocus={() => (dateRef.current.type = "date")}
                            onBlur={() => (dateRef.current.type = "text")}
                            id="availabilityDate"
                            name="availabilityDate"
                            // defaultValue="Choose a date"
                            value={availabilityDate}
                            onChange={(e) =>
                              setAvailabilityDate(e.target.value)
                            }
                          />
                          <input
                            type="text"
                            ref={timeRef}
                            className="form-control mb-4"
                            placeholder="Choose a time"
                            aria-label="availabilityTime"
                            id="availabilityTime"
                            onFocus={() => (timeRef.current.type = "time")}
                            onBlur={() => (timeRef.current.type = "text")}
                            name="availabilityTime"
                            value={availabilityTime}
                            onChange={(e) =>
                              setAvailabilityTime(e.target.value)
                            }
                          />
                        </div>

                        {/* Trip Duration */}
                        <label htmlFor="nameofpackage" className="form-label">
                          {`Trip Duration (optional)`}
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
                          // required
                        />

                        {/* About */}
                        <label htmlFor="itinerary" className="form-label">
                          About
                        </label>
                        <textarea
                          type="text"
                          className="form-control mb-4"
                          placeholder="About"
                          aria-label="about"
                          id="about"
                          name="about"
                          value={about}
                          onChange={(e) => setAbout(e.target.value)}
                        />

                        {/* Thumbnail */}
                        <InputFIle
                          title="Thumbnail"
                          onChange={(e) => setThumbnail(e)}
                        />

                        {/* Banner */}
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

                        {/* Travel Style */}
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
                            <option value="">--select an option--</option>
                            <option value="Private">Private</option>
                            <option value="Self guided">Self Guided</option>
                            <option value="Small group">{`Small Group < 12`}</option>
                            <option value="Large group">{`Large Group 20 >`}</option>
                          </select>
                        </div>
                      </div>
                      {/* left section end*/}

                      {/* right section */}

                      {/* Price per person */}
                      <div className="col-md-6">
                        <label htmlFor="priceperperson" className="form-label">
                          Price per Person
                        </label>
                        <div className="ppperson_input_wrapper">
                          <span
                            className="mb-4 input-group-text"
                            id="basic-addon2"
                          >
                            $
                          </span>
                          <input
                            type="number"
                            className="form-control mb-4"
                            placeholder="Price per person"
                            aria-label="Price per person"
                            id="priceperperson"
                            name="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                          />
                        </div>

                        {/* Age Range */}

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
                            <option value="">--select an option--</option>
                            <option value="5-9">5-9</option>
                            <option value="10-15">10-15</option>
                            <option value="16-20">16-20</option>
                            <option value="20-30">20-30</option>
                            <option value="50 and above">50 and above</option>
                          </select>
                        </div>

                        {/* Infant Billing */}

                        <label htmlFor="expiringdate" className="form-label">
                          Infant Billing
                        </label>
                        <div className="select_wrapper">
                          <select
                            className=" form-select mb-4"
                            name="ageRange"
                            id="agerange"
                            value={infantBilling}
                            onChange={(e) => setInfantBilling(e.target.value)}
                          >
                            <option value="">--select an option--</option>
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                          </select>
                        </div>

                        {/* Price For Infant */}
                        {infantBilling === "yes" ? (
                          <div className="infant_price_yes">
                            <label
                              htmlFor="nameofpackage"
                              className="form-label"
                            >
                              Price Per Infant
                            </label>
                            <div className="ppinfants_input_wrapper">
                              <span
                                className="mb-4 input-group-text"
                                id="basic-addon2"
                              >
                                $
                              </span>
                              <input
                                type="number"
                                className="form-control mb-4"
                                placeholder="Price Per Infant"
                                aria-label="pricePerInfant"
                                id="pricePerInfant"
                                name="pricePerInfant"
                                value={pricePerInfant}
                                onChange={(e) =>
                                  setPricePerInfant(e.target.value)
                                }
                                // required
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="infant_price_no">
                            <label
                              htmlFor="nameofpackage"
                              className="form-label"
                            >
                              Price Per Infant
                            </label>
                            <div>
                              <input
                                type="number"
                                className="form-control mb-4"
                                placeholder="Price Per Infant"
                                aria-label="pricePerInfant"
                                id="pricePerInfant"
                                name="pricePerInfant"
                                value={pricePerInfant}
                                onChange={(e) =>
                                  setPricePerInfant(e.target.value)
                                }
                                // required
                              />
                            </div>
                          </div>
                        )}

                        {/* Accomodation */}
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
                            <option value="">--select an option--</option>
                            <option defaultValue="2 Star" value="2 Star">
                              2 star
                            </option>
                            <option value="3 Star">3 star</option>
                            <option value="4 Star">4 star</option>
                            <option value="5 Star">5 star</option>
                          </select>
                        </div>

                        {/* Activities */}
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

                        {/* <label htmlFor="priceperperson" className="form-label">
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
                              name="included"
                            />
                            <button className="pill_button" onClick={addPill2}>
                              {" "}
                              Add
                            </button>
                          </div>
                        </div> */}

                        {/* Cities Images */}
                        <div className="file_inputsm">
                          <InputFilesm
                            title={`Cites & Attractions`}
                            onChange={(e) => setCitiesImages(e)}
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
                              type="button"
                            />
                          </div>
                        </div>
                      </div>
                      {/* right section ended */}
                    </div>
                  </form>
                </div>
              )}
            </EditWrapper>
          </div>
        </DashContentWrapper>
      </div>
    </>
  );
};
