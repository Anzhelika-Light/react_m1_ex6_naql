import Menu from "./Menu/Menu";
import Button from "../Button/Button";

import menuData from "../../data/menu-data.json";

import styles from "./header.module.css";

const Header = () => {
  return (
    <div className="container container--header">
      <div className={styles.containerLeft}>
        <span className={styles.logo}>Naql</span>
        <Menu items={menuData} />
      </div>
      <div className={styles.containerRight}>
        <span className={styles.logIn}>Log in</span>
        <Button className={styles.btnHeader}>Sign up </Button>
        <select className={styles.selectBtn} name="select">
          <option value="value1">en</option>
          <option value="value1">ua</option>
          <option value="value1">fr</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
