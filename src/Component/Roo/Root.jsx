import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import useProducts from "../Hooks/useProducts";
import AllProductsCard from "./AllProductsCard";

const Root = () => {
  const [allProducts] = useProducts();

  const location = useLocation();

  const noHeaderFooter =
    location.pathname.includes("logIn") ||
    location.pathname.includes("register");

  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      <h1>All Products: {allProducts.length}</h1>
      <div>
        {allProducts.map((product) => (
          <AllProductsCard
            key={product._id}
            product={product}
          ></AllProductsCard>
        ))}
      </div>
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Root;
