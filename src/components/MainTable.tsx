import React, { useState, useEffect, useRef, useContext } from "react";
import styles from "./MainTable.module.scss";
import pricetag from "../assets/dollar-square-svgrepo-com.svg";
import weightofproducts from "../assets/weight-svgrepo-com.svg";
import boxes from "../assets/boxes-svgrepo-com.svg";
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

// interface ProductsProps {
//   products: Product[];
// }

export default function MainTable() {
  const [products] = useContext(ProductsListContext);

  let weight = 0;
  let quantity = 0;
  let price = 0;
  let lastPrice = 0;

  products
    .filter((product: Product) => product.active)
    .map((product: Product) => {
      product.price ? (price += product.price) : 0;
      product.weight ? (weight += product.weight) : 0;
      product.quantity ? (quantity += product.quantity) : 0;
    });

  return (
    <div className={styles.container}>
      <div className={styles["stats-container"]}>
        <div className={styles.stats}>
          <h4>
            <img className={styles.icon} src={pricetag} alt="" />
            Total price
          </h4>
          <div className={styles["stats-change"]}>
            <p>${price}</p>
            <p className={styles.change}>+{lastPrice}</p>
          </div>
        </div>
        <div className={styles.stats}>
          <h4>
            <img className={styles.icon} src={weightofproducts} alt="" />
            Total weight
          </h4>
          <p>{weight / 1000}kg</p>
        </div>
        <div className={styles.stats}>
          <h4>
            <img className={styles.icon} src={boxes} alt="" />
            Quantity
          </h4>
          <p>{quantity}</p>
        </div>
      </div>
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
              let xcolor = product.color;

              return (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.ean}</td>
                  <td>{product.type}</td>
                  <td>
                    {product.weight !== undefined ? product.weight / 1000 : 0}
                    kg
                  </td>
                  <td>
                    {product.color}
                    {/* <div
                      className={styles.color}
                      style={{ backgroundColor: `${xcolor}` }}
                    ></div> */}
                  </td>
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
