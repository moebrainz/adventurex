import React from "react";
import styled from "styled-components";
import notifications from "../assets/dashboard/x_notifications_icon.png";
import avatar from "../assets/dashboard/x_avatar.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useLogin from "../components/hooks/useLogin";

import "../css/Navbar.css";

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 0.5px solid rgba(50, 50, 93, 0.25);

  span {
    font-weight: 700;
    font-size: 20px;
    color: #32325d;
  }
`;

const Navbar = ({ title }) => {
  const { auth, setAuth, login, setLogin } = useLogin();

  const navigate = useNavigate();
  const location = useLocation();

  // console.log(auth.accessToken, "myauth");

  const [logged, setLogged] = React.useState(false);
  const [getAuth, setGetAuth] = React.useState("");

  const handleLogout = () => {
    setLogin(false);
    localStorage.clear();

    // navigate("/");

    // setLogged(auth.accessToken);
  };

  React.useEffect(() => {
    if (login === false) {
      navigate("/");
      console.log(login, "from effects");
      console.log(auth.success, "success status");
    }
  }, [handleLogout]);

  // console.log(login, "login boolean");
  return (
    <>
      <NavContainer>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid Navbar__wrapper d-flex flex-row">
            <span className="navbar-brand" href="">
              {title}
            </span>
            <div className="d-flex gap-2">
              <div className="notification">
                <img src={notifications} alt="" />
              </div>
              <div className="navigation__profile  dropdown">
                <img src={avatar} alt="" />
                <span
                  className=" nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href=""
                >
                  {" "}
                </span>

                <ul
                  className="dropdown-menu dropdown-menu-end py-3 mt-2"
                  aria-labelledby="navbarDropdown"
                >
                  <li className="proifle_avatar_wrapper">
                    <div>
                      <img src={avatar} />
                    </div>
                    <p className="pt-2">{auth.firstName}</p>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile{" "}
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      onClick={() => handleLogout()}
                      replace
                      className="dropdown-item"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </NavContainer>
    </>
  );
};

export default Navbar;
