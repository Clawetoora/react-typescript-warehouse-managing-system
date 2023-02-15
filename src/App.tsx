import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./routes/ProductList";
import Home from "./routes/Home";
import ProductsListContextProvider from "./context/ProductsListContext";

function App() {
  return (
    <ProductsListContextProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </div>
    </ProductsListContextProvider>
  );
}

export default App;
