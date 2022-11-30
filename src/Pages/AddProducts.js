import React from "react";
import { useForm } from "react-hook-form";
import useTitle from "../Hooks/useTitle";

const AddProducts = () => {
  useTitle('Add Products');
 const imgHostKey = process.env.REACT_APP_imgbb_key;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleProducts = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgHostKey}`
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imgData => {
      if(imgData.success){
        console.log(imgData.data.url)
        const product = {
          category_id: data.category_id,
          title: data.title,
          description: data.description,
          resale_price: data.resale_price,
          original_price: data.original_price,
          seller: data.seller,
          email: data.email,
          image: imgData.data.url,
          location: data.location,
          post_time: data.post_time,
          condition: data.condition,
        }

        fetch('http://localhost:5000/product', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
      }
    })

  };

  return (
    <div className="h-[720px] flex justify-center items-center">
      <div className="card border lg:w-3/4 md:w-96 w-full shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleSubmit(handleProducts)}>
            <h1 className="text-3xl font-bold text-center">Add A Product</h1>
            <div className="flex justify-between">
              <div className="form-control w-1/2 mr-2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("seller", { required: "Name is required" })}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-1/2 ml-2">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="form-control w-1/2 mr-2">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  {...register("title", { required: "Product Name is required" })}
                  type="text"
                  placeholder="Product Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-1/2 ml-2">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  {...register("location", { required: "Location is required" })}
                  type="text"
                  placeholder="Location"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="form-control w-1/2 mr-2">
                <label className="label">
                  <span className="label-text">Old Price</span>
                </label>
                <input
                  {...register("original_price", { required: "Old Price is required" })}
                  type="text"
                  placeholder="Old Price"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-1/2 mr-2">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  {...register("resale_price", { required: "Price is required" })}
                  type="text"
                  placeholder="Price"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="form-control w-1/2 mr-2">
                <label className="label">
                  <span className="label-text">Brand</span>
                </label>
                <select className="select select-bordered" {...register("category_id")} required>
                  <option value="01" selected>
                    HP Laptop
                  </option>
                  <option value="02">Dell Laptop</option>
                  <option value="03">Lenovo Laptop</option>
                </select>
              </div>
              <div className="form-control w-1/2 ml-2">
                <label className="label">
                  <span className="label-text">Condition</span>
                </label>
                <select className="select select-bordered" {...register("condition")} required>
                  <option value="Excellent" selected>
                    Excellent
                  </option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between">
            <div className="form-control w-1/2 mr-2">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="text"
                {...register("post_time", { required: "Date is required" })}
                className="input input-bordered"
                placeholder="Today's date"
              />
            </div>
            <div className="form-control w-1/2 ml-2">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="file"
                {...register("image", { required: "Image is required" })}
                className="file-input file-input-bordered file-input-primary w-full"
              />
            </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea className="textarea textarea-bordered" placeholder="Description" {...register("description", { required: "Description is required" })}></textarea>
            </div>

            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Add Product" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
