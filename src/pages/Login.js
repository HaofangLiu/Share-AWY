import React from "react";
import { observer } from "mobx-react";
// import useStore from "../stores/index";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Divider,
  Row,
  Col,
  message,
} from "antd";
import useStore from "../stores";
import { useHistory } from "react-router";

const Login = observer(() => {
  const { AuthStore, UserStore } = useStore();
  const history = useHistory();
  // const inputRef = useRef();

  const onFinish = (values) => {
    AuthStore.setUserName(values.username);
    AuthStore.setPassword(values.password);
    AuthStore.login()
      .then(() => {
        UserStore.setUser();
        history.push("/");
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

  return (
    <>
      <Divider orientation="center">Login</Divider>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={12}>
          <Form
            name="basic"
            labelAlign="right"
            labelCol={{ span: 8 }}
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
                offset: 8,
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
        <Col xs={24} sm={24} md={4}>
          <Divider>OR</Divider>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <p>Sign in with other account</p>
        </Col>
      </Row>
    </>
  );
});

export default Login;
