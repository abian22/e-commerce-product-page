import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import profile from "/images/image-avatar.png";
import cartIcon from "/images/icon-cart.svg";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

function Header({ quantity }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartList, setCartList] = useState([]);

  const menu = ["Collections", "Men", "Women", "About", "Contact"];

  console.log(quantity);

  useEffect(() => {
    const newCartList = [];
    for (let i = 0; i < quantity; i++) {
      newCartList.push("0");
    }
    setCartList(newCartList);
  }, [quantity]);

  console.log(cartList);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const closeCart = () => {
    setCartOpen(false);
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
                cursor: "pointer",
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
              cursor: "pointer",
            }}
            onClick={toggleCart}
            image={cartIcon}
          />
          <Avatar src={profile} sx={{ marginLeft: "40px" }} />
        </Box>
      </Box>
      {cartOpen && (
        <Card
          sx={{
            width: "400px",
            maxHeight: "380px",
            overflowY: "auto",
            position: "absolute",
            right: { xs: "20px", lg: "200px" },
          }}
        >
          {cartList.map((item, index) => (
            <Card
              key={index}
              sx={{
                width: "100%",
                marginBottom: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <CardMedia
                  image={"../../../public/images/image-product-1.jpg"}
                  sx={{ width: "100px", height: "100px", marginBottom: "10px" }}
                />
                <Typography
                  sx={{
                    marginLeft: "20px",
                    marginTop: "35px",
                    fontFamily: "bold",
                  }}
                >
                  Fall Limited Edition Sneakers
                </Typography>
                <CardMedia
                  image="../../../public/images/icon-close.svg"
                  sx={{
                    width: "10px",
                    height: "10px",
                    marginTop: "43px",
                    marginLeft: "25px",
                    cursor: "pointer",
                  }}
                  onClick={closeCart}
                />
              </Box>
            </Card>
          ))}
        </Card>
      )}
      <Box
        sx={{
          display: { xs: menuOpen ? "block" : "none", lg: "none" },
          backgroundColor: "white",
          marginTop: "10px",
          marginLeft: "auto",
          marginRight: "20px",
          padding: "10px",
          position: "absolute",
          cursor: "pointer",
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
