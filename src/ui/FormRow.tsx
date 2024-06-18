import React from "react";
import styles from "./FormRow.module.css";

interface FormRowProps {
    children: React.ReactElement<{ id?: string }>;
    // children: React.ReactNode;
    label?: string;
}

function FormRow({ children, label }: FormRowProps) {
    return (
        <div className={styles.formGroup}>
            {label && (
                <label
                    className={styles.label}
                    // htmlFor={React.isValidElement(children) && children?.props.id}
                    htmlFor={children?.props.id}
                >
                    {label}
                </label>
            )}
            {children}
        </div>
    );
}

export default FormRow;
