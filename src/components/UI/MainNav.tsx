import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.scss";
export default function Nav() {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <nav className={styles.navigation}>
      <NavLink
        onClick={() => handleClick(1)}
        className={
          currentPage === 1 ? styles["button-selected"] : styles.button
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        onClick={() => handleClick(2)}
        className={
          currentPage === 2 ? styles["button-selected"] : styles.button
        }
        to="/products"
      >
        Manage products
      </NavLink>
    </nav>
  );
}
