import React, { useContext } from "react";
import Header from "../components/UI/Header";
import ManageTable from "../components/ManageTable";
import { NavLink } from "react-router-dom";
import { ProductsListContext } from "../context/ProductsListContext";

export default function ProductList() {
  const [products, setProducts] = useContext(ProductsListContext);
  return (
    <>
      <Header />
      <NavLink to="/products/create">Create new product</NavLink>
      <ManageTable products={products} setProducts={setProducts} />
    </>
  );
}
