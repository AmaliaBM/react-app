import './App.css'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from "./components/Footer";

import DashboardPage from './pages/DashboardPage';
import AboutPage from './pages/AboutPage';
import ItemDetailsPage from './pages/ItemDetailsPage';

import NotFoundPage from './pages/NotFoundPage';

import { Routes, Route } from "react-router-dom";

import { useState } from "react";

import productsData from './data/Myproductdata.json'


function App() {
  const [ allProducts, setAllProducts ] = useState(productsData);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<DashboardPage productos={allProducts} setAllProducts={setAllProducts} />} /> 
        <Route path="/about" element={<AboutPage />} />
        <Route path="/item-details/:id" element={<ItemDetailsPage />} />

        <Route path="*" element={ <NotFoundPage /> } />
      </Routes>
      <Footer />
    </div>
    )
}

export default App
