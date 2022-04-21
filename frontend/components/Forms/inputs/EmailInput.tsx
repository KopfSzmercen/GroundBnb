import { TextField } from "@mui/material";
import { useContext } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ColorModeContext } from "../../../theme/ColorMode";

const EmailInput = () => {
  const { mode } = useContext(ColorModeContext);
  const {
    control,
    formState: { errors }
  } = useFormContext();

  return (
    <Controller
      name="email"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          label="Email"
          variant="outlined"
          fullWidth
          type="email"
          error={!!errors.email}
          helperText={errors.email ? errors.email?.message : ""}
          InputLabelProps={{
            style: { color: mode === "light" ? "#000" : "#fafafa" }
          }}
        />
      )}
    />
  );
};

export default EmailInput;
