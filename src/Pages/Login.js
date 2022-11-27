import { error } from "daisyui/src/colors";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const [loginError, setLoginError] = useState('')

  const {signIn, googleSignIn} = useContext(AuthContext);

  const handleLogin = (data) => {
    console.log(data);
    setLoginError('')
    signIn(data.email, data.password)
    .then(result => {
        const user = result.user;
        console.log(user)
        navigate(from, {replace: true})
    })
    .catch( error => {
        console.error(error.message)
        setLoginError(error.message)
    });
  };

  const googleLogin = () => {
    googleSignIn()
    .then(result => {
      const user = result.user;
      console.log(user)
      navigate(from, {replace: true})
    })
    .catch(error => {
      console.error(error)
    })
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
                {...register("email", { required: "Email Address is required" })}
                type="text"
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
              <label className="label">
                <Link to={`/`} className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            {
                loginError &&
                <label className="label label-text-alt text-error">
               {loginError}
              </label>}
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
          <button onClick={googleLogin} className="btn  btn-outline btn-secondary">Continue with google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
