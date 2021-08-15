import { observer } from "mobx-react";
import React from "react";
import UploadList from "../components/List";
import useStore from "../stores";
import Tips from "../components/Tips";

const History = observer(() => {
  const { UserStore } = useStore();

  return (
    <>
      <h1>History Page</h1>
      {UserStore.loggedinUser ? (
        <UploadList />
      ) : (
        <Tips>Please Login to see upload history</Tips>
      )}
    </>
  );
});

export default History;
