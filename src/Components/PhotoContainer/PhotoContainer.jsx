import React, { useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/material";
import LightBox from "../LightBox/LightBox";

function PhotoContainer() {
  const smallPhotos = [
    "/images/image-product-1.jpg",
    "/images/image-product-2-thumbnail.jpg",
    "/images/image-product-3-thumbnail.jpg",
    "/images/image-product-4-thumbnail.jpg",
  ];

  const bigPhotos = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
  ];

  const [clickedPhoto, setClickedPhoto] = useState(false);
  const [focusedPhotoIndex, setFocusedPhotoIndex] = useState(0);
  const [showLightBox, setShowLightBox] = useState(false);

  function nextPhoto() {
    if (focusedPhotoIndex < bigPhotos.length - 1) {
      setFocusedPhotoIndex(focusedPhotoIndex + 1);
      setClickedPhoto(true); 
    }
  }

  function previousPhoto() {
    if (focusedPhotoIndex > 0) {
      setFocusedPhotoIndex(focusedPhotoIndex - 1);
      setClickedPhoto(true); 
    }
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
          image={bigPhotos[focusedPhotoIndex]}
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
          {smallPhotos.map((p, index) => (
            <Box
              key={index}
              onClick={() => handleSmallPhotoClick(index)}
              sx={{
                visibility: { xs: "hidden", lg: "visible" },
                cursor: "pointer",
                border:
                  focusedPhotoIndex === index && clickedPhoto === true
                    ? "2px solid orange"
                    : "none",
                opacity:
                  focusedPhotoIndex === index && clickedPhoto === true
                    ? "0.5"
                    : "none",
                height: "85px",
                width: "85px",
                borderRadius: "5px",
                marginLeft: "35px",
              }}
            >
              <CardMedia
                sx={{
                  height: "85px",
                  width: "85px",
                  borderRadius: "5px",
                }}
                image={p}
              />
            </Box>
          ))}
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
          onClick={nextPhoto}
        >
          <CardMedia
            sx={{ height: "18px", width: "18px" }}
            image="/images/icon-next.svg"
          />
        </Box>
      </Box>
      {showLightBox && (
        <LightBox
          selectedImageIndex={focusedPhotoIndex}
          closeLightBox={() => setShowLightBox(false)}
          smallPhotos={smallPhotos}
          bigPhotos={bigPhotos}
        />
      )}
    </>
  );
}

export default PhotoContainer;
