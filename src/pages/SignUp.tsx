import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";
function SignUp() {
  return (
    <div className={styles.signupFormContainer}>
      <form className={styles.signupForm}>
        <h2 className={styles.title}>Sign Up</h2>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input type="email" id="email" className={styles.input} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
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
            type="password"
            id="confirmPassword"
            className={styles.input}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
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
