import React, { useState, createContext } from "react";

const data = [
  {
    id: 1,
    name: "Arbor",
    ean: "01234567111",
    type: "all mountain",
    weight: 4500,
    color: "black",
    active: false,
  },
  {
    id: 2,
    name: "Bataleon",
    ean: "01231237222",
    type: "freestyle",
    weight: 7000,
    color: "white",
    active: false,
  },
  {
    id: 3,
    name: "Burton",
    ean: "01234567333",
    type: "freeride",
    weight: 5200,
    color: "red",
    active: false,
  },
  {
    id: 4,
    name: "DC",
    ean: "01234567444",
    type: "powder",
    weight: 4990,
    color: "black",
    active: false,
  },
  {
    id: 5,
    name: "Gentmemstick",
    ean: "01234567555",
    type: "splitboard",
    weight: 5000,
    color: "blue",
    active: false,
  },
  {
    id: 6,
    name: "GNU",
    ean: "01234567666",
    type: "all mountain",
    weight: 3200,
    color: "white",
    active: true,
  },
  {
    id: 7,
    name: "Jones",
    ean: "01234567777",
    type: "freestyle",
    weight: 4000,
    color: "black",
    active: false,
  },
  {
    id: 8,
    name: "K2",
    ean: "01234567888",
    type: "powder",
    weight: 4600,
    color: "orange",
    active: false,
  },
];
export const ProductsListContext = createContext(data);

const ProductsListContextProvider = (props: any) => {
  const [products, setProducts] = useState(data);

  return (
    <div>
      <ProductsListContext.Provider value={products}>
        {props.children}
      </ProductsListContext.Provider>
    </div>
  );
};

export default ProductsListContextProvider;
