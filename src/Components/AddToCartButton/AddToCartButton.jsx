import React from 'react'
import { Box, CardMedia, Typography } from "@mui/material";

function AddToCartButton() {
  return (
    <>
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
    </>
  )
}

export default AddToCartButton