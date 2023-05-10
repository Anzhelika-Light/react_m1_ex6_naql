import { Component } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    // console.log(e.code);
    if (e.code === "Escape") {
      // console.log("Esc is clicked");
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
