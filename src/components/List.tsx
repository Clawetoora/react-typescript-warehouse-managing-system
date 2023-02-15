import React, { useContext } from "react";

import Table from "./Table";
import { ProductsListContext } from "../context/ProductsListContext";

export default function List() {
  const products = useContext(ProductsListContext);

  // const [products, setProducts] = useState(data);
  return (
    <div>
      <Table products={products} />
    </div>
  );
}
