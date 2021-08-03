import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import useStore from "../stores";

const StyledHeader = styled.header`
  padding: 0px 10px;
  background-color: #fefefe;
  height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledLeft = styled.div`
  text-align: left;
  flex: 3;
`;

const StyledRight = styled.div`
  text-align: right;
  flex: 3;
`;

const LogoUrl = styled.img`
  height: 50px;
  text-align: center;
  flex: 3;
  margin-bottom: 15px;
`;

const LinkStyled = styled(NavLink)`
  color: #333;
  padding: 10px 15px;
  &.active {
    color: red;
  }
`;

const Header = () => {
  const { UserStore } = useStore();

  return (
    <StyledHeader>
      <StyledLeft>
        <LinkStyled to="/" exact activeClassName="active">
          Home
        </LinkStyled>
        <LinkStyled to="/history" activeClassName="active">
          History
        </LinkStyled>
        <LinkStyled to="/about" activeClassName="active">
          About
        </LinkStyled>
      </StyledLeft>

      <LinkStyled to="/" exact>
        <LogoUrl src={logo} alt="logo"></LogoUrl>
      </LinkStyled>

      <StyledRight>
        {
          console.log(UserStore)
        }
        {UserStore.loggedinUser ? (
          <>
            <LinkStyled activeClassName="active">Logout</LinkStyled>
            <Button type="primary" icon={<UserOutlined />}>
              My Account
            </Button>
          </>
        ) : (
          <>
            <LinkStyled to="/login" activeClassName="active">
              Login
            </LinkStyled>
            <Button type="primary" href="/register">
              Create Account
            </Button>
          </>
        )}
      </StyledRight>
    </StyledHeader>
  );
};

export default Header;
