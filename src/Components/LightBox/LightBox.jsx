import React, { useEffect } from "react";
import CardMedia from "@mui/material/CardMedia";
import image1Mini from "/images/image-product-1.jpg";
import image2Mini from "/images/image-product-2-thumbnail.jpg";
import image3Mini from "/images/image-product-3-thumbnail.jpg";
import image4Mini from "/images/image-product-4-thumbnail.jpg";
import { Box, useMediaQuery } from "@mui/material";
import { useState } from "react";
import "./LightBox.css";

function LightBox({ selectedImageIndex, closeLightBox, bigPhotos }) {
  const [focusedPhotoIndex, setFocusedPhotoIndex] = useState(selectedImageIndex);
  const [close, setClose] = useState(false);
  const [clickedPhotoIndex, setClickedPhotoIndex] = useState(selectedImageIndex); 
  const smallPhotos = [image1Mini, image2Mini, image3Mini, image4Mini];

  const isMdScreenOrSmaller = useMediaQuery("(max-width: 1200px)");

  useEffect(() => {
    if (isMdScreenOrSmaller) {
      closeLightBox();
    }
  }, [isMdScreenOrSmaller, closeLightBox]);

  const nextPhoto = () => {
    if (focusedPhotoIndex < bigPhotos.length - 1) {
      setFocusedPhotoIndex(focusedPhotoIndex + 1);
      setClickedPhotoIndex(focusedPhotoIndex + 1); 
    }
  };

  const previousPhoto = () => {
    if (focusedPhotoIndex > 0) {
      setFocusedPhotoIndex(focusedPhotoIndex - 1);
      setClickedPhotoIndex(focusedPhotoIndex - 1); 
    }
  };

  function handleSmallPhotoClick(index) {
    setFocusedPhotoIndex(index);
    setClickedPhotoIndex(index); 
  }

  const handleCloseLightBox = () => {
    closeLightBox();
    setClose(true);
  };

  return (
    <>
      <Box
        className="centered-container"
        style={{ display: close ? "none" : "relative" }}
      >
        <Box
          style={{
            marginTop: "80px",
            display: "flex",
            flexDirection: "column",
            maxWidth: "650px",
            visibility: {
              xs: "hidden",
              lg: close ? "hidden" : "visible",
            },
          }}
        >
          <CardMedia
            style={{
              width: "20px",
              height: "20px",
              marginLeft: "530px",
              marginBottom: "20px",
              cursor: "pointer",
            }}
            onClick={handleCloseLightBox}
            image="/images/icon-close.svg"
          />
          <CardMedia
            style={{
              height: "550px",
              width: "550px",
              borderRadius: "10px",
              marginLeft: { lg: "200px" },
            }}
            image={bigPhotos[focusedPhotoIndex]}
          />
          <Box
            style={{
              flexDirection: "row",
              display: "flex",
              right: "25px",
              marginTop: "20px",
              visibility: "visible",
              position: "relative",
            }}
          >
            {smallPhotos.map((p, index) => (
              <Box
                key={index}
                style={{
                  visibility: {
                    xs: "hidden",
                    lg: close ? "hidden" : "visible",
                  },
                }}
                onClick={() => {
                  handleSmallPhotoClick(index);
                }}
              >
                <CardMedia
                  style={{
                    height: "108px",
                    width: "108px",
                    borderRadius: "5px",
                    marginLeft: "35px",
                    cursor: "pointer",
                    visibility: {
                      xs: "hidden",
                      lg: close ? "hidden" : "visible",
                    },

                    border:
                      focusedPhotoIndex === index && index === clickedPhotoIndex
                        ? "2px solid orange"
                        : "none",
                    opacity:
                      focusedPhotoIndex === index && index === clickedPhotoIndex
                        ? "0.5"
                        : "1",
                  }}
                  image={p}
                />
              </Box>
            ))}
          </Box>
          <Box
            style={{
              position: "absolute",
              marginTop: "255px",
              padding: "18px",
              borderRadius: "40px",
              backgroundColor: "white",
              marginLeft: "20px",
              cursor: "pointer",
            }}
            onClick={previousPhoto}
          >
            <CardMedia
              style={{
                height: "18px",
                width: "18px",
              }}
              image="/images/icon-previous.svg"
            />
          </Box>
          <Box
            style={{
              position: "absolute",
              marginTop: "250px",
              padding: "18px",
              borderRadius: "40px",
              backgroundColor: "white",
              marginLeft: "470px",
              cursor: "pointer",
            }}
            onClick={nextPhoto}
          >
            <CardMedia
              style={{ height: "18px", width: "18px" }}
              image="/images/icon-next.svg"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default LightBox;
