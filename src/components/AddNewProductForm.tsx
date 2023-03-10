import React, { useState } from "react";

import styles from "./AddNewProductForm.module.scss";

interface Product {
  id: number;
  name: string;
  ean: number | null;
  type: string | null;
  weight: number | null;
  color: string | null;
  active: boolean;
  quantity: number | null;
  price: number | null;
}

interface ProductsProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export default function AddNewProductForm({
  products,
  setProducts,
}: ProductsProps) {
  const [name, setName] = useState("");
  const [ean, setEan] = useState(0);
  const [type, setType] = useState("");
  const [weight, setWeight] = useState(0);
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [touched, setTouched] = useState(false);
  const [newProduct, setNewProduct] = useState({
    id: 0,
    name: "",
    ean: 0,
    type: "",
    weight: 0,
    color: "",
    active: true,
    quantity: 0,
    price: 0,
  });
  return (
    <form action="" className={styles.form}>
      <div className={styles["input-container"]}>
        <label htmlFor="product-name">Product name</label>
        <input
          type="text"
          id="product-name"
          placeholder="ex. Snowboard"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className={styles["input-container"]}>
        <label htmlFor="product-ean">EAN</label>
        <input
          type="number"
          id="product-ean"
          placeholder="10 Digits code"
          required
          onBlur={() => setTouched(true)}
          onChange={(e) => {
            setEan(Number(e.target.value));
          }}
        />
        {touched ? (
          ean.toString().length > 0 && ean.toString().length < 10 ? (
            <p>Code length: {ean.toString().length} must be 10 digits</p>
          ) : ean.toString().length > 10 ? (
            <p>Code length: {ean.toString().length} must be 10 digits</p>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </div>
      <div className={styles["input-container"]}>
        <label htmlFor="product-type">Type</label>
        <input
          type="text"
          id="product-type"
          placeholder="ex. Rocker"
          onChange={(e) => setType(e.target.value)}
          required
        />
      </div>
      <div className={styles["input-container"]}>
        <label htmlFor="product-weight">Weight in grams</label>
        <input
          type="number"
          id="product-weight"
          placeholder="ex. 3499"
          onChange={(e) => setWeight(Number(e.target.value))}
          required
          min={1}
        />
      </div>
      <div className={styles["input-container"]}>
        <label htmlFor="product-color">Color</label>
        <input
          type="text"
          id="product-color"
          placeholder="ex. red"
          onChange={(e) => setColor(e.target.value)}
          required
        />
      </div>
      <div className={styles["input-container"]}>
        <label htmlFor="product-quantity">Quantity</label>
        <input
          type="number"
          id="product-quantity"
          placeholder="ex. 2"
          onChange={(e) => setQuantity(Number(e.target.value))}
          required
          min={1}
        />
      </div>
      <div className={styles["input-container"]}>
        <label htmlFor="product-price">Price</label>
        <input
          type="number"
          id="product-price"
          placeholder="ex. 999"
          onChange={(e) => setPrice(Number(e.target.value))}
          required
          min={0}
        />
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setNewProduct({
            id: Math.random(),
            name: name,
            ean: ean,
            type: type,
            weight: weight,
            color: color,
            quantity: quantity,
            price: price,
            active: true,
          });
        }}
      >
        Next
      </button>
      <p>
        {newProduct.color}
        {newProduct.name}
      </p>
    </form>
  );
}
