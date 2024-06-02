import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { useState } from "react";
import { useLogin } from "../hooks/auth/useLogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: login, isPending: isLoggingIn, error } = useLogin();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) {
      console.log("Please fill in all fields");
      return;
    }

    if (error) {
      console.log(error.message);
    }
    login({ email, password });
  }

  return (
    <div className={styles.loginFormContainer}>
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <h2 className={styles.title}>Login</h2>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            disabled={isLoggingIn}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
            disabled={isLoggingIn}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            className={styles.input}
            required
          />
        </div>
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
