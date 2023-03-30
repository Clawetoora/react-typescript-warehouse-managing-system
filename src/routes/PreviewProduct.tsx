import { useParams } from "react-router-dom";
import PuffLoader from "react-spinners/PuffLoader";
import React, { useContext, useEffect, useState, CSSProperties } from "react";
import { ProductsListContext } from "../context/ProductsListContext";

import ProductCard from "../components/UI/ProductCard";
import ViewNav from "../components/UI/ViewNav";

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
  const [loading, setLoading] = useState(false);
  const [barCode, setBarCode] = useState("");

  const API_URL = products
    .filter((product: Product) => product.id === Number(params.id))
    .map((product: Product) => {
      return `https://barcodeapi.org/api/auto/${product.ean}`;
    });

  useEffect(() => {
    const getbarCode = async () => {
      setLoading(true);
      const data = await fetch(API_URL);
      setBarCode(data.url);
      setLoading(false);
    };
    getbarCode();
  }, []);

  // spinner styling
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    marginTop: "3rem",
  };

  return (
    <>
      {loading ? (
        <PuffLoader
          color={"white"}
          loading={loading}
          cssOverride={override}
          size={200}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
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
