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
  IconButton,
  Grid,
  ButtonBase,
} from "@mui/material";
//import font roboto
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// import ReactPlayer from "react-player";
// dataImage import
import dataImage from "./TabsImage";
// dataVideo import
import dataVideo from "./TabsVideo";
// import react skeleton
import Skeleton from "@mui/material/Skeleton";

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
    <Container align="center" md={12} xs={6} sx={{ pt: 2 }}>
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
                  {/* <Skeleton
                    sx={{ bgcolor: "grey.350" }}
                    variant="rectangular"
                    width={173}
                    height={118}
                    style={{
                      //border radius style
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopRightRadius: 10,
                      borderTopLeftRadius: 10,
                      overflow: "hidden",
                    }}
                  > */}
                  <img
                    src={`${item.img}`}
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
                  {/* </Skeleton> */}
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
                      fontSize: 9,
                      fontWeight: "bold",
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
            <Grid
              container
              spacing={2}
              sx={{ width: 350, height: 600, mt: -1 }}
              style={{ border: 1 }}
            >
              <Grid item>
                {dataVideo.map((item) => (
                  <ButtonBase
                    align="center"
                    sx={{ width: 320, height: 118, mt: 10 }}
                    key={item.video}
                  >
                    <video
                      // autoPlay="true"
                      className="video"
                      src={`${item.video}`}
                      srcSet={`${item.video}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
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
                        fontSize: 6,
                        fontWeight: "bold",
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        overflow: "hidden",
                      }}
                      sx={{ width: 320, height: 48, mb: -4 }}
                    />
                  </ButtonBase>
                ))}
              </Grid>
            </Grid>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </Container>
  );
}
