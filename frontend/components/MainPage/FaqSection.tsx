import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { Box } from "@mui/system";

const AccordionRow: React.FC<{ header: string; text: string }> = ({
  header,
  text
}) => {
  return (
    <Accordion
      sx={{
        bgcolor: "background.contrast",
        color: "text.contrast",
        padding: ".7em",
        boxShadow: "1em"
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="primary" fontSize="large" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography fontWeight="bold" fontSize="large" letterSpacing=".5px">
          {header}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{text}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const FaqSection = () => {
  return (
    <Box sx={{ width: "95%", maxWidth: "1200px" }}>
      <AccordionRow
        header="1. Lorem ipsum dolor sit amet?"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, obcaecati possimus? Atque debitis voluptate deserunt accusamus sequi maiores obcaecati assumenda aut, non, doloremque, ipsam perspiciatis error impedit iure earum possimus at asperiores odio ipsa illum exercitationem beatae! Unde, omnis similique?"
      />

      <AccordionRow
        header="2. Lorem ipsum dolor sit amet?"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, obcaecati possimus? Atque debitis voluptate deserunt accusamus sequi maiores obcaecati assumenda aut, non, doloremque, ipsam perspiciatis error impedit iure earum possimus at asperiores odio ipsa illum exercitationem beatae! Unde, omnis similique?"
      />

      <AccordionRow
        header="3. Lorem ipsum dolor sit amet?"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, obcaecati possimus? Atque debitis voluptate deserunt accusamus sequi maiores obcaecati assumenda aut, non, doloremque, ipsam perspiciatis error impedit iure earum possimus at asperiores odio ipsa illum exercitationem beatae! Unde, omnis similique?"
      />
    </Box>
  );
};

export default FaqSection;
