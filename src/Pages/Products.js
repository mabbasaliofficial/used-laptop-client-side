import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductsCard from "../Components/ProductsCard";
import useTitle from "../Hooks/useTitle";

const Products = () => {
  useTitle('Products');
  const products = useLoaderData();
  console.log(products);
  return (
    <div className="mx-10">
      <h1 className="text-center text-3xl font-bold my-10">Products</h1>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductsCard key={product._id} products={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
