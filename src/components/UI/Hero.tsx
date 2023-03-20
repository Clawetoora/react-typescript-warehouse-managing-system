import React from "react";
import styles from "./Hero.module.scss";
import heroimg from "../../assets/darkwarehouse2.jpg";
import Stats from "../Stats";
function Hero() {
  return (
    <section className={styles.hero}>
      <aside className={styles["hero-aside"]}>
        <h1>WAREHOUSE MANAGMENT SYSTEM</h1>
        <h5>See your latest changes:</h5>
        <Stats />
      </aside>
      <div className={styles.heroImg}>
        <img src={heroimg} alt="" />
      </div>
    </section>
  );
}

export default Hero;
