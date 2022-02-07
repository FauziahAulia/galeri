import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
// component Material-UI
import {
  Tabs,
  Tab,
  Typography,
  Container,
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Grid,
  ButtonBase,
  IconButton,
} from "@mui/material";
//import font roboto
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ReactPlayer from "react-player";
// dataImage import
import dataImage from "./TabsImage";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: "auto", bgColor: "#249EA0" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container align="center" sx={{ pt: 2 }}>
      <Box sx={{ bgcolor: "grey", width: 350 }}>
        {/* tabs atas  */}
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          className="typography"
        >
          <Tab label="Foto" {...a11yProps(0)} />
          <Tab label="Video" {...a11yProps(1)} />
        </Tabs>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          {/* Tabs for Foto */}
          <TabPanel value={value} index={0} dir={theme.direction}>
            <ImageList sx={{ width: 350, height: 600 }}>
              <ImageListItem key="Subheader" cols={2}></ImageListItem>
              {dataImage.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      //border radius style
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopRightRadius: 10,
                      borderTopLeftRadius: 10,
                      overflow: "hidden",
                    }}
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={item.author}
                    actionIcon={
                      <IconButton
                        sx={{ color: "#F78104" }}
                        aria-label={`info about ${item.title}`}
                        style={{}}
                      ></IconButton>
                    }
                    style={{
                      //border radius style
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      overflow: "hidden",
                    }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </TabPanel>

          {/* Tabs for video */}
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Grid container spacing={2} sx={{ mt: 2 }} style={{ border: 1 }}>
              <Grid item>
                <ButtonBase align="center" sx={{ width: 350, height: 128 }}>
                  <ReactPlayer
                    className="video"
                    width="350px"
                    height="128px"
                    url="https://www.youtube.com/watch?v=sgN7fUGPgMM"
                    style={{
                      //border radius style
                      borderBottomLeftRadius: 15,
                      borderBottomRightRadius: 15,
                      borderTopRightRadius: 15,
                      borderTopLeftRadius: 15,
                      overflow: "hidden",
                    }}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={0}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                      align="center"
                      style={{ fontSize: 12, fontWeight: "bold" }}
                    >
                      Karate Female Team Kata Bronze Medal - Serbia vs Italy -
                      WKF World Championships Belgrade 2010 (1/2)
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ border: 1 }}>
              <Grid item>
                <ButtonBase align="center" sx={{ width: 350, height: 128 }}>
                  {/* for reactplayer */}
                  <ReactPlayer
                    className="video"
                    width="350px"
                    height="128px"
                    borderRadius="50px"
                    url="https://www.youtube.com/watch?v=xhTlO-rbJ4s"
                    style={{
                      //border radius style
                      borderBottomLeftRadius: 15,
                      borderBottomRightRadius: 15,
                      borderTopRightRadius: 15,
                      borderTopLeftRadius: 15,
                      overflow: "hidden",
                    }}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={0}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                      align="center"
                      style={{ fontSize: 12, fontWeight: "bold" }}
                    >
                      Full Match Karate Putri Vietnam vs Indonesia Asian Games
                      2018
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ border: 1 }}>
              <Grid item>
                <ButtonBase
                  className="video"
                  align="center"
                  sx={{ width: 350, height: 128 }}
                >
                  <ReactPlayer
                    className="video"
                    width="350px"
                    height="128px"
                    url="https://www.youtube.com/watch?v=8kd7JHA6tnI"
                    style={{
                      //Below lines will help to set the border radius
                      borderBottomLeftRadius: 15,
                      borderBottomRightRadius: 15,
                      borderTopRightRadius: 15,
                      borderTopLeftRadius: 15,
                      overflow: "hidden",
                    }}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={0}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                      align="center"
                      style={{ fontSize: 12, fontWeight: "bold" }}
                    >
                      平成２７年
                      第１５回全日本少年少女空手道選手権大会・３年女子形　決勝戦
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </Container>
  );
}
