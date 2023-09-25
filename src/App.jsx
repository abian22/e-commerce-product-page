import * as React from "react";
import Grid from "@mui/material/Grid";
import Header from "./Components/Header/Header";
import PhotoContainer from "./Components/PhotoContainer/PhotoContainer";
import TextAndPriceContainer from "./Components/TextAndPriceContainer/TextAndPriceContainer";
import QuantityButton from "./Components/QuantityButton/QuantityButton";
import AddToCartButton from "./Components/AddToCartButton/AddToCartButton";
import LightBox from "./Components/LightBox/LightBox";
import { Box } from "@mui/material";
import { useState } from "react";
import "./App.css";


function App() {

  const [showLightBox, setShowLightBox] = useState(false);
  
  return (
    <>
      <Grid>
        <Header />
        <Box sx={{ display: {lg:'flex'}, flexDirection: {lg:'row'} }}>
        <PhotoContainer />
        <TextAndPriceContainer />
        </Box>
        <QuantityButton />
        <AddToCartButton />
      </Grid>
      {showLightBox && (
        <LightBox
          closeLightBox={() => setShowLightBox(false)}
        />
      )}
    </>
  );
}
export default App;
