import axios from "axios";

// api for login in
export default (() => {
  return axios.create({
    baseURL: "https://thexplorex-be.herokuapp.com/api/v1/test",
  });
})();
