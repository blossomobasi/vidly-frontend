import { CustomerInput } from "../../types/customers";

export async function addCustomers(customer: CustomerInput) {
    const token = localStorage.getItem("token");
    try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/customers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": token || "",
            },
            body: JSON.stringify(customer),
        });

        if (!res.ok) {
            throw new Error("Failed to add customer");
        }

        return res.json();
    } catch (err) {
        console.log(err);
    }
}
