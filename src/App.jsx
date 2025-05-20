import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import DashboardPage from "./pages/DashboardPage";
import AboutPage from "./pages/AboutPage";
import ItemDetailsPage from "./pages/ItemDetailsPage";

import NotFoundPage from "./pages/NotFoundPage";

import { Routes, Route } from "react-router-dom";

import { useState } from "react";

import productsData from "./data/Myproductdata.json";
import ProductManagementPage from "./pages/ProductManagementPage";
import ProductDetail from "./components/productDetail";

function App() {
  const [allProducts, setAllProducts] = useState(productsData);

  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={
              <DashboardPage
                productos={allProducts}
                setAllProducts={setAllProducts}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/product-management"
            element={<ProductManagementPage setAllProducts={setAllProducts} />}
          />
          <Route
            path="/edit-form/:id"
            element={<ItemDetailsPage setAllProducts={setAllProducts} />}
          />
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="/details/:id"
            element={
              <ProductDetail
                productos={allProducts}
                setAllProducts={setAllProducts}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
