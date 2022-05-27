import * as React from "react";
// component Material-UI
import { ImageListItemBar, IconButton, Grid, ButtonBase } from "@mui/material";
//import font roboto
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// import dataImage
import dataVideo from "./TabsVideo";

function IsiVideo(props) {
  return (
    <Grid
      container
      spacing={2}
      sx={{ width: 340, height: 600, mt: -5 }}
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
              controls
              type="video/mp4"
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
                fontSize: 3,
                fontWeight: "normal",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                overflow: "hidden",
              }}
              sx={{ width: 320, height: 38, mb: 14 }}
            />
          </ButtonBase>
        ))}
      </Grid>
    </Grid>
  );
}

export default IsiVideo;
