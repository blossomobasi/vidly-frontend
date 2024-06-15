import { useQuery } from "@tanstack/react-query";
import { getCustomers } from "../../services/customers/getCustomers";
import { Customer } from "../../types/customers";

export function useCustomers() {
    const {
        data: customers,
        isLoading: isLoadingCustomers,
        error,
    } = useQuery<Customer[]>({
        queryKey: ["customers"],
        queryFn: getCustomers,
    });

    return { customers, isLoadingCustomers, error };
}
