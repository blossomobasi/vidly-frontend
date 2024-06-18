import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { useState } from "react";
import { useLogin } from "../hooks/auth/useLogin";
import FormRow from "../ui/FormRow";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { mutate: login, isPending: isLoggingIn } = useLogin();

    function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        if (!email || !password) {
            console.log("Please fill in all fields");
            return;
        }

        login({ email, password });
    }

    return (
        <div className={styles.loginFormContainer}>
            <form className={styles.loginForm} onSubmit={handleLogin}>
                <h2 className={styles.title}>Login</h2>
                <FormRow label="Email:">
                    <input
                        disabled={isLoggingIn}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="email"
                        className={styles.input}
                        required
                    />
                </FormRow>

                <FormRow label="Password:">
                    <input
                        disabled={isLoggingIn}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        id="password"
                        className={styles.input}
                        required
                    />
                </FormRow>

                <button
                    disabled={isLoggingIn || !email || !password}
                    type="submit"
                    className={styles.button}
                >
                    Login
                </button>
                <p className={styles.signup}>
                    Not registered? <Link to="/signup">Sign up</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;
