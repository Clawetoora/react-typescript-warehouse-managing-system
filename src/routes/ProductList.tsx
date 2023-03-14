import React, { useContext } from "react";

import ManageTable from "../components/ManageTable";
import styles from "./ProductList.module.scss";

import { ProductsListContext } from "../context/ProductsListContext";
import { PrevDataContext } from "../context/PrevDataContext";

export default function ProductList() {
  const [products, setProducts] = useContext(ProductsListContext);
  const [previousProducts, setPreviousProducts] = useContext(PrevDataContext);
  return (
    <>
      <div className={styles.container}>
        <ManageTable
          products={products}
          setProducts={setProducts}
          previousProducts={previousProducts}
          setPreviousProducts={setPreviousProducts}
        />
      </div>
    </>
  );
}
