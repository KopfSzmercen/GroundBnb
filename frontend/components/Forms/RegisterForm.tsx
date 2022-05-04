import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, AlertTitle, Button, Stack } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import axiosInstance from "../../axios.config";
import {
  AuthRegisterFormError,
  RegisterInput
} from "../../types/form-inputs/inputs";
import FormWrapper from "./FormWrapper";
import EmailInput from "./inputs/EmailInput";
import NameInput from "./inputs/NameInput";
import PasswordInput from "./inputs/PasswordInput";
import { registerSchema } from "./schemas";

const RegisterForm: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const methods = useForm<RegisterInput>({
    resolver: yupResolver(registerSchema)
  });

  const router = useRouter();

  const mutation = useMutation(
    (data: RegisterInput) => {
      return axiosInstance.post("auth/register", data, {
        withCredentials: true
      });
    },
    {
      onError: (error: AuthRegisterFormError) => {
        if (!error.response) {
          return router.push("/error");
        }
        error.response.data.message.forEach((e) => {
          methods.setError(e.field, { message: e.message });
        });
      },
      onSuccess: () => {
        methods.reset();
        setIsSuccess(true);
      }
    }
  );

  const submitHandler: SubmitHandler<RegisterInput> = (data: RegisterInput) => {
    mutation.mutate(data);
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
                  <AlertTitle>Register uccessfull!</AlertTitle>

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
              disabled={
                Object.values(methods.formState.errors).length > 0 ||
                mutation.isLoading
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
