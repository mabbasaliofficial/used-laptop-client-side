import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const handleLogin = (data) => {
    console.log(data)

  }
  return (
    <div className="h-[720px] flex justify-center items-center">
      <div className="card border lg:w-96 md:w-96 w-full shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleSubmit(handleLogin)}>
            <h1 className="text-3xl font-bold text-center">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email")}
                type="text"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>{" "}
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="input input-bordered"
              />
              <label className="label">
                <Link to={`/`} className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p>
            New To Laptop Showcase?{" "}
            <Link className="text-accent" to={`/signup`}>
              Sign Up
            </Link>
          </p>
          <div className="divider">OR</div>
          <button className="btn  btn-outline btn-secondary">Continue with google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
