import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Contexts/AuthProvider";
import toast from "react-hot-toast";

const Signup = () => {
  const [signUpError, setSignUpError] = useState("");
  const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);

  const handleSignUp = (data) => {
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User created successfully");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            navigate(`/`)
          })
          .catch((err) => console.error(err));
      })
      .catch((error) => {
        console.error(error);
        setSignUpError(error.message);
      });
  };

  const googleLogin = () => {
    googleSignIn()
    .then(result => {
      const user = result.user;
      console.log(user)
      navigate(`/`)
    })
    .catch(error => {
      console.error(error)
    })
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
            {signUpError && (
              <label className="label label-text-alt text-error">{signUpError}</label>
            )}
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
          <button onClick={googleLogin} className="btn  btn-outline btn-secondary">Continue with google</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
