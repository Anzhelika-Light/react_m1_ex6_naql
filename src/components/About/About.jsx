import styles from "./about.module.css";

import { ReactComponent as Img } from "../../assets/img/reg-icon.svg";

const About = ({ title, mainText, details }) => {
  const elements = details.map(({ id, img, text }) => (
    <li key={id} className={styles.item}>
      <Img className={styles.img} />
      {/* <img src={img} alt="Icon" className={styles.img} /> */}
      <p className={styles.text}>{text}</p>
    </li>
  ));

  return (
    <div className="container">
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.mainText}>{mainText}</p>
      <ul className={styles.list}>{elements}</ul>
    </div>
  );
};

export default About;
