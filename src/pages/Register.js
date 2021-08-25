import React, { useState } from "react";
import { observer } from "mobx-react";
import useStore from "../stores/index";
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
import { useHistory } from "react-router";

const Reigster = observer(() => {
  const { AuthStore, UserStore } = useStore();
  const history = useHistory();
  const [visible, setVisible] = useState(true);

  const onClose = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    AuthStore.setEmail(values.email);
    AuthStore.setUserName(values.username);
    AuthStore.setPassword(values.password);
    AuthStore.register()
      .then(() => {
        UserStore.setUser();
        AuthStore.login();
      })
      .then(() => {
        history.push("/");
      })
      .catch((e) => {
        message.error("register failed");
        UserStore.resetUser();
      });
  };

  // const onFinishFailed = (errorInfo) => {
  //   message.error("register failed");
  // };

  const validateUserName = (rule, value) => {
    if (/\W/g.test(value))
      return Promise.reject(
        "only number character or underscore are suuported."
      );
    return Promise.resolve();
  };

  const onCloseGoBack = () => {
    if (!visible) {
      history.goBack();
    }
  };

  return (
    <Drawer
      title="Register"
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
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Email Address" />
            </Form.Item>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
                { validator: validateUserName },
              ]}
            >
              <Input placeholder="Username" />
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
                offset: 7,
              }}
            >
              <Checkbox>I agree to the terms and privacy policy</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                span: 24,
                offset: 11,
              }}
            >
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Drawer>
  );
});

export default Reigster;
