import React, { useState, useEffect, useContext } from "react";
import { ProductsListContext } from "../context/ProductsListContext";
import { PrevDataContext } from "../context/PrevDataContext";
import styles from "./Stats.module.scss";
import pricetag from "../assets/dollar-square-svgrepo-com.svg";
import weightofproducts from "../assets/weight-svgrepo-com.svg";
import boxes from "../assets/boxes-svgrepo-com.svg";
import arrowDown from "../assets/pointer-down-svgrepo-com.svg";
import arrowUp from "../assets/pointer-up-svgrepo-com.svg";

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
  const [priceCount, setPriceCount] = useState(0);
  const [weightCount, setWeightCount] = useState(0);
  const [quantityCount, setQuantityCount] = useState(0);

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

  useEffect(() => {
    let startPrice = 0;
    let startWeight = 0;
    let startQuantity = 0;
    // first three numbers from props
    const endPrice = Math.abs(((price - lastPrice) / lastPrice) * 100);

    const endWeight = Math.abs(((weight - lastWeight) / lastWeight) * 100);
    const endQuantity = Math.abs(
      ((quantity - lastQuantity) / lastQuantity) * 100
    );
    // if zero, return
    if (startPrice === endPrice) return;
    if (startWeight === endWeight) return;
    if (startQuantity === endQuantity) return;

    let timer1 = setInterval(() => {
      startPrice += 1;
      setPriceCount(startPrice);
      if (startPrice === endPrice || startPrice > endPrice)
        clearInterval(timer1);
    }, 20);

    let timer2 = setInterval(() => {
      startWeight += 1;
      setWeightCount(startWeight);
      if (startWeight === endWeight || startWeight > endWeight)
        clearInterval(timer2);
    }, 20);

    let timer3 = setInterval(() => {
      startQuantity += 1;
      setQuantityCount(startQuantity);
      if (startQuantity === endQuantity || startQuantity > endQuantity)
        clearInterval(timer3);
    }, 20);
  }, [price, quantity, weight]);

  return (
    <div className={styles["stats-container"]}>
      <div className={styles.stats}>
        <h4>
          <img className={styles.icon} src={pricetag} alt="" />
          Total price:
        </h4>
        <p>${price}</p>
        <div className={styles["stats-change"]}>
          <p
            className={`${styles.change} ${
              price - lastPrice >= 0 ? styles.up : styles.down
            }`}
          >
            Last change:
            {price - lastPrice >= 0 ? " +$" : " -$"}
            {Math.abs(price - lastPrice)}
            <br />
            {price - lastPrice >= 0 ? " +" : " -"}
            {priceCount}%
            <img
              className={styles.arrow}
              src={price - lastPrice >= 0 ? arrowUp : arrowDown}
              alt=""
            />
          </p>
        </div>
      </div>
      <div className={styles.stats}>
        <h4>
          <img className={styles.icon} src={weightofproducts} alt="" />
          Total weight:
        </h4>

        <p>{weight / 1000}kg</p>
        <div className={styles["stats-change"]}>
          <p
            className={`${styles.change} ${
              weight - lastWeight >= 0 ? styles.up : styles.down
            }`}
          >
            Last change:
            {weight - lastWeight >= 0 ? " +" : " -"}
            {Math.abs(weight - lastWeight) / 1000}kg
            <br />
            {weight - lastWeight >= 0 ? " +" : " -"}
            {weightCount}%
            <img
              className={styles.arrow}
              src={weight - lastWeight >= 0 ? arrowUp : arrowDown}
              alt=""
            />
          </p>
        </div>
      </div>
      <div className={styles.stats}>
        <h4>
          <img className={styles.icon} src={boxes} alt="" />
          Quantity:
        </h4>

        <p>{quantity} items</p>
        <div className={styles["stats-change"]}>
          <p
            className={`${styles.change} ${
              quantity - lastQuantity >= 0 ? styles.up : styles.down
            }`}
          >
            Last change:
            {quantity - lastQuantity >= 0 ? " +" : " -"}
            {Math.abs(quantity - lastQuantity)} items
            <br />
            {quantity - lastQuantity >= 0 ? " +" : " -"}
            {quantityCount}%
            <img
              className={styles.arrow}
              src={quantity - lastQuantity >= 0 ? arrowUp : arrowDown}
              alt=""
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
