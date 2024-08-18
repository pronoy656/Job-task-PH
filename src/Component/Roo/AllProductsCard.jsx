import React from "react";

const AllProductsCard = ({ product }) => {
  const { phoneName, productImage } = product;
  return (
    <div>
      <h1 className="text-xl font-medium">{phoneName}</h1>
      <img className="w-36 h-32" src={productImage} alt="" />
    </div>
  );
};

export default AllProductsCard;
