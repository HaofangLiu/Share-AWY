import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: orange;
  padding: 10px;
  margin: 30px 0;
  color: #fff;
  border-radius: 4px;
`;

const Tips = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Tips;
