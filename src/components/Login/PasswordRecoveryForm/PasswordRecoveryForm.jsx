import { Component } from "react";
import styles from "./password-recovery-form.module.css";
import { nanoid } from "nanoid";

class PasswordRecoveryForm extends Component {
  state = {
    email: "",
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
    this.setState({
      email: "",
    });
  };

  emailId = nanoid();

  render() {
    const { handleChange, handleSubmit } = this;
    const { email } = this.state;

    return (
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor={this.emailId} className={styles.label}>
            Enter your email
          </label>
          <input
            className={styles.field}
            type="text"
            name="email"
            value={email}
            id={this.emailId}
            onChange={handleChange}
            required
          />
        </div>
        <button className={styles.btn} type="submit">
          Send
        </button>
      </form>
    );
  }
}

export default PasswordRecoveryForm;
