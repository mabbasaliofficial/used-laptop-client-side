import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaInfoCircle, FaQuestionCircle, FaTrashAlt } from "react-icons/fa";
import { AuthContext } from "../Contexts/AuthProvider";
import useTitle from "../Hooks/useTitle";

const MyProducts = () => {
  useTitle("My Products");
  const { user } = useContext(AuthContext);
  const { data: products , refetch} = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/product/?email=${user?.email}`);
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });
  const handleAdvertize = (id) => {
    fetch(`http://localhost:5000/product/${id}`, {
      method: "PUT",
     
    })
      .then((res) => res.json())
      .then((data) => {
          toast.success("Advertize Successfully");
          refetch();
        
      });
  };
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/product/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Delete Successfully");
          refetch();
        }
      });
  };
  return (
    <div>
      <h3 className="text-3xl font-bold text-center py-5">My Products</h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Title</th>
              <th>Advertize</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products?.length &&
              products.map((product, i) => (
                <tr key={product._id}>
                  <th>{i + 1}</th>
                  <td>
                        
                          <img src={product.image} className="rounded w-16 h-12" alt={product.title} />
                        
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{product.title.length > 20 ? <p>{product.title.slice(0, 20) + '...'} </p> : <p>{product.title}</p>}</div>
                    </div>
                  </td>
                  
                  <td>
                    {product?.advertize !== "advertized" ? (
                      <button
                          onClick={() => handleAdvertize(product._id)}
                        className=" tooltip tooltip-primary text-4xl text-center text-primary"
                        data-tip="Advertize Product?"
                      >
                        <FaQuestionCircle />
                      </button>
                    ) : (
                      <div className="tooltip tooltip-secondary" data-tip="Already Advertized">
                        <span className="text-4xl text-center text-secondary">
                          <FaInfoCircle />
                        </span>
                      </div>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="btn-outline p-2 rounded-full tooltip tooltip-error"
                      data-tip="Delete Product?"
                    >
                      <FaTrashAlt className="text-error text-2xl" />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
