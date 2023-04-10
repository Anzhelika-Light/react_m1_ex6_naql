import styles from "./menu.module.css";

const Menu = ({ items }) => {
  const elements = items.map(({ id, text, link }) => (
    <li className={styles.item} key={id}>
      <a className={styles.link} href={link}>
        {text}
      </a>
    </li>
  ));
  return <ul className={styles.list}>{elements}</ul>;
};

export default Menu;
