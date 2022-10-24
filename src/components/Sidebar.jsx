import React from "react";
import styled from "styled-components";
import logoIcon from "../assets/x_logo_icon.png";
import logo from "../assets/x_logo.png";
import { Link, NavLink } from "react-router-dom";

import "../css/Sidebar.css";

const SidebarContainer = styled.div`
  background: rgba(3, 70, 38, 0.02);
  height: 100vh;
  position: sticky;
  top: 0;
`;

const Iconx = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 3px;

  &:hover {
    background: color #034626;
  }
`;
const Logox = styled.img`
  width: 8rem;
  height: 1.4rem;
`;
const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem 2rem;
  border-bottom: 0.5px solid rgba(50, 50, 93, 0.25);
`;
const ListWrapper = styled.div``;

const Listings = styled.ul`
  padding: 2rem 0rem;
`;

const ListLink1 = styled.a`
  text-decoration: none;
  color: #32325d;
`;
const ListLink2 = styled.a`
  text-decoration: none;
  color: #32325d;
  display: flex;
  flex-direction: column;

  &:hover {
    color: #32325d;
  }
`;
const ListLink3 = styled.a`
  text-decoration: none;
  color: #32325d;
`;

const Sidebar = () => {
  return (
    <>
      <SidebarContainer className="container-fluid px-0">
        <LogoWrapper className="">
          <Iconx src={logoIcon} className="" />
          <Logox src={logo} />
        </LogoWrapper>
        <ListWrapper>
          <Listings>
            <ListLink1>
              <NavLink
                to="/dashboard"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <li className="dashboard__list">
                  <span className="pe-3 ">
                    <div />
                  </span>
                  Dashboard
                </li>
              </NavLink>
            </ListLink1>
            <ListLink2>
              <label htmlFor="touch">
                <li className="packages__list ">
                  <span className="pe-3">
                    <div className="pack__icon" />
                  </span>
                  Packages
                  <span className="dropdown-toggle"></span>
                </li>

                <input type="checkbox" id="touch" />
                <ul className="slide">
                  <NavLink
                    to="/overview"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <li>
                      <a className="" href="">
                        Overview
                      </a>
                    </li>
                  </NavLink>
                  <NavLink
                    to="/booked"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <li>
                      <a className="" href="">
                        Booked Packages
                      </a>
                    </li>
                  </NavLink>
                </ul>
              </label>
            </ListLink2>
            <ListLink3>
              <NavLink
                to="/admins"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <li className="admin__list">
                  <span className="pe-3">
                    <div />
                  </span>
                  Admins
                </li>
              </NavLink>
            </ListLink3>
          </Listings>
        </ListWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
