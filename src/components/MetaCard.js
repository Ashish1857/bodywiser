import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { ItemIcon } from "../assets/images/index";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { INTRO_CARD_STATIC_DATA } from "../utils/AppConfig";

const useStyles = makeStyles((theme = Theme) => {
  return {
    card: {
      justifyContent: "center",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      padding: 32,
      background: "#fff",
      width: 700,
      [theme.breakpoints.down("sm")]: {
        padding: 24,
        boxShadow: "none",
      },
    },
    title: {
      fontFamily: "'SerifaStd-Black', sans-serif",
      fontWeight: "bold",
      fontSize: "44px",
      lineHeight: "52px",
      [theme.breakpoints.down("sm")]: {
        fontSize: 28,
        lineHeight: "36px",
      },
    },
    description: {
      fontSize: "18px",
      lineHeight: "28px",
      margin: "20px auto 40px",
      width: "90%",
      [theme.breakpoints.down("sm")]: {
        fontSize: 14,
        lineHeight: "20px",
        margin: "12px auto 20px",
      },
    },
    footerTitle: {
      fontWeight: "bold",
      fontSize: "24px",
      lineHeight: "32px",
      [theme.breakpoints.down("sm")]: {
        fontSize: 20,
        lineHeight: "28px",
      },
    },
    itemWrapper: {
      display: "flex",
      justifyContent: "space-evenly",
      margin: "20px 0 0",
      [theme.breakpoints.down("xs")]: {
        justifyContent: "space-between",
        margin: "16px 0 0",
      },
    },
    items: {
      width: "111px",
      height: "130px",
      background: "#FFFFFF",
      boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.12)",
      borderRadius: "4px",
      position: "relative",
      padding: 16,
      // border: '1px solid #ccc',
      [theme.breakpoints.down("sm")]: {
        width: 92,
        height: 120,
        padding: 10,
      },
      "& *": {
        position: "relative",
        zIndex: 2,
      },
      "&:before": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "42%",
        background: "#fff",
        zIndex: 1,
      },
      "&.blue": {
        background: "#2A658D",
      },
      "&.yellow": {
        background: "#EB9633",
      },
      "&.green": {
        background: "#007061",
      },
      "& img": {
        width: "100%",
        [theme.breakpoints.down("sm")]: {
          width: 60,
        },
      },
      "& p": {
        fontSize: 12,
        lineHeight: "20px",
        color: "#fff",
      },
    },
  };
});

const ITEM_TYPES = [
  {
    label: "Hair",
    img: ItemIcon,
    color: "blue",
  },
  {
    label: "Skin",
    img: ItemIcon,
    color: "yellow",
  },
  {
    label: "Weight",
    img: ItemIcon,
    color: "green",
  },
];

const Item = () => {
  const { items, itemWrapper } = useStyles();
  return (
    <div className={itemWrapper}>
      {ITEM_TYPES.map((item, i) => {
        return (
          <div
            className={`${items} ${item.color}`}
            key={`${item.label} - ${i}`}
          >
            <img src={item.img} alt="" />
            <Typography>{item.label}</Typography>
          </div>
        );
      })}
    </div>
  );
};

export default function MetaCard() {
  const classes = useStyles();

  return (
    <Card classes={{ root: classes.card }}>
      <div>
        <Typography className={classes.title} gutterBottom>
          {INTRO_CARD_STATIC_DATA.title}
        </Typography>
        <Typography className={classes.description}>
          {INTRO_CARD_STATIC_DATA.description}
        </Typography>

        <Typography className={classes.footerTitle}>
          {INTRO_CARD_STATIC_DATA.footerTitle}
        </Typography>
        <Item />
      </div>
    </Card>
  );
}
