import React from 'react';
import styles from './SignUp.module.css';
import userImage from '../../assets/pictures/UI(2).jpg'; 

const SignUp = () => {
  return (
    <div className={styles.signupPage}>
      <div className={styles.signupContainer}>
        {/* Left Side: Form */}
        <div className={styles.formSection}>
          <h1>Signup</h1>
          <form>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email ID:</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className={styles.checkboxGroup}>
              <input type="checkbox" id="agreement" name="agreement" required />
              <label htmlFor="agreement">
                By signing up, you agree to receive updates and special offers.
              </label>
            </div>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
          <p className={styles.loginLink}>
            Already have an account? <a href="/login">Login here</a>
          </p>
        </div>
        <div className={styles.imageSection}>
          <img src={userImage} alt="User clicking on mobile" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
