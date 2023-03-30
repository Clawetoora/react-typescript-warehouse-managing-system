import React, { useState, useEffect, useContext } from "react";
import { ProductsListContext } from "../context/ProductsListContext";
import { PrevDataContext } from "../context/PrevDataContext";
import styles from "./Stats.module.scss";
import pricetag from "../assets/dollar-square-svgrepo-com.svg";
import weightofproducts from "../assets/weight-svgrepo-com.svg";
import boxes from "../assets/boxes-svgrepo-com.svg";
import arrowDown from "../assets/pointer-down-svgrepo-com.svg";
import arrowUp from "../assets/pointer-up-svgrepo-com.svg";
import Count from "./UI/Count";

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

  const endPrice = Math.round(
    Math.abs(((price - lastPrice) / lastPrice) * 100)
  ).toString();

  const endWeight = Math.round(
    Math.abs(((weight - lastWeight) / lastWeight) * 100)
  ).toString();
  const endQuantity = Math.round(
    Math.abs(((quantity - lastQuantity) / lastQuantity) * 100)
  ).toString();
  return (
    <div className={styles["stats-container"]}>
      <div className={styles.stats}>
        <h4>
          <img className={styles.icon} src={pricetag} alt="" />
          Total price:
        </h4>
        <p>${price}</p>
        <div className={styles["stats-change"]}>
          <div
            className={`${styles.change} ${
              price - lastPrice >= 0 ? styles.up : styles.down
            }`}
          >
            <div className={styles.percent}>
              {price - lastPrice >= 0 ? " +" : " -"}
              <Count number={endPrice} duration={2} />
              <img
                className={styles.arrow}
                src={price - lastPrice >= 0 ? arrowUp : arrowDown}
                alt=""
              />
            </div>
            Last change:
            {price - lastPrice >= 0 ? " +$" : " -$"}
            {Math.abs(price - lastPrice).toFixed(2)}
            <br />
          </div>
        </div>
      </div>
      <div className={styles.stats}>
        <h4>
          <img className={styles.icon} src={weightofproducts} alt="" />
          Total weight:
        </h4>

        <p>{weight / 1000}kg</p>
        <div className={styles["stats-change"]}>
          <div
            className={`${styles.change} ${
              weight - lastWeight >= 0 ? styles.up : styles.down
            }`}
          >
            <div className={styles.percent}>
              {weight - lastWeight >= 0 ? " +" : " -"}
              <Count number={endWeight} duration={2} />
              <img
                className={styles.arrow}
                src={weight - lastWeight >= 0 ? arrowUp : arrowDown}
                alt=""
              />
            </div>
            Last change:
            {weight - lastWeight >= 0 ? " +" : " -"}
            {(Math.abs(weight - lastWeight) / 1000).toFixed(2)}kg
            <br />
          </div>
        </div>
      </div>
      <div className={styles.stats}>
        <h4>
          <img className={styles.icon} src={boxes} alt="" />
          Quantity:
        </h4>

        <p>{quantity} items</p>
        <div className={styles["stats-change"]}>
          <div
            className={`${styles.change} ${
              quantity - lastQuantity >= 0 ? styles.up : styles.down
            }`}
          >
            <div className={styles.percent}>
              {quantity - lastQuantity >= 0 ? " +" : " -"}
              <Count number={endQuantity} duration={2} />
              <img
                className={styles.arrow}
                src={quantity - lastQuantity >= 0 ? arrowUp : arrowDown}
                alt=""
              />
            </div>
            Last change:
            {quantity - lastQuantity >= 0 ? " +" : " -"}
            {Math.abs(quantity - lastQuantity)} items
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
