import { createContext, useContext } from "react";
import AuthStore from "./auth";
import UserStore from "./user";

const context = createContext({
  AuthStore: new AuthStore(),
  UserStore: new UserStore(),
});

window.stores = {
  AuthStore: new AuthStore(),
  UserStore: new UserStore(),
};

const useStore = () => useContext(context);
export default useStore;
