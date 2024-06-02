import { jwtDecode } from "jwt-decode";

export function decodeToken(token: string) {
  if (!token) return null;
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function getToken() {
  const token = localStorage.getItem("token");
  return token;
}
