import React from "react";
import { observer } from "mobx-react";
import useStore from "../stores";
import UploaderComponent from "../components/Uploader";
import Tips from "../components/Tips";
import styled from "styled-components";

const StyledTitle = styled.p`
  margin: 100px 30px 0;
`;

const Home = observer(() => {
  const { UserStore } = useStore();

  return (
    <>
      {UserStore.loggedinUser ? null : <Tips>You have to login to upload</Tips>}
      {UserStore.loggedinUser ? (
        <StyledTitle>
          Hello, {UserStore.loggedinUser.attributes.username}
        </StyledTitle>
      ) : null}
      <UploaderComponent />
    </>
  );
});

export default Home;
