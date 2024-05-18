import styles from "./login.module.css";
import Logo from "../../../images/Logo.png";
import BikeMan from "../../../images/bike.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <header className={styles.logoSection}>
        <img src={Logo} alt="dms logo" className={styles.logo} />
        <h3 className={styles.logoText}>dms</h3>
      </header>
      <section className={styles.registerContent}>
        <section className={styles.leftContent}>
          <img src={BikeMan} alt="bikeman" />
          <h3 className={styles.title}>
            Let’s help you manage your riders and delivery systems.
          </h3>
          <p className={styles.desc}>
            Every logistics company whether it’s a multi-national branding
            corporation or a regular local deserves the basic standard
            necessities in achieving a high service delivery
          </p>

          <Link>
            <button className={styles.btn}>Get Started</button>
          </Link>
        </section>
        <section className={styles.rightContainer}>
          <section className={styles.formInfo}>
            <h2>You’re Welcome Back!</h2>
            <p>Enter the following information below</p>
          </section>
          <section className={styles.formContainer}>
            <form className={styles.form}>
              <input type="email" placeholder="Company Email Address" />
              <input type="password" placeholder="Password" />
            </form>
            <Link to="/forgetpassword">
              <p className={styles.forgotPassword}>Forgot Password?</p>
            </Link>
            <section className={styles.account}>
              <p>
                Just joining us here? <Link to="/">Register Now</Link>
              </p>
              <Link to="/dashboard">
                <button className={styles.btn}>Login</button>
              </Link>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};
export default Login;
