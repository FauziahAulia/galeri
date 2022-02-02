import * as React from "react";
import { styled } from "@mui/material/styles";
import { Container, Box, Paper, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Foto() {
  return (
    <div>
      <Container>
        <Box sx={{ maxWidth: 400, flexGrow: 1, overflow: "hidden", px: 3 }}>
          <Box sx={{ flexGrow: 1, pt: 5 }}>
            <Grid container spacing={2} columns={16}>
              <Grid item xs={8}>
                <Item>Kegiatan Latihan Harian</Item>
              </Grid>
              <Grid item xs={8}>
                <Item>Kegiatan Latihan Harian</Item>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1, pt: 5 }}>
            <Grid container spacing={2} columns={16}>
              <Grid item xs={8}>
                <Item>Kegiatan Latihan Harian</Item>
              </Grid>
              <Grid item xs={8}>
                <Item>Kegiatan Latihan Harian</Item>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1, pt: 5 }}>
            <Grid container spacing={2} columns={16}>
              <Grid item xs={8}>
                <Item>Kegiatan Latihan Harian</Item>
              </Grid>
              <Grid item xs={8}>
                <Item>Kegiatan Latihan Harian</Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
