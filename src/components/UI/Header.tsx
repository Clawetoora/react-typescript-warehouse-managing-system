import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.scss";
// import CurrentPageContextProvider from "../../context/CurrentPageContext";
export default function Header() {
  return (
    <nav className={styles.navigation}>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles["button-selected"] : styles.button
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles["button-selected"] : styles.button
        }
        to="/products"
      >
        Manage products
      </NavLink>
    </nav>
  );
}
