import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import profile from "../../../images/image-avatar.png";

import { Box, Typography } from "@mui/material";

function Header() {
  const menu = ["Collections", "Men", "Women", "About", "Contact"]
  return (
    <>
      <Box
        sx={{
          height: "auto",
          width: {xs:"auto", md:"84vw"},
          display: "flex",
          maxWidth:{xs:"600px", md:"9999px"},
          borderBottom:{md:"2px solid"},
          borderColor:{md:"lightgrey"},
          paddingBottom:{md:"40px"},
          marginLeft:{md:"100px"}
    
        }}
      >

        <CardMedia
          sx={{
            height: "16px",
            width: "15px",
            marginTop: "14px",
            marginLeft: "20px",
            visibility:{md:"hidden"}
          }}
          image="../../../images/icon-menu.svg"
        />
        <CardMedia
          sx={{
            height: "20px",
            width: "138px",
            marginLeft: "20px",
            marginTop: "10px",
            marginRight: {md:"20px"},
            position:{md:"absolute"}
          }}
          image="../../../images/logo.svg"
        />
        <Box sx={{
          marginTop:{md:"10px"},
          marginLeft:{md:"150px"},
          visibility:{xs:"hidden", md:"visible"},
          position:{xs:"absolute", md:"relative"}
          }}>
          {menu.map(menu => {
            return( 
              <>
              <Typography
              sx={{
                display:"inline",
                marginLeft:"30px",
                fontFamily:"regular",
                color:"grey",
              }}
              >
                {menu}
              </Typography>
              </>
            )
          })}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "right",
            width: "200px",
            marginLeft: "auto",
            maxMarginLeft:"300px"
          }}
        >
          <CardMedia
            sx={{
              height: "28px",
              width: "30px",
              marginLeft: "80px",
              display: "inline",
              marginTop: "8px",
            }}
            image="../../../images/icon-cart.svg"
          />
          <Avatar src={profile} sx={{ marginLeft: "40px" }} />
        </Box>
      </Box>
    </>
  );
}

export default Header;
