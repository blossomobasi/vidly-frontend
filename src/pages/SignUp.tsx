import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";
import { useState } from "react";
import { useCreateUser } from "../hooks/auth/useCreateUser";
function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { mutate: creatingUser, isPending, error } = useCreateUser();

  function handleRegisterUser(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
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
    creatingUser({ name, email, password });
  }

  return (
    <div className={styles.signupFormContainer}>
      <form className={styles.signupForm} onSubmit={handleRegisterUser}>
        <h2 className={styles.title}>Sign Up</h2>
        <div className={styles.formGroup}>
          {/* Name */}
          <label htmlFor="name" className={styles.label}>
            Name:
          </label>
          <input
            disabled={isPending}
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            className={styles.input}
            required
          />

          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            disabled={isPending}
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
            disabled={isPending}
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
            disabled={isPending}
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
            isPending || !name || !email || !password || !confirmPassword
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
