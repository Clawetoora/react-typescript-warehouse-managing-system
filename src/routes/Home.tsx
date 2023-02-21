import React, { useContext } from "react";
import Header from "../components/UI/Header";

import MainTable from "../components/MainTable";
import { ProductsListContext } from "../context/ProductsListContext";
export default function Home() {
  const [products] = useContext(ProductsListContext);
  return (
    <>
      <Header />
      <MainTable products={products} />
    </>
  );
}
