import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import React from "react";
import toast from "react-hot-toast";
import { FaInfoCircle, FaTrashAlt } from "react-icons/fa";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
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
      <h3 className="text-3xl font-bold text-center py-5">All Users</h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            { users?.length &&
            users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                </td>
                <td>
                      <div className="text-xs opacity-100">{user.email}</div>
                  
                </td>
                <td>{ user?.role  !== 'admin' ?
                    <button onClick={()=> handleMakeAdmin(user._id)} className="btn">Admin</button> : <div className="tooltip tooltip-primary" data-tip="Already Admin">
                    <span className="text-3xl text-center text-primary"><FaInfoCircle/></span>
                  </div>}</td>
                <th>
                  <button onClick={()=> handleDelete(user._id)} className="btn-outline p-2 rounded-full" ><FaTrashAlt className="text-error text-2xl"/></button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
