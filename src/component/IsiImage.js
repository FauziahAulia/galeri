import * as React from "react";
// component Material-UI
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
//import font roboto
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// import dataImage
import dataImage from "./TabsImage";

function IsiImage(props) {
  return (
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
  );
}

export default IsiImage;
