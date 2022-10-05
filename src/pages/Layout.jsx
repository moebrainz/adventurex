import React from "react";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import Navbar from "../components/Navbar";
// import DashboardContent from "../components/DashboardContent";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const DashboardWrapper = styled.div`
  max-width: 80%;
`;

const SidebarWrapper = styled.div`
  max-width: 20%;
  border-bottom: 0.5px solid rgba(50, 50, 93, 0.25);
`;

const Layout = (props = { pageTitle: "" }) => {
  return (
    <div className="container-fluid ps-0">
      <DashboardContainer>
        <SidebarWrapper className="col">
          <Sidebar />
        </SidebarWrapper>
        <DashboardWrapper className="col">
          <Navbar title={props.pageTitle} />
          {props.children}
        </DashboardWrapper>
      </DashboardContainer>
    </div>
  );
};

export default Layout;
