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
    // console.log("Failed:", errorInfo);
    message.error("login failed");
  };

  return (
    <>
      <Divider orientation="left">Login</Divider>
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
                offset: 4,
              }}
            >
              <Checkbox>Remember Me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                span: 24,
                offset: 8,
              }}
            >
              <Button type="primary" htmlType="submit">
                Login
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

export default Login;
