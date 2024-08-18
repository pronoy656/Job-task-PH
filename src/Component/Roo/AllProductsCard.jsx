import React from "react";

const AllProductsCard = ({ product }) => {
  const {
    phoneName,
    productImage,
    priceBDT,
    category,
    ratings,
    productCreationDateTime,
    description,
  } = product;
  return (
    <div className="border p-8">
      <div className="flex justify-center">
        <img className="w-40 h-36 border" src={productImage} alt="" />
      </div>
      <h1 className="text-xl font-medium">Name: {phoneName}</h1>
      <h1>Price: {priceBDT} tk</h1>
      <h1>Category: {category}</h1>
      <h1>Ratings: {ratings}</h1>
      <h1>Relase date: {productCreationDateTime}</h1>
      <h1>Description: {description}</h1>
    </div>
  );
};

export default AllProductsCard;
