import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Product from "./components/Product/Product";
import NavBar from "./components/Nav/NaveBar";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./components/Product/ProductDetail";
import CountryDetail from "./components/CountryDetail";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/detailProduct" element={<ProductDetail />} />
        <Route path="/country/:code" element={<CountryDetail/>} />
        {/* <Product/> */}
      </Routes>
    </>
  );
}

export default App;
