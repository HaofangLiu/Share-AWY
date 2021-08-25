import { observer } from "mobx-react";
import React, { useState } from "react";
import UploadList from "../components/List";
import useStore from "../stores";
import Tips from "../components/Tips";
import { Drawer } from "antd";
import { useHistory } from "react-router";

const History = observer(() => {
  const { UserStore } = useStore();
  const [visible, setVisible] = useState(true);
  const history = useHistory();

  // const showDrawer = () => {
  //   setVisible(true);
  // };

  const onClose = () => {
    setVisible(false);
  };

  const onCloseGoBack = () => {
    if (!visible) {
      history.goBack();
    }
  };

  return (
    <Drawer
      title="Upload History"
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
      width="calc(100% - 250px)"
      getContainer={false}
      afterVisibleChange={onCloseGoBack}
    >
      <h1>History Page</h1>
      {UserStore.loggedinUser ? (
        <UploadList />
      ) : (
        <Tips>Please Login to see upload history</Tips>
      )}
    </Drawer>
  );
});

export default History;
