import React from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Register = ({ setUser }) => {
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;
    const userData = { fullName, email, password };

    fetch("http://localhost:5000/registration", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          fetch(`http://localhost:5000/jwt?email=${email}`, {
            method: "POST",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.token) {
                localStorage.setItem("token", data.token);
                setUser(true);
                navigate("/");
                form.reset();
                toast.success("User Created Successfully!");
              }
            });
        }
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card w-[30%] bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-medium">Register</h2>
          <form onSubmit={handleRegister} className="mt-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="fullName"
                placeholder=""
                className="input input-bordered w-full"
                required
              />
            </div>
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
            <input
              type="submit"
              value="Register"
              className="btn btn-block mt-5"
            />
          </form>
          <p className="text-center mt-3">
            already have an account?{" "}
            <Link to="/login" className="text-primary">
              login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
