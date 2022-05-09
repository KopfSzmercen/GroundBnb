import { useQuery } from "react-query";
import axiosInstance from "../axios.config";
import { LoginSuccess } from "../types/login/login";

export const useGetMe = () => {
  const { isLoading, error, data } = useQuery<LoginSuccess>(
    "getCurrentUser",
    () => {
      return axiosInstance.get("/auth/getMe");
    }
  );
  return { isLoading, error, data };
};
