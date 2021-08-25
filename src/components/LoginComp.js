import React from "react";
import styled from "styled-components";
import useStore from "../stores";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { observer } from "mobx-react-lite";

const StyledLoginSection = styled.div`
  position: absolute;
  right: 30px;
  top: 24px;
  z-index: 100;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 13%);
  background: #fff;
  border-radius: 0.3125rem;
  height: 40px;
  display: flex;
`;
const StyledButton = styled.button`
  padding: 10px 15px;
  border: none;
  color: #333;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

const LinkStyled = styled(NavLink)`
  color: #333;
  padding: 10px 15px;
  &.active {
    color: red;
  }
`;

const StyledButtonUi = styled(Button)`
  height: 100%;
`;

const LoginComp = observer(() => {
  const { UserStore, AuthStore, HistoryStore, ImageStore } = useStore();

  const handleLogout = () => {
    AuthStore.logout();
    UserStore.resetUser();
    HistoryStore.reset();
    ImageStore.clearServerFile();
  };
  return (
    <>
      {UserStore.loggedinUser ? (
        <StyledLoginSection>
          <StyledButton onClick={handleLogout}>Logout</StyledButton>
          <StyledButtonUi block={true} type="primary" icon={<UserOutlined />}>
            {UserStore.loggedinUser.attributes.username}
          </StyledButtonUi>
        </StyledLoginSection>
      ) : (
        <StyledLoginSection>
          <LinkStyled to="/login" activeClassName="active">
            Login
          </LinkStyled>
          <LinkStyled to="/register">Create Account</LinkStyled>
        </StyledLoginSection>
      )}
    </>
  );
});

export default LoginComp;
