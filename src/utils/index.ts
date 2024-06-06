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

export function dateFormatter(dateString: string) {
    const date = new Date(dateString);

    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
    });
}
