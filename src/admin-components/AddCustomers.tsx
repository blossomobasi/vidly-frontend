import { useState } from "react";
import { useAddCustomer } from "../hooks/customers/useAddCustomer";
import styles from "./AddCustomers.module.css";

function AddCustomers() {
    const { addCustomer, isAddingCustomer } = useAddCustomer();

    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [isGold, setIsGold] = useState(false);
    const [phone, setPhone] = useState("");

    const handleAddCustomer = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        addCustomer({ name, isGold, phone });
    };

    return (
        <div>
            <h3>Add Customer</h3>
            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Close" : "Open"}</button>

            {isOpen && (
                <form className={styles.customer} onSubmit={handleAddCustomer}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>
                            Name
                        </label>
                        <input
                            disabled={isAddingCustomer}
                            type="text"
                            id="name"
                            className={styles.input}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="phone" className={styles.label}>
                            Phone
                        </label>
                        <input
                            disabled={isAddingCustomer}
                            type="text"
                            id="phone"
                            className={styles.input}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="isGold" className={styles.label}>
                            Is Gold
                        </label>
                        <input
                            disabled={isAddingCustomer}
                            type="checkbox"
                            id="isGold"
                            className={styles.input}
                            checked={isGold}
                            onChange={(e) => setIsGold(e.target.checked)}
                        />
                    </div>

                    <button
                        disabled={isAddingCustomer || !name || !phone}
                        type="submit"
                        className={styles.button}
                    >
                        Add Customer
                    </button>
                </form>
            )}
        </div>
    );
}

export default AddCustomers;
