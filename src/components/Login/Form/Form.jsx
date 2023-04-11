import { Component } from "react";

import styles from "./form.module.css";

class Form extends Component {
  state = {
    name: "",
    password: "",
    checked: false,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { handleChange } = this;

    return (
      <div className="container">
        <form className={styles.form}>
          <input
            className={styles.field}
            type="text"
            name="name"
            placeholder="Username or mobile number"
            onChange={handleChange}
          />
          <input
            className={styles.field}
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <div className={styles.wrapper}>
            <div className={styles.checkboxWrapper}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="Remember me?"
                id=""
              />
              <span className={styles.checkboxText}>Remember me?</span>
            </div>
            <a href="#" alt="Forgot password" className={styles.help}>
              Forgot password
            </a>
          </div>
          <button className={styles.btn} type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
