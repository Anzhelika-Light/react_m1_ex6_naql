import { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

import Modal from "../../Modal/Modal";

import styles from "./form.module.css";

class Form extends Component {
  static defaultProps = {
    onSubmit: () => {},
  };

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    name: "",
    password: "",
    checked: false,
    showModal: false,
  };

  checkboxId = nanoid();

  handleChange = ({ target }) => {
    const { name, value, checked, type } = target;

    const newValue = type === "checkbox" ? checked : value;
    this.setState({
      [name]: newValue,
    });
    console.log(target[name]);
    console.log(target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { onSubmit } = this.props;
    onSubmit({ ...this.state });

    console.log(this.state);
    this.reset();
  };

  reset() {
    this.setState({
      name: "",
      password: "",
      checked: false,
    });
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { checkboxId, handleChange, handleSubmit, toggleModal } = this;
    const { name, password, checked, showModal } = this.state;

    return (
      <div className="container">
        {showModal && <Modal />}
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.field}
            type="text"
            name="name"
            value={name}
            placeholder="Username or mobile number"
            onChange={handleChange}
            required
          />
          <input
            className={styles.field}
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <div className={styles.wrapper}>
            <div className={styles.checkboxWrapper}>
              <input
                className={styles.checkbox}
                type="checkbox"
                id={checkboxId}
                name="checked"
                value={checked}
                onChange={handleChange}
              />
              <label htmlFor={checkboxId} className={styles.checkboxText}>
                Remember me?
              </label>
            </div>
            <span className={styles.help} onClick={toggleModal}>
              Forgot password
            </span>
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
