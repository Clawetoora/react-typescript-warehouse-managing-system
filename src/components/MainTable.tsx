import React, { useEffect, useContext } from "react";
import styles from "./MainTable.module.scss";
import Stats from "./Stats";
import { ProductsListContext } from "../context/ProductsListContext";

interface Product {
  id?: number;
  name?: string;
  ean?: string;
  type?: string;
  weight?: number;
  color?: string;
  active?: boolean;
  quantity?: number;
  price?: number;
}

export default function MainTable() {
  const [products] = useContext(ProductsListContext);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            {Object.keys(products[0]).map((key, index) =>
              key === "id" || key === "active" ? (
                ""
              ) : (
                <th key={index}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {products
            .filter((product: Product) => product.active)
            .map((product: Product) => {
              return (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.ean}</td>
                  <td>{product.type}</td>
                  <td>
                    {product.weight !== undefined ? product.weight / 1000 : 0}
                    kg
                  </td>
                  <td>{product.color}</td>
                  <td>{product.quantity}</td>
                  <td>${product.price}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
