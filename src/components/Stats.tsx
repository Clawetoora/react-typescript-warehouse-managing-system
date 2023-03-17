import React, { useState, useEffect, useContext } from "react";
import { ProductsListContext } from "../context/ProductsListContext";
import { PrevDataContext } from "../context/PrevDataContext";
import styles from "./Stats.module.scss";
import pricetag from "../assets/dollar-square-svgrepo-com.svg";
import weightofproducts from "../assets/weight-svgrepo-com.svg";
import boxes from "../assets/boxes-svgrepo-com.svg";

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

function Stats() {
  const [products] = useContext(ProductsListContext);
  const [previousProducts] = useContext(PrevDataContext);

  useEffect(() => {
    localStorage.setItem("prevdata", JSON.stringify(previousProducts));
  }, []);

  let weight = 0;
  let quantity = 0;
  let price = 0;
  let lastWeight = 0;
  let lastQuantity = 0;
  let lastPrice = 0;
  products
    .filter((product: Product) => product.active)
    .map((product: Product) => {
      product.price ? (price += product.price) : 0;
      product.weight ? (weight += product.weight) : 0;
      product.quantity ? (quantity += product.quantity) : 0;
    });

  previousProducts
    .filter((product: Product) => product.active)
    .map((product: Product) => {
      product.price ? (lastPrice += product.price) : 0;
      product.weight ? (lastWeight += product.weight) : 0;
      product.quantity ? (lastQuantity += product.quantity) : 0;
    });
  return (
    <div className={styles["stats-container"]}>
      <div className={styles.stats}>
        <h4>
          <img className={styles.icon} src={pricetag} alt="" />
          Total price
        </h4>
        <div className={styles["stats-change"]}>
          <p>${price}</p>
          <p
            className={`${styles.change} ${
              price - lastPrice >= 0 ? styles.up : styles.down
            }`}
          >
            Last change:
            {price - lastPrice >= 0 ? " +$" : " -$"}
            {Math.abs(price - lastPrice)}
          </p>
        </div>
      </div>
      <div className={styles.stats}>
        <h4>
          <img className={styles.icon} src={weightofproducts} alt="" />
          Total weight
        </h4>

        <div className={styles["stats-change"]}>
          <p>{weight / 1000}kg</p>
          <p
            className={`${styles.change} ${
              weight - lastWeight >= 0 ? styles.up : styles.down
            }`}
          >
            Last change:
            {weight - lastWeight >= 0 ? " +" : " -"}
            {Math.abs(weight - lastWeight) / 1000}kg
          </p>
        </div>
      </div>
      <div className={styles.stats}>
        <h4>
          <img className={styles.icon} src={boxes} alt="" />
          Quantity
        </h4>

        <div className={styles["stats-change"]}>
          <p>{quantity} items</p>
          <p
            className={`${styles.change} ${
              quantity - lastQuantity >= 0 ? styles.up : styles.down
            }`}
          >
            Last change:
            {quantity - lastQuantity >= 0 ? " +" : " -"}
            {Math.abs(quantity - lastQuantity)} items
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
