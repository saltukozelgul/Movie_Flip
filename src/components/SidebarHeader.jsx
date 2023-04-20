import styled from "@emotion/styled";
import React from "react";
import { useProSidebar } from "react-pro-sidebar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const StyledSidebarHeader = styled.div`
  height: 64px;
  min-height: 64px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  > div {
    width: 100%;
    overflow: hidden;
  }
`;

const StyledLogo = styled.div`
  width: 55px;
  min-width: 55px;
  height: 55px;
  min-height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: white;
  font-size: 24px;
  font-weight: 700;
  background-color: #009fdb;
  background: linear-gradient(45deg, rgb(21 87 205) 0%, rgb(90 225 255) 100%);
  margin-left: 10px;
  margin-right: 10px;
`;

const SidebarHeader = ({ children, ...rest }) => {
  const { rtl } = useProSidebar();
  return (
    <StyledSidebarHeader {...rest}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <StyledLogo rtl={rtl}>FM</StyledLogo>
        <div
          style={{
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
          }}
        >
          <Typography variant="subtitle1" fontWeight={900} color="#0098e5">
            Flip Movie
          </Typography>
          <Typography
            fontSize={11}
            variant="caption"
            fontWeight={200}
            color="#0098e5"
          >
            Looking for a movie?
          </Typography>
        </div>
      </div>
    </StyledSidebarHeader>
  );
};

export { SidebarHeader };
