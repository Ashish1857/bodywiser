import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Theme } from "@material-ui/core/styles/createMuiTheme";


const useStyles = makeStyles((theme = Theme) => {
  return {
  tabContainer: {
    margin: '40px auto',
    width: 420,
    borderRadius: 40,
    background:'#F6F6F6',
    padding: 10,
    [theme.breakpoints.down("xs")]: {
      width: '100%',
      margin: '20px auto'
    }
  },
    tabRoot: {
      padding: 10,
      color: '#000',
      opacity: 1,
      position: "relative",
      overflow: "visible",
      borderRadius: 40,
      margin: '0 12px 0 0',
      minWidth: 120,
      '&:last-child':{
        margin: 0
      },
      "& span": {
        fontSize: 14,
        fontWeight: 600,
        textTransform: "none",
        lineHeight: "15px",
        position: "relative",
        zIndex: 5,
      },
      [theme.breakpoints.down("xs")]: {
        minWidth: 100,
        minHeight: 'auto'
      }
    },
    tabSelected: {
      background: '#000',
      color: '#fff'
     
    },
    tabsRoot: {
      minHeight: 'auto',
      "& >div": {
        "& >div": {
          justifyContent:'center'
        },
      },
    },
    tabsIndicator: {
      display: "none",
    },
    tabContent: {},
  }
});

const CustomTabs=(props)=> {
  const {tabContainer,tabRoot, tabsRoot, tabSelected,tabsIndicator} = useStyles();
  let {value, handleChange} = props;

  return (
    <div className={tabContainer}>
      <Tabs
        value={value}
        onChange={handleChange}
        classes={{
          root:  tabsRoot,
          indicator:  tabsIndicator,
        }}
      >
        <Tab label="Hair"  classes={{
                            root:  tabRoot,
                            selected:  tabSelected,
                          }}/>
        <Tab label="Skin"  classes={{
                            root:  tabRoot,
                            selected:  tabSelected,
                          }} />
        <Tab label="Weight"  classes={{
                            root:  tabRoot,
                            selected:  tabSelected,
                          }} />
      </Tabs>
    </div>
  );
};

export default CustomTabs;
