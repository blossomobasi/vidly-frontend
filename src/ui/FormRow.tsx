import React from "react";
import styles from "./FormRow.module.css";

interface FormRowProps {
    children: React.ReactNode;
    label?: string;
}

function FormRow({ children, label }: FormRowProps) {
    return (
        <div className={styles.formGroup}>
            {label && (
                <label className={styles.label} htmlFor={children?.props.id}>
                    {label}
                </label>
            )}
            {children}
        </div>
    );
}

export default FormRow;
