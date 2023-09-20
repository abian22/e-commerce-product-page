import React from 'react'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TextAndPriceContainer() {
  return (
    <>
     <Box>
          <Typography
            sx={{
              fontFamily: "bold",
              color: "hsl(26, 100%, 55%)",
              marginTop: "20px",
              marginLeft: "30px",
              letterSpacing: "4px",
            }}
          >
            SNEAKER COMPANY
          </Typography>
          <Typography
            sx={{
              marginTop: "20px",
              marginLeft: "30px",
              fontFamily: "bold",
              fontSize: "45px",
              lineHeight: "50px",
            }}
          >
            Fall Limited Edition Sneakers
          </Typography>
          <Typography
            sx={{
              marginLeft: "30px",
              marginTop: "20px",
              fontFamily: "regular",
              color: "grey",
              lineHeight: "30px",
            }}
          >
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{ marginLeft: "30px", fontFamily: "bold", fontSize: "30px" }}
          >
            $125.00
          </Typography>
          <Typography
            sx={{
              display: "inline",
              marginRight: "auto",
              marginLeft:"20px",
              color: "hsl(26, 100%, 55%)",
              fontFamily: "bold",
              padding: "2px",
              width: "58px",
              fontSize: "20px",
              textAlign: "center",
              backgroundColor: "hsl(25, 100%, 94%)",
              borderRadius: "6px",
              height: "28px",
              marginTop: "8px",
            }}
          >
            50%
          </Typography>
          <Typography
            sx={{
              fontFamily: "bold",
              color: "lightgrey",
              marginTop: "8px",
              fontSize: "18px",
              textDecoration: "line-through",
            }}
          >
            $250.00
          </Typography>
        </Box>
    </>
  )
}

export default TextAndPriceContainer