import { Component } from "react";
import Form from "./Form/Form";
import Notiflix from "notiflix";

import Modal from "../Modal/Modal";

import { GrClose } from "react-icons/gr";

import styles from "./login.module.css";
import SignUpForm from "./SignUpForm/SignUpForm";

class Login extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  loggedIn = (data) => {
    Notiflix.Notify.success("You are successfully logged in");
  };

  signUp = (data) => {
    console.log(data);
    this.toggleModal();
  };

  render() {
    const { toggleModal, loggedIn, signUp } = this;
    const { showModal } = this.state;

    return (
      <div className="container">
        {showModal && (
          <Modal onClose={toggleModal}>
            <GrClose onClick={toggleModal} className={styles.closeIcon} />
            <SignUpForm onSubmit={signUp} />
          </Modal>
        )}
        <h2 id="login" className={styles.title}>
          Login
        </h2>
        <Form onSubmit={loggedIn} />
        <p className={styles.text}>
          Don’t have an acount?
          <span className={styles.textBold} onClick={toggleModal}>
            &nbsp;Sign Up
          </span>
        </p>
      </div>
    );
  }
}

export default Login;
