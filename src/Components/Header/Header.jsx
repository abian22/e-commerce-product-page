import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import profile from "/images/image-avatar.png";
import cartIcon from "/images/icon-cart.svg"; 
import { Box, Typography } from "@mui/material";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menu = ["Collections", "Men", "Women", "About", "Contact"];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Box
        sx={{
          height: "auto",
          width: { xs: "auto", lg: "84vw" },
          display: "flex",
          maxWidth: { xs: "1000px", lg: "9999px" },
          borderBottom: { lg: "2px solid" },
          borderColor: { lg: "lightgrey" },
          paddingBottom: { lg: "40px" },
          marginLeft: { lg: "100px" },
        }}
      >
        <IconButton
          sx={{
            height: "16px",
            width: "15px",
            marginTop: "14px",
            marginLeft: "20px",
            visibility: { lg: "hidden" },
          }}
          onClick={toggleMenu}
        >
          <MenuIcon />
        </IconButton>
        <CardMedia
          sx={{
            height: "20px",
            width: "138px",
            marginLeft: "20px",
            marginTop: "10px",
            marginRight: { lg: "20px" },
            position: { lg: "absolute" },
          }}
          image="/images/logo.svg"
        />
        <Box
          sx={{
            marginTop: { lg: "10px" },
            marginLeft: { lg: "150px" },
            visibility: { xs: "hidden", lg: "visible" },
            position: { xs: "absolute", lg: "relative" },
          }}
        >
          {menu.map((menuItem, index) => (
            <Typography
              key={index}
              sx={{
                display: "inline",
                marginLeft: "30px",
                fontFamily: "regular",
                color: "grey",
                cursor:"pointer"
              }}
            >
              {menuItem}
            </Typography>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "right",
            width: "200px",
            marginLeft: "auto",
            maxMarginLeft: "300px",
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
            image={cartIcon} 
          />
          <Avatar src={profile} sx={{ marginLeft: "40px" }} />
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: menuOpen ? "block" : "none", lg: "none" },
          backgroundColor: "white",
          marginTop: "10px",
          marginLeft: "auto",
          marginRight: "20px",
          padding: "10px",
          position:"absolute",
          cursor:"pointer"
        }}
      >
        {menu.map((menuItem, index) => (
          <Typography
            key={index}
            sx={{
              display: "block",
              marginBottom: "10px",
              fontFamily: "regular",
              color: "grey",
            }}
          >
            {menuItem}
          </Typography>
        ))}
      </Box>
    </>
  );
}

export default Header;
