import React from 'react'
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/material";


function PhotoContainer() {
  return (
    <>
      <Card sx={{ marginTop: "50px", display:"flex"}}>
          <CardMedia
            sx={{ height: "600px", width: "600px" }}
            image="/images/image-product-1.jpg"
          />
          <Box sx={{   
              position: "absolute",
              marginTop:"270px",
              padding:"18px",
              borderRadius:"40px",
              backgroundColor:"white",
              marginLeft:"20px"
              }}>
          <CardMedia
            sx={{
              height: "18px",
              width: "18px",
            }}
            image="/images/icon-previous.svg"
          />
          </Box>
          <Box sx={{   
              position: "absolute",
              marginTop: "270px",
              padding:"18px",
              borderRadius:"40px",
              backgroundColor:"white",
              marginLeft:"510px"
              }}>
          <CardMedia
            sx={{ height: "18px", width: "18px" }}
            image="/images/icon-next.svg"
          />
           </Box>
        </Card>
    </>
  )
}

export default PhotoContainer