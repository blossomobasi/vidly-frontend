import React from "react";
import { useUsers } from "../hooks/users/useUsers";
import { dateFormatter } from "../utils";

function AllUsers() {
    const { error, getUsers, isUsersLoading } = useUsers();
    return (
        <div>
            <h3>All Users</h3>
            {isUsersLoading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            {getUsers && (
                <ul>
                    {getUsers.data.map((user) => (
                        <React.Fragment key={user._id}>
                            <li>
                                User Name: {user.firstName} {user.lastName}
                            </li>
                            <li>User Email {user.email}</li>
                            <li>Created At: {dateFormatter(user.date)}</li>
                            <br />

                            <hr />
                        </React.Fragment>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default AllUsers;
