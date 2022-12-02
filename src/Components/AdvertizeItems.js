import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const AdvertizeItems = () => {
  const { data: products = [], isLoading, refetch } = useQuery({
    queryKey: ["advertizeproducts"],
    queryFn: () =>
      fetch("https://laptop-data.vercel.app/advertizeproducts").then((res) => res.json()),
  });
  if (isLoading) {
    return <progress className="progress w-full"></progress>;
  }
  return (
    products.length > 0 &&
    <section className="mt-20">
         <div className="divider">
        <h2 className="text-3xl font-bold">Advertize Items</h2>
      </div>
        <div className="mt-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {
        products.map(product => <div className="card h-96 bg-base-100 shadow-xl border">
        <figure>
          <img src={product.image} className="lg:w-2/3 md:w-2/3" alt="Laptop" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p className="font-bold text-orange-400">Price : {product.resale_price}TK</p>
          <Link to={`/products/${product._id}`} className="btn btn-primary">Show Details</Link>
        </div>
      </div>)
      }
      </div>
    </section>
  );
};

export default AdvertizeItems;
