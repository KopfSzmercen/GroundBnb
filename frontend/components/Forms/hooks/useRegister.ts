import router from "next/router";
import { UseFormSetError } from "react-hook-form";
import { useMutation } from "react-query";
import axiosInstance from "../../../axios.config";
import {
  AuthRegisterFormError,
  RegisterInput
} from "../../../types/form-inputs/inputs";

export const useRegister = (
  reset: () => void,
  setIsSuccess: (arg: boolean) => void,
  setError: UseFormSetError<RegisterInput>
) => {
  const { mutate, isLoading } = useMutation(
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
          setError(e.field, { message: e.message });
        });
      },
      onSuccess: () => {
        reset();
        setIsSuccess(true);
      }
    }
  );

  return { mutate, isLoading };
};
