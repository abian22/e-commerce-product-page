import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import profile from "../../../images/image-avatar.png";
import { Box } from "@mui/material";

function Header() {
  return (
    <>
      <Box
        sx={{
          height: "auto",
          widht: "auto",
          display: "flex",
          maxWidth:"600px"
        }}
      >
        <CardMedia
          sx={{
            height: "16px",
            width: "15px",
            marginTop: "14px",
            marginLeft: "20px",
          }}
          image="../../../images/icon-menu.svg"
        />
        <CardMedia
          sx={{
            height: "20px",
            width: "138px",
            marginLeft: "20px",
            marginTop: "10px",
          }}
          image="../../../images/logo.svg"
        />
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
