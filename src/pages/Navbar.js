import React from "react";
import { Box, Typography, IconButton, AppBar } from "@mui/material";
// import icon
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Galeri() {
  return (
    <div>
      <AppBar
        // elevation="none"
        position="fixed"
        sx={{ xs: 3, bgcolor: "#249EA0", width: "100%" }}
      >
        <Box sx={{ flexGrow: 1, width: "100%", ml: 2 }}>
          <IconButton sx={{ color: "#fff" }}>
            <ArrowBackIcon style={{ fontSize: 20 }} />
            <Typography
              className="typography"
              sx={{ ml: 1 }}
              style={{ fontSize: 20, fontWeight: "normal" }}
            >
              Galeri
            </Typography>
          </IconButton>
        </Box>
      </AppBar>
    </div>
  );
}
