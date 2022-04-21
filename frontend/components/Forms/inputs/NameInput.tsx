import { TextField } from "@mui/material";
import React, { useContext } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ColorModeContext } from "../../../theme/ColorMode";

const NameInput: React.FC<{ first: boolean }> = ({ first }) => {
  const { mode } = useContext(ColorModeContext);
  const {
    control,
    formState: { errors }
  } = useFormContext();

  const type = first ? "firstName" : "lastName";

  return (
    <Controller
      name={type}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          label={first ? "First name" : "Last name"}
          variant="outlined"
          fullWidth
          type="text"
          error={!!errors[type]}
          helperText={errors[type] ? errors[type]?.message : ""}
          InputLabelProps={{
            style: { color: mode === "light" ? "#000" : "#fafafa" }
          }}
        />
      )}
    />
  );
};

export default NameInput;
