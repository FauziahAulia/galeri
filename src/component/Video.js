import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Video() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, pt: 5 }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={12}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
