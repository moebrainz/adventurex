import axios from "axios";
// import useLogin from "../components/hooks/useLogin";

// api for login in
export default (() => {
  return axios.create({
    baseURL: "https://thexplorex-backend.herokuapp.com/api/v1/admin",
  });
})();
