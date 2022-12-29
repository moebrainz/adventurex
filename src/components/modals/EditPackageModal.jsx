import React, { useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "../buttons/Button";
import ButtonWhite from "../buttons/ButtonWhite";
import InputFIle from "../inputs/InputFIle";
import InputFilesm from "../inputs/InputFilesm";

// const DashContentWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 20px 10px;
// `;

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

export default ({
  onHide,
  show,
  pname,
  pdate,
  ptime,
  pduration,
  pabout,
  ptravelStyle,
  pPrice,
  pageRange,
  pinfantBilling,
  paccomodationLodging,
}) => {
  // const [display, setDisplay] = React.useState(false);
  // const [isDisabled, setIsDisabled] = React.useState(false);
  //   const [showModal, setShowModal] = React.useState(false);
  const [infantBilling, setInfantBilling] = React.useState("");
  //   const navigate = useNavigate();

  const [thumbnail, setThumbnail] = React.useState("");
  const [bannerthumbnail, setBannerthumbnail] = React.useState("");

  const [editData, setEditData] = React.useState({
    pname: pname,
    pPrice: pPrice,
    pabout: pabout,
    pdate: pdate,
    pduration: pduration,
    paccomodationLodging: paccomodationLodging,
    pinfantBilling: pinfantBilling,
    ptime: ptime,
    ptravelStyle: ptravelStyle,
  });

  //   const handleModal = () => setShowModal(false);

  //call on use ref
  const dateRef = useRef();
  const timeRef = useRef();
  //   let eachData;

  //   if (typeof window !== "undefined") {
  //     // Perform localStorage action
  //     eachData = JSON.parse(localStorage.getItem("perData"));
  //   }

  return (
    <>
      <Modal
        size="xl"
        show={show}
        onHide={onHide}
        aria-labelledby="example-modal-sizes-title-sm"
        centered
        // scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className={``}>
              <div className="row">
                <nav className="breadcrumb_wrapper" aria-label="breadcrumb">
                  <ol className="breadcrumb ol_list_breadcrumb">
                    <li className="breadcrumb-item">
                      <Link
                        //    onClick={() => navigate(-1)}
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
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="dash__section2 container-fluid px-0">
            <EditWrapper className="container-fluid">
              {/* {loading ? (
                <div className="spinner_wrapper">
              
                  <div className="loader_wrapper">
                    <img src={explorexLoader} alt="" />
                  </div>
                </div>
              ) : ( */}

              <div className="container bg-white p-5 border-round form_wrapper m-0">
                <form>
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
                        value={editData.pname}
                        onChange={(e) => (editData.pname = e.target.value)}
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
                          value={editData.pdate}
                          onChange={(e) => (editData.pdate = e.target.value)}
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
                          value={editData.ptime}
                          onChange={(e) => (editData.ptime = e.target.value)}
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
                        value={editData.pduration}
                        onChange={(e) => (editData.pduration = e.target.value)}
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
                        value={editData.pabout}
                        onChange={(e) => (editData.pabout = e.target.value)}
                        style={{ height: "200px" }}
                      />

                      {/* Thumbnail */}
                      {/* <InputFIle
                        title="Thumbnail"
                          onChange={(e) => setThumbnail(e)}
                      /> */}

                      {/* Banner */}
                      {/* <InputFIle
                        title="Banner"
                          onChange={(e) => setBannerthumbnail(e)}
                      /> */}

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
                          value={editData.ptravelStyle}
                          onChange={(e) =>
                            (editData.ptravelStyle = e.target.value)
                          }
                        >
                          <option value={editData.ptravelStyle}>
                            --select an option--
                          </option>
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
                          value={editData.pPrice}
                          onChange={(e) => (editData.pPrice = e.target.value)}
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
                          value={editData.pageRange}
                          onChange={(e) =>
                            (editData.pageRange = e.target.value)
                          }
                        >
                          <option value={editData.pageRange}>
                            --select an option--
                          </option>
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
                          value={editData.pinfantBilling}
                          onChange={(e) =>
                            (editData.pinfantBilling = e.target.value)
                          }
                        >
                          <option value={pinfantBilling}>
                            --select an option--
                          </option>
                          <option value="no">No</option>
                          <option value="yes">Yes</option>
                        </select>
                      </div>

                      {/* Price For Infant */}
                      {/* {infantBilling === "yes" ? (
                        <div className="infant_price_yes">
                          <label htmlFor="nameofpackage" className="form-label">
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
                              // value={pricePerInfant}
                              // onChange={(e) =>
                              //   setPricePerInfant(e.target.value)
                              // }
                              // required
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="infant_price_no">
                          <label htmlFor="nameofpackage" className="form-label">
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
                              // value={pricePerInfant}
                              // onChange={(e) =>
                              //   setPricePerInfant(e.target.value)
                              // }
                              // // required
                            />
                          </div>
                        </div>
                      )} */}

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
                          value={editData.paccomodationLodging}
                          onChange={(e) =>
                            (editData.paccomodationLodging = e.target.value)
                          }
                        >
                          <option value={editData.paccomodationLodging}>
                            --select an option--
                          </option>
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
                      {/* <div className="mb-4">
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
                           
                            name="activities"
                          />
                          <button className="pill_button" onClick={addPill}>
                            {" "}
                            Add
                          </button>
                        </div>
                      </div> */}

                      {/* Cities Images */}
                      {/* <div className="file_inputsm">
                        <InputFilesm
                          title={`Cites & Attractions`}
                          // onChange={(e) => setCitiesImages(e)}
                        />
                      </div> */}
                    </div>
                    {/* right section ended */}
                  </div>
                </form>
              </div>
            </EditWrapper>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center mt-3">
          <div className="d-flex flex-row gap-5 "></div>

          <div className="d-flex flex-row flex-wrap">
            <div className="pe-3 py-2">
              <Button width={200} height={45} content="BACK" type="submit" />
            </div>
            <div className="py-2">
              <ButtonWhite
                width={150}
                height={45}
                content="UPDATE"
                type="button"
              />
            </div>
          </div>
          {/* <button className={` me-4`} onClick={onHide}>
              Back
            </button>
            <button className={` ms-4`} onClick={() => setShowModal(true)}>
              Update
            </button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

// return (
//     <>
//       {" "}
//       <div className="container-fluid">
//         <DashContentWrapper>

//           <div className="dash__section2 container-fluid px-0">
//             <EditWrapper className="container-fluid">
//               {loading ? (
//                 <div className="spinner_wrapper">
//                   {/* <Spinner thickness="4px" size="lg" color="#0fa05a" /> */}
//                   <div className="loader_wrapper">
//                     <img src={explorexLoader} alt="" />
//                   </div>
//                 </div>
//               ) : (
//                 <div className="container bg-white p-5 border-round form_wrapper m-0">
//                   <form onSubmit={handleAddPackage}>
//                     <div className="row g-5">
//                       {/* left section */}

//                       {/* package Name */}
//                       <div className="col-md-6 border-right">
//                         <label htmlFor="nameofpackage" className="form-label">
//                           Name of Package
//                         </label>
//                         <input
//                           type="text"
//                           className="form-control mb-4"
//                           placeholder="Name of Package"
//                           // aria-label="Name of package"
//                           id="nameofpackage"
//                           name="packageName"
//                           value={packageName}
//                           onChange={(e) => setPackageName(e.target.value)}
//                           // required
//                         />

//                         {/* Availability */}
//                         <label htmlFor="itinerary" className="form-label">
//                           Availability
//                         </label>
//                         <div className="availability_wrapper">
//                           <input
//                             className="form-control mb-4"
//                             type="text"
//                             ref={dateRef}
//                             placeholder="Choose a date"
//                             onFocus={() => (dateRef.current.type = "date")}
//                             onBlur={() => (dateRef.current.type = "text")}
//                             id="availabilityDate"
//                             name="availabilityDate"
//                             // defaultValue="Choose a date"
//                             value={availabilityDate}
//                             onChange={(e) =>
//                               setAvailabilityDate(e.target.value)
//                             }
//                           />
//                           <input
//                             type="text"
//                             ref={timeRef}
//                             className="form-control mb-4"
//                             placeholder="Choose a time"
//                             aria-label="availabilityTime"
//                             id="availabilityTime"
//                             onFocus={() => (timeRef.current.type = "time")}
//                             onBlur={() => (timeRef.current.type = "text")}
//                             name="availabilityTime"
//                             value={availabilityTime}
//                             onChange={(e) =>
//                               setAvailabilityTime(e.target.value)
//                             }
//                           />
//                         </div>

//                         {/* Trip Duration */}
//                         <label htmlFor="nameofpackage" className="form-label">
//                           {`Trip Duration (optional)`}
//                         </label>
//                         <input
//                           type="text"
//                           className="form-control mb-4"
//                           placeholder="Travel Duration"
//                           aria-label="Trip code"
//                           id="tripcode"
//                           name="tripCode"
//                           value={travelDuration}
//                           onChange={(e) => setTravelDuration(e.target.value)}
//                           // required
//                         />

//                         {/* About */}
//                         <label htmlFor="itinerary" className="form-label">
//                           About
//                         </label>
//                         <textarea
//                           type="text"
//                           className="form-control mb-4"
//                           placeholder="About"
//                           aria-label="about"
//                           id="about"
//                           name="about"
//                           value={about}
//                           onChange={(e) => setAbout(e.target.value)}
//                         />

//                         {/* Thumbnail */}
//                         <InputFIle
//                           title="Thumbnail"
//                           onChange={(e) => setThumbnail(e)}
//                         />

//                         {/* Banner */}
//                         <InputFIle
//                           title="Banner"
//                           onChange={(e) => setBannerthumbnail(e)}
//                         />

//                         {/* <InputThumbnail
//                         title="Thumbnail"
//                         thumbvalue={thumbnail}
//                         onChange={(e) => setThumbnail(e)}
//                       />

//                       <InputThumbnail
//                         title="Banner"
//                         onChange={(e) => setBannerthumbnail(e)}
//                       /> */}

//                         {/* Travel Style */}
//                         <label htmlFor="travelstyle" className="form-label">
//                           Travel Style
//                         </label>
//                         <div className="select_wrapper">
//                           <select
//                             className=" form-select mb-4"
//                             name="travelStyle"
//                             aria-label="Travel Style"
//                             id="travelstyle"
//                             value={travelStyle}
//                             onChange={(e) => setTravelStyle(e.target.value)}
//                           >
//                             <option value="">--select an option--</option>
//                             <option value="Private">Private</option>
//                             <option value="Self guided">Self Guided</option>
//                             <option value="Small group">{`Small Group < 12`}</option>
//                             <option value="Large group">{`Large Group 20 >`}</option>
//                           </select>
//                         </div>
//                       </div>
//                       {/* left section end*/}

//                       {/* right section */}

//                       {/* Price per person */}
//                       <div className="col-md-6">
//                         <label htmlFor="priceperperson" className="form-label">
//                           Price per Person
//                         </label>
//                         <div className="ppperson_input_wrapper">
//                           <span
//                             className="mb-4 input-group-text"
//                             id="basic-addon2"
//                           >
//                             $
//                           </span>
//                           <input
//                             type="number"
//                             className="form-control mb-4"
//                             placeholder="Price per person"
//                             aria-label="Price per person"
//                             id="priceperperson"
//                             name="price"
//                             value={price}
//                             onChange={(e) => setPrice(e.target.value)}
//                           />
//                         </div>

//                         {/* Age Range */}

//                         <label htmlFor="expiringdate" className="form-label">
//                           Age range
//                         </label>
//                         <div className="select_wrapper">
//                           <select
//                             className=" form-select mb-4"
//                             name="ageRange"
//                             id="agerange"
//                             value={ageRange}
//                             onChange={(e) => setAgeRange(e.target.value)}
//                           >
//                             <option value="">--select an option--</option>
//                             <option value="5-9">5-9</option>
//                             <option value="10-15">10-15</option>
//                             <option value="16-20">16-20</option>
//                             <option value="20-30">20-30</option>
//                             <option value="50 and above">50 and above</option>
//                           </select>
//                         </div>

//                         {/* Infant Billing */}

//                         <label htmlFor="expiringdate" className="form-label">
//                           Infant Billing
//                         </label>
//                         <div className="select_wrapper">
//                           <select
//                             className=" form-select mb-4"
//                             name="ageRange"
//                             id="agerange"
//                             value={infantBilling}
//                             onChange={(e) => setInfantBilling(e.target.value)}
//                           >
//                             <option value="">--select an option--</option>
//                             <option value="no">No</option>
//                             <option value="yes">Yes</option>
//                           </select>
//                         </div>

//                         {/* Price For Infant */}
//                         {infantBilling === "yes" ? (
//                           <div className="infant_price_yes">
//                             <label
//                               htmlFor="nameofpackage"
//                               className="form-label"
//                             >
//                               Price Per Infant
//                             </label>
//                             <div className="ppinfants_input_wrapper">
//                               <span
//                                 className="mb-4 input-group-text"
//                                 id="basic-addon2"
//                               >
//                                 $
//                               </span>
//                               <input
//                                 type="number"
//                                 className="form-control mb-4"
//                                 placeholder="Price Per Infant"
//                                 aria-label="pricePerInfant"
//                                 id="pricePerInfant"
//                                 name="pricePerInfant"
//                                 value={pricePerInfant}
//                                 onChange={(e) =>
//                                   setPricePerInfant(e.target.value)
//                                 }
//                                 // required
//                               />
//                             </div>
//                           </div>
//                         ) : (
//                           <div className="infant_price_no">
//                             <label
//                               htmlFor="nameofpackage"
//                               className="form-label"
//                             >
//                               Price Per Infant
//                             </label>
//                             <div>
//                               <input
//                                 type="number"
//                                 className="form-control mb-4"
//                                 placeholder="Price Per Infant"
//                                 aria-label="pricePerInfant"
//                                 id="pricePerInfant"
//                                 name="pricePerInfant"
//                                 value={pricePerInfant}
//                                 onChange={(e) =>
//                                   setPricePerInfant(e.target.value)
//                                 }
//                                 // required
//                               />
//                             </div>
//                           </div>
//                         )}

//                         {/* Accomodation */}
//                         <label
//                           htmlFor="accomodationlodging"
//                           className="form-label"
//                         >
//                           Accomodation/Lodging
//                         </label>
//                         <div className="select_wrapper mb-4">
//                           <select
//                             className=" form-select"
//                             name="accomodationLodging "
//                             id="accomodationlodging"
//                             value={accomodationLodging}
//                             onChange={(e) =>
//                               setAccomodationLodging(e.target.value)
//                             }
//                           >
//                             <option value="">--select an option--</option>
//                             <option defaultValue="2 Star" value="2 Star">
//                               2 star
//                             </option>
//                             <option value="3 Star">3 star</option>
//                             <option value="4 Star">4 star</option>
//                             <option value="5 Star">5 star</option>
//                           </select>
//                         </div>

//                         {/* Activities */}
//                         <label htmlFor="priceperperson" className="form-label">
//                           Activities
//                         </label>
//                         <div className="mb-4">
//                           <div className="pill_display p-3 mb-1">
//                             {pilldisplay.map((pill) => (
//                               <button
//                                 className="pill_button_display pe-2"
//                                 key={pill.id}
//                               >
//                                 {pill.value}

//                                 <span
//                                   className="pill_button_cancel"
//                                   removePills={pill.value}
//                                   onClick={removePillHandler}
//                                 >
//                                   {" "}
//                                   | X
//                                 </span>
//                               </button>
//                             ))}
//                             {/* <button className="pill_button_display pe-2">
//                               Biking{" "}
//                               <span className="pill_button_cancel"> | X</span>
//                             </button> */}
//                           </div>

//                           <div className="pill_display_s2 p-1">
//                             <input
//                               type=""
//                               className="form-control me-2 border-0"
//                               placeholder="Type activities..."
//                               aria-label="Type activities"
//                               id="activities"
//                               value={inputData}
//                               onChange={(e) =>
//                                 setInputData(e.target.value.trim())
//                               }
//                               // pilldisplay.activities = e.target.value;
//                               name="activities"
//                             />
//                             <button className="pill_button" onClick={addPill}>
//                               {" "}
//                               Add
//                             </button>
//                           </div>
//                         </div>

//                         {/* <label htmlFor="priceperperson" className="form-label">
//                           What's included
//                         </label>
//                         <div className="mb-4">
//                           <div className="pill_display p-3 mb-1">
//                             {pilldisplay2.map((pill) => (
//                               <button
//                                 className="pill_button_display"
//                                 key={pill.id}
//                               >
//                                 {pill.value}

//                                 <span
//                                   className="pill_button_cancel"
//                                   removePills={pill.value}
//                                   onClick={removePillHandler2}
//                                 >
//                                   {" "}
//                                   | X
//                                 </span>
//                               </button>
//                             ))}

//                           </div>

//                           <div className="pill_display_s2 p-1">
//                             <input
//                               type=""
//                               className="form-control me-2 border-0"
//                               placeholder="Whats included..."
//                               aria-label="What's included"
//                               id="included"
//                               value={inputData2}
//                               onChange={(e) =>
//                                 setInputData2(e.target.value.trim())
//                               }
//                               name="included"
//                             />
//                             <button className="pill_button" onClick={addPill2}>
//                               {" "}
//                               Add
//                             </button>
//                           </div>
//                         </div> */}

//                         {/* Cities Images */}
//                         <div className="file_inputsm">
//                           <InputFilesm
//                             title={`Cites & Attractions`}
//                             onChange={(e) => setCitiesImages(e)}
//                           />
//                         </div>

//                         <div className="d-flex flex-row flex-wrap">
//                           <div className="pe-3 py-2">
//                             <Button
//                               width={200}
//                               height={45}
//                               content="ADD PACKAGE"
//                               type="submit"
//                             />
//                           </div>
//                           <div className="py-2">
//                             <ButtonWhite
//                               width={150}
//                               height={45}
//                               content="SAVE DRAFT"
//                               type="button"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                       {/* right section ended */}
//                     </div>
//                   </form>
//                 </div>
//               )}
//             </EditWrapper>
//           </div>
//         </DashContentWrapper>
//       </div>
//     </>
//   );
