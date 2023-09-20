import * as React from "react";
import Grid from "@mui/material/Grid";
import Header from "./Components/Header/Header";
import PhotoContainer from "./Components/PhotoContainer/PhotoContainer";
import TextAndPriceContainer from "./Components/TextAndPriceContainer/TextAndPriceContainer";
import QuantityButton from "./Components/QuantityButton/QuantityButton";
import "./App.css";
import { Box, CardMedia, Typography } from "@mui/material";

function App() {
  return (
    <>
      <Grid>
        <Header />
        <PhotoContainer />
        <TextAndPriceContainer />
        <QuantityButton />
        <Box
          sx={{
            height: "75px",
            backgroundColor: "hsl(26, 100%, 55%)",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
            marginLeft: "30px",
            color: "white",
            
          }}
        >
          <CardMedia
            image="../images/icon-whitecart.svg"
            sx={{ height: "30px", width: "30px", color:"white" }}
          />
          <Typography
            sx={{ fontFamily: "bold", fontSize: "22px", marginLeft: "20px" }}
          >
            Add to cart
          </Typography>
        </Box>
      </Grid>
    </>
  );
}
export default App;
