import React from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    fetch(
      `https://ph-task-server-sigma.vercel.app/login?email=${email}&password=${password}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data._id) {
          fetch(`https://ph-task-server-sigma.vercel.app/jwt?email=${email}`, {
            method: "POST",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.token) {
                localStorage.setItem("token", data.token);
                setUser(true);
                form.reset();
                navigate("/");
                toast.success("Login Successfull!");
              }
            });
        }
      })
      .catch((err) => {
        toast.error("Wrong Username Or Password!");
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card w-[30%] bg-base-100 shadow-2xl">
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
            <input type="submit" value="Login" className="btn btn-block mt-5" />
          </form>
          <p className="text-center mt-3">
            don't have an account?{" "}
            <Link to="/register" className="text-primary">
              register
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
