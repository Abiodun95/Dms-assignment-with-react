import styles from "./forgetpassword.module.css"
import { Link } from "react-router-dom";



const Forgetpassword = () => {
  return (
    <div className={styles.container}>
      <p className={styles.textContent}>Create new password</p>
      <form className={styles.form}>
        <input
          type="password"
          placeholder="Enter password"
          name="enterpassword"
          id="enterpassword"
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="confirmpassword"
          id="confirmpassword"
        />
      </form>
      <Link to="/login">
        <button className={styles.btn}>Enter</button>
      </Link>
    </div>
  );
};
export default Forgetpassword;
