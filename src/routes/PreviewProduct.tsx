import { useParams } from "react-router-dom";

import React, { useContext } from "react";
import { ProductsListContext } from "../context/ProductsListContext";

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
export default function PreviewProduct() {
  console.log(useParams());

  const params = useParams();
  const [products] = useContext(ProductsListContext);

  return (
    <>
      <h1>Product</h1>
      {products
        .filter((product: Product) => product.id === Number(params.id))
        .map((product: Product) => {
          return (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.ean}</td>
              <td>{product.type}</td>
              <td>
                {product.weight !== undefined ? product.weight / 1000 : 0}
                kg
              </td>
              <td>{product.color}</td>
              <td>{product.quantity}</td>
              <td>${product.price}</td>
            </tr>
          );
        })}
    </>
  );
}
