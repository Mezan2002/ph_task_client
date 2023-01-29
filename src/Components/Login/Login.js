import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import "./Login.css";

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const userPassword = form.userPassword.value;
    fetch(
      `https://atg-server-tau.vercel.app/loggedInUser?userName=${userName}&userPassword=${userPassword}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUser(data.userName);
        if (data._id) {
          console.log(data);
          alert("Login Successfull!");
        }
      })
      .catch((err) => {
        alert("Wrong Username Or Password!");
      });
  };
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/logIn">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
      <div className="login">
        <div>
          <h2>Login</h2>
          <form onSubmit={handleLogIn}>
            <input type="text" name="userName" placeholder="User Name" />
            <br />
            <input
              type="password"
              name="userPassword"
              placeholder="User Password"
            />
            <br />
            <Link to="/forgotPass">Forgot Password?</Link>
            <br />
            <input type="submit" value="Log In" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
