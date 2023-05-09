import { Component } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      console.log(e.code);
      if (e.code === "Escape") {
        this.props.onClose();
      }
    });
  }

  render() {
    return createPortal(
      <div className={styles.backdrop}>
        <div className={styles.modalContent}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
