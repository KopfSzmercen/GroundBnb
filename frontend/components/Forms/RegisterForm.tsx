import React from "react";
import FormWrapper from "./FormWrapper";
import { emailErr, nameErr, passwordErr } from "./InputErrorsMsg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { RegisterInput } from "../../types/form-inputs/inputs";
import { Stack, Button } from "@mui/material";
import EmailInput from "./inputs/EmailInput";
import PasswordInput from "./inputs/PasswordInput";
import NameInput from "./inputs/NameInput";
import { useMutation } from "react-query";
import axiosInstance from "../../axios.config";

const schema = yup.object().shape({
  email: yup
    .string()
    .email(emailErr.isEmail)
    .required("This field is required"),
  password: yup
    .string()
    .min(4, passwordErr.minLength)
    .max(20, passwordErr.maxLength)
    .required("This field is required"),
  firstName: yup
    .string()
    .min(4, nameErr.minLength)
    .max(25, nameErr.maxLength)
    .required("This field is required"),
  lastName: yup
    .string()
    .min(4, nameErr.minLength)
    .max(25, nameErr.maxLength)
    .required("This field is required")
});

const RegisterForm: React.FC = () => {
  const methods = useForm<RegisterInput>({
    resolver: yupResolver(schema)
  });

  const mutation = useMutation((data: RegisterInput) => {
    return axiosInstance.post("auth/register", data);
  });

  const submitHandler: SubmitHandler<RegisterInput> = (data: RegisterInput) => {
    console.log(data);
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
          onSubmit={methods.handleSubmit(submitHandler)}
        >
          <Stack gap={3} width="100%">
            <EmailInput />
            <PasswordInput />
            <NameInput first={true} />
            <NameInput first={false} />
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={Object.values(methods.formState.errors).length > 0}
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
