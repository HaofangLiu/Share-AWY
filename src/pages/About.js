import React, { useState } from "react";
import { Drawer } from "antd";
import { useHistory } from "react-router";

const About = () => {
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
      title="About Us"
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
      width="calc(100% - 250px)"
      getContainer={false}
      afterVisibleChange={onCloseGoBack}
    >
      <h1>This application is for personal use only</h1>
      <h2>Do not use on commercial</h2>
      <h3>Practical project</h3>
    </Drawer>
  );
};

export default About;
