import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../../../../axios.config";

export const useLogOut = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { isLoading, isError, isSuccess, mutate } = useMutation(
    "login",
    () => {
      return axiosInstance.post("auth/logout", { withCredentials: true });
    },
    {
      //eslint-disable-next-line
      onError: (error: any) => {
        router.push("/error");
      },
      onSuccess: () => {
        queryClient.removeQueries("getCurrentUser");
        router.push("/");
      }
    }
  );

  return { isLoading, isError, isSuccess, mutate };
};
