import { TextField } from "@mui/material";
import { useContext } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ColorModeContext } from "../../../theme/ColorMode";

const PasswordInput = () => {
  const { mode } = useContext(ColorModeContext);
  const {
    control,
    formState: { errors }
  } = useFormContext();

  return (
    <Controller
      name="password"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          //eslint-disable-next-line
          error={!!errors.password}
          //eslint-disable-next-line
          helperText={errors.password ? errors.password?.message : ""}
          InputLabelProps={{
            style: { color: mode === "light" ? "#000" : "#fafafa" }
          }}
        />
      )}
    />
  );
};

export default PasswordInput;
