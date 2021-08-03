import { makeObservable, observable, action } from "mobx";
import Auth from "../models";

class UserStore {
  loggedinUser = null;

  constructor() {
    makeObservable(this, {
      loggedinUser: observable,
      setUser: action,
      resetUser: action,
    });
  }

  setUser() {
    this.loggedinUser = Auth.getCurrentUser();
    console.log(this.loggedinUser);
  }

  resetUser() {
    this.loggedinUser = null;
  }
}

export default UserStore;
