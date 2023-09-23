import React from "react";
import CardMedia from "@mui/material/CardMedia";
import image1 from "../../../images/image-product-1.jpg";
import image2 from "../../../images/image-product-2.jpg";
import image3 from "../../../images/image-product-3.jpg";
import image4 from "../../../images/image-product-4.jpg";
import image1Mini from "../../../images/image-product-1.jpg";
import image2Mini from "../../../images/image-product-2-thumbnail.jpg";
import image3Mini from "../../../images/image-product-3-thumbnail.jpg";
import image4Mini from "../../../images/image-product-4-thumbnail.jpg";
import { Box } from "@mui/material";
import { useState } from "react";

function PhotoContainer() {
  const smallPhotos = [image1Mini, image2Mini, image3Mini, image4Mini];
  const bigPhotos = [image1, image2, image3, image4];
  const [position, setPosition] = useState(0);

  function nextPosition() {
    if (position < bigPhotos.length - 1) {
      return setPosition(position + 1);
    }
    return position;
  }

  function previousPosition() {
    if (position > 0) {
      return setPosition(position - 1);
    }
    return position;
  }

  function handlePhotos() {
    return bigPhotos[position];
  }

  return (
    <>
      <Box
        sx={{
          marginTop: { xs: "20px", lg: "80px" },
          display: "flex",
          flexDirection: "column",
          maxWidth: "650px",
          marginLeft:{md:"220px", lg:"0px"}
        }}
      >
        <CardMedia
          sx={{
            height: { xs: "600px", lg: "450px" },
            width: { xs: "600px", lg: "450px" },
            borderRadius: "10px",
            marginLeft: { lg: "200px" },
          }}
          image={handlePhotos()}
        />
        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            marginLeft: "170px",
            marginTop: "20px",
            visibility: { xs: "hidden", lg: "visible" },
            position: { xs: "absolute", lg: "relative" },
          }}
        >
          {smallPhotos.map((p) => {
            return (
              <>
                <Box>
                  <CardMedia
                    sx={{
                      height: "85px",
                      width: "85px",
                      borderRadius: "5px",
                      marginLeft: "35px",
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
            visibility: { lg: "hidden" },
            cursor: "pointer",
          }}
          onClick={previousPosition}
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
            visibility: { lg: "hidden" },
            cursor: "pointer",
          }}
          onClick={nextPosition}
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
