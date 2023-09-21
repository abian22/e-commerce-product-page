import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CardMedia } from "@mui/material";

function QuantityButton() {
  return (
    <>

      <Box
        sx={{
          height: "75px",
          backgroundColor: "hsl(223, 64%, 98%)",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: {md:"200px"},
          marginLeft:{md:"550px"},
         
        }}
      >
          <CardMedia
            image="../images/icon-minus.svg"
            sx={{ width: "18px", height: "6px", marginLeft:"30px" }}
          />
          <Typography sx={{ fontFamily: "bold", fontSize:"24px" }}>0</Typography>
          <CardMedia
            image="../images/icon-plus.svg"
            sx={{ width: "18px", height: "16px", marginRight:"30px" }}
          />
          </Box>
    </>
  )
}

export default QuantityButton