export interface LoginInput {
  email: string;
  password: string;
}

export interface RegisterInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface RegisterError {
  field: "email" | "password" | "firstName" | "lastName";
  message: string;
}

export interface AuthRegisterFormError {
  response: {
    data: {
      message: RegisterError[];
    };
  };
}

export interface LoginError {
  field: "email" | "password";
  message: string;
}

export interface AuthLoginFormError {
  response: {
    data: {
      message: LoginError[];
    };
  };
}
