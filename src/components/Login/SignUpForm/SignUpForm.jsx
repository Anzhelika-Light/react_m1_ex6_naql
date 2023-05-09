import { Component } from "react";
import styles from "./sign-up-form.module.css";

class SignUpForm extends Component {
  state = {
    name: "",
    password: "",
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({
      name: "",
      password: "",
    });
  }

  render() {
    const { handleChange, handleSubmit } = this;
    const { name, password } = this.state;

    return (
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.field}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="e-mail"
          required
        />
        <input
          className={styles.field}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="password"
          required
        />
        <button type="submit" className={styles.btn}>
          Sign up
        </button>
      </form>
    );
  }
}

export default SignUpForm;
