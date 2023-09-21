import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import image1 from "../../../images/image-product-1.jpg";
import image1Mini from "../../../images/image-product-1.jpg";
import image2Mini from "../../../images/image-product-2-thumbnail.jpg";
import image3Mini from "../../../images/image-product-3-thumbnail.jpg";
import image4Mini from "../../../images/image-product-4-thumbnail.jpg";
import { Box } from "@mui/material";

function PhotoContainer() {
  const photos = [image1Mini, image2Mini, image3Mini, image4Mini];
  return (
    <>
      <Box
        sx={{
          marginTop: { xs: "20px", md: "80px" },
          display: "flex",
          flexDirection: "column",
          maxWidth:"650px",
        }}
      >
        <CardMedia
          sx={{
            height: {xs:"600px",md:"320px"},
            width: {xs:"600px",md:"320px"},
            borderRadius: "10px",
            marginLeft: {md:"200px"},
          }}
          image={image1}
        />
        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            marginLeft: "180px",
            marginTop: "20px",
            visibility: { xs: "hidden", md: "visible" },
            position: { xs: "absolute", md: "relative" },
          }}
        >
          {photos.map((p) => {
            return (
              <>
              <Box>
                <CardMedia
                  sx={{
                    height: "65px",
                    width: "65px",
                    borderRadius: "5px",
                    marginLeft: "20px",
                  }}
                  image={p}
                />
                </Box>
              </>
            );
          })}
        </Box>
        <Box
          sx={{
            position: "absolute",
            marginTop: "270px",
            padding: "18px",
            borderRadius: "40px",
            backgroundColor: "white",
            marginLeft: "20px",
            visibility: { md: "hidden" },
          }}
        >
          <CardMedia
            sx={{
              height: "18px",
              width: "18px",
            }}
            image="/images/icon-previous.svg"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            marginTop: "270px",
            padding: "18px",
            borderRadius: "40px",
            backgroundColor: "white",
            marginLeft: "510px",
            visibility: { md: "hidden" },
          }}
        >
          <CardMedia
            sx={{ height: "18px", width: "18px" }}
            image="/images/icon-next.svg"
          />
        </Box>
      </Box>
    </>
  );
}

export default PhotoContainer;
