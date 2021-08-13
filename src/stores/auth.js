import { makeObservable, observable, action } from "mobx";
import { Auth } from "../models";

class AuthStore {
  values = {
    username: "asdf",
    password: "",
    email: "",
  };

  constructor() {
    makeObservable(this, {
      values: observable,
      setUserName: action,
      setPassword: action,
      login: action,
      register: action,
      logout: action,
    });
  }

  setUserName(name) {
    this.values.username = name;
  }

  setPassword(psd) {
    this.values.password = psd;
  }

  setEmail(eml) {
    this.values.email = eml;
  }

  login() {
    return new Promise((resolve, reject) => {
      Auth.login(this.values.username, this.values.password)
        .then((user) => {
          // console.log("login success");
          resolve(user);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  register() {
    return new Promise((resolve, reject) => {
      Auth.register(
        this.values.username,
        this.values.password,
        this.values.email
      )
        .then((user) => {
          // console.log("register success");
          resolve(user);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  logout() {
    Auth.logout();
  }
}

export default AuthStore;
