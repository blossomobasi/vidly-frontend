/// <reference types="vite/client" />

interface Genre {
  id: string;
  name: string;
}

interface LoginInput {
  email: string;
  password: string;
}

interface RegisterInput {
  name: string;
  email: string;
  password: string;
}

interface IUser {
  name: string;
  email: string;
  password: string;
  isAdmin?: boolean;
}
