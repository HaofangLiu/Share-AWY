import React from "react";
import styled from "styled-components";
import useStore from "../stores";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

const StyledLoginSection = styled.div`
  position: absolute;
  right: 30px;
  top: 24px;
  z-index:100;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 13%);
  background: #fff;
  border-radius: .3125rem;
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

const LoginComp = () => {
  const { UserStore, AuthStore, HistoryStore } = useStore();

  const handleLogout = () => {
    AuthStore.logout();
    UserStore.resetUser();
    HistoryStore.reset();
  };
  return (
    <>
      {UserStore.loggedinUser ? (
        <StyledLoginSection>
          <StyledButton onClick={handleLogout}>Logout</StyledButton>
          <Button type="primary" icon={<UserOutlined />}>
            {UserStore.loggedinUser.attributes.username}
          </Button>
        </StyledLoginSection>
      ) : (
        <StyledLoginSection>
          <LinkStyled to="/login" activeClassName="active">
            Login
          </LinkStyled>
          <Button type="primary" href="/register">
            Create Account
          </Button>
        </StyledLoginSection>
      )}
    </>
  );
};

export default LoginComp;
