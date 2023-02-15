import React from "react";

interface Products {
  id?: number;
  name?: string;
  ean?: string;
  type?: string;
  weight?: number;
  color?: string;
  active?: boolean;
}

interface ProductsProps {
  products: Products[];
}

export default function Table({ products }: ProductsProps) {
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(products[0]).map((key, index) =>
            index > 0 ? <th key={index}>{key}</th> : ""
          )}
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.ean}</td>
              <td>{product.type}</td>
              <td>{product.weight}</td>
              <td>{product.color}</td>
              <td>{product.active ? "+" : "-"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
