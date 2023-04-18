import React, { useState } from "react";
import styles from "./ViewNav.module.scss";

type SelectedProps = {
  selected: string;
  setTab: any;
};

function ViewNav({ selected, setTab }: SelectedProps) {
  // const [selected, setSelected] = useState("product");
  return (
    <div className={styles.nav}>
      <button
        className={`${styles.btn} ${
          selected === "product" ? styles.active : ""
        }`}
        onClick={() => {
          setTab("product");
        }}
      >
        Product view
      </button>
      <button
        className={`${styles.btn} ${selected === "price" ? styles.active : ""}`}
        onClick={() => {
          setTab("price");
        }}
      >
        Price history
      </button>
      <button
        className={`${styles.btn} ${
          selected === "quantity" ? styles.active : ""
        }`}
        onClick={() => {
          setTab("quantity");
        }}
      >
        Quantity history
      </button>
    </div>
  );
}

export default ViewNav;
