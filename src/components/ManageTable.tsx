import React, { useState, useEffect } from "react";
import styles from "./ManageTable.module.scss";
import { Link } from "react-router-dom";
import AddNewProductForm from "./AddNewProductForm";

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
}

interface ProductsProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  previousProducts: Product[];
  setPreviousProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export default function ManageTable({
  products,
  setProducts,

  setPreviousProducts,
}: ProductsProps) {
  const [open, setOpen] = useState(false);
  const [prevProducts, setPrevProducts] = useState(products);

  // state to save prevState so if no changes were made it wouldnt change previousProducts state;
  useEffect(() => {
    setPrevProducts(products);
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(products));
  }, [products]);

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => setOpen(!open)}>
        Add a new product
      </button>
      <div className={open ? styles.show : styles.hide}>
        <AddNewProductForm products={products} setProducts={setProducts} />
      </div>
      <div className={styles.tablediv}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Product name</th>
              <th>EAN</th>
              <th>Type</th>
              <th>Weight</th>
              <th>Color</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {products
              .sort((a: Product, b: Product) => a.id - b.id)
              .map((product) => {
                const setProductActive = (product: Product) => {
                  {
                    const updatedProducts = products.map((p) => {
                      if (p.id === product.id) {
                        return { ...p, active: !p.active };
                      }
                      return p;
                    });
                    setPreviousProducts(prevProducts);
                    setProducts(updatedProducts);
                  }
                };
                return (
                  <tr
                    key={product.id}
                    className={product.active ? styles.active : styles.inactive}
                  >
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.ean}</td>
                    <td>{product.type}</td>
                    <td>
                      {product.weight !== null ? product.weight / 1000 : 0} kg
                    </td>
                    <td>{product.color}</td>
                    <td>{product.quantity}</td>
                    <td>${product.price}</td>
                    <td>
                      <input
                        type="checkbox"
                        onChange={() => {
                          setProductActive(product);
                        }}
                        checked={product.active}
                      />
                    </td>
                    <td>
                      <button
                        className={`${styles["button-manage"]} ${styles.delete}`}
                        onClick={() => {
                          setPreviousProducts(prevProducts);
                          setProducts(
                            products.filter((x) => x.id !== product.id)
                          );
                        }}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <Link
                        to={`/products/${product.id}`}
                        className={`${styles["button-manage"]} ${styles.view}`}
                      >
                        View
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={`/products/${product.id}/edit`}
                        className={`${styles["button-manage"]} ${styles.edit}`}
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
