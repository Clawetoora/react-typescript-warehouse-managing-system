import { useState } from "react";
import nophoto from "../../assets/nophoto.jpg";
import classes from "./ProductCardEditable.module.scss";
import styles from "./ProductCard.module.scss";
import box from "../../assets/box-svgrepo-com.svg";
import weight from "../../assets/weight-svgrepo-com.svg";
import color from "../../assets/color-palette-svgrepo-com.svg";
import edit from "../../assets/edit-svgrepo-com.svg";
import editblack from "../../assets/editblack-svgrepo-com.svg";

interface Product {
  id: number;
  name: string;
  ean: number;
  type: string;
  weight: number;
  color: string;
  active: boolean;
  quantity: number;
  price: number;
  img: string;
  quantityHistory: number[];
  priceHistory: number[];
}
interface cardProps {
  product: Product;
  barCode: string;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}
function ProductCard({ product, barCode, setProducts }: cardProps) {
  const [editedProduct, setEditedProduct] = useState<Product>({
    id: product.id,
    name: product.name,
    ean: product.ean,
    type: product.type,
    weight: product.weight,
    color: product.color,
    active: product.active,
    quantity: product.quantity,
    price: product.price,
    img: product.img,
    quantityHistory: product.quantityHistory,
    priceHistory: product.priceHistory,
  });

  //
  //  a check for number imput to prevent any special characters input
  //
  const checkKeyPress = (event: any) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    if (!/^[\+\-]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?$/.test(keyValue))
      event.preventDefault();
  };

  return (
    <>
      <div className={classes.info}>
        You can edit everything that has this icon
        <img src={edit} className={classes["edit-icon"]} alt="" />
      </div>
      <div className={styles.card}>
        <div className={styles.first}>
          <div className={classes["img-container"]}>
            <p>{product.name}</p>
            <img
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = nophoto;
              }}
              src={product.img}
              alt=""
            />
            <label htmlFor="url">
              Input new image link{" "}
              <img src={edit} className={classes["edit-icon"]} alt="" />
            </label>
            <input
              className={classes.url}
              type="text"
              id="url"
              onChange={(e) => {
                setEditedProduct({
                  ...editedProduct,
                  img: e.target.value,
                });
              }}
              defaultValue={product.img}
              placeholder="url..."
            />
          </div>
        </div>

        <div className={styles.info}>
          <p className={styles.name}>
            <input
              id="name"
              className={classes.name}
              type="text"
              onChange={(e) => {
                setEditedProduct({ ...editedProduct, name: e.target.value });
              }}
              style={{
                minWidth: `50px`,
                maxWidth: `${editedProduct.name.length}ch`,
              }}
              defaultValue={product.name}
              placeholder="Name"
            />
            <label htmlFor="name">
              <img src={editblack} className={classes["edit-icon"]} alt="" />
            </label>
          </p>
          <p className={styles.type}>
            Type:
            <input
              id="type"
              type="text"
              onChange={(e) => {
                setEditedProduct({ ...editedProduct, type: e.target.value });
              }}
              style={{
                minWidth: `50px`,
                maxWidth: `${editedProduct.type.length}ch`,
              }}
              defaultValue={product.type}
              placeholder="type"
            />
            <label htmlFor="type">
              <img src={edit} className={classes["edit-icon"]} alt="" />
            </label>
          </p>

          <p className={styles.weight}>
            <img className={styles.icon} src={weight} alt="" />
            Weight:
            <input
              onKeyPress={(e) => checkKeyPress(e)}
              min="0"
              step="1"
              id="weight"
              type="number"
              onChange={(e) => {
                setEditedProduct({
                  ...editedProduct,
                  weight: Number(e.target.value),
                });
              }}
              style={{
                maxWidth: `${editedProduct.weight.toString().length}ch`,
              }}
              defaultValue={product.weight}
              placeholder={product.weight.toString()}
            />
            g
            <label htmlFor="weight">
              <img src={edit} className={classes["edit-icon"]} alt="" />
            </label>
          </p>
          <p className={styles.color}>
            <img className={styles.icon} src={color} alt="" />
            Color:
            <input
              type="text"
              id="color"
              onChange={(e) => {
                setEditedProduct({
                  ...editedProduct,
                  color: e.target.value,
                });
              }}
              style={{
                minWidth: "40px",
                maxWidth: `${editedProduct.color.length}ch`,
              }}
              defaultValue={product.color}
              placeholder="color"
            />
            <label htmlFor="color">
              <img src={edit} className={classes["edit-icon"]} alt="" />
            </label>
          </p>
          <p className={styles.quantity}>
            <img className={styles.icon} src={box} alt="" />
            Items in storage:
            <input
              id="quantity"
              type="number"
              onKeyPress={(e) => checkKeyPress(e)}
              onChange={(e) => {
                setEditedProduct({
                  ...editedProduct,
                  quantity: Number(e.target.value),
                });
              }}
              style={{
                maxWidth: `${editedProduct.quantity.toString().length}ch`,
              }}
              defaultValue={product.quantity}
              placeholder={product.quantity.toString()}
            />
            <label htmlFor="quantity">
              <img src={edit} className={classes["edit-icon"]} alt="" />
            </label>
          </p>
          <p className={styles.price}>
            Price: $
            <input
              className={classes.price}
              id="price"
              type="number"
              onChange={(e) => {
                setEditedProduct({
                  ...editedProduct,
                  price: Number(Number(e.target.value).toFixed(2)),
                });
              }}
              style={{
                maxWidth: `${editedProduct.price.toString().length}ch`,
              }}
              defaultValue={product.price}
              placeholder={product.price.toString()}
            />
            <label htmlFor="price">
              <img src={edit} className={classes["edit-icon"]} alt="" />
            </label>
          </p>
          <p className={styles.ean}>
            Product ean:{" "}
            <input
              type="text"
              id="ean"
              onKeyPress={(e) => checkKeyPress(e)}
              onChange={(e) => {
                setEditedProduct({
                  ...editedProduct,
                  ean: Number(e.target.value),
                });
              }}
              style={{
                minWidth: `50px`,
                maxWidth: `${editedProduct.ean.toString().length}ch`,
              }}
              defaultValue={product.ean}
              placeholder={product.ean.toString()}
            />
            <label htmlFor="ean">
              <img src={edit} className={classes["edit-icon"]} alt="" />
            </label>
            <br />
            <img width="150" height="50" src={barCode} alt="" />
          </p>
        </div>
      </div>
      <button
        className={classes.button}
        onClick={(e) => {
          e.preventDefault();

          // checking if there was a change made in price or quantity, if it was the last price and quantity will be added to end of coresponding history array
          if (
            editedProduct.quantity !== product.quantity
            // editedProduct.quantityHistory[
            //   editedProduct.quantityHistory.length - 1
            // ]
          ) {
            editedProduct.quantityHistory.push(product.quantity);
          }
          if (editedProduct.price !== product.price) {
            editedProduct.priceHistory.push(product.price);
          }
          // Setting new products array with filtering out the old product, to avoid duplications of products.
          setProducts((prevState) => {
            const stateWithout = prevState.filter(
              (product) => product.id !== editedProduct.id
            );
            return [...stateWithout, editedProduct];
          });

          alert("Product updated");
        }}
      >
        Save changes
      </button>
    </>
  );
}

export default ProductCard;
