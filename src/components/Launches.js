import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import { ProductIcon } from "../assets/images/index";
import Slider from "react-slick";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import Tab from "./Tab";
import { ArrowRight, ArrowLeft } from "../assets/images/index";
import { ITEMS_API_END_POINT, TABS } from "../utils/AppConfig";
import Carousel from "react-multi-carousel";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 60,
  },
};

const useStyles = makeStyles((theme = Theme) => {
  return {
    launchContainer: {
      padding: "40px 0",
    },
    title: {
      fontFamily: "Serifa Std",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "36px",
      lineHeight: "44px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      color: "#333333",
    },
    itemWrapper: {
      [theme.breakpoints.down("xs")]: {
        padding: "16px 0",
        overflow: "hidden",
      },
    },
    slider: {
      width: 1140,
      margin: "0 auto",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "80%",
        margin: 0,
        display: "none",
      },
      "& .slick-slide": {
        width: "100%",
      },
      "& >.slick-dots": {
        position: "static !important",
        margin: "40px 0 20px",
        textAlign: "left",

        "& li": {
          width: 12,
          height: 12,
          "& button": {
            display: "block",
            width: 8,
            height: 8,
            borderRadius: 8,
            background: "#C4C4C4",
            color: "transparent",
            "&:before": {
              display: "none",
            },
          },
          "&.slick-active": {
            "& button": {
              background: "#000",
            },
          },
        },
      },
      "& .slick-arrow": {
        position: "absolute",
        bottom: 0,
        right: 20,
        top: "auto",
        [theme.breakpoints.down("sm")]: {
          display: "none !important",
        },
        "&:before": {
          position: "absolute",
          content: "''",
          width: 20,
          height: 30,
        },
      },
      "& .slick-prev": {
        left: "auto",
        right: 70,
        "&:before": {
          background: `url(${ArrowLeft}) no-repeat 0 0`,
        },
      },

      "& .slick-next": {
        "&:before": {
          background: `url(${ArrowRight}) no-repeat 0 0`,
        },
      },

      "& .slick-list": {
        [theme.breakpoints.down("xs")]: {
          overflow: "visible",
        },
      },
    },
    multiCarousel:{
      display: "none",
      [theme.breakpoints.down("xs")]: {
        display: "flex",
      },
    }
  };
});

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrow: true,
  accessibility: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrow: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrow: false,
      },
    },
  ],
};

const Launches = () => {
  const {
    title,
    itemWrapper,
    slider,
    launchContainer,
    multiCarousel,
  } = useStyles({});
  const [items, setItems] = useState([]);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetch(ITEMS_API_END_POINT)
      .then((resp) => resp.json())
      .then((res) => {
        setItems(res.items);
      });
  }, []);

  return (
    <div className={launchContainer}>
      <Typography classes={{ root: title }}>New Launches</Typography>
      <Tab handleChange={handleChange} value={value} />
      <div className={itemWrapper}>
        {items && (
          <Slider {...settings} className={slider}>
            {items
              .filter(
                (x) => x.category.toLowerCase() === TABS[value].toLowerCase()
              )
              .map((item) => (
                <ItemCard item={item} key={item.id} img={ProductIcon} />
              ))}
          </Slider>
        )}

        <Carousel
          ssr
          partialVisible
          responsive={responsive}
          deviceType={"mobile"}
          className={multiCarousel}
        >
          {items
            .filter(
              (x) => x.category.toLowerCase() === TABS[value].toLowerCase()
            )
            .map((item) => (
              <ItemCard item={item} key={item.id} img={ProductIcon} />
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Launches;
