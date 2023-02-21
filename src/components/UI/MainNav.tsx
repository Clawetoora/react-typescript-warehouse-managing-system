import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.css";
export default function Nav() {
  return (
    <nav className={styles.navigation}>
      <NavLink className={styles.button} to="/">
        Home
      </NavLink>
      <NavLink className={styles.button} to="/products">
        Manage products
      </NavLink>
    </nav>
  );
}
