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
            marginTop: {xs:"20px", md:"80px"},
            marginLeft: {md:"30px"},
            color: "white",
            width:{xs:"auto",md:"300px"},
            position:{md:"relative"},
            right:{md:"0px"},
            bottom:{md:"155px"},
            marginRight:{md:"70px"},
            left:{md:"750px"},
            boxShadow: "0px 30px 20px hsl(25, 100%, 94%)" 
            
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