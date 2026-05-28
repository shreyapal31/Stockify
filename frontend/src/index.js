import React from "react";

import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import "./index.css";

import HomePage from "./landing_page/home/HomePage";

import SignUp from "./pages/Signup";

import Login from "./pages/Login";

import AboutPage from "./landing_page/about/AboutPage";

import ProductPage from "./landing_page/products/ProductPage";

import PricingPage from "./landing_page/pricing/PricingPage";

import SupportPage from "./landing_page/support/SupportPage";

import Navbar from "./landing_page/Navbar";

import Footer from "./landing_page/Footer";

import NotFound from "./landing_page/NotFound";

function AppLayout() {

  const location = useLocation();

  const hideNavbarFooter =
    location.pathname === "/login" ||
    location.pathname === "/signup";

  return (

    <>

      {!hideNavbarFooter && <Navbar />}

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/signup" element={<SignUp />} />

        <Route path="/login" element={<Login />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/product" element={<ProductPage />} />

        <Route path="/pricing" element={<PricingPage />} />

        <Route path="/support" element={<SupportPage />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

      {!hideNavbarFooter && <Footer />}

    </>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(

  <BrowserRouter>

    <AppLayout />

  </BrowserRouter>
);