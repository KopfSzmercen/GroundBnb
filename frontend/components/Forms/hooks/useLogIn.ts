import { useRouter } from "next/router";
import { UseFormSetError } from "react-hook-form";
import { useMutation } from "react-query";
import axiosInstance from "../../../axios.config";
import {
  AuthLoginFormError,
  LoginInput
} from "../../../types/form-inputs/inputs";

export const useLogIn = (setError: UseFormSetError<LoginInput>) => {
  const router = useRouter();
  const { isLoading, isError, isSuccess, mutate, error } = useMutation(
    "login",
    (data: LoginInput) => {
      return axiosInstance.post("auth/signin", data, { withCredentials: true });
    },
    {
      onError: (error: AuthLoginFormError) => {
        if (!error.response) {
          return router.push("/error");
        }
        error.response.data.message.forEach((e) => {
          setError(e.field, { message: e.message });
        });
      },
      onSuccess: () => {
        router.push("/home");
      }
    }
  );

  return { isLoading, isError, isSuccess, mutate, error };
};
