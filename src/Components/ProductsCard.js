import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = ({ products }) => {
  console.log(products);
  const {_id, title, image, resale_price } = products;
  return (
    <div className="card bg-base-100 shadow-xl border">
      <figure>
        <img src={image} alt="Laptop" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="font-bold text-orange-400">Price : {resale_price}TK</p>
        <Link to={`/products/${_id}`} className="btn btn-primary">Show Details</Link>
      </div>
    </div>
  );
};

export default ProductsCard;
