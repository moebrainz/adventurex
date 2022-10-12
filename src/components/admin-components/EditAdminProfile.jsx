import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "../../css/EditProfile.css";
import Button from "../buttons/Button";

import InputImage from "../inputs/InputImage";

const DashContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
`;

const ProfilePanelWrapper = styled.div`
  border-bottom: 0.5px solid rgba(50, 50, 93, 0.4);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 63px;
`;

const EditWrapper = styled.div`
  padding: 30px 0px 15px 30px;
  display: flex;
  flex-direction: row;
  overflow: hidden;

  input {
    background: rgba(247, 249, 248, 0.8);
  }
  input:focus {
    box-shadow: unset;
  }

  label {
    font-weight: 500;
    font-size: 14px;
    color: #494949;
  }
`;
export default () => {
  //state for smModal

  return (
    <>
      <div className="container-fluid">
        <DashContentWrapper>
          <div className="border-bottom mb-4">
            <p className="_heading">Edit profile</p>
          </div>
          <div className="dash__section2 container-fluid px-0">
            <div className="bg-white m-4">
              <ProfilePanelWrapper>
                <div className="profile_imageWrapper">
                  <InputImage />
                  <p className="profile_name">Jonathan Doe</p>
                </div>
                <div>
                  <Button height={40} width={150} content="Update Admin" />
                </div>
              </ProfilePanelWrapper>
              <EditWrapper className="container-fluid p-4">
                <div className="d-flex flex-row w-100 bg-white rounded-3">
                  <div className="container bg-white p-5 border-round form_wrapper m-0">
                    <div className="row g-5">
                      {/* left section */}
                      <div className="col-md-6 border-right">
                        <label htmlFor="username" className="form-label">
                          Username
                        </label>
                        <input
                          type="text"
                          className="form-control mb-4"
                          placeholder="username"
                          aria-label="username"
                          id="usernmae"
                        />
                        <label htmlFor="firstname" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control mb-4"
                          placeholder="First Name"
                          aria-label="firstname"
                          id="firstname"
                        />
                        <label htmlFor="lastname" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control mb-4"
                          placeholder="Last Name"
                          aria-label="lastname"
                          id="lastname"
                        />
                        <label htmlFor="role" className="form-label">
                          Role
                        </label>
                        <input
                          type="text"
                          className="form-control mb-4"
                          placeholder="role"
                          aria-label="role"
                          id="role"
                        />
                      </div>
                      {/* left section end*/}

                      {/* right section */}
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control mb-4"
                          placeholder="email"
                          aria-label="email"
                          id="email"
                        />
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control mb-4"
                          placeholder="Password"
                          aria-label="password"
                          id="password"
                        />
                        <label htmlFor="cpassword" className="form-label">
                          Confirm Passowrd
                        </label>
                        <input
                          type="password"
                          className="form-control mb-4"
                          placeholder="Confirm Password"
                          aria-label="cpassword"
                          id="cpassword"
                        />
                      </div>
                      {/* right section ended */}
                    </div>
                  </div>
                </div>
              </EditWrapper>
            </div>
          </div>
        </DashContentWrapper>
      </div>
    </>
  );
};
