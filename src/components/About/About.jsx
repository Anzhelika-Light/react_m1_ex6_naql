import styles from "./about.module.css";

const About = ({ title, mainText, details }) => {
  const elements = details.map((item) => (
    <li className={styles.item}>
      <img src={item.img} alt="Icon" className={styles.img} />
      <p className={styles.text}>{item.text}</p>
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
