import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { FaInfoCircle, FaQuestionCircle, FaTrashAlt } from "react-icons/fa";

const AllSeller = () => {
  const { data: seller = [], refetch } = useQuery({
    queryKey: ["seller"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/seller");
      const data = res.json();
      return data;
    },
  });

  const handleVerifySeller = id => {
    fetch(`http://localhost:5000/users/seller/${id}`, {
        method: 'PUT',
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0){
            toast.success('Seller Verified Successfully');
            refetch()
        }
    })
  }
  const handleDelete = id => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount > 0){
        toast.success('Delete Successfully');
        refetch()
    }
    })
  }
  return (
    <div>
      <h3 className="text-3xl font-bold text-center py-5">All Sellers</h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Verify</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            { seller?.length &&
            seller.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>
                    <div>
                      <div className="font-bold">{user.displayName}</div>
                    </div>
                </td>
                <td>
                      <div className="text-xs opacity-100">{user.email}</div>
                  
                </td>
                <td>{ user?.verify  !== 'verified' ?
                    <button onClick={()=> handleVerifySeller(user._id)} className=" tooltip tooltip-primary text-4xl text-center text-primary" data-tip="Verify Seller?"><FaQuestionCircle/></button> : <div className="tooltip tooltip-secondary" data-tip="Already Verified">
                    <span className="text-4xl text-center text-secondary"><FaInfoCircle/></span>
                  </div>}</td>
                <td>
                <button onClick={()=> handleDelete(user._id)} className="btn-outline p-2 rounded-full tooltip tooltip-error" data-tip="Delete Seller?"><FaTrashAlt className="text-error text-2xl"/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;
