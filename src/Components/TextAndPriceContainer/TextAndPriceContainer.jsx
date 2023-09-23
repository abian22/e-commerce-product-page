import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TextAndPriceContainer() {
  return (
    <>
      <Box
        sx={{ flex: 1, marginLeft: { lg: "70px" }, marginTop: { lg: "100px" } }}
      >
        <Typography
          sx={{
            fontFamily: "bold",
            color: "hsl(26, 100%, 55%)",
            marginTop: "20px",
            marginLeft: {xs:"30px", md:"220px", lg:"0px"},
            letterSpacing: "4px",
            display: "flex",
          }}
        >
          SNEAKER COMPANY
        </Typography>
        <Typography
          sx={{
            marginTop: "20px",
            marginLeft: {xs:"30px", md:"220px", lg:"0px"},
            fontFamily: "bold",
            fontSize: "45px",
            lineHeight: "50px",
          }}
        >
          Fall Limited Edition Sneakers
        </Typography>
        <Typography
          sx={{
             marginLeft: {xs:"30px", md:"220px", lg:"0px"},
            marginTop: "20px",
            fontFamily: "regular",
            color: "grey",
            lineHeight: "30px",
            maxWidth:"660px",
            // minWidth:"600px"
          }}
        >
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </Typography>
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            flexDirection: { lg: "row" },
            alignItems: { lg: "center" },
            justifyContent: { xs: "space-between", lg: "flex-start" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { lg: "row" },
              alignItems: { lg: "flex-start" },
            }}
          >
            <Typography
              sx={{
                marginLeft: {xs:"30px", md:"220px", lg:"0px"},
                fontFamily: "bold",
                fontSize: "30px",
              }}
            >
              $125.00
            </Typography>
            <Typography
              sx={{
                display: "inline",
                marginRight: "auto",
                marginLeft: "20px",
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
          </Box>
          <Typography
            sx={{
              fontFamily: "bold",
              color: "lightgrey",
              marginTop: "8px",
              fontSize: "18px",
              textDecoration: "line-through",
              display: "flex",
              marginLeft:{ lg:"-180px"},
              position: { xs: "relative" }, // Ajuste para pantallas xs
              top: { xs: "0", lg: "50px" }, // Ajuste para pantallas xs
            }}
          >
            $250.00
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default TextAndPriceContainer;
