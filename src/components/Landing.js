import { makeStyles } from "@material-ui/core/styles";
import { Cover } from "../assets/images/index";
import FooterCard from "./FooterCard";
import Header from "./Header";
import Launches from "./Launches";
import MetaCard from "./MetaCard";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import Help from "./Help";
const useStyles = makeStyles((theme = Theme) => {
  return {
    landingWrapper: {
      padding: "64px 0 0",
      [theme.breakpoints.down("sm")]: {
        padding: "56px 0 0",
      },
    },
    metaCardWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 760,
      backgroundImage: `url(${Cover})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      [theme.breakpoints.down("sm")]: {
        height: "auto",
      },
    },
  };
});

const Landing = () => {
  const { metaCardWrapper, landingWrapper } = useStyles({});
  return (
    <>
      <div className={landingWrapper}>
        <Header />
        <>
          <>
            <div className={metaCardWrapper}>
              <MetaCard />
            </div>
            <FooterCard />
          </>
          <Launches />
          <FooterCard />
          <Help />
        </>
      </div>
    </>
  );
};

export default Landing;
