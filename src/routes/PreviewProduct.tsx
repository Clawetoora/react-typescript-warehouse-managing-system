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
  quantityHistory: [[number, string]];
  priceHistory: [[number, string]];
}
export default function PreviewProduct() {
  const params = useParams();
  const [products] = useContext(ProductsListContext);
  const [loading, setLoading] = useState(false);
  const [barCode, setBarCode] = useState("");
  const [selected, setSelected] = useState("product");

  const setTab = (tab: string) => {
    return setSelected(tab);
  };

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
      <ViewNav selected={selected} setTab={setTab} />
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
              <React.Fragment key={product.id}>
                {selected === "product" && (
                  <ProductCard
                    key={product.id}
                    product={product}
                    barCode={barCode}
                  />
                )}
                {selected === "price" && <div>{product.priceHistory}</div>}
                {selected === "quantity" && (
                  <div>{product.quantityHistory}</div>
                )}
              </React.Fragment>
            );
          })
      )}
    </>
  );
}
