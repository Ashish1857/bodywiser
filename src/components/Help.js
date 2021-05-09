import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { HelpIcon } from "../assets/images/index";
import {HELP_API_END_POINT} from '../utils/AppConfig'

const useStyles = makeStyles((theme) => ({
  helpWrapper: {
    padding: "80px 0",
    background: "#fff",
    [theme.breakpoints.down("sm")]: {
      padding: "40px 0",
    },
  },
  gridContainer: {
    width: 1140,
    margin: "60px auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "0 auto",
    },
  },
  paper: {
    height: 140,
    width: 100,
  },
  header: {
    fontFamily: "SerifaStd-Black",
    fontWeight: "bold",
    fontSize: "44px",
    lineHeight: "52px",
    textAlign: "center",
  },
  card: {
    padding: 16,
    background: "#FFFFFF",
    borderRadius: "8px",
    margin: "0 0 24px",
    "& h2": {
      fontSize: 20,
      lineHeight: "28px",
      margin: "0 0 10px",
      fontWeight: 800,
      [theme.breakpoints.down("sm")]: {
        fontSize: 16,
        lineHeight: "24px",
      },
    },
    "& p": {
      fontSize: 16,
      lineHeight: "24px",
      [theme.breakpoints.down("sm")]: {
        fontSize: 14,
        lineHeight: "20px",
      },
    },
    '&:nth-child(2)':{
      boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.12)"
    }
  },
  helpImg:{
    textAlign: 'center',
    '& img':{
      [theme.breakpoints.down("xs")]: {
        width: '100%'
      }
    }
  }
}));

const Help = () => {
  const { helpWrapper, gridContainer, header, card, helpImg } = useStyles();
  const [helpData, setHelpData] = useState([]);

  useEffect(() => {
    fetch(HELP_API_END_POINT)
      .then((resp) => resp.json())
      .then((res) => setHelpData(res.helpData));
  }, []);

  return (
    <div className={helpWrapper}>
      <Typography className={header}>How It Works</Typography>
      <Grid container className={gridContainer} spacing={2}>
        <Grid item xs={12} md={6}>
          <div className={helpImg}>
            <img src={HelpIcon} alt="" />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          {helpData.map((item, index) => (
            <div className={card} key={`${item.title}-${index}`}>
              <Typography component="h2">
                {`${index + 1}. ${item.title}`}
              </Typography>
              <p>{item.description}</p>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Help;
