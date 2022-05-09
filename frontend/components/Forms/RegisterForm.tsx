import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, AlertTitle, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { RegisterInput } from "../../types/form-inputs/inputs";
import FormWrapper from "./FormWrapper";
import { useRegister } from "./hooks/useRegister";
import EmailInput from "./inputs/EmailInput";
import NameInput from "./inputs/NameInput";
import PasswordInput from "./inputs/PasswordInput";
import { registerSchema } from "./schemas";

const RegisterForm: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const methods = useForm<RegisterInput>({
    resolver: yupResolver(registerSchema)
  });

  const { mutate, isLoading } = useRegister(
    methods.reset,
    setIsSuccess,
    methods.setError
  );

  const submitHandler: SubmitHandler<RegisterInput> = (data: RegisterInput) => {
    mutate(data);
  };

  return (
    <FormWrapper header="Register">
      <FormProvider {...methods}>
        <form
          style={{
            width: "100%",
            marginTop: "2em"
          }}
          //eslint-disable-next-line
          onSubmit={methods.handleSubmit(submitHandler)}
        >
          <Stack gap={3} width="100%">
            <EmailInput />
            <PasswordInput />
            <NameInput first={true} />
            <NameInput first={false} />

            {isSuccess && (
              <Alert
                severity="success"
                sx={{ display: "grid", placeItems: "center" }}
              >
                <Stack textAlign="center" gap={3}>
                  <AlertTitle>Register successfull!</AlertTitle>

                  <Button
                    color="success"
                    href="/auth/login"
                    variant="contained"
                  >
                    Log in
                  </Button>
                </Stack>
              </Alert>
            )}
            <Button
              type="submit"
              variant="contained"
              size="large"
              data-testid="register-btn"
              disabled={
                Object.values(methods.formState.errors).length > 0 || isLoading
              }
            >
              Register
            </Button>
          </Stack>
        </form>
      </FormProvider>
    </FormWrapper>
  );
};

export default RegisterForm;
