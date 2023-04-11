import Menu from "./Menu/Menu";
import Button from "../Button/Button";

import menuData from "../../data/menu-data.json";

import styles from "./header.module.css";

const Header = ({ items }) => {
  const elements = items.map(({ value, language, id }) => (
    <option key={id} value={value}>
      {language}
    </option>
  ));

  return (
    <div className="container container--header">
      <div className={styles.containerLeft}>
        <span className={styles.logo}>Naql</span>
        <Menu items={menuData} />
      </div>
      <div className={styles.containerRight}>
        <a className={styles.logIn} href="#login">
          Log in
        </a>

        <Button className={styles.btnHeader}>Sign up</Button>
        <select className={styles.selectBtn} name="select">
          {elements}
        </select>
      </div>
    </div>
  );
};

export default Header;
