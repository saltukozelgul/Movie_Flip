import React from "react";
import {
  Menu,
  MenuItem,
  SubMenu,
  Sidebar,
  menuClasses,
  useProSidebar,
} from "react-pro-sidebar";
import { SidebarHeader } from "./SidebarHeader";
import {
  Typography,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(props) {
  const { toggleSidebar, collapseSidebar, broken, collapsed } = useProSidebar();
  // hex to rgba converter
  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const themes = {
    light: {
      sidebar: {
        backgroundColor: "#ffffff",
        color: "#607489",
      },
      menu: {
        menuContent: "#fbfcfd",
        icon: "#0098e5",
        hover: {
          backgroundColor: "#c5e4ff",
          color: "#44596e",
        },
        disabled: {
          color: "#9fb6cf",
        },
      },
    },
    dark: {
      sidebar: {
        backgroundColor: "#0b2948",
        color: "#8ba1b7",
      },
      menu: {
        menuContent: "#082440",
        icon: "#59d0ff",
        hover: {
          backgroundColor: "#00458b",
          color: "#b6c8d9",
        },
        disabled: {
          color: "#3e5e7e",
        },
      },
    },
  };

  const menuItemStyles = {
    root: {
      fontSize: "13px",
      fontWeight: 400,
    },
    icon: {
      color: themes["dark"].menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: themes["dark"].menu.disabled.color,
      },
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(themes["dark"].menu.menuContent, 0.4)
          : "transparent",
    }),
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: themes["dark"].menu.disabled.color,
      },
      "&:hover": {
        backgroundColor: hexToRgba(
          themes["dark"].menu.hover.backgroundColor,
          0.8
        ),
        color: themes["dark"].menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        image=""
        breakPoint="lg"
        backgroundColor={hexToRgba(themes["dark"].sidebar.backgroundColor, 1)}
        rootStyles={{
          color: themes["dark"].sidebar.color,
        }}
      >
        <SidebarHeader style={{ marginBottom: "24px", marginTop: "16px" }} />
        <div
          style={{
            padding: "0 24px",
            marginBottom: "8px",
            textAlign: "center",
          }}
        >
          <Button variant="outlined">FLIP!</Button>
        </div>
        <Menu menuItemStyles={menuItemStyles} iconShape="square">
          <SubMenu
            icon={
              <FontAwesomeIcon
                icon={faList}
                style={{ color: themes["dark"].menu.icon }}
              />
            }
            label="Categories"
          >
            <FormGroup>
              <MenuItem>
                <FormControlLabel control={<Checkbox />} label="Action" />
              </MenuItem>
              <MenuItem>
                <FormControlLabel control={<Checkbox />} label="Adventure" />
              </MenuItem>
              <MenuItem>
                <FormControlLabel control={<Checkbox />} label="Animation" />
              </MenuItem>
              <MenuItem>
                <FormControlLabel control={<Checkbox />} label="Comedy" />
              </MenuItem>
              <MenuItem>
                <FormControlLabel control={<Checkbox />} label="Crime" />
              </MenuItem>
              <MenuItem>
                <FormControlLabel control={<Checkbox />} label="Documentary" />
              </MenuItem>
              <MenuItem>
                <FormControlLabel control={<Checkbox />} label="Drama" />
              </MenuItem>
              <MenuItem>
                <FormControlLabel control={<Checkbox />} label="Family" />
              </MenuItem>
              <MenuItem>
                <FormControlLabel control={<Checkbox />} label="Fantasy" />
              </MenuItem>
              <MenuItem>
                <FormControlLabel control={<Checkbox />} label="History" />
              </MenuItem>
              <MenuItem>
                <FormControlLabel control={<Checkbox />} label="Horror" />
              </MenuItem>
              <MenuItem>
                <FormControlLabel control={<Checkbox />} label="Music" />
              </MenuItem>
              <MenuItem>
                <FormControlLabel control={<Checkbox />} label="Mystery" />
              </MenuItem>
              <MenuItem>
                <FormControlLabel control={<Checkbox />} label="Romance" />
              </MenuItem>
            </FormGroup>
          </SubMenu>
          <SubMenu
            icon={
              <FontAwesomeIcon
                icon={faList}
                style={{ color: themes["dark"].menu.icon }}
              />
            }
            label="Vote Average"
          >
            <FormGroup>
              <MenuItem>
                <FormControlLabel control={<Checkbox />} label="8 - 10" />
              </MenuItem>
              <MenuItem>
                <FormControlLabel control={<Checkbox />} label="6 - 8" />
              </MenuItem>
              <MenuItem>
                <FormControlLabel control={<Checkbox />} label="4  6" />
              </MenuItem>
              <MenuItem>
                <FormControlLabel control={<Checkbox />} label="2 - 4" />
              </MenuItem>
              <MenuItem>
                <FormControlLabel control={<Checkbox />} label="0 - 2" />
              </MenuItem>
            </FormGroup>
          </SubMenu>
        </Menu>
      </Sidebar>
      <main>{props.children}</main>
    </div>
  );
}
