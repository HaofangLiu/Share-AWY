import React from "react";
import { observer } from "mobx-react";
import useStore from "../stores";
import UploaderComponent from "../components/Uploader";
import Tips from "../components/Tips";

const Home = observer(() => {
  const { UserStore } = useStore();

  return (
    <>
      <h1>Home Page</h1>
      {UserStore.loggedinUser ? null : <Tips>You have to login to upload</Tips>}
      {UserStore.loggedinUser ? (
        <p>Hello, {UserStore.loggedinUser.attributes.username}</p>
      ) : null}
      <UploaderComponent />
    </>
  );
});

export default Home;
