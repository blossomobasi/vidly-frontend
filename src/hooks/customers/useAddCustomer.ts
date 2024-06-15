import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCustomers } from "../../services/customers/addCustomers";
import toast from "react-hot-toast";
import { Customer, CustomerInput } from "../../types/customers";

export function useAddCustomer() {
    const queryClient = useQueryClient();
    const {
        mutate: addCustomer,
        isPending: isAddingCustomer,
        error,
    } = useMutation<Customer, Error, CustomerInput>({
        mutationFn: addCustomers,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["customers"],
            });
            toast.success("Customer added successfully");
        },
        onError: () => {
            toast.error("Failed to add customer");
        },
    });

    return { addCustomer, isAddingCustomer, error };
}
