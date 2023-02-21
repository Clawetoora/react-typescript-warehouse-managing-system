import React, { useContext } from "react";
import Header from "../components/UI/Header";
import ManageTable from "../components/ManageTable";
import { ProductsListContext } from "../context/ProductsListContext";

export default function ProductList() {
  const [products, setProducts] = useContext(ProductsListContext);
  return (
    <>
      <Header />
      <ManageTable products={products} setProducts={setProducts} />
    </>
  );
}
