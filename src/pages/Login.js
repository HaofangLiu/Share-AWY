import React, { useState } from "react";
import { observer } from "mobx-react";
// import useStore from "../stores/index";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  message,
  Drawer,
} from "antd";
import useStore from "../stores";
import { useHistory } from "react-router";

const Login = observer(() => {
  const { AuthStore, UserStore } = useStore();
  const history = useHistory();
  const [visible, setVisible] = useState(true);

  // const showDrawer = () => {
  //   setVisible(true);
  // };

  const onClose = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    AuthStore.setUserName(values.username);
    AuthStore.setPassword(values.password);
    AuthStore.login()
      .then(() => {
        UserStore.setUser();
        onClose();
      })
      .catch((e) => {
        // console.log(e);
        message.error("login failed");
        UserStore.resetUser();
      });
  };

  const onFinishFailed = (errorInfo) => {
    message.error("login failed");
  };

  const onCloseGoBack = () => {
    if (!visible) {
      history.goBack();
    }
  };

  return (
    <Drawer
      title="Login"
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
      width="calc(100% - 250px)"
      getContainer={false}
      afterVisibleChange={onCloseGoBack}
    >
      <Row>
        <Col xs={24}>
          <Form
            name="basic"
            labelAlign="right"
            labelCol={{ span: 3 }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Account"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username or email",
                },
              ]}
            >
              <Input placeholder="Username or email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
                {
                  min: 6,
                  message: "Minium six characters",
                },
                {
                  max: 10,
                  message: "Maximum ten characters",
                },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                span: 24,
                offset: 11,
              }}
            >
              <Checkbox>Remember Me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                span: 24,
                offset: 12,
              }}
            >
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Drawer>
  );
});

export default Login;
