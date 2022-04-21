import { Box, Typography } from "@mui/material";
import React from "react";

const Description = () => {
  return (
    <Box
      sx={{
        mt: "2em",
        padding: "15px 10px",
        width: "95%",
        maxWidth: "900px",
        textAlign: "center",
        color: "text.secondary"
      }}
    >
      <Typography fontWeight="bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste natus
        magni hic libero aut aliquid obcaecati nulla placeat sit nemo?
      </Typography>

      <Typography sx={{ mt: "25px" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        tenetur aliquam, laboriosam perferendis dolorem unde iste eius
        explicabo, cupiditate illo dolores dolorum molestiae voluptatum.
        Sapiente totam officiis maxime, nostrum consequuntur tenetur neque
        dolorum debitis quaerat, quas, reiciendis necessitatibus accusantium
        eius molestiae? Ad debitis illum maxime sed aperiam, praesentium
        veritatis nesciunt.
      </Typography>
    </Box>
  );
};

export default Description;
