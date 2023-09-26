import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CardMedia } from "@mui/material";
import { useState } from "react";
import AddToCartButton from "../AddToCartButton/AddToCartButton"

function QuantityButton() {
  const [quantity, setQuantity] = useState(0);

  function plusQuantity() {
    setQuantity(quantity + 1);
  }

  function lessQuantity() {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
    }
  }
  
  return (
    <>
      <Box
        sx={{
          height: "75px",
          backgroundColor: "hsl(223, 64%, 98%)",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: {md:"700px", lg: "200px" },
          marginLeft: { md:"170px", lg: "740px" },
          marginTop: { xs: "30px", lg: "-100px" },
        }}
      >
        <CardMedia
           image="/images/icon-minus.svg"
          sx={{ width: "18px", height: "6px", marginLeft: "30px", cursor:"pointer"}}
          onClick={lessQuantity}
        />
        <Typography sx={{ fontFamily: "bold", fontSize: "24px" }}>
          {quantity}
        </Typography>
        <CardMedia
           image="/images/icon-plus.svg"
          sx={{ width: "18px", height: "16px", marginRight: "30px", cursor:"pointer"}}
          onClick={plusQuantity}
        />
      </Box>
      <Box sx={{display:"none"}}>
        <AddToCartButton quantity={quantity}/>
      </Box>
    </>
  );
}

export default QuantityButton;
