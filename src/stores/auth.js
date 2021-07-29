import { makeObservable, observable, action } from "mobx";

class AuthStore {
  isLogin = false;
  isLoading = true;
  values = {
    username: "asdf",
    password: "",
  };

  constructor() {
    makeObservable(this, {
      isLogin: observable,
      isLoading: observable,
      values: observable,
      setUserName: action,
      setPassword: action,
      setIsLogin: action,
      setIsLoginsetIsLogin: action,
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

  setIsLogin(loginStatus) {
    this.isLogin = loginStatus;
  }

  setIsLoginsetIsLogin(loadingStatus) {
    this.isLoading = loadingStatus;
  }

  login() {}

  register() {}

  logout() {}
}

export default AuthStore;
