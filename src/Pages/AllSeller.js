import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllSeller = () => {
  const { data: seller = [], refetch } = useQuery({
    queryKey: ["seller"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/seller");
      const data = res.json();
      return data;
    },
  });

  const handleMakeAdmin = id => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
        method: 'PUT',
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0){
            toast.success('Make Admin Successfully');
            refetch()
        }
    })
  }
  return (
    <div>
      <h3 className="text-3xl font-bold text-center py-5">All Users</h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>User</th>
              <th>Admin</th>
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
                      <div className="font-bold">{user.name}</div>
                      <div className="text-xs opacity-100">{user.email}</div>
                    </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>{ user?.role !== 'admin' &&
                    <button onClick={()=> handleMakeAdmin(user._id)} className="btn">Admin</button>}</td>
                <th>
                  <button className="btn">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;
