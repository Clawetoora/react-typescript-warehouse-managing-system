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
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export default function ManageTable({ products, setProducts }: ProductsProps) {
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(products[0]).map((key, index) => (
            <th key={index}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.ean}</td>
              <td>{product.type}</td>
              <td>{product.weight}</td>
              <td>{product.color}</td>
              <td>
                <input
                  type="checkbox"
                  checked={product.active}
                  onChange={() => {
                    const updatedProducts = products.map((p) => {
                      if (p.id === product.id) {
                        return { ...p, active: !p.active };
                      }
                      return p;
                    });
                    setProducts(updatedProducts);
                    localStorage.setItem(
                      "data",
                      JSON.stringify(updatedProducts)
                    );
                  }}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
