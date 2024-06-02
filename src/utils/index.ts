export function getTokenFromHeaders(headers: Headers) {
  const token = headers.get("x-auth-token");
  if (!token) throw new Error("No token found in headers");

  return token;
}
