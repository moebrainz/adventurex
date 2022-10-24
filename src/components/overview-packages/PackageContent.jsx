import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import addpackage from "../../assets/dashboard/x_addpackage.png";
import deleted from "../../assets/dashboard/x_delete_icon.png";
import postaxios from "../../api/postaxios";
import useLogin from "../hooks/useLogin";

import "../../css/PackageContent.css";
import CardOverview from "../card-reviews/CardOverview";

const VIEW_URL = "/list-package";

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
  const [listData, setListData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  //calling global state
  const { listPackages, setListPackages } = useLogin();

  React.useEffect(() => {
    postaxios.get(VIEW_URL).then((res) => {
      setListData(res?.data?.data);
      setListPackages(res?.data?.data);
      console.log(listPackages, "from listing");
    });
  }, []);
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
                  // console.log(e)
                  <CardOverview
                    record_id={e._id}
                    banner={e.thumbnail}
                    key={e._id}
                    location={e.package_name}
                    tags={1000}
                    bookednum={100}
                    matchesnum={200}
                  />
                ))}
              </div>
            </CardWrapper>
          </div>
        </DashContentWrapper>
      </div>
    </>
  );
};
