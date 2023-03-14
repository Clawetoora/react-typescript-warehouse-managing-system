import "./App.scss";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./routes/ProductList";
import Home from "./routes/Home";
import Header from "./components/UI/Header";
import ProductsListContextProvider from "./context/ProductsListContext";
import PreviewProduct from "./routes/PreviewProduct";
import EditProduct from "./routes/EditProduct";
import PrevDataContextProvider from "./context/PrevDataContext";

function App() {
  return (
    <PrevDataContextProvider>
      <ProductsListContextProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<PreviewProduct />} />
            <Route path="/products/:id/edit" element={<EditProduct />} />
          </Routes>
        </div>
      </ProductsListContextProvider>
    </PrevDataContextProvider>
  );
}

export default App;
