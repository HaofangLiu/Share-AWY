import React, { createContext, useContext } from "react";
import AuthStore from "./auth";

const context = createContext({
  AuthStore: new AuthStore(),
});

const useStore = () => useContext(context);
export default useStore;
