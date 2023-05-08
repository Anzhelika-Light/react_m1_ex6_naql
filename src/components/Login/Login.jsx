import { Component } from "react";
import Form from "./Form/Form";
import Notiflix from "notiflix";

import styles from "./login.module.css";

class Login extends Component {
  loggedIn = (data) => {
    Notiflix.Notify.success("You are successfully logged in");
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
