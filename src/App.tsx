import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductList from "./routes/ProductList";
import Home from "./routes/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
