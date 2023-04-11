import Form from "./Form/Form";

import styles from "./login.module.css";

const Login = () => {
  return (
    <div className="container">
      <h2 id="login" className={styles.title}>
        Login
      </h2>
      <Form />
      <p className={styles.text}>
        Don’t have an acount? <span className={styles.textBold}>Sign Up</span>
      </p>
    </div>
  );
};

export default Login;
