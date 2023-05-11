import { Component } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";

const modalRoot = document.querySelector("#modal-root");
const { body } = document;

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
    body.style.overflow = "auto";
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { handleBackdropClick } = this;

    return createPortal(
      <div className={styles.backdrop} onClick={handleBackdropClick}>
        <div className={styles.modalContent}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
