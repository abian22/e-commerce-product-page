import * as React from "react";
import Grid from "@mui/material/Grid";
import Header from "./Components/Header/Header";
import PhotoContainer from "./Components/PhotoContainer/PhotoContainer";
import TextAndPriceContainer from "./Components/TextAndPriceContainer/TextAndPriceContainer";
import QuantityButton from "./Components/QuantityButton/QuantityButton";
import AddToCartButton from "./Components/AddToCartButton/AddToCartButton";
import LightBox from "./Components/LightBox/LightBox";
import { Box, CardMedia, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [showLightBox, setShowLightBox] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [clickedAddToCart, setClickedAddToCart] = useState(false);

  function plusQuantity() {
    setQuantity(quantity + 1);
  }

  function lessQuantity() {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
    }
  }

  const handleAddToCartClick = () => {
    setTotalQuantity(quantity);
    setClickedAddToCart(true);
  };

  return (
    <>
      <Grid>
        <Header quantity={totalQuantity !== 0 ? totalQuantity : null} />
        <Box sx={{ display: { lg: "flex" }, flexDirection: { lg: "row" } }}>
          <PhotoContainer />
          <TextAndPriceContainer />
        </Box>
        <Box
          sx={{
            height: "75px",
            backgroundColor: "hsl(223, 64%, 98%)",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: { md: "700px", lg: "200px" },
            marginLeft: { md: "170px", lg: "740px" },
            marginTop: { xs: "30px", lg: "-100px" },
          }}
        >
          <CardMedia
            image="/images/icon-minus.svg"
            sx={{
              width: "18px",
              height: "6px",
              marginLeft: "30px",
              cursor: "pointer",
            }}
            onClick={lessQuantity}
          />
          <Typography sx={{ fontFamily: "bold", fontSize: "24px" }}>
            {quantity}
          </Typography>
          <CardMedia
            image="/images/icon-plus.svg"
            sx={{
              width: "18px",
              height: "16px",
              marginRight: "30px",
              cursor: "pointer",
            }}
            onClick={plusQuantity}
          />
        </Box>
        <AddToCartButton onClick={handleAddToCartClick} />
      </Grid>
      {showLightBox && (
        <LightBox closeLightBox={() => setShowLightBox(false)} />
      )}
    </>
  );
}
export default App;
