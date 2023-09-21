import * as React from "react";
import Grid from "@mui/material/Grid";
import Header from "./Components/Header/Header";
import PhotoContainer from "./Components/PhotoContainer/PhotoContainer";
import TextAndPriceContainer from "./Components/TextAndPriceContainer/TextAndPriceContainer";
import QuantityButton from "./Components/QuantityButton/QuantityButton";
import AddToCartButton from "./Components/AddToCartButton/AddToCartButton";
import { Box } from "@mui/material";
import "./App.css";


function App() {
  return (
    <>
      <Grid>
        <Header />
        <Box sx={{ display: {md:'flex'}, flexDirection: {md:'row'} }}>
        <PhotoContainer />
        <TextAndPriceContainer />
        </Box>
        <QuantityButton />
        <AddToCartButton />
      </Grid>
    </>
  );
}
export default App;
