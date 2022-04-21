import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Paper, Stack, Typography } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { LoginInput } from "../../types/form-inputs/inputs";
import EmailInput from "./inputs/EmailInput";
import { emailErr, passwordErr } from "./InputErrorsMsg";
import PasswordInput from "./inputs/PasswordInput";
import FormWrapper from "./FormWrapper";

const schema = yup.object().shape({
  email: yup
    .string()
    .email(emailErr.isEmail)
    .required("This field is required"),
  password: yup
    .string()
    .min(4, passwordErr.minLength)
    .max(20, passwordErr.maxLength)
    .required("This field is required")
});

const LoginForm = () => {
  const methods = useForm<LoginInput>({
    resolver: yupResolver(schema)
  });

  const submitHandler: SubmitHandler<LoginInput> = (data: LoginInput) => {
    console.log(data);
  };

  return (
    <FormWrapper header="Log in">
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
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={Object.values(methods.formState.errors).length > 0}
            >
              Log in
            </Button>
          </Stack>
        </form>
      </FormProvider>
    </FormWrapper>
  );
};

export default LoginForm;
