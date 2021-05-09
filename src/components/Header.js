import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import React, { useState } from "react";
import {
  Logo,
  Search,
  Whatsapp,
  Bag,
  Profile,
  MenuIcon,
  CloseIcon,
} from "../assets/images";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Badge from "@material-ui/core/Badge";
import { MENU_ITEMS } from "../utils/AppConfig";

const useStyles = makeStyles((theme) => {
  return {
    logo: {
      height: 24,
      width: 140,
      [theme.breakpoints.down("md")]: {
        height: 20,
        width: 114,
      },
    },
    colorPrimary: {
      backgroundColor: "#000000",
    },
    menuWrapper: {
      display: "flex",
      alignItems: "center",
      maxWidth: "85%",
      [theme.breakpoints.down("md")]: {
        maxWidth: "100%",
        padding: 0,
      },
    },

    widgetWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    menuItems: {
      [theme.breakpoints.down("md")]: {
        padding: "0 10px",
      },
    },
    menuBar: {
      display: "none",
      cursor: "pointer",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        paddingRight: 0,
      },
    },
    badge: {
      backgroundColor: "#FFC043",
      color: "#000000",
      fontFamily: "Avenir",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "16px",
      display: "flex",
      alignItems: "center",
      top: -4,
      right: -7,
      width: 7,
      height: 16,
      [theme.breakpoints.down("md")]: {
        width: 5,
        fontSize: 8,
      },
    },
    menuList: {
      display: "flex",
      alignItems: "center",
      "& li": {
        "& a": {
          padding: "0 16px",
          textDecoration: "none",
          cursor: "pointer",
          whiteSpace: "nowrap",
          "&:hover": {
            textDecoration: "none",
          },
          [theme.breakpoints.down("md")]: {
            padding: 16,
          },
        },
      },
      [theme.breakpoints.down("md")]: {
        position: "fixed",
        top: 56,
        left: "-100%",
        bottom: 0,
        right: "auto",
        padding: 20,
        background: "#000",
        flexDirection: "column",
        alignItems: "flex-start",
        transition: "all 0.5s ease",
        "&.active": {
          left: 0,
        },
      },
    },
    headerOptions: {
      display: "flex",
      alignItems: "center",
      "& li": {
        "& a": {
          padding: "0 14px",
          textDecoration: "none",
          cursor: "pointer",
          "&:hover": {
            textDecoration: "none",
          },
          [theme.breakpoints.down("md")]: {
            padding: "0 10px",
          },
        },
        [theme.breakpoints.down("md")]: {
          "&:first-child": {
            display: "none",
          },
        },
      },
    },
  };
});

const WidgetBody = () => {
  const { badge, headerOptions } = useStyles({});
  return (
    <ul className={headerOptions}>
      <li>
        <Link to="">
          <img src={Search} alt="search" />
        </Link>
      </li>
      <li>
        <Link to="">
          <img src={Whatsapp} alt="whatsapp" />
        </Link>
      </li>
      <li>
        <Link to="">
          <img src={Profile} alt="Profile" />
        </Link>
      </li>
      <li>
        <Link to="">
          <Badge
            badgeContent={4}
            color="secondary"
            classes={{ colorSecondary: badge }}
          >
            <img src={Bag} alt="Bag" />
          </Badge>
        </Link>
      </li>
    </ul>
  );
};

const RightWidget = () => {
  const { widgetWrapper } = useStyles({});
  return (
    <Container classes={{ root: widgetWrapper }}>
      <WidgetBody />
    </Container>
  );
};

const Header = () => {
  const {
    logo,
    menuBar,
    colorPrimary,
    menuWrapper,
    link,
    menuItems,
    menuList,
  } = useStyles({});
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <AppBar classes={{ colorPrimary: colorPrimary }}>
        <Container classes={{ root: menuWrapper }}>
          <Toolbar
            classes={{ regular: menuBar }}
            onClick={() => setIsActive((active) => !active)}
          >
            <img src={isActive ? CloseIcon : MenuIcon} alt="" width={20} />
          </Toolbar>
          <Toolbar>
            <img className={logo} src={Logo} alt="logo" />
          </Toolbar>
          <Toolbar classes={{ root: menuItems }}>
            <ul className={`${menuList} ${isActive ? "active" : ""}`}>
              {Object.keys(MENU_ITEMS).map((key, i) => {
                return (
                  <li key={`${key}-${i}`}>
                    <Link color="inherit" className={link}>
                      {MENU_ITEMS[key]?.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Toolbar>
          <RightWidget />
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
