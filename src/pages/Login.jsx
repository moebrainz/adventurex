import React from "react";
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

import "../css/Login.css";
const Login = () => {
  const [pwd, setPwd] = React.useState(false);

  return (
    <>
      {/* <Container className=""> */}
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
            <div className="row">
              <Input
                title="Email"
                type="email"
                icon={email}
                icon2={fill}
                height={18}
                width={18}
                placeholder="Enter your email address"
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
              />
            </div>
            <div className="row">
              <Button width={655} height={60} content="LOGIN" />
            </div>
          </div>
        </div>
      </div>

      {/* </Container> */}
    </>
  );
};

export default Login;
