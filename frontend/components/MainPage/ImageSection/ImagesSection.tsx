import { Grid } from "@mui/material";

import image1 from "../../../public/i1.jpg";
import image2 from "../../../public/i2.jpg";
import image3 from "../../../public/i3.jpg";
import ImageCard from "./ImageCard";

const ImagesSection = () => {
  return (
    <Grid
      container
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      rowSpacing={{ xs: 2, sm: 0 }}
      sx={{
        width: "95%",
        maxWidth: "1500px",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 25px",
        borderRadius: "10px"
      }}
    >
      <Grid item xs={12} sm={4}>
        <ImageCard
          image={image1}
          alt="image1"
          description="Beautiful places..."
        />
      </Grid>

      <Grid item xs={12} sm={4}>
        <ImageCard
          image={image2}
          alt="image1"
          description="Modern architecture..."
        />
      </Grid>

      <Grid item xs={12} sm={4}>
        <ImageCard
          image={image3}
          alt="image1"
          description="Amazing cultures..."
        />
      </Grid>
    </Grid>
  );
};

export default ImagesSection;
