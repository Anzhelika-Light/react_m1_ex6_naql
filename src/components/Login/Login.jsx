import { Component } from "react";
import Form from "./Form/Form";

import styles from "./login.module.css";

class Login extends Component {
  loggedIn = () => {
    console.log("Hello");
  };

  render() {
    const { loggedIn } = this;

    return (
      <div className="container">
        <h2 id="login" className={styles.title}>
          Login
        </h2>
        <Form onSubmit={loggedIn} />
        <p className={styles.text}>
          Don’t have an acount? <span className={styles.textBold}>Sign Up</span>
        </p>
      </div>
    );
  }
}

export default Login;
