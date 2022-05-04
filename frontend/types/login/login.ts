import { AxiosResponse } from "axios";

export interface LoginResponse extends AxiosResponse {
  data: {
    data: {
      email: string;
      firstName: string;
      id: number;
      lastName: string;
      profilePhoto: string | null;
    };
  };
}

export interface LoginSuccess {
  data: {
    email: string;
    firstName: string;
    id: number;
    lastName: string;
    profilePhoto: string | null;
  };
}
