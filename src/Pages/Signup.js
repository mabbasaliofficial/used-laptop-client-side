import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Contexts/AuthProvider";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const {createUser} = useContext(AuthContext)

  const handleSignUp = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result => {
        const user = result.user;
        console.log(user)
    })
    .catch(error => console.error(error));
  };
  return (
    <div className="h-[720px] flex justify-center items-center">
      <div className="card border lg:w-96 md:w-96 w-full shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleSubmit(handleSignUp)}>
            <h1 className="text-3xl font-bold text-center">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <label className="label label-text-alt text-error">{errors.name.message}</label>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: "Email Address is required" })}
                type="email"
                placeholder="Email"
                className="input input-bordered"
              />
              {errors.email && (
                <label className="label label-text-alt text-error">{errors.email.message}</label>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>{" "}
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" },
                })}
                type="password"
                placeholder="Password"
                className="input input-bordered"
              />
              {errors.password && (
                <label className="label label-text-alt text-error">{errors.password.message}</label>
              )}
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
          </form>
          <p>
            Already have an account?{" "}
            <Link className="text-accent" to={`/login`}>
              Log In
            </Link>
          </p>
          <div className="divider">OR</div>
          <button className="btn  btn-outline btn-secondary">Continue with google</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
