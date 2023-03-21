import { useParams } from "react-router-dom";

import React, { useContext, useEffect, useState } from "react";
import { ProductsListContext } from "../context/ProductsListContext";
import nophoto from "../assets/nophoto.jpg";

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
      <h1>Product</h1>
      {loading ? (
        <p>LOADING...</p>
      ) : (
        products
          .filter((product: Product) => product.id === Number(params.id))
          .map((product: Product) => {
            return (
              <div key={product.id}>
                <p>Product name: {product.name}</p>
                <p>
                  Product ean: {product.ean}
                  <img src={barCode} alt="" />
                </p>
                <p>{product.type}</p>
                <p>
                  {product.weight !== undefined ? product.weight / 1000 : 0}
                  kg
                </p>
                <p>{product.color}</p>
                <p>{product.quantity}</p>
                <p>${product.price}</p>
                <img
                  width="200"
                  height="200"
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = nophoto;
                  }}
                  src={product.img}
                  alt=""
                />
              </div>
            );
          })
      )}
    </>
  );
}
