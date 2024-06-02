import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";
import { useState } from "react";
import { useRegisterUser } from "../hooks/auth/useRegisterUser";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {
    mutate: register,
    isPending: isRegistering,
    error,
  } = useRegisterUser();

  function handleRegisterUser(e: React.FormEvent) {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      console.log("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    if (error) {
      console.log(error.message);
    }
    register({ firstName, lastName, email, password });
  }

  return (
    <div className={styles.signupFormContainer}>
      <form className={styles.signupForm} onSubmit={handleRegisterUser}>
        <h2 className={styles.title}>Sign Up</h2>
        <div className={styles.formGroup}>
          <label htmlFor="firstName" className={styles.label}>
            First Name:
          </label>
          <input
            disabled={isRegistering}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            id="firstName"
            className={styles.input}
            required
          />
          <label htmlFor="lastName" className={styles.label}>
            Last Name:
          </label>
          <input
            disabled={isRegistering}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            id="lastName"
            className={styles.input}
            required
          />

          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            disabled={isRegistering}
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
            disabled={isRegistering}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword" className={styles.label}>
            Confirm Password:
          </label>
          <input
            disabled={isRegistering}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            id="confirmPassword"
            className={styles.input}
            required
          />
        </div>
        <button
          disabled={
            isRegistering ||
            !firstName ||
            !lastName ||
            !email ||
            !password ||
            !confirmPassword
          }
          type="submit"
          className={styles.button}
        >
          Sign Up
        </button>

        <p className={styles.signup}>
          Already registered? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
