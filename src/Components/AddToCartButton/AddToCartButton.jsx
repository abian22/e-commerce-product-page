import React from 'react'
import Header from '../Header/Header';
import { Box, CardMedia, Typography } from "@mui/material";

function AddToCartButton({ onClick }) {

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
            marginTop: {xs:"20px", lg:"80px"},
            marginLeft: {md:"170px", lg:"70px"},
            color: "white",
            width:{xs:"auto", md:"700px",lg:"300px"},
            position:{lg:"relative"},
            right:{lg:"0px"},
            bottom:{lg:"155px"},
            marginRight:{lg:"70px"},
            left:{lg:"900px"},
            boxShadow: "0px 30px 20px hsl(25, 100%, 94%)",
            cursor:"pointer"
          }}
          onClick={onClick}
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