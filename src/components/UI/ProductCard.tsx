import React from "react";
import nophoto from "../../assets/nophoto.jpg";
import styles from "./ProductCard.module.scss";
import box from "../../assets/box-svgrepo-com.svg";
import weight from "../../assets/weight-svgrepo-com.svg";
import color from "../../assets/color-palette-svgrepo-com.svg";
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
  img?: string;
}
interface cardProps {
  product: Product;
  barCode: string;
}
function ProductCard({ product, barCode }: cardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.first}>
        <div className={styles["img-container"]}>
          <p>{product.name}</p>
          <img
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = nophoto;
            }}
            src={product.img}
            alt=""
          />
        </div>
      </div>

      <div className={styles.info}>
        <p className={styles.name}>{product.name}</p>

        <p className={styles.type}>Type: {product.type}</p>
        <p className={styles.weight}>
          <img className={styles.icon} src={weight} alt="" />
          Weight: {product.weight !== undefined ? product.weight / 1000 : 0}
          kg
        </p>
        <p className={styles.color}>
          <img className={styles.icon} src={color} alt="" />
          Color: {product.color}
        </p>
        <p className={styles.quantity}>
          <img className={styles.icon} src={box} alt="" />
          Items in storage: {product.quantity}
        </p>
        <p className={styles.price}>Price: ${product.price}</p>
        <p className={styles.ean}>
          Product ean: {product.ean}
          <br />
          <img width="150" height="50" src={barCode} alt="" />
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
