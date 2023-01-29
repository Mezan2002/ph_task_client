import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card w-[30%] bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="text-center text-2xl font-medium">Login</h2>
          <form onSubmit={handleLogin} className="mt-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder=""
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder=""
                className="input input-bordered w-full mb-5"
                required
              />
            </div>
            <Link className="text-primary" to="/">
              {" "}
              Forget Password?{" "}
            </Link>
            <input type="submit" value="Login" className="btn btn-block mt-5" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
