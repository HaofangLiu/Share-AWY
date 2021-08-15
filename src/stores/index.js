import { createContext, useContext } from "react";
import AuthStore from "./auth";
import UserStore from "./user";
import ImageStore from "./image";
import HistoryStore from "./history";

const context = createContext({
  AuthStore: new AuthStore(),
  UserStore: new UserStore(),
  ImageStore: new ImageStore(),
  HistoryStore: new HistoryStore(),
});

const useStore = () => useContext(context);
export default useStore;
