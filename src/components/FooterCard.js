import Typography from "@material-ui/core/Typography";
import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { FOOTER_CARD_STATIC_DATA } from "../utils/AppConfig";

const useStyles = makeStyles((theme) => {
    return {
        button:{
            backgroundColor: "#000000",
            color: "#FFFFFF",
            width: 343,
            height: 56,
            padding: '14px 20px',
            fontSize: 18,
            [theme.breakpoints.down("xs")]: {
                width: '100%'
            }
        },
        cardWrapper:{
            padding:32,
            backgroundColor: "#F6F6F6",
            textAlign:'center',
            [theme.breakpoints.down("xs")]: {
                padding: 16
            }
        },
        title:{
            fontFamily: "'SerifaStd-Black', sans-serif",
            fontSize: "36px",
            lineHeight: "44px",
            [theme.breakpoints.down("sm")]: {
                fontSize: 28,
                lineHeight: "36px"
            }
        },
        description:{
            fontSize: "18px",
            lineHeight: "28px",
            margin: '10px 0 30px',
            [theme.breakpoints.down("sm")]: {
                fontSize: 14,
                lineHeight: "20px"
            }
        },
    }});

function FooterCard() {
  const { button, cardWrapper, title, description } = useStyles({});

  return (
    <div className={cardWrapper}>
      <Typography classes={{ root: title }}>
        {FOOTER_CARD_STATIC_DATA.title}
      </Typography>
      <Typography classes={{ root: description }}>
        {FOOTER_CARD_STATIC_DATA.description}
      </Typography>
      <Button variant="contained" className={button}>
        {FOOTER_CARD_STATIC_DATA.ctaLabel}
      </Button>
    </div>
  );
}

export default FooterCard;
