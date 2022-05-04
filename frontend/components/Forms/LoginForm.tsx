import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Stack } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { LoginInput } from "../../types/form-inputs/inputs";
import FormWrapper from "./FormWrapper";
import { useLogIn } from "./hooks/useLogIn";
import EmailInput from "./inputs/EmailInput";
import PasswordInput from "./inputs/PasswordInput";
import { loginSchema } from "./schemas";

const LoginForm = () => {
  const methods = useForm<LoginInput>({
    resolver: yupResolver(loginSchema)
  });

  const { mutate } = useLogIn(methods.setError);

  const submitHandler: SubmitHandler<LoginInput> = (data: LoginInput) => {
    mutate(data);
  };

  return (
    <FormWrapper data-testid="login-form" header="Log in">
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
            <Button
              data-testid="log-in-btn"
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
