import axios from "axios";

// api for login in
export default (() => {
  return axios.create({
    baseURL: "https://explorerx.herokuapp.com/api/v1/admin-auth",
  });
})();
