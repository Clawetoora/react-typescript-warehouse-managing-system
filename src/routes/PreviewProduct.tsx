import { useParams } from "react-router-dom";

import React, { useContext, useEffect, useState } from "react";
import { ProductsListContext } from "../context/ProductsListContext";

import ProductCard from "../components/UI/ProductCard";

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
export default function PreviewProduct() {
  const params = useParams();
  const [products] = useContext(ProductsListContext);
  const [loading, setLoading] = useState(true);
  const [barCode, setBarCode] = useState("");

  const API_URL = products
    .filter((product: Product) => product.id === Number(params.id))
    .map((product: Product) => {
      return `https://barcodeapi.org/api/auto/${product.ean}`;
    });

  useEffect(() => {
    const getbarCode = async () => {
      const data = await fetch(API_URL);
      setBarCode(data.url);
      setLoading(false);
    };
    getbarCode();
  }, []);

  return (
    <>
      {loading ? (
        <p>LOADING...</p>
      ) : (
        products
          .filter((product: Product) => product.id === Number(params.id))
          .map((product: Product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                barCode={barCode}
              />
            );
          })
      )}
    </>
  );
}
