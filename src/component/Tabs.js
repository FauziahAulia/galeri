import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import ReactPlayer from "react-player";

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
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      //Below lines will help to set the border radius
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
                    url="https://www.youtube.com/watch?v=LXPgexcXi5w&t=55s"
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
                    >
                      Video
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
                    url="https://www.youtube.com/watch?v=LXPgexcXi5w&t=55s"
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
                    >
                      Video
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
                    url="https://www.youtube.com/watch?v=LXPgexcXi5w&t=55s"
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
                    >
                      Video
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

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Beautiful Image from Unsplash",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Beautiful Image from Unsplash",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Beautiful Image from Unsplash",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Beautiful Image from Unsplash",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Beautiful Image from Unsplash",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Beautiful Image from Unsplash",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Beautiful Image from Unsplash",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Beautiful Image from Unsplash",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Beautiful Image from Unsplash",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Beautiful Image from Unsplash",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Beautiful Image from Unsplash",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Beautiful Image from Unsplash",
    cols: 2,
  },
];
