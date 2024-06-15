import AddCustomers from "../../admin-components/AddCustomers";
import AllCustomers from "../../admin-components/AllCustomers";

const AdminCustomer = () => {
    return (
        <div>
            <h3>Operations on Customers</h3>

            <AllCustomers />
            <AddCustomers />
        </div>
    );
};

export default AdminCustomer;
