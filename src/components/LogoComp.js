import React from "react";
import { NavLink } from "react-router-dom";
import share from "../res/share.svg";
import styled from "styled-components";
import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import useStore from "../stores";
import { observer } from "mobx-react";

const StyledLogoArea = styled.div`
  position: absolute;
  top: 10px;
`;

const LogoUrl = styled.img`
  height: 50px;
`;

const LinkStyled = styled(NavLink)`
  padding: 10px 15px;
  position: relative;
  &::after {
    content: "";
    width: 10px;
    height: 10px;
    border: 1px solid #121212;
    border-width: 0 0 2px 2px;
    position: absolute;
    right: 0;
    top 50%;
    transform: translate(0, -100%) rotate(-45deg);
    transition: all 0.3s;
  }
  ${StyledLogoArea}:hover &::after  {
    transform: translate(0, -50%) rotate(135deg);
  } 
`;

const StyledDropDownContent = styled.div`
  visibility: hidden;
  opacity: 0;
  background: #fff;
  border: 1px solid #121212;
  border-radius: 4px;
  position: absolute;
  padding: 8px 0;
  left: 50%;
  transform: translate(-50%);
  transition: all 0.3s;
  ${StyledLogoArea}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

const StyledDropItem = styled(NavLink)`
  padding: 8px 20px;
  font-size: 15px;
  display: block;
  cursor: pointer;
  &:hover {
    color: black;
    background-color: #e8e8e8;
  }
  &.active {
    color: grey;
  }
`;

const StyledFamily = styled.span`
  font-size: 22px;
  color: #fff;
  padding: 0 5px;
  vertical-align: middle;
`;

const LogoComponent = observer(() => {
  const { UserStore, AuthStore, HistoryStore } = useStore();

  const handleLogout = () => {
    AuthStore.logout();
    UserStore.resetUser();
    HistoryStore.reset();
  };

  const handleSelect = () => {};

  return (
    <StyledLogoArea>
      <LinkStyled to="/" exact>
        <LogoUrl src={share} alt="logo"></LogoUrl>
        <StyledFamily>share as you wish</StyledFamily>
      </LinkStyled>
      <StyledDropDownContent class="dropdown-content">
        <StyledDropItem to="/history" activeClassName="active">
          History
        </StyledDropItem>
        <StyledDropItem to="/about" activeClassName="active">
          About
        </StyledDropItem>
      </StyledDropDownContent>
    </StyledLogoArea>
  );
});

export default LogoComponent;
