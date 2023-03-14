import React, {
  useState,
  createContext,
  ReactNode,
  useEffect,
  useRef,
} from "react";

type ProductsListContextProviderProps = {
  children: ReactNode;
};

const getFromStorage = () => {
  let data = [];
  if (localStorage.getItem("data") === null) {
    data = [
      {
        id: 1,
        name: "Arbor",
        ean: "01234567111",
        type: "all mountain",
        weight: 4500,
        color: "black",
        active: true,
        quantity: 2,
        price: 499,
      },
      {
        id: 2,
        name: "Bataleon",
        ean: "01231237222",
        type: "freestyle",
        weight: 7000,
        color: "white",
        quantity: 2,
        price: 499,
        active: true,
      },
      {
        id: 3,
        name: "Burton",
        ean: "01234567333",
        type: "freeride",
        weight: 5200,
        color: "red",
        quantity: 2,
        price: 499,
        active: false,
      },
      {
        id: 4,
        name: "DC",
        ean: "01234567444",
        type: "powder",
        weight: 4990,
        color: "black",
        quantity: 2,
        price: 499,
        active: false,
      },
      {
        id: 5,
        name: "Gentmemstick",
        ean: "01234567555",
        type: "splitboard",
        weight: 5000,
        color: "blue",
        quantity: 2,
        price: 499,
        active: false,
      },
      {
        id: 6,
        name: "GNU",
        ean: "01234567666",
        type: "all mountain",
        weight: 3200,
        color: "white",
        quantity: 2,
        price: 499,
        active: true,
      },
      {
        id: 7,
        name: "Jones",
        ean: "01234567777",
        type: "freestyle",
        weight: 4000,
        color: "black",
        quantity: 2,
        price: 499,
        active: false,
      },
      {
        id: 8,
        name: "K2",
        ean: "01234567888",
        type: "powder",
        weight: 4600,
        color: "orange",
        quantity: 2,
        price: 499,
        active: false,
      },
    ];
    localStorage.setItem("data", JSON.stringify(data));
  }
  if (localStorage.getItem("data") !== null) {
    data = JSON.parse(localStorage.getItem("data")!);
  }
  return data;
};

export const ProductsListContext = createContext(getFromStorage());

const ProductsListContextProvider = ({
  children,
}: ProductsListContextProviderProps) => {
  const [products, setProducts] = useState(getFromStorage());

  return (
    <div>
      <ProductsListContext.Provider value={[products, setProducts]}>
        {children}
      </ProductsListContext.Provider>
    </div>
  );
};

export default ProductsListContextProvider;
