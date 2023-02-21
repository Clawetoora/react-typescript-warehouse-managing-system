import React from "react";

interface Product {
  id?: number;
  name?: string;
  ean?: string;
  type?: string;
  weight?: number;
  color?: string;
  active?: boolean;
}

interface ProductsProps {
  products: Product[];
}

export default function MainTable({ products }: ProductsProps) {
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(products[0]).map((key, index) =>
            key === "id" || key === "active" ? (
              ""
            ) : (
              <th key={index}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {products.filter(product=>product.active).map((product) => {
          return (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.ean}</td>
              <td>{product.type}</td>
              <td>{product.weight}</td>
              <td>{product.color}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
