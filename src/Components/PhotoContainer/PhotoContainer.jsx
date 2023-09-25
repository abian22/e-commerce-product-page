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
import LightBox from "../LightBox/LightBox";

function PhotoContainer() {
  const smallPhotos = [image1Mini, image2Mini, image3Mini, image4Mini];
  const bigPhotos = [image1, image2, image3, image4];
  const [clickedPhoto, setClickedPhoto] = useState(false);
  const [focusedPhotoIndex, setFocusedPhotoIndex] = useState(0);
  const [showLightBox, setShowLightBox] = useState(false);

  function nextPhoto() {
    if (focusedPhotoIndex < bigPhotos.length - 1) {
      return setFocusedPhotoIndex(focusedPhotoIndex + 1);
    }
  }

  function previousPhoto() {
    if (focusedPhotoIndex > 0) {
      return setFocusedPhotoIndex(focusedPhotoIndex - 1);
    }
  }

  function handlePhotos() {
    return bigPhotos[focusedPhotoIndex];
  }

  function handleSmallPhotoClick(index) {
    setClickedPhoto(true);
    setFocusedPhotoIndex(index);
  }
  function handleCardMediaClick() {
    setShowLightBox(true);
  }

  return (
    <>
      <Box
        sx={{
          marginTop: { xs: "20px", lg: "80px" },
          display: "flex",
          flexDirection: "column",
          maxWidth: "650px",
          marginLeft: { md: "220px", lg: "0px" },
        }}
      >
        <CardMedia
          sx={{
            height: { xs: "600px", lg: "450px" },
            width: { xs: "600px", lg: "450px" },
            borderRadius: "10px",
            marginLeft: { lg: "200px" },
            cursor: "pointer",
          }}
          image={handlePhotos(focusedPhotoIndex)}
          onClick={handleCardMediaClick}
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
          {smallPhotos.map((p, index) => {
            return (
              <>
                <Box key={index} onClick={() => handleSmallPhotoClick(index)}>
                  <CardMedia
                    sx={{
                      height: "85px",
                      width: "85px",
                      borderRadius: "5px",
                      marginLeft: "35px",
                      cursor: "pointer",
                      border:
                        focusedPhotoIndex === index && clickedPhoto === true
                          ? "2px solid orange"
                          : "none",
                      opacity:
                        focusedPhotoIndex === index && clickedPhoto === true
                          ? "0.5"
                          : "none",
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
          onClick={previousPhoto}
        >
          <CardMedia
            sx={{
              height: "18px",
              width: "18px",
            }}
            image="../../../public/icon-previous.svg"
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
          onClick={nextPhoto}
        >
          <CardMedia
            sx={{ height: "18px", width: "18px" }}
            image="../../../public/icon-next.svg"
          />
        </Box>
      </Box>
      {showLightBox && (
        <LightBox
          selectedImage={bigPhotos[focusedPhotoIndex]}
          closeLightBox={() => setShowLightBox(false)} // Agrega esta prop
        />
      )}
    </>
  );
}

export default PhotoContainer;
