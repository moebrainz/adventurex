import React, { useState, useRef } from "react";
import TimeMoment from "moment";
import { Link } from "react-router-dom";
import styled from "styled-components";
import addpackage from "../../assets/dashboard/x_addpackage.png";
import deleted from "../../assets/dashboard/x_delete_icon.png";
import reset from "../../assets/images/x_reset_icon.png";
import transfer from "../../assets/images/x_transfer_icon.png";
import action from "../../assets/images/x_edit_icon.png";
import avatar1 from "../../assets/images/x_avatar_1.png";

import "../../css/AdminHome.css";
import ResetModal from "../modals/ResetModal";
import TransferModal from "../modals/TransferModal";
import AddAdminModal from "../modals/AddAdminModal";

import mockData from "../../data/AminData";

const DashContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
`;

const ActionWrapper = styled.div`
  border-bottom: 0.5px solid rgba(50, 50, 93, 0.4);
  display: flex;
  flex-direction: row;
`;

const TableWrapper = styled.div`
  padding: 30px 0px 15px 30px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const TableRow = ({ data, ref }) => (
  <tr>
    <td>
      <input type="checkbox" ref={ref} />
    </td>
    <td>
      <div className="action">
        <img src={data?.img} alt="" />
      </div>
    </td>
    <td>{data?.username}</td>
    <td>{data?.firstname}</td>
    <td>{data?.lastname}</td>
    <td>{data?.email_address}</td>
    <td>{TimeMoment(data?.last_active).startOf("hour").fromNow()}</td>
    <td>{data?.role}</td>
    <td>
      <Link to="edit-profile">
        <div className="action">
          <img src={action} alt="" />
        </div>
      </Link>
    </td>
  </tr>
);

export default () => {
  //state for smModal
  const [smShow, setSmShow] = useState(false);
  const [tranfer, setTransfer] = useState(false);
  const [addAdmin, setAddAdmin] = useState(false);

  const handleReset = () => setSmShow(false);
  const handleTransferClose = () => setTransfer(true);
  const handleTransfer = () => setTransfer(false);
  const handleAddAdmin = () => setAddAdmin(false);

  const checkInput = useRef();

  //states for deleting, and transfering admins
  const [del, setDel] = useState(false);

  const handleCheck = () => {};
  return (
    <>
      <div className="container-fluid">
        <DashContentWrapper>
          <div className="border-bottom mb-4">
            <p className="_heading">List of all admins and account owners</p>
          </div>
          <div className="dash__section2 container-fluid px-0">
            <ActionWrapper>
              <div className="add_button">
                <div
                  className="border-0 d-flex align-items-center"
                  onClick={() => setAddAdmin(true)}
                >
                  <img src={addpackage} className="_icon" />

                  <button className="border-0 bg-white ">Add new admin</button>
                </div>
              </div>
              <AddAdminModal show={addAdmin} onHide={handleAddAdmin} />

              <div className="_button  ">
                <div className="border-0 d-flex align-items-center">
                  <img src={deleted} className="_icon" alt="" />
                  <button className="border-0 bg-white ">Delete</button>
                </div>
              </div>

              <div className="_button  ">
                <div
                  className="border-0 d-flex align-items-center"
                  onClick={() => setSmShow(true)}
                >
                  <img src={reset} className="_icon" alt="" />
                  <button className="border-0 bg-white ">Reset</button>
                </div>
              </div>
              <ResetModal show={smShow} onHide={handleReset} />

              <div className="_button  ">
                <div
                  className="border-0 d-flex align-items-center"
                  onClick={handleTransferClose}
                >
                  <img src={transfer} className="_icon" alt="" />
                  <button className="border-0 bg-white ">Transfer</button>
                </div>
              </div>
              <TransferModal show={tranfer} onHide={handleTransfer} />
            </ActionWrapper>
            <TableWrapper className="container-fluid p-4">
              <div className="d-flex flex-row w-100 bg-white rounded-3">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col">USERNAME</th>
                      <th scope="col">FIRSTNAME</th>
                      <th scope="col">LASTNAME</th>
                      <th scope="col">EMAIL ADDRESS</th>
                      <th scope="col">LAST ACTIVE</th>
                      <th scope="col">ROLE</th>
                      <th scope="col">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockData.adminUsers.map((admindata, i) => (
                      <TableRow data={admindata} key={i} ref={checkInput} />
                    ))}
                  </tbody>
                </table>
              </div>
            </TableWrapper>
          </div>
        </DashContentWrapper>
      </div>
    </>
  );
};
