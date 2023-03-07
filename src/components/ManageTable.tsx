import React from "react";
import styles from "./ManageTable.module.scss";
import { NavLink } from "react-router-dom";
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

interface ProductsProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export default function ManageTable({ products, setProducts }: ProductsProps) {
  return (
    <div className={styles.container}>
      <NavLink className={styles.button} to="/products/create">
        Add a new product
      </NavLink>
      <table className={styles.table}>
        <thead>
          <tr>
            {/* {Object.keys(products[0]).map((key, index) => (
              <th key={index}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
            ))} */}
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
          {products.map((product) => {
            const setProductActive = (product: Product) => {
              {
                console.log(products);
                const updatedProducts = products.map((p) => {
                  if (p.id === product.id) {
                    return { ...p, active: !p.active };
                  }
                  return p;
                });
                setProducts(updatedProducts);
                localStorage.setItem("data", JSON.stringify(updatedProducts));
              }
            };
            return (
              <tr
                key={product.id}
                className={product.active ? styles.active : styles.inactive}
                onClick={() => setProductActive(product)}
              >
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.ean}</td>
                <td>{product.type}</td>
                <td>
                  {product.weight !== undefined ? product.weight / 1000 : 0} kg
                </td>
                <td>{product.color}</td>
                <td>{product.quantity}</td>
                <td>${product.price}</td>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => setProductActive(product)}
                    checked={product.active}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
