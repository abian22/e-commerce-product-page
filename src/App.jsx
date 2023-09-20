import * as React from "react";
import Grid from "@mui/material/Grid";
import Header from "./Components/Header/Header";
import PhotoContainer from "./Components/PhotoContainer/PhotoContainer";
import "./App.css";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";


function App() {
  return (
    <>
      <Grid>
        <Header />
        <PhotoContainer/>
        <Box>
          <Typography>
            SNEAKER COMPANY
          </Typography>
        </Box>
      </Grid>
    </>
  );
}
export default App;
