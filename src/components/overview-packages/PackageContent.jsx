import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import addpackage from "../../assets/dashboard/x_addpackage.png";
import deleted from "../../assets/dashboard/x_delete_icon.png";
// import deleted from "../../assets/dashboard/delete.svg";
import postaxios from "../../api/postaxios";
import useLogin from "../hooks/useLogin";

import { useToast } from "@chakra-ui/react";

import "../../css/PackageContent.css";
import CardOverview from "../card-reviews/CardOverview";
import DeleteModal from "../modals/DeleteModal";
import EditPackageModal from "../modals/EditPackageModal";

const VIEW_URL = "/live-package";
const DELETE_URL = "/packages";
const MAX_LEN = 40;

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

const CardWrapper = styled.div`
  padding: 30px 0px 15px 30px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;
export default () => {
  // const [listStatus, setListStatus] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);

  const [getDelete, setGetDelete] = React.useState(false);
  const [getEdit, setGetEdit] = React.useState(false);

  const handleDeleteModal = () => setGetDelete(false);
  const handleEditModal = () => setGetEdit(false);

  //importing toast
  const toast = useToast();

  //calling global state
  const { auth, listPackages, setListPackages } = useLogin();

  // const token = auth.accessToken;
  const admin = localStorage.getItem("accessToken");
  console.log(listPackages, "from packages");
  console.log(admin, "admin token");

  const config = {
    headers: { Authorization: `Bearer ${admin}` },
  };

  React.useEffect(() => {
    postaxios.get(VIEW_URL, config).then((res) => {
      // setListStatus(res?.data?.status);
      setListPackages(res?.data?.data);
      console.log(listPackages, "from listing");
    });
  }, []);

  // console.log(listStatus, "status");

  const handleDelete = async (id) => {
    console.log(id, "from id");

    // const deleteId = id.findIndex((i) => i._id >= indexedDB.id);
    // console.log(deleteId);

    await postaxios.delete(`${DELETE_URL}/${id}`, config).then((res) => {
      // setListData(res?.data?.data);
      // setListPackages(res?.data?.data);
      console.log(res, "Deleted");
      if (res?.data?.status === "ok") {
        const newList = [...listPackages];
        newList.splice(id, 1);
        setListPackages(newList);

        return toast({
          position: "bottom",
          title: "Deleted.",
          description: res?.data?.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }

      return false;
    });
    setGetDelete(false);
  };
  // console.log(listData, "from list data");

  return (
    <>
      <div className="container-fluid">
        <DashContentWrapper>
          <div className="">
            <p className="_heading">Overview</p>
          </div>
          <div className="dash__section2 container-fluid px-0">
            <ActionWrapper>
              <div className="add_button">
                <div className="border-0 d-flex align-items-center">
                  <img src={addpackage} className="_icon" />
                  <Link to="editpackage">
                    <button className="border-0 bg-white ">
                      Add new package
                    </button>
                  </Link>
                </div>
              </div>
              <div className="delete_button  ">
                <div className="border-0 d-flex align-items-center">
                  <img src={deleted} className="_icon" />
                  <button className="border-0 bg-white ">Delete</button>
                </div>
              </div>
              <div className="live_button dropdown ">
                <div
                  className="border-0"
                  role="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <button className="border-0 bg-white " value="live">
                    Live
                  </button>
                  <span className="dropdown-toggle"></span>
                </div>

                <ul
                  className="dropdown-menu mt-2"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Live
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Draft
                    </a>
                  </li>
                </ul>
              </div>
            </ActionWrapper>
            <CardWrapper>
              <div className=" d-flex flex-row flex-wrap gap-3">
                {listPackages.map((e) => (
                  // console.log(e._id);
                  <>
                    <CardOverview
                      record_id={e._id}
                      onClickDelete={() => setGetDelete(true)}
                      banner={e.thumbnail}
                      key={e._id}
                      // location={e.packageName}
                      location={
                        e.packageName.length > MAX_LEN
                          ? `${e.packageName.substring(0, MAX_LEN)} ...`
                          : e.packageName
                      }
                      tags={1000}
                      bookednum={100}
                      matchesnum={200}
                      onClickEdit={() => setGetEdit(true)}
                    />

                    <DeleteModal
                      show={getDelete}
                      onHide={handleDeleteModal}
                      onClick={() => handleDelete(e._id)}
                    />
                    <EditPackageModal
                      onHide={handleEditModal}
                      show={getEdit}
                      pname={e.packageName}
                      pdate={e.availabilityDate}
                      pPrice={e.pricePerPerson}
                      pabout={e.about}
                      ptime={e.availabilityTime}
                      pduration={e.tripDuration}
                      paccomodationLodging={e.accomodation}
                      pageRange={e.ageRange}
                      pinfantBilling={e.withInfant}
                      ptravelStyle={e.travelStyle}
                    />
                  </>
                ))}
              </div>
            </CardWrapper>
          </div>
        </DashContentWrapper>
      </div>
    </>
  );
};
