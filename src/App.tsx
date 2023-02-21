import "./App.scss";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./routes/ProductList";
import Home from "./routes/Home";
import ProductsListContextProvider from "./context/ProductsListContext";
import NewProduct from "./routes/NewProduct";

function App() {
  return (
    <ProductsListContextProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/create" element={<NewProduct />} />
        </Routes>
      </div>
    </ProductsListContextProvider>
  );
}

export default App;
