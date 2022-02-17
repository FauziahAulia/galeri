import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
// component Material-UI
import { Tabs, Tab, Typography, Container, Box } from "@mui/material";
//import font roboto
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// dataImage import
import IsiImage from "../component/IsiImage";
// dataVideo import
import IsiVideo from "../component/IsiVideo";
// import react skeleton
// import Skeleton from "@mui/material/Skeleton";

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
        <Box sx={{ p: "auto" }}>
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

  return (
    <>
      <Container align="center" sx={{ pt: 2 }}>
        <Box position="static" sx={{ bgcolor: "grey", width: 350 }}>
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

          {/* Tabs for Foto */}
          <TabPanel value={value} index={0}>
            <IsiImage />
          </TabPanel>

          {/* Tabs for video */}
          <TabPanel value={value} index={1}>
            <IsiVideo />
          </TabPanel>
        </Box>
      </Container>
    </>
  );
}
