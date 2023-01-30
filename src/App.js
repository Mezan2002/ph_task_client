import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Billings from "./Components/Billings/Billings";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Main from "./Layout/Main/Main";

function App() {
  const [user, setUser] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Billings user={user}></Billings>,
        },
      ],
    },
    {
      path: "/login",
      element: <Login setUser={setUser}></Login>,
    },
    {
      path: "/register",
      element: <Register setUser={setUser}></Register>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
