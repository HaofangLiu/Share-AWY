import React from "react";
import { observer } from "mobx-react";
import useStore from "../stores/index";
import { Form, Input, Button, Checkbox, Divider, Row, Col } from "antd";

const Reigster = observer(() => {
  const { AuthStore, UserStore } = useStore();
  // const inputRef = useRef();

  const onFinish = (values) => {
    AuthStore.setEmail(values.email);
    AuthStore.setUserName(values.username);
    AuthStore.setPassword(values.password);
    AuthStore.register()
      .then(() => {
        UserStore.setUser();
        AuthStore.login();
      })
      .catch((e) => {
        console.log(e);
        UserStore.resetUser();
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const validateUserName = (rule, value) => {
    if (/\W/g.test(value))
      return Promise.reject(
        "only number character or underscore are suuported."
      );
    return Promise.resolve();
  };

  return (
    <>
      <Divider orientation="left">Register</Divider>
      <Row gutter={24}>
        <Col xs={24} sm={24} md={10}>
          <Form
            name="basic"
            labelAlign="right"
            labelCol={{ span: 5 }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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
                offset: 4,
              }}
            >
              <Checkbox>I agree to the terms and privacy policy</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                span: 24,
                offset: 8,
              }}
            >
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col xs={24} sm={24} md={2}>
          <Divider>OR</Divider>
        </Col>
        <Col xs={24} sm={24} md={10}>
          <p>Sign in with other account</p>
        </Col>
      </Row>
    </>
  );
});

export default Reigster;
