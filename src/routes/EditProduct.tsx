import { useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import React, { useContext, useState, useEffect, CSSProperties } from "react";
import { ProductsListContext } from "../context/ProductsListContext";
import ProductCardEditable from "../components/UI/ProductCardEditable";

interface Product {
  id: number;
  name: string;
  ean: number;
  type: string;
  weight: number;
  color: string;
  active: boolean;
  quantity: number;
  price: number;
  img: string;
}

export default function EditProduct() {
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
    borderColor: "white",
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
              <ProductCardEditable
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
