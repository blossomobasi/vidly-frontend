import { getToken } from "../../utils";

export async function getCurrentUser() {
    const token = getToken();
    if (!token) throw new Error("No token found. Please login again.");

    const res = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/users/me`, {
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
        },
    });

    if (!res.ok) throw new Error("Failed to get current user");

    return res.json();
}
