import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = ({ products }) => {
  console.log(products);
  const {_id, title, image, description, location, seller, original_price, resale_price, post_time, year_of_use  } = products;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Laptop" />
      </figure>
      <div className="card-body">
        <Link to={`/products/${_id}`} className="card-title text-blue-400">{title}</Link>
        <p className="font-bold text-orange-400">Resale Price : {resale_price}TK</p>
      </div>
    </div>
  );
};

export default ProductsCard;

//    <p>{description.length > 150 ? <p>{description.slice(0, 150) + '...'} <Link to={`/products/${_id}`} className="text-blue-400">Read More</Link></p> : <p>{description}</p>}</p>
{/* <p>{location}</p>
<p>{seller}</p>
<p>{original_price}</p>
<p>{resale_price}</p>
<p>{post_time}</p>
<p>{year_of_use}</p> */}