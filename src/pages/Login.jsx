import React, { useState, useEffect } from "react";

import axios from "../api/axios";
// import { Container } from "react-bootstrap";
import loginImage from "../assets/x_login_img.png";
import logoIcon from "../assets/x_logo_icon.png";
import logo from "../assets/x_logo.png";
import Input from "../components/inputs/Input";
import Button from "../components/buttons/Button";
import email from "../assets/x_email_icon.png";
import password from "../assets/x_pwd_icon.png";
import seepassword from "../assets/x_see_pwd.png";
import fill from "../assets/fill.png";
// import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import useLogin from "../components/hooks/useLogin";
import { useNavigate, Link, useLocation } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";
import BeatLoader from "react-spinners/BeatLoader";

//login path
const LOGIN_URL = "/login";

// import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [pwd, setPwd] = React.useState(false);

  //import state from use context
  const { auth, setAuth, setLogin } = useLogin();

  //variables forreactrouter dom
  const navigate = useNavigate();
  const location = useLocation();

  const [getEmail, setGetEmail] = React.useState("");
  const [getPwd, setGetPwd] = React.useState("");
  //error to get back when authenticating
  const [errMsg, setErrMsg] = React.useState("");

  //set focus on input when the componen loads
  // useEffect(() => {
  //   // userRef.current.focus();
  // }, []);

  //remove error message if the user changes the user state or the password state
  //making error disapper when user are making changes to input fields
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    console.log(token);
    if (token) {
      navigate("/dashboard");
      setLogin(true);
    }
    setErrMsg("");
  }, [getEmail, getPwd]);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    let sendData = JSON.stringify({ email: getEmail, password: getPwd });

    const response = await axios
      .post(LOGIN_URL, sendData, {
        headers: { "Content-Type": "application/json" },
      })
      .catch((e) => ({ error: e }));

    setLoading(false);

    console.log(response);

    if (response.error || response?.data?.status !== "ok") {
      return toast.error(
        response?.data?.message ||
          "Could not submit your request, check your login details",
        {
          position: "bottom-right",
        }
      );
    }

    //console.log(JSON.stringify(response?.data));
    const accessToken = response?.data?.data?.token;
    const success = response?.data?.status;
    // const roles = response?.data?.data?.admin?.role;
    const firstName = response?.data?.data?.firstName;

    //store token to local
    localStorage.setItem("accessToken", accessToken);

    console.log(firstName, "firstname");

    // const message = response?.data?.message;
    setAuth({ getEmail, getPwd, firstName, accessToken, success });

    localStorage.setItem("adminToken", accessToken);

    setGetEmail("");
    setGetPwd("");

    setGetEmail("");
    setGetPwd("");
  };

  let [loading, setLoading] = React.useState(false);
  let apStle = {
    display: "block",
    margin: "0 auto",
    borderColor: "white",
  };

  return (
    <>
      {/* <Container className=""> */}

      <Toaster />
      <div className="container-fluid ps-0">
        <div className="d-flex flex-row">
          <div className="col-md-5 section__left">
            {/* <div className="background__img">
              <h1>Lets take you on an adventure</h1>
            </div> */}

            <img
              src={loginImage}
              className="image__size image__height"
              alt=""
            />
            <p className="content">
              Let’s take you <br /> on an adventure...
            </p>
          </div>

          <div className="col-md-7 section__right">
            <div className="row">
              <div className="col-md-12 ps-0">
                {" "}
                <span className="d-flex flex-row align-items-top gap-1">
                  <img
                    src={logoIcon}
                    className="image__size"
                    alt=""
                    style={{ height: "1.7rem", width: "1.7rem" }}
                  />

                  <img
                    src={logo}
                    className="image__size"
                    alt=""
                    style={{ height: "2rem", width: "10rem" }}
                  />
                </span>
              </div>
            </div>

            <div className="row">
              <h1 className="__login">Login</h1>
              <h6 className="__login_subhead">Login to your admin account</h6>
            </div>
            <form onSubmit={handleLogin}>
              <div className="row">
                <Input
                  title="Email"
                  type="email"
                  icon={email}
                  icon2={fill}
                  height={18}
                  width={18}
                  placeholder="Enter your email address"
                  onChange={(e) => setGetEmail(e.target.value)}
                  value={getEmail}
                />
                <Input
                  title="Password"
                  type={pwd ? "text" : "password"}
                  icon={password}
                  icon2={seepassword}
                  height={18}
                  width={18}
                  passEyeClick={() => setPwd(!pwd)}
                  placeholder="Enter your password"
                  onChange={(e) => setGetPwd(e.target.value)}
                  value={getPwd}
                />
              </div>
              <div className="row">
                <Button
                  width={655}
                  height={60}
                  content={
                    loading ? (
                      <BeatLoader
                        cssOverride={apStle}
                        color={"#fff"}
                        loading={true}
                        size={10}
                      />
                    ) : (
                      "LOGIN"
                    )
                  }
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* </Container> */}
    </>
  );
};

export default Login;
