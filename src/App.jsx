import * as React from "react";
import Grid from "@mui/material/Grid";
import Header from "./Components/Header/Header";
import PhotoContainer from "./Components/PhotoContainer/PhotoContainer";
import TextAndPriceContainer from "./Components/TextAndPriceContainer/TextAndPriceContainer";
import QuantityButton from "./Components/QuantityButton/QuantityButton";
import AddToCartButton from "./Components/AddToCartButton/AddToCartButton";
import "./App.css";


function App() {
  return (
    <>
      <Grid>
        <Header />
        <PhotoContainer />
        <TextAndPriceContainer />
        <QuantityButton />
        <AddToCartButton />
      </Grid>
    </>
  );
}
export default App;
