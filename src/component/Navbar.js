import React from "react";
import { styled } from "@mui/material/styles";
import { Container, Box, Paper, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function navbar() {
  return (
    <div>
      <Container>
        <Box sx={{ maxWidth: 400, flexGrow: 1, overflow: "hidden", px: 3 }}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <ArrowBackIosNewIcon />
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Galeri
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Paper sx={{ maxWidth: 600, p: 2 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs zeroMinWidth>
            <Link to="/">
              <Button
                sx={{ my: 2, color: "black", display: "block" }}
                align="center"
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  align: "center",
                }}
              >
                Foto
              </Button>
            </Link>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Link to="/video">
              <Button
                sx={{ my: 2, color: "black", display: "block" }}
                align="center"
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  align: "center",
                }}
              >
                Video
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
