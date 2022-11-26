import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaUserCircle , FaSearchLocation,FaCommentsDollar,FaDollarSign,FaClock,FaPauseCircle} from "react-icons/fa";
import BuyingModal from "../Components/BuyingModal";

const ProductDetails = () => {
  const product = useLoaderData();
  const [options, setOptions] = useState(null)
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
            <p className="py-10">
                <p className=" flex items-center m-1"><FaUserCircle/> <span className="mx-2"> Seller : {seller}</span></p>
                <p className="  flex items-center m-1"> <FaSearchLocation/> <span className="mx-2">Location : {location}</span> </p>
                <p className="flex items-center m-1"><FaDollarSign/><span className="mx-2">Price : {resale_price}TK</span></p>
                <p className="flex items-center m-1"><FaCommentsDollar/><span className="mx-2">Original Price : {original_price}TK</span></p>
                <p className="flex items-center m-1"><FaPauseCircle/><span className="mx-2">Condition : {year_of_use} Years Used</span></p>
                <p className="flex items-center m-1">
                    <FaClock/>
                    <span className="mx-2">Post : {post_time}</span>
                </p>
            </p>
            {
                options &&
                <BuyingModal
            options={options}
            ></BuyingModal>}
            <div className="lg:w-1/2 lg:flex">
              <label onClick={()=> setOptions(product)} htmlFor="buying-modal" className="btn btn-primary lg:m-2 my-2 w-full">Buy Now</label>
              <button className="btn btn-secondary lg:m-2 my-2 w-full">Wishlist</button>
            </div>
          </div>
        </div>
      </div>
      <div className="divider lg:text-3xl font-bold">Description</div>
      <div className="border border-purple-400 p-10 rounded-lg mt-10 m-2">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
