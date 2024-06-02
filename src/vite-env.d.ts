/// <reference types="vite/client" />

interface Genre {
  id: string;
  name: string;
}

interface LoginInput {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

interface RegisterInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "user" | "admin";
}
