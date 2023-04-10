import Button from "../Button/Button";

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div class="container ">
      <h1 className={styles.title}>SEARCH FOR CAR TYPE NAME</h1>
      <Button className={styles.btnHero} type="button">
        Get started
      </Button>
    </div>
  );
};

export default Hero;
