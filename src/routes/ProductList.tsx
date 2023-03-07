import React, { useContext } from "react";
import Header from "../components/UI/Header";
import ManageTable from "../components/ManageTable";
import styles from "./ProductList.module.scss";
import { NavLink } from "react-router-dom";
import { ProductsListContext } from "../context/ProductsListContext";

export default function ProductList() {
  const [products, setProducts] = useContext(ProductsListContext);
  return (
    <>
      <div className={styles.container}>
        <ManageTable products={products} setProducts={setProducts} />
      </div>
    </>
  );
}
