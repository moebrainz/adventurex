import request from "./axios";

export default class LoginService {
  static getLogin() {
    return request({
      method: "POST",
    });
  }
}
