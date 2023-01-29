import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Billings from "./Components/Billings/Billings";
import Login from "./Components/Login/Login";
import Main from "./Layout/Main/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Billings></Billings>,
        },
      ],
    },
    {
      path: "/login",
      element: <Login></Login>,
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
