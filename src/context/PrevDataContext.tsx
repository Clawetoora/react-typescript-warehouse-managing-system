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

const dummyData = [
  {
    id: 1,
    name: "Arbor",
    ean: "01234567112",
    type: "all mountain",
    weight: 4500,
    color: "black",
    active: true,
    quantity: 2,
    price: 499,
    img: "http://cdn.shopify.com/s/files/1/0085/5762/5410/files/logo_246a7c0f-0bd4-49ed-a60b-b5c82dc2369c.png?height=628&pad_color=fff&v=1650491388&width=1200",
    quantityHistory: [],
    priceHistory: [],
  },
  {
    id: 2,
    name: "Bataleon",
    ean: "01231237922",
    type: "freestyle",
    weight: 7000,
    color: "white",
    quantity: 2,
    price: 499,
    active: true,
    img: "https://wp.therideside.com/wp-content/uploads/2019/07/00_Bataleon_logo_original-2-1024x1003.png",
    quantityHistory: [],
    priceHistory: [],
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
    img: "https://brand.burton.com/wp-content/uploads/2020/06/System-MountainLogo.svg",
    quantityHistory: [],
    priceHistory: [],
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
    img: "https://coresites-cdn-adm.imgix.net/whitelines_new/wp-content/uploads/2013/09/DC_STAR2010_PROXEMITY_BLK.png?fit=crop",
    quantityHistory: [],
    priceHistory: [],
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
    img: "https://www.kzf-inc.com/wp-content/uploads/2020/12/GENTEMSTICK_LOGO-869x1024.png",
    quantityHistory: [],
    priceHistory: [],
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
    img: "https://live.staticflickr.com/6102/6319242961_5946c7b495_b.jpg",
    quantityHistory: [],
    priceHistory: [],
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
    img: "https://upload.wikimedia.org/wikipedia/en/9/99/Jones-official-logo-black.jpg",
    quantityHistory: [],
    priceHistory: [],
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
    img: "https://i1.adis.ws/i/k2/k2-logo?w=1200",
    quantityHistory: [],
    priceHistory: [],
  },
];

const getPrevData = () => {
  let data = [];
  if (localStorage.getItem("prevdata") === null) {
    data = dummyData;
    localStorage.setItem("prevdata", JSON.stringify(data));
  }
  if (localStorage.getItem("prevdata") !== null) {
    data = JSON.parse(localStorage.getItem("prevdata")!);
  }
  return data;
};
export const PrevDataContext = createContext(getPrevData());
const PrevDataContextProvider = ({
  children,
}: ProductsListContextProviderProps) => {
  const [previousProducts, setPreviousProducts] = useState(getPrevData());
  return (
    <div>
      <PrevDataContext.Provider value={[previousProducts, setPreviousProducts]}>
        {children}
      </PrevDataContext.Provider>
    </div>
  );
};

export default PrevDataContextProvider;
