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
import "./LightBox.css";

function LightBox({ selectedImage, closeLightBox }) {
  const smallPhotos = [image1Mini, image2Mini, image3Mini, image4Mini];
  const bigPhotos = [image1, image2, image3, image4];
//   const [clickedPhoto, setClickedPhoto] = useState(false);
  const [focusedPhotoIndex, setFocusedPhotoIndex] = useState(0);
  const [close, setClose] = useState(false);

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
    // setClickedPhoto(true);
    setFocusedPhotoIndex(index);
  }

  function handleCloseLightBox() {
    closeLightBox(true)
  }

  return (
    <>
      <Box
        className="centered-container"
        sx={{ display: close === true ? "none" : "relative" }}
      >
        <Box
          sx={{
            marginTop: "80px",
            display: "flex",
            flexDirection: "column",
            maxWidth: "650px",
            visibility: {
              xs: "hidden",
              lg: close === true ? "hidden" : "visible",
            },
          }}
        >
          <CardMedia
            sx={{
              width: "20px",
              height: "20px",
              marginLeft: "730px",
              marginBottom: "10px",
              cursor: "pointer",
            }}
            onClick={handleCloseLightBox}
            image="../../../public/icon-close.svg"
          />
          <CardMedia
            sx={{
              height: "550px",
              width: "550px",
              borderRadius: "10px",
              marginLeft: { lg: "200px" },
            }}
            image={handlePhotos(focusedPhotoIndex)}
          />
          <Box
            sx={{
              flexDirection: "row",
              display: "flex",
              marginLeft: "170px",
              marginTop: "20px",
              visibility: "visible",
              position: "relative",
            }}
          >
            {smallPhotos.map((p, index) => {
              return (
                <>
                  <Box
                    key={index}
                    sx={{
                      visibility: {
                        xs: "hidden",
                        lg: setClose === true ? "hidden" : "visible",
                      },
                    }}
                    onClick={() => {
                        handleSmallPhotoClick(index);
                        setFocusedPhotoIndex(index); 
                      }}
                  >
                    <CardMedia
                      sx={{
                        height: "108px",
                        width: "108px",
                        borderRadius: "5px",
                        marginLeft: "35px",
                        cursor: "pointer",
                        visibility: {
                          xs: "hidden",
                          lg: close === true ? "hidden" : "visible",
                        },
                        border:
                          focusedPhotoIndex === index 
                            ? "2px solid orange"
                            : "none",
                        opacity:
                          focusedPhotoIndex === index 
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
              marginLeft: "220px",
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
              marginTop: "250px",
              padding: "18px",
              borderRadius: "40px",
              backgroundColor: "white",
              marginLeft: "670px",
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
      </Box>
    </>
  );
}

export default LightBox;
