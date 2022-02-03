import React from "react";
import { Box, Typography, IconButton, AppBar } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function Galeri() {
  return (
    <div>
      <AppBar
        elevation="none"
        position="fixed"
        sx={{ xs: 3, bgcolor: "#249EA0", width: "100%" }}
      >
        <Box sx={{ flexGrow: 1, width: "100%", ml: 2 }}>
          <IconButton sx={{ color: "#fff" }}>
            <ArrowBackIosNewIcon style={{ fontSize: 15 }} />
            <Typography className="typography" style={{ fontSize: 15 }}>
              <b>Galeri</b>
            </Typography>
          </IconButton>
        </Box>
      </AppBar>
    </div>
  );
}
