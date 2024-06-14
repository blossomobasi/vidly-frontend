import React from "react";
import { useCustomers } from "../hooks/customers/useCustomers";

const AllCustomers = () => {
    const { customers, isLoadingCustomers, error } = useCustomers();
    return (
        <div>
            <h3>All Customers</h3>
            {isLoadingCustomers && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            {customers && (
                <ul>
                    {customers.map((customer) => (
                        <React.Fragment key={customer._id}>
                            <li>Customer Name: {customer.name}</li>
                            <li>Phone: {customer.phone}</li>

                            <span
                                style={{
                                    display: "flex",
                                }}
                            >
                                <li>isGold: </li>
                                <input
                                    type="checkbox"
                                    title={customer.isGold ? "Gold customer" : "Not Gold customer"}
                                    checked={customer.isGold}
                                    readOnly
                                />

                                <p>
                                    {customer.isGold
                                        ? "Hi, there, We might have some special offers for you!"
                                        : "Hi, there, No Special offers for you!"}
                                </p>
                            </span>
                            <br />

                            <hr />
                        </React.Fragment>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AllCustomers;
