import React, { useState } from "react";
import styles from "./ManageTable.module.scss";
import { NavLink } from "react-router-dom";
import AddNewProductForm from "./AddNewProductForm";
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

export default function ManageTable({ products, setProducts }: ProductsProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <button className={styles.button}>Add a new product</button>
      <AddNewProductForm products={products} setProducts={setProducts} />
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
                  {product.weight !== null ? product.weight / 1000 : 0} kg
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
