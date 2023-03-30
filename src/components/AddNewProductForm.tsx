import React, { useState, useEffect } from "react";

import styles from "./AddNewProductForm.module.scss";

interface Product {
  id: number;
  name: string;
  ean: number | string;
  type: string;
  weight: number;
  color: string;
  active: boolean;
  quantity: number;
  price: number;
  img: string;
  quantityHistory: [];
  priceHistory: [];
}

interface ProductsProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export default function AddNewProductForm({
  products,
  setProducts,
}: ProductsProps) {
  const [touched, setTouched] = useState(false);
  const [valid, setValid] = useState(true);
  const [newProduct, setNewProduct] = useState<Product>({
    id: 0,
    name: "",
    ean: "",
    type: "",
    weight: 0,
    color: "",
    active: false,
    quantity: 0,
    price: 0,
    img: "",
    quantityHistory: [],
    priceHistory: [],
  });

  useEffect(() => {
    newProduct.name.length > 0 &&
    newProduct.ean.toString().length == 10 &&
    newProduct.type.length > 0 &&
    newProduct.weight != 0 &&
    newProduct.color.length > 0 &&
    newProduct.quantity >= 0 &&
    newProduct.price != 0
      ? setValid(false)
      : setValid(true);
  }, [newProduct]);

  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <div className={styles["input-container"]}>
          <label htmlFor="product-name">Product name</label>
          <input
            type="text"
            id="product-name"
            placeholder="ex. Snowboard"
            onChange={(e) => {
              setNewProduct({ ...newProduct, name: e.target.value });
            }}
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
              setNewProduct({ ...newProduct, ean: Number(e.target.value) });
            }}
          />
          {touched ? (
            newProduct?.ean.toString().length != 10 ? (
              <p className={styles.validation}>
                Code length: {newProduct?.ean.toString().length}, must be 10
                digits.
              </p>
            ) : (
              <p className={styles["validation-hidden"]}>
                Code length: {newProduct?.ean.toString().length}, must be 10
                digits.
              </p>
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
            onChange={(e) =>
              setNewProduct({ ...newProduct, type: e.target.value })
            }
            required
          />
        </div>
        <div className={styles["input-container"]}>
          <label htmlFor="product-weight">Weight in grams</label>
          <input
            type="number"
            id="product-weight"
            placeholder="ex. 3499"
            onChange={(e) =>
              setNewProduct({ ...newProduct, weight: Number(e.target.value) })
            }
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
            onChange={(e) =>
              setNewProduct({ ...newProduct, color: e.target.value })
            }
            required
          />
        </div>
        <div className={styles["input-container"]}>
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            placeholder="ex. 2"
            onChange={(e) =>
              setNewProduct({ ...newProduct, quantity: Number(e.target.value) })
            }
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
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: Number(e.target.value) })
            }
            required
            min={0}
          />
        </div>
        <div className={styles["input-container"]}>
          <label htmlFor="product-img">
            Product image url
            <br />
            <small>*Optional</small>
          </label>
          <input
            type="text"
            id="product-img"
            placeholder="https://......"
            onChange={(e) => {
              setNewProduct({ ...newProduct, img: e.target.value });
            }}
          />
        </div>
      </form>
      <button
        className={styles.button}
        disabled={valid}
        onClick={(e) => {
          e.preventDefault();
          const updatedProduct = {
            ...newProduct,
            id: products[products.length - 1].id + 1,
            active: true,
          };
          setProducts((prevState) => [...prevState, updatedProduct]);
        }}
      >
        Add new item
      </button>
    </div>
  );
}
