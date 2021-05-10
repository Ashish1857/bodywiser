import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { RatingIcon } from "../assets/images/index";
import {DiscountIcon } from '../assets/images/index'

const useStyles = makeStyles((theme = Theme) => {
  return {
    card: {
      padding: "0 15px",
      [theme.breakpoints.down("sm")]: {
        padding: "0 12px",
      }
    },
    cardBox: {
      border: "1px solid #DEDEDE",
      position: "relative",
      borderRadius: "10px 10px 8px 8px",
      [theme.breakpoints.down("sm")]: {},
    },
    ribbon: {
      position: "absolute",
      top: 15,
      left: -5,
      padding: "5px 10px",
      width: 100,
      background: "#66509A",
      "& p": {
        fontSize: 14,
        color: "#fff",
      },
    },
    details: {
      width: "100%",
      padding: '0 10px',
      background:'#F6F6F6',
      margin:'0 0 12px',
    },
    buttonWrapper: {
      display: "flex",
      width: "100%",
      "& button": {
        width: "50%",
        borderRadius: 0,
        textTransform: "none",
        fontSize: 14,
        lineHeight: "16px",
        padding: 12,
      },
    },
    productDetails: {
      display: "flex",
      flexWrap: "wrap",
      width: "100%",
      alignItems:'center',
      "& li": {
        '& p':{
          margin: '0 16px 0 0',
          fontSize:14,
          lineHeight: '16px',
          fontWeight:700
        },
       '&:first-child':{
         minWidth: 'auto',
       },
        padding: "5px 16px",
        textAlign: "center",
        fontSize: "14px",
        minWidth: 100,
        "&:not(:last-child)": {
          borderRight: "1px solid #ddd",
        },
        [theme.breakpoints.down("sm")]: {
         minWidth: 80
        }
      },
    },
    cartBtn:{
      background: '#eee',
      fontWeight: 500
    },
    buyBtn: {
      background: "#000",
      color: "#fff",
      "&:hover": {
        background: "#000",
        color: "#fff",
      },
    },
    imgContainer: {
      width: "100%",
    },
    cardContent:{
      position: 'relative',
      '& h2':{
        fontSize: 20,
        lineHeight: '28px',
        padding:20,
        fontWeight: 700
      }
    },
    rating: {
      position: "absolute",
      top: -15,
      left: -5,
      padding: "5px 10px",
      background: "#000",
      display: "flex",
      alignItems: "center",
      "& img": {
        margin: "0 5px 0 0",
      },
      "& p": {
        fontSize: 12,
        color: "#fff",
      },
    },
    priceContainer:{
      display:'flex',
      alignItems:'center',
      padding:16,
      [theme.breakpoints.down("sm")]: {
        padding: 10
      }
    },
    price:{
      display:'flex',
      alignItems:'center',
      margin: '0 20px 0 0',
      [theme.breakpoints.down("sm")]: {
        margin: '0 10px 0 0'
      },
    },
    actualPrice:{
      fontSize:12,
      lineHeight: '16px',
      textDecoration:'line-through',
      fontWeight:500,
      color:'#828282',
     
    },
    currentPrice:{
      fontSize: 18,
      lineHeight:'24px',
      fontWeight: 700,
      margin: '0 10px 0 0',
      [theme.breakpoints.down("sm")]: {
        fontSize: 14,
        lineHeight:'20px',
      }
    },
    discounts:{
      display:'flex',
      alignItems:'center',
      padding: '0 0 0 16px',
      [theme.breakpoints.down("sm")]: {
        padding: '0 0 0 10px'
      },
      '& img':{
      margin: '0 10px 0 0'
      },
      '& p':{
        fontSize:16,
        lineHeight:'21px',
        color:'#09864A',
      fontWeight: 700,
      [theme.breakpoints.down("sm")]: {
        fontSize: 14,
        lineHeight:'20px',
      }

      }
    }
  };
});

export default function ItemCard(props) {
  const {
    card,
    buttonWrapper,
    details,
    cartBtn,
    productDetails,
    buyBtn,
    imgContainer,
    cardContent,
    cardBox,
    ribbon,
    rating,priceContainer,
    currentPrice,
    actualPrice,
    discounts,
    price
  } = useStyles();
  const { item, img } = props;

  return (
    <div className={card} key={item.id}>
      <div className={cardBox}>
        {item.launchType && (
          <div className={ribbon}>
            <Typography>{item.launchType}</Typography>
          </div>
        )}
        <CardMedia
          component="img"
          alt="item"
          className={imgContainer}
          image={img || ""}
          title={item.name || ""}
        />
        <div className={cardContent}>
          <div className={rating}>
            <img src={RatingIcon} alt="" />
            <Typography>{item.rating}</Typography>
          </div>
          <Typography component="h2">{item.name || ""}</Typography>
          <div className={details}>
           
            <ul className={productDetails}>
             <li> <Typography>For</Typography></li>
              <li  key="for">{item.for}</li>
            </ul>
            </div>
          <div className={details}>
            <ul className={productDetails}>
              <li> <Typography>with</Typography></li>
              {item.with?.map((x, i) => (
                <li key={`${x} - ${i}`}>{x}</li>
              ))}
            </ul>
          </div>
          <div className={priceContainer}>
            <div className={price}>
            <Typography className={currentPrice}>Rs 399</Typography>
            <Typography className={actualPrice}>₹1194</Typography>
          </div>
          <div className={discounts}>
            <img src={DiscountIcon} alt="" />
            <Typography>17% Off</Typography>
          </div>
          </div>
          <div className={buttonWrapper}>
            <Button classes={{ root: cartBtn }}> Add to Cart</Button>
            <Button classes={{ root: buyBtn }}> Buy Now </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
