import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import useProducts from "../Hooks/useProducts";
import AllProductsCard from "./AllProductsCard";

const Root = () => {
  const [search, setSearch] = useState("");
  const [allProducts] = useProducts(search);

  const location = useLocation();

  const noHeaderFooter =
    location.pathname.includes("logIn") ||
    location.pathname.includes("register");

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    // console.log(searchText);
    setSearch(searchText);
  };

  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}

      <div className="flex justify-center max-w-7xl mx-auto mb-10">
        <img
          className="rounded-3xl h-[450px] w-full"
          src="https://i.ibb.co/Gk8vW01/Home-1.png"
          alt=""
        />
      </div>

      <div className="flex justify-center">
        <form onSubmit={handleSearch}>
          <input
            className="border-black h-10 bg-slate-200"
            type="text"
            name="search"
            id=""
          />
          <input
            type="submit"
            value="search"
            className="btn bg-black text-white"
          />
        </form>
      </div>
      <div className="flex space-x-4 justify-center mt-9">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand Name</span>
          </label>
          <select className="select select-bordered" name="bioData">
            <option disabled selected>
              Pick one Brand
            </option>
            <option value={"Male"}>Male</option>
            <option value={"Female"}>Female</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category Name</span>
          </label>
          <select className="select select-bordered" name="bioData">
            <option disabled selected>
              Pick one category
            </option>
            <option value={"Male"}>Male</option>
            <option value={"Female"}>Female</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price range</span>
          </label>
          <select className="select select-bordered" name="bioData">
            <option disabled selected>
              Pick one Biodata type
            </option>
            <option value={"Male"}>Male</option>
            <option value={"Female"}>Female</option>
          </select>
        </div>
        <div className="dropdown dropdown-bottom mt-7">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort by
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a>Low to High</a>
            </li>
            <li>
              <a>High to low</a>
            </li>
            <li>
              <a>Newest first</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-3 space-x-9 max-w-7xl mx-auto space-y-7 mt-14">
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
