import { createContext, useContext } from "react";
import AuthStore from "./auth";
import UserStore from "./user";
import ImageStore from "./image";

const context = createContext({
  AuthStore: new AuthStore(),
  UserStore: new UserStore(),
  ImageStore: new ImageStore(),
});

const useStore = () => useContext(context);
export default useStore;
