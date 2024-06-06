import { getToken } from "../../utils";

export async function getUsers() {
    const token = getToken();
    if (!token) throw new Error("Token not found");

    const res = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/users`, {
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
        },
    });

    if (!res.ok) {
        throw new Error("Failed to get users");
    }

    return res.json();
}
