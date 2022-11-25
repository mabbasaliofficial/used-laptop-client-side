import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaUserCircle , FaSearchLocation,FaCommentsDollar,FaDollarSign,FaClock,FaPauseCircle} from "react-icons/fa";

const ProductDetails = () => {
  const product = useLoaderData();
  const {
    _id,
    title,
    image,
    description,
    location,
    seller,
    original_price,
    resale_price,
    post_time,
    year_of_use,
  } = product;
  return (
    <div className="bg-base-200 lg:p-10">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="w-full rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="lg:text-4xl font-bold">{title}</h1>
            <p className="py-6">
                <p className=" flex items-center"><FaUserCircle/> <span className="mx-2"> Seller : {seller}</span></p>
                <p className="  flex items-center"> <FaSearchLocation/> <span className="mx-2">Location : {location}</span> </p>
                <p className="flex items-center"><FaDollarSign/><span className="mx-2">Price : {resale_price}TK</span></p>
                <p className="flex items-center"><FaCommentsDollar/><span className="mx-2">Original Price : {original_price}TK</span></p>
                <p className="flex items-center"><FaPauseCircle/><span className="mx-2">Condition : {year_of_use} Years Used</span></p>
                <p className="flex items-center">
                    <FaClock/>
                    <span className="mx-2">Post : {post_time}</span>
                </p>
            </p>
            <div className="lg:w-1/2 lg:flex">
              <button className="btn btn-primary lg:m-2 my-2 w-full">Buy Now</button>
              <button className="btn btn-secondary lg:m-2 my-2 w-full">Wishlist</button>
            </div>
          </div>
        </div>
      </div>
      <div className="divider lg:text-3xl font-bold">Description</div>
      <div className="border border-purple-400 p-10 rounded-lg">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
