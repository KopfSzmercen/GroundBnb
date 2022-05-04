import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

const ImageCard: React.FC<{
  image: StaticImageData;
  alt: string;
  description: string;
}> = ({ image, alt, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Box
        sx={{ position: "relative", overflow: "hidden" }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Image
          src={image}
          alt={alt}
          layout="responsive"
          quality={70}
          priority
        />

        <Box
          sx={{
            position: "absolute",
            bottom: 2,
            left: 0,
            width: "100%",
            bgcolor: "rgba(0, 0, 0, 0.75)",
            height: isOpen ? "90%" : "0",
            transition: ".5s",
            transitionTimingFunction: "cubic-bezier(.56,0,.5,1.03)"
          }}
        >
          <Typography
            color="#fafafa"
            fontWeight="bold"
            variant="h5"
            margin="20px 0 0 20px"
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ImageCard;
