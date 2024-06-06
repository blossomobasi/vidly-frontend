import { useQuery } from "@tanstack/react-query";
import { getUsers as getUsersApi } from "../../services/user/getUsers";
import { UserResponse } from "../../types/auth";

export function useUsers() {
    const {
        data: getUsers,
        error,
        isLoading: isUsersLoading,
    } = useQuery<UserResponse, Error>({
        queryKey: ["users"],
        queryFn: getUsersApi,
    });

    return { getUsers, error, isUsersLoading };
}
