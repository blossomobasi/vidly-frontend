export async function getCustomers() {
    try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/customers`);

        if (!res.ok) {
            throw new Error("Failed to fetch customers");
        }

        return res.json();
    } catch (err) {
        console.log(err);
    }
}
