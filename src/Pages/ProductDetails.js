import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  FaUserCircle,
  FaSearchLocation,
  FaCommentsDollar,
  FaDollarSign,
  FaClock,
  FaPauseCircle,
  FaCheckCircle,
} from "react-icons/fa";
import BuyingModal from "../Components/BuyingModal";
import useTitle from "../Hooks/useTitle";

const ProductDetails = () => {
  const [verify, setVerify] = useState("");
  useTitle("Product Details");
  const product = useLoaderData();
  const [options, setOptions] = useState(null);
  const {
    title,
    image,
    description,
    location,
    seller,
    original_price,
    resale_price,
    email,
    post_time,
    condition,
  } = product;

  useEffect(() => {
    fetch(`https://laptop-data.vercel.app/seller/verify/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setVerify(data);
      });
  }, [email]);

  console.log(verify.verify);
  return (
    <div className="bg-base-200 lg:p-10">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="lg:w-1/2 rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="lg:text-4xl text-xl md:text-2xl  font-bold">{title}</h1>
            <p className="py-10">
              <p className=" flex items-center m-1">
                <FaUserCircle />{" "}
                {verify?.verify ? (
                  <div className="flex items-center">
                    <span className="mx-2">Seller : {seller}</span>
                    <FaCheckCircle className="text-blue-400" />
                  </div>
                ) : (
                  <span className="mx-2"> Seller : {seller}</span>
                )}
              </p>
              <p className="  flex items-center m-1">
                {" "}
                <FaSearchLocation /> <span className="mx-2">Location : {location}</span>{" "}
              </p>
              <p className="flex items-center m-1">
                <FaDollarSign />
                <span className="mx-2">Price : {resale_price}TK</span>
              </p>
              <p className="flex items-center m-1">
                <FaCommentsDollar />
                <span className="mx-2">Original Price : {original_price}TK</span>
              </p>
              <p className="flex items-center m-1">
                <FaPauseCircle />
                <span className="mx-2">Condition : {condition}</span>
              </p>
              <p className="flex items-center m-1">
                <FaClock />
                <span className="mx-2">Post : {post_time}</span>
              </p>
            </p>

            <div className="lg:w-1/2 lg:flex">
              <label
                onClick={() => setOptions(product)}
                htmlFor="buying-modal"
                className="btn btn-primary lg:m-2 my-2 w-full"
              >
                Book Now
              </label>
              <button className="btn btn-secondary lg:m-2 my-2 w-full">Wishlist</button>
            </div>
          </div>
        </div>
      </div>
      <div className="divider lg:text-3xl font-bold">Description</div>
      <div className="border border-purple-400 p-10 rounded-lg mt-10 m-2">
        <p>{description}</p>
      </div>
      {options && <BuyingModal options={options} setOptions={setOptions}></BuyingModal>}
    </div>
  );
};

export default ProductDetails;
