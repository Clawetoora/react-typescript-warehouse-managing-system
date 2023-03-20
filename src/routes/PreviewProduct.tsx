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
            <div key={product.id}>
              <p>{product.name}</p>
              <p>{product.ean}</p>
              <p>{product.type}</p>
              <p>
                {product.weight !== undefined ? product.weight / 1000 : 0}
                kg
              </p>
              <p>{product.color}</p>
              <p>{product.quantity}</p>
              <p>${product.price}</p>
            </div>
          );
        })}
    </>
  );
}
